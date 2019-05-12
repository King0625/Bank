$(document).ready(() => {
    $("#swipe1").click(function () {
        window.scrollTo(0, 80);
        $(this).css("background", "#5d5d5d")
        $("#swipe2, #swipe3, #swipe4").css("background", "#C3C3C3")
    })
    $("#swipe2").click(function () {
        window.scrollTo(0, 750);
        $(this).css("background", "#5d5d5d")
        $("#swipe1, #swipe3, #swipe4").css("background", "#C3C3C3")
    })
    // $("#swipe3").click(function () {
    //     window.scrollTo(0, 80);
    // })
    // $("#swipe4").click(function () {
    //     window.scrollTo(0, 80);
    // })


    $("#contentList1").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList2, #contentList3, #contentList4, #contentList5, #contentList6").removeClass('list-clicked')
        $("#contentList-info1").toggleClass('not-shown')
        $("#contentList-info2, #contentList-info3, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown')
    })
    $("#contentList2").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList1, #contentList3, #contentList4, #contentList5, #contentList6").removeClass('list-clicked')
        $("#contentList-info2").toggleClass('not-shown')
        $("#contentList-info1, #contentList-info3, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown')
    })
    $("#contentList3").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList1, #contentList2, #contentList4, #contentList5, #contentList6").removeClass('list-clicked')
        $("#contentList-info3").toggleClass('not-shown')
        $("#contentList-info1, #contentList-info2, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown')
    })
    $("#contentList4").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList1, #contentList2, #contentList3, #contentList5, #contentList6").removeClass('list-clicked')
        $("#contentList-info4").toggleClass('not-shown')
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info5, #contentList-info6").addClass('not-shown')
    })
    $("#contentList5").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList1, #contentList2, #contentList3, #contentList4, #contentList6").removeClass('list-clicked')
        $("#contentList-info5").toggleClass('not-shown')
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info4, #contentList-info6").addClass('not-shown')
    })
    $("#contentList6").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList1, #contentList2, #contentList3, #contentList4, #contentList5").removeClass('list-clicked')
        $("#contentList-info6").toggleClass('not-shown')
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info4, #contentList-info5").addClass('not-shown')
    })


    var readonly = true;
    var disabled = true;
    $("#edit").click(function () {
        $(this).css("background-color", "#fff4aa");
        $("div.check").addClass("not-shown");

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
        $(".check").removeClass("not-shown");

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

    $("#grid1 .check").click(function () {
        $("#grid1-detail").toggleClass('not-shown');

    })
    $("#grid2 .check").click(function () {
        $("#grid2-detail").toggleClass('not-shown');

    })
    $("#grid3 .check").click(function () {
        $("#grid3-detail").toggleClass('not-shown');

    })
    $("#grid4 .check").click(function () {
        $("#grid4-detail").toggleClass('not-shown');

    })
    $("#grid5 .check").click(function () {
        $("#grid5-detail").toggleClass('not-shown');

    })
    $("#grid6 .check").click(function () {
        $("#grid6-detail").toggleClass('not-shown');

    })
    $("#grid7 .check").click(function () {
        $("#grid7-detail").toggleClass('not-shown');

    })
    $("#grid8 .check").click(function () {
        $("#grid8-detail").toggleClass('not-shown');

    })
    $("#grid9 .check").click(function () {
        $("#grid9-detail").toggleClass('not-shown');

    })
    $("#grid10 .check").click(function () {
        $("#grid10-detail").toggleClass('not-shown');

    })
    $("#grid11 .check").click(function () {
        $("#grid11-detail").toggleClass('not-shown');

    })
    $("#grid12 .check").click(function () {
        $("#grid12-detail").toggleClass('not-shown');

    })
    $("#grid13 .check").click(function () {
        $("#grid13-detail").toggleClass('not-shown');

    })
});