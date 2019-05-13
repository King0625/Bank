$(document).ready(() => {
    basicDataQuery();

    $("#swipe1").click(function () {
        window.scrollTo(0, 80);
    })
    $("#swipe2").click(function () {
        window.scrollTo(0, 750);
    })
    // $("#swipe3").click(function () {
    //     window.scrollTo(0, 80);
    // })
    // $("#swipe4").click(function () {
    //     window.scrollTo(0, 80);
    // })


    $("#contentList1").click(function () {
        $(this).toggleClass('list-clicked')
        $("#contentList-info1").toggleClass('not-shown')
    })
    $("#contentList2").click(function () {

    })
    $("#contentList3").click(function () {

    })
    $("#contentList4").click(function () {

    })
    $("#contentList5").click(function () {

    })
    $("#contentList6").click(function () {

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
        $("select").css("background", `url("{% static 'webpages/downArrow.png' %}) no-repeat scroll right center transparent`);
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

        let s = new Set(EDITELEMTSid);
        let iddata = Array.from(s);
        let data = {}
        for (var i = 0 ; i < iddata.length; i++){
            data[iddata[i]] = $('#' + iddata[i]).val();
        }
        data['id'] = id;
        console.log(data);
        $.ajax({
            type: "POST",
            url: "/sinopac/basicData/",
            data: JSON.stringify(data),
            async:false,
            dataType: "JSON",
            success: function (response) {
                console.log(response)
            }
        });
        basicDataQuery();
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