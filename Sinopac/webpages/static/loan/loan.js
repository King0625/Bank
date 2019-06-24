$(document).ready(() => {
   
    var coll = document.getElementsByClassName("collapse-btn");
    var i;

    var readonly = true;
    var disabled = true;
    $("#conclusion-edit").click(function () {
        $(this).css("background-color", "#fff4aa");
        $(".conclusion-info input[type='text']").attr('readonly', !readonly);
        $(".conclusion-info input[type='text']").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        });
        $(".conclusion-info textarea").attr('readonly', !readonly);
        $(".conclusion-info textarea").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        });
        $(".conclusion-info select").attr('disabled', !disabled);
        $(".conclusion-info select").css("background", "url('img/downArrow.png') no-repeat scroll right center transparent");
    })
    $(".conclusion-save").click(function () {
        $("#conclusion-edit").css("background-color", "#ffffff");
        $(".conclusion-info input[type='text']").attr('readonly', readonly);
        $(".conclusion-info input[type='text']").css({
            "background": "#ffffff"
        });
        $(".conclusion-info textarea").attr('readonly', readonly);
        $(".conclusion-info textarea").css({
            "background": "#ffffff"
        });
        $(".conclusion-info select").attr('disabled', disabled);
        $(".conclusion-info select").css("background", "none");
    })

    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');
    $.ajax({
        type: "GET",
        url: window.location.origin + '/sinopac/tinyInfo/?id=' + id,
        async:false,
        dataType: "json",
        success: (res) =>{
            console.log(res);
            $('#name').html(res['name'] + ' | 信用貸款')
            $('#overview').attr('href',`/sinopac/case/?id=${id}`);
            $('#comment').attr('href',`/sinopac/loan/?id=${id}`);
            $('#checklist').attr('href',`/sinopac/checklist/?id=${id}`);
            $('#bulletin').attr('href',`/sinopac/information/?id=${id}`)
        }
    });
});

