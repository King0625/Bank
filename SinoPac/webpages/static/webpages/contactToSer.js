
let EDITELEMTSid = []
let id;
let BasicData = []

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
        $('#To-DoCustomList').append(`<li class="items" ><a href="javascript:void(0);" onclick="editTheForm(${i})">${BasicData[i]["name"]} | 信用貸款<br>[消金TM網銀信貸專案]</a></li>`);
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
    // $('#personCopPhoneNum').val(data[''])
}


$('.editForm').on('change', function () {
    EDITELEMTSid.push($(this)[0].id);
    var s = new Set(EDITELEMTSid);
});

