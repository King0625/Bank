
'use strict'

let EDITELEMTSid = []
let id;
let BasicData = []
let BankData = []
let FDDbutionData = []
let Contribution = []
let creditData = []
let autoJudgeData = []

const credit_data = [
    'overdue_collection_of_bad_debts',
    'transfer_of_overdue_information_claims',
    'Personal_unincorporated_organizations_info'
]

const query_data = [
    'new_business',
    'original_business',
    'new_and_original_business',
    'other_financial_org_query_after_quered',
    'financial_query_time'
]

const mapping = {
    "basic" : "壹、基本資料查詢",
    "deposit" : "貳、本行系統查詢",
    "union" : "參、聯合徵信中心查詢回覆資料" 
}

const mappign_section = {
    "deposit" : "content2",
    "union" : "content3"
}

$(document).ready(()=>{
    // get the url paramater to get the correct
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');
    // $('#name').html(res['name'] + ' | 信用貸款')
    $('#overview').attr('href',`/sinopac/case/?id=${id}`);
    $('#comment').attr('href',`/sinopac/loan/?id=${id}`);
    $('#checklist').attr('href',`/sinopac/checklist/?id=${id}`);
    $('#bulletin').attr('href',`/sinopac/information/?id=${id}`)
    loadBasicData(id);
    // $.ajax({
    //     type: "GET",
    //     url: window.location.origin + '/sinopac/basicData/?id=' + id,
    //     async: false,
    //     success: (res) => {
    //         console.log(res);
    //         editTheForm(res['BasicData']);
    //         editPartTwo(res['BankDepositData']);
    //         editPartThree(res['UnionCreditCheckSystemInfo']);
    //         editAutoJudgeQuery();
    //     }
    // })
})

var loadBasicData = (id)=>{
    $.ajax({
        type: "GET",
        url: window.location.origin + '/sinopac/basicData/?id=' + id,
        async: false,
        success: (res) => {
            // console.log(res);
            editTheForm(res['BasicData']);
            editPartTwo(res['BankDepositData']);
            editPartThree(res['UnionCreditCheckSystemInfo']);
            editAutoJudgeQuery();
        }
    });
}


var editTheForm = (BasicData) => {
    // console.log(BasicData);
    var keys = Object.keys(BasicData);
    // console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        $('#basic_' + keys[i]).val(BasicData[keys[i]]);
    }

    $('.basic_name').html(BasicData['name'] + '| 信用貸款');
    $('.basic_name_identity').html(BasicData['name'] + ' ' + BasicData['identity']);
    $('#basic_career').val(BasicData['career'] + '年')
}

var editPartTwo = (DepositData) => {
    var keys = Object.keys(DepositData);
    // console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var id = '#deposit_' + keys[i];
        $(id).html(DepositData[keys[i]]);
    }

    $('.deposit_name').html(DepositData['name']);

    if (DepositData['suspicious_account']) {
        $('.deposit_suspicious_account').html('正常戶');
    } else {
        $('.deposit_suspicious_account').html('可疑戶');
    }

    if (DepositData['FDD_information']) {
        $('.deposit_FDD_information').html('有資料');
    } else {
        $('.deposit_FDD_information').html('無資料');
    }

    $('.deposit_money_laundering_risk_gradding').html(DepositData['money_laundering_risk_gradding']);
    $('.deposit_money_laundering_risk_degree').html(DepositData['deposit_money_laundering_risk_degree']);
    var name_identity = DepositData['name'] + '/' + DepositData['identity'];
    $('.deposit_name_identity').html(name_identity);
}

var editPartThree = (CheckData) => {
    var keys = Object.keys(CheckData);
    for (var i = 0; i < keys.length; i++) {
        $('#union_' + keys[i]).html(CheckData[keys[i]]);
    }

    $('.union_name_identity').html(CheckData['name'] + '/' + CheckData['identity'])
    $('.union_new_business').html(CheckData['new_business']);
    $('.union_original_business').html(CheckData['original_business']);
    $('.union_new_and_original_business').html(CheckData['new_and_original_business']);
    $('.union_other_financial_org_query_after_quered').html(CheckData['other_financial_org_query_after_quered']);
    $('.union_financial_query_time').html(CheckData['financial_query_time']);
    $('.union_score').html(CheckData['score']);

    if (CheckData['no_household_registration_in_TW']) {
        $('#union_no_household_registration_in_TW').html('有資料')
    } else {
        $('#union_no_household_registration_in_TW').html('無資料')
    }

    if (CheckData['owned_house']) {
        $('#union_owned_house').html('有');
    } else {
        $('#union_owned_house').html('無');
    }

    if (checkCreditErrorData(CheckData)) {
        $('#union_credit_error_data').html('有')
    } else {
        $('#union_credit_error_data').html('無')
    }

    var times = checkQueryTimes(CheckData);
    $('#union_query_times').html(times + '次');
}

