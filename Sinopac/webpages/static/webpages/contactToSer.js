
'use strict'

let EDITELEMTSid = []
let id;
let BasicData = []
let BankData = []
let FDDbutionData = []
let Contribution = []
let creditData = []
let autoJudgeData = []

$(document).ready(()=>{
    // get the url paramater to get the correct
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id')
    $.ajax({
        type : "GET",
        url : window.location.origin + '/sinopac/basicData/?id=' + id,
        async : false,
        success : (res) => {
            console.log(res);
            editTheForm(res['BasicData']);
            editPartTwo(res['BankDepositData']);
            editPartThree(res['UnionCreditCheckSystemInfo']);
        }
    })
})

const mapping = {
    "Basic" : "壹、基本資料查詢",
    "credit" : "參、聯合徵信中心查詢回覆資料",
    "creditCard" : "參 (六) 信用卡資料查詢資料" 
}

var editTheForm = (BasicData)=>{
    console.log(BasicData);
    var keys = Object.keys(BasicData);
    console.log(keys);
    for(var i = 0; i < keys.length; i++){
        $('#basic_' + keys[i]).val(BasicData[keys[i]]);
    }
}

var editPartTwo = (DepositData)=>{
    var keys = Object.keys(DepositData);
    console.log(keys);
    for(var i = 0; i < keys.length; i++){ 
        var id = '#deposit_' + keys[i];
        $(id).html(DepositData[keys[i]]);
    }

    $('.deposit_name').html(DepositData['name']);

    if(DepositData['suspicious_account']){
        $('.deposit_suspicious_account').html('正常戶');
    }else{
        $('.deposit_suspicious_account').html('可疑戶');
    }

    if(DepositData['FDD_information']){
        $('.deposit_FDD_information').html('有資料');
    }else{
        $('.deposit_FDD_information').html('無資料');
    }

    $('.deposit_money_laundering_risk_gradding').html(DepositData['money_laundering_risk_gradding']);
    $('.deposit_money_laundering_risk_degree').html(DepositData['deposit_money_laundering_risk_degree']);
    var name_identity = DepositData['name'] + '/' + DepositData['identity'];
    $('.deposit_name_identity').html(name_identity);
}

var editPartThree = (CheckData)=>{
    var keys = Object.keys(CheckData);
    for(var i = 0; i < keys.length; i++){
        $('#union_' + keys[i]).html(CheckData[keys[i]]);
    }

    $('.union_name_identity').html(CheckData['name'] + '/' + CheckData['identity'])
}


$('.basicFormData').on('change', function () {
    EDITELEMTSid.push($(this)[0].id);
    var s = new Set(EDITELEMTSid);
    
});

$('#save').click(()=>{
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');

    var d = {};
    for(var i = 0; i < EDITELEMTSid.length; i++){
        d[EDITELEMTSid[i]] = $('#'+EDITELEMTSid[i]).val();
    }
    console.log(d);
    $.ajax({
        type: "POST",
        url: window.location.origin + '/sinopac/basicData/?id=' + id,
        dataType: "json",
        data: JSON.stringify(d),
        async:false,
        success: (res)=>{
            console.log('save successful')
        }
    });

})

var editAutoJudgeQuery = (num)=>{
    // for(var i = 0; i < autoJudgeData.length; i++){
    var judgeList = Object.keys(autoJudgeData[num]);
    console.log(judgeList);
    $('.judgeItem').remove();
    var j = 0;
    for(var j = 0 ; j < judgeList.length; j++){
        var html = ''
        for(var k = 0 ; k < autoJudgeData[num][judgeList[j]].length; k++){
            html += `<li class="judgeItem"><h6> ${mapping[autoJudgeData[num][judgeList[j]][k]['field']]}</h6>
            <p> ${autoJudgeData[num][judgeList[j]][k]['text']}</p>
            <a href="#${autoJudgeData[num][judgeList[j]][k]['field'] + '_' + judgeList[j]}"><img src="../../static/webpages/img/arrowForward.png" alt=""></a>
            </li>
            `
        }
        console.log('#' + judgeList[j]);
        $('#' + judgeList[j]).append(html)
    }
    // $('.judgeItem').remove();
}

