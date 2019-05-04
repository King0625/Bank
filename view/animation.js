$(document).ready(() => {
    var readonly = true;
    var disabled = true;
    $("#edit").click(function () {
        $(this).css("background-color", "#fff4aa");
        $("input[type='text']").attr('readonly', !readonly);
        $("input[type='text']").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        });
        $("textarea").attr('readonly', !readonly);
        $("textarea").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        })
        $("select").attr('disabled', !disabled);
        $("select").css("background", "url('img/downArrow.png') no-repeat scroll right center transparent");
        // $("select").click(function () {
        //     $(this).css("background", "url('img/topArrow.png') no-repeat scroll right center transparent")
        // })
    });
    $("#save").click(function () {
        $("#edit").css("background-color", "#ffffff");
        $("input[type='text']").attr('readonly', readonly);
        $("input[type='text']").css({
            "background": "#ffffff"
        });
        $("textarea").attr('readonly', readonly);
        $("textarea").css({
            "background": "#ffffff"
        })
        $("select").attr('disabled', disabled);
        $("select").css("background", "none");
    });
});