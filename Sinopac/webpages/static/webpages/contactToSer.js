
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
        }
    })
})

const mapping = {
    "Basic" : "壹、基本資料查詢",
    "credit" : "參、聯合徵信中心查詢回覆資料",
    "creditCard" : "參 (六) 信用卡資料查詢資料" 
}

var getToDoList = ()=>{
    var data;
    $.ajax({
        type : "GET",
        url : window.location.origin + "/sinopac/ToDoList/",
        dataType : "json",
        async : false,
        success : (res)=>{
            data = res;
            console.log(res)
        }
    });
    $('.items').remove();
    for(var i = 0 ; i < data.length; i++){
        $('#To-DoCustomList').append(`<li class="items" ><a href="javascript:void(0);" onclick="edittoTheDom(${data[i]["id"]})">${data[i]["name"]} | 信用貸款<br>[消金TM網銀信貸專案]</a></li>`);
    }

    // editTheForm(data[0]['id']);
}


var editTheForm = (BasicData)=>{
    
    console.log(BasicData);
    var keys = Object.keys(BasicData);
    console.log(keys);
    for(var i = 0; i < keys.length; i++){
        $('#basic_' + keys[i]).val(BasicData[keys[i]]);
    }
}

var edittoTheDom = (num) =>{
    // editTheForm(num);
    // editTheBankData(num);
    // editFDDbutionData(num)
    // editContributionData(num);
    // editUnionData(num)
    // editAutoJudgeQuery(num);
}

$('.editForm').on('change', function () {
    EDITELEMTSid.push($(this)[0].id);
    var s = new Set(EDITELEMTSid);
});


var bankDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/bankDepositData/",
        dataType: "json",
        async:false,
        success: function (response) {
            BankData = response;
        }
    });
    editTheBankData(0);
}

var editTheBankData = (num)=>{
    $('#customName').html(BankData[num]['name']);
    $('#customAccount').html(BankData[num]['account']);
    $('#customPerformance').html(BankData[num]['performance']);
    $('#customOpeningDate').html(BankData[num]['opnning_data']);
    $('#custom6MonthBalance').html(BankData[num]['six_month_average_balance']);
    $('#customYearAverageBalance').html(BankData[num]['a_year_average_balance']);
    $('#customRefund_record').html(BankData[num]['refund_record']);
    $('#customSeizure_deposit').html(BankData[num]['seizure_deposit']);
    $('#customSuspicious_account').html(BankData[num]['suspicious_account'] ? '正常戶' : '可疑戶');
    
}

var FDDbutionDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/FDDData/",
        dataType: "json",
        async : false,
        success: function (response) {
            console.log(response);
            FDDbutionData = response;
        }
    });
    editFDDbutionData(0)
}

var editFDDbutionData = (num)=>{
    $('#FDDnameid').html(FDDbutionData[num]['name'] + '/' + FDDbutionData[num]['identity']);
    $('#FDDnew_batch_processing_day').html(FDDbutionData[num]['new_batch_processing_day']);
    $('FDDmoney_laundering_risk_degree').html(FDDbutionData[num]['money_laundering_risk_degree']);
    $('#FDDpriority_low').html(FDDbutionData[num]["priority_low"]);
    $('#FDDbackground').html(FDDbutionData[num]["background"]);
    $('#FDDgeographical_factor').html(FDDbutionData[num]['geographical_factor']);
    $('#FDDrelation_behavior').html(FDDbutionData[num]['relation_behavior']);
    $('#FDDproduction').html(FDDbutionData[num]['production']);
    $('#FDDmoney_laundering_risk_gradding').html(FDDbutionData[num]['money_laundering_risk_gradding']);
    $('#FDDFDD_information').html(FDDbutionData[num]['FDD_information'] == true ? '有資料' : '無資料');
}

var ContrubutionDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/contrubutionData/",
        dataType: "json",
        async : false,
        success: function (response) {
            Contribution = response;
        }
    });

    editContributionData(0);
}

var editContributionData = (num)=>{
    $('#con-name').html(Contribution[num]['name'])
    $('#con-date').html(Contribution[num]['date_of_information'])
    $('#con-asset').html(Contribution[num]['three_months_assets'])
    $('#con-ap').html(Contribution[num]['AP'])
    $('#con-not-ap').html(Contribution[num]['not_ap'])
    $('#con-last-ap').html(Contribution[num]['last_ap'])
    $('#con-last-not-ap').html(Contribution[num]['last_not_ap'])
}

var unionDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/unionData/",
        dataType: "json",
        async : false,
        success: function (response) {
            creditData = response;
        }
    });
    editUnionData(0);
}

var editUnionData = (num)=>{
    $('#credit_name').html(creditData[num]['name'] + '/' + creditData[num]['identity']);
    $('#credit_EN_name').html(creditData[num]['EN_name']);
    $('#credit_birthday').html(creditData[num]['']);
    $('#credit_address').html(creditData[num]);
}

var autoJudgeQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/autoJudgeData/",
        dataType: "json",
        async : false,
        success: function (response) {
            autoJudgeData = response;
        }
    });
    editAutoJudgeQuery(0);
}

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

