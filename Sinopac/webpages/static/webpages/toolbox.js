var pin = true;
var sum = false;


//click event
$(document).ready(function () {
    $(".draggable").draggable({ distance: 20 });
    $("#add").click(function () {
        var e = document.getElementById("phaselist");
        var str = e.options[e.selectedIndex].text;
        $('#phase-text').val($('#phase-text').val() + str + '\n');
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

// summary
$(document).ready(function () {
    var phase = [
        ["案源:業務於北富銀上班時即往來過", "案源:B為業務前職客戶", "案源:自行致電客服申貸.", "案源:臨櫃申辦.", "案源:網銀申辦"],
        ["加查全國商工行政服務入口網站/財政部稅務入口網站-統編:代表人-,成立-.", "加查經濟部商業司網站-統編:代表人-,成立-", "B國民身份證領補換資料查詢驗證：N查無紀錄,然掃描進件系統影像資料補提供資料相符.", "本案客戶風險等級資訊與防制洗錢-FDD系統查詢尚無資料，請業務同仁依規建置並簽核至適當層級。", "加查晶片居留證資料查詢網站—B,統一證號、核發日期、居留期限及背面序號資料均相符.", "B為公司債務保證人,請業務同仁補公司聯徵系統查詢.", "B於洗錢及資助恐怖主義防制彙整-最高風險分級：中/高風險，本案請業務同仁依規簽核至適當層級。", "業務將B姓名鍵錯,請確認正確資料後自行於FDD網站查詢,並將加查資料以影像系統補傳.", "本案尚未提供“銀行法第33條之3「同一關係人」資料表”，請業務單位依規確認該文件並上傳至掃描進件整合系統後完成系統建檔。", "請業務同仁參酌本報告客戶風險等級資訊與防制洗錢-FDD系統查詢資訊及洗錢及資助恐怖主義防制彙整-本案地域風險/本案客戶風險，綜合評估客戶總風險值後依規簽核至適當層級。", "月收暫認:107.3~107.5$/6+年終/12=元,核委得依客戶提供之財力文件核算並調整其月收入."],
        ["3", "2", "3", "45", "7"],
        ["無戶名,核對居留證出生日期無誤.", "無戶名,核對貸款申請書出生日期無誤.", "無戶名,與本人核對ID及出生日期無誤."]
    ];
    $('input[name=sum]').change(function () {
        var checked = parseInt($('input[name=sum]:checked').val(), 10);
        var arrayLength = phase[checked].length;
        $("#phaselist").html("");
        for (var i = 0; i < arrayLength; i++) {
            $("#phaselist").append("<option>" + phase[checked][i] + "</option>")
        }
    })


    $("#new").click(function () {
        var checked = parseInt($('input[name=sum]:checked').val(), 10);
        $("#inputphase").toggleClass("phasehide");
        $("#phaselist").toggleClass("phasehide");
        if (document.getElementById("new").value == "新增片語") {

            phase[checked].push(document.getElementById('inputphase').value);

            var arrayLength = phase[checked].length;
            $("#phaselist").html("");
            for (var i = 0; i < arrayLength; i++) { $("#phaselist").append("<option>" + phase[checked][i] + "</option") }
            document.getElementById("new").value = "自訂片語";
            document.getElementById('inputphase').value = "";
        } else {
            document.getElementById("new").value = "新增片語";

        }
    });



    $("#sum-save").click(function () {
        // alert("clicked");
        var summaries = ['#summary0', '#summary1', '#summary2', '#summary3'];
        var checked = parseInt($('input[name=sum]:checked').val(), 10);
        var phaseText = document.getElementById("phase-text");
        console.log(phaseText.value);
        switch (checked) {
            case 0:
                $(summaries[0]).val(phaseText.value);
                break;
            case 1:
                var str1 = $(summaries[1]).val();
                $(summaries[1]).val(str1 + "\n" + phaseText.value);
                break;
            case 2:
                $(summaries[2]).val(phaseText.value);
                break;
            case 3:
                $(summaries[3]).val(phaseText.value);
                break;
        }

        // alert(document.getElementById("phase-text").value);

    })
});

function AutoGrowTextArea(textField) {
    if (textField.clientHeight < textField.scrollHeight) {
        textField.style.height = textField.scrollHeight + "px";
        if (textField.clientHeight < textField.scrollHeight) {
            textField.style.height =
                (textField.scrollHeight * 2 - textField.clientHeight) + "px";
        }
    }
}