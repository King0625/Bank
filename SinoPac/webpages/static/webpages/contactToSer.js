
let id;


var basicDataQuery = ()=>{
    $.ajax({
        type: "GET",
        url: "/sinopac/basicData/",
        dataType: "json",
        async : false,
        success: function (response) {
            console.log(response);
            id = response[0]['id'];
            editTheForm(response[0]);
        }
    });
}

var editTheForm = (data)=>{
    $('#personName').val(data['name']);
    $('#personId').val(data['person_id']);
    $('#personAddress').val(data['address']);
    $('#personCareer').val(data['career'] + '年');
    $('#personCompany').val(data['company']);
    $('#personJobTitle').val(data['job_title']);

    $('#personHomeNum').val(data['person_house_phone']);
    $('#personPhoneNum').val(data['person_phone']);

    $('#personCopAddress').val(data['copAddress']);
    $('#personCopPhoneNum').val(data['company_phone']);
    $('#personBirthday').val(data['birthday']);
    $('#personDescription').val(data['description']);
    // $('#personCopPhoneNum').val(data[''])
}