var checkCreditErrorData = (data) => {
    for (var i = 0; i < credit_data.length; i++) {
        // console.log(data[credit_data[i]]);
        if (data[credit_data[i]] !== '無') {
            return true;
        }
    }
    return false;
}

var checkQueryTimes = (data) => {
    var times = 0;
    for (var i = 0; i < query_data.length; i++) {
        times += data[query_data[i]];
    }
    return times;
}

$('.basicFormData').on('change', function () {
    EDITELEMTSid.push($(this)[0].id);
    var s = new Set(EDITELEMTSid);

});

$('#save').click(() => {
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');

    var d = {};
    for (var i = 0; i < EDITELEMTSid.length; i++) {
        d[EDITELEMTSid[i]] = $('#' + EDITELEMTSid[i]).val();
    }
    console.log(d);
    $.ajax({
        type: "POST",
        url: window.location.origin + '/sinopac/basicData/?id=' + id,
        dataType: "json",
        data: JSON.stringify(d),
        async: false,
        success: (res) => {
            console.log('save successful')
        }
    });
    loadBasicData(id);
})

var editAutoJudgeQuery = ()=>{
    // for(var i = 0; i < autoJudgeData.length; i++){
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id')
    $.ajax({
        type: "GET",
        url: window.location.origin + '/sinopac/autoJudge/?id=' + id,
        dataType: "json",
        async : false,
        success: (res)=>{
            console.log(res);
            for(var i = 0; i < res.length; i++){
                var html = ''
                var keys = Object.keys(res[i]['result']);
                if(keys.length > 0){
                    for(var j = 0 ; j < keys.length; j++){
                        html += `
                        <li class="judgeItem"><h6> ${mapping[keys[j]]}</h6>
                        <p> ${res[i]['result'][keys[j]]}</p>
                        <a href="javascript:goToSection('${mappign_section[keys[j]]}','${keys[j]}_${res[i]['item']}','${res[i]['item']}');"><img src="../../static/webpages/img/arrowForward.png" alt=""></a>
                        </li>
                        `
                    }
                    $('.auto_' + res[i]['item']).attr('class',`check wrong auto_${res[i]['item']} `);
                    $('.auto_' + res[i]['item']).html(keys.length);
                }else{
                    $('.auto_' + res[i]['item']).attr('class',`check auto_${res[i]['item']} correct`)
                }
                console.log(html);
                $('#auto_' + res[i]['item']).html(html);
                
            }
        }
    });
    // var judgeList = Object.keys(autoJudgeData[num]);
    // console.log(judgeList);
    // $('.judgeItem').remove();
    // var j = 0;
    // for(var j = 0 ; j < judgeList.length; j++){
    //     var html = ''
    //     for(var k = 0 ; k < autoJudgeData[num][judgeList[j]].length; k++){
            // html += `
            // <li class="judgeItem"><h6> ${mapping[autoJudgeData[num][judgeList[j]][k]['field']]}</h6>
            // <p> ${autoJudgeData[num][judgeList[j]][k]['text']}</p>
            // <a href="#${autoJudgeData[num][judgeList[j]][k]['field'] + '_' + judgeList[j]}"><img src="../../static/webpages/img/arrowForward.png" alt=""></a>
            // </li>
            // `
    //     }
    //     console.log('#' + judgeList[j]);
    //     $('#' + judgeList[j]).append(html)
    // }
    // $('.judgeItem').remove();
}


var goToSection = (sec,target,item)=>{
    jQuery("html,body").animate({ scrollTop: document.getElementById(sec).offsetTop - 15 }, 500);
    
    spanTheSection(sec);
    if(item === 'name'){
        // console.log('name');
        // console.log('.' + target + '_identity');
        $('.' + target + '_identity').css('color','#FF4D4D');
        $('.' + target + '_identity').css('transition','.5s');
        setTimeout(()=>{
            $('.' + target + '_identity').css('color','black');
        },5000);
    }
    if ($('.' + target).length){
        var color = $('.' + target).css('color');
        $('.' + target).css('color','#FF4D4D');
        $('.' + target).css('transition','.5s');
        setTimeout(()=>{
            $('.' + target).css('color','black');
        },5000);
    }else{
        $('#' + target).css('color','#FF4D4D');
        $('#' + target).css('transition','.5s')
        setTimeout(()=>{
            $('#' + target).css('color','black');
        },5000);
    }
}

var spanTheSection = (sec) =>{
    var query_collapsible = '#' + sec + '_detail .collapsible';
    var query_collapse_section = '#' + sec + '_detail .collapse-section'
    var img = '#' + sec + '_detail .collapse-btn'
    if($(query_collapsible).css('display') === 'flex'){
        $(query_collapsible).css('display','none');
        $(query_collapse_section).css('display','block');
        $(img).attr('src','../../static/webpages/img/topArrow.png');
    }
    // console.log('spanning the section first');
}

