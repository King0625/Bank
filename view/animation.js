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
    });
});