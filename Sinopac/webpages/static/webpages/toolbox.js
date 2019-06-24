var pin = true;
var sum = false;

//click event
$(document).ready(function () {
    $(".draggable").draggable({ distance: 20 });
    $("#add").click(function () {
        var e = document.getElementById("phaselist");
        var str = e.options[e.selectedIndex].text;
        $('#text').val($('#text').val() + str + '\n');
    });
    $("#summary .close").click(function () { $("#summary").fadeOut(); });

    $(".draggable .close").click(function () { $(".note").fadeOut(); })
    $(".draggable .open").click(function () {

        if ($('.note').is(':visible')) {
            $('.note').fadeOut();
        } else {
            $('.note').fadeIn();

        }


    })

    $("#sum").click(function () {
        if (!sum) {
            $("#summary").fadeIn();
            sum = false;
        } else {
            $("#summary").fadeOut();
            sum = true;
        }
    });
    $("#top").click(function () {
        jQuery("html,body").animate({ scrollTop: 0 }, 500);
    })
    $("#bottom").click(function () {
        jQuery("html,body").animate({ scrollTop: $(document).height() }, 500);
    })


    $("#alert-edit").click(function () {
        $("textarea").attr('readonly', false);

    })
    $("#alert-save").click(function () {
        $("textarea").attr('readonly', true);
        $("#alarm").append("<div class='alert-list'><h3><img src='../../static/webpages/img/alarm.png' width='30px;' ><span class='alert-note'>" + $("#alert-summary").val() + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + $("#hour").val() + ":" + $("#minute").val() + "</span><button class='alert-list-close'><img src='../../static/webpages/img/baseline-clear-24px.png'></button></h3> ")
        $(".alert-list-close").on("click", function () {
            $(this).parents(".alert-list").fadeOut();
            $(this).parents(".alert-list").remove();
        });
    });

    $(".alert .close").click(function () {
        $(".note").fadeOut();
    })

    $("#alert").click(function () {
        $(".note").fadeIn();
    })

})

//toolbox hover
$(document).ready(function () {
    $(".toolbox").hover(function () {
        if (pin) {
            $(".toolbox").removeClass("hide");
            $(".toolbox").addClass("float");
        }
    }
        , function () {
            if (pin) {
                $(".toolbox").removeClass("float");
                $(".toolbox").addClass("hide");
            }
        })
});
