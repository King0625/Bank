
let EDITELEMTSid = []
let id;
let BasicData = []
let BankData = []

var basicDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/basicData/",
        dataType: "json",
        async : false,
        success: function (response) {
            console.log(response);
            id = response[0]['id'];
            BasicData = response;
            // editTheForm(response[0]);
        }
    });
    DataToDomList();
    editTheForm(0);
}

var DataToDomList = ()=>{
    // remove the initial data;
    $('.items').remove();
    for(var i = 0 ; i < BasicData.length; i++){
        $('#To-DoCustomList').append(`<li class="items" ><a href="javascript:void(0);" onclick="edittoTheDom(${i})">${BasicData[i]["name"]} | 信用貸款<br>[消金TM網銀信貸專案]</a></li>`);
    }
}

var editTheForm = (num)=>{
    var data = BasicData[num];
    $('#personname').val(data['name']);
    $('#personidentity').val(data['person_id']);
    $('#personaddress').val(data['address']);
    $('#personcareer').val(data['career'] + '年');
    $('#personcompany').val(data['company']);
    $('#personjob_title').val(data['job_title']);

    $('#personperson_house_phone').val(data['person_house_phone']);
    $('#personperson_phone').val(data['person_phone']);

    $('#personcompany_address').val(data['copAddress']);
    $('#personcompany_phone').val(data['company_phone']);
    $('#personbirthday').val(data['birthday']);
    $('#persondescription').val(data['description']);
}

var edittoTheDom = (num) =>{
    editTheForm(num);
    editTheBankData(num);
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
            console.log('response');
            console.log(response);
            BankData = response;
        }
    });
    editTheBankData(0);
}

var editTheBankData = (num)=>{
    console.log('editTheBankData');
    console.log(BankData);
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