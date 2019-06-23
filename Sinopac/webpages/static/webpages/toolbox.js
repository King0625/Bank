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
    // $("#mark").click(function () {
    //     $(".dataContent").append('<div class="draggable" ><div class="open"></div><div class="note"><select class="date"><option value="s">05/10(五)</option><option value="a">05/10(五)</option><option value="b">05/10(五)</option><option value="c">05/10(五)</option></select> <button id="close"></button><textarea></textarea><input id="markedit" type="button" value="儲存"><input id="delete" type="button" value="刪除"></div></div>');
    //     $("#close").on("click", function () { $(this).parent().animate({ opacity: 0 }, 500); });
    //     $(".draggable .open").on("click", function () {
    //         if ($(this).next().css("opacity") == 1) { $(this).next().animate({ opacity: 0 }, 500); }
    //         else { $(this).next().animate({ opacity: 1 }, 500); }

    //     });
    //     $(".draggable #markedit").on("click", function () {
    //         $(this).parent().animate({ opacity: 0 }, 500);

    //     });
    //     $(".draggable").draggable({ distance: 20 });

    // })
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

    })

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
