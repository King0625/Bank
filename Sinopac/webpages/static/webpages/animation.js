$(document).ready(() => {
    // basicDataQuery();
    // bankDataQuery();
    // contributionDataQuery();

    $(".content").slideDown("slow");

    // basicDataQuery();
    getToDoList();
    // bankDataQuery();
    // FDDbutionDataQuery();
    // ContrubutionDataQuery();
    // unionDataQuery();
    // autoJudgeQuery();
    $("#swipe1").click(function () {
        jQuery("html,body").animate({ scrollTop: document.getElementById('content1').offsetTop - 15 }, 500);
        // window.scrollTo(0, document.getElementById('content1').offsetTop - 15);
        $(this).css("background", "#5d5d5d");
        $("#swipe2, #swipe3, #swipe4").css("background", "#C3C3C3");
    })
    $("#swipe2").click(function () {
        jQuery("html,body").animate({ scrollTop: document.getElementById('content2').offsetTop - 15 }, 500);
        // window.scrollTo(0, document.getElementById('content2').offsetTop - 15);
        $(this).css("background", "#5d5d5d");
        $("#swipe1, #swipe3, #swipe4").css("background", "#C3C3C3");
    })
    $("#swipe3").click(function () {
        jQuery("html,body").animate({ scrollTop: document.getElementById('content3').offsetTop - 15 }, 500);
        // window.scrollTo(0, document.getElementById('content3').offsetTop - 15);
        $(this).css("background", "#5d5d5d");
        $("#swipe1, #swipe2, #swipe4").css("background", "#C3C3C3");
    })
    $("#swipe4").click(function () {
        jQuery("html,body").animate({ scrollTop: document.getElementById('content4').offsetTop - 15 }, 500);
        // window.scrollTo(0, document.getElementById('content4').offsetTop - 15);
        $(this).css("background", "#5d5d5d");
        $("#swipe1, #swipe2, #swipe3").css("background", "#C3C3C3");
    })

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal >= document.getElementById('content4').offsetTop - 16) {
            $("#swipe4").css("background", "#5d5d5d");
            $("#swipe1, #swipe2, #swipe3").css("background", "#C3C3C3");
        } else if (scrollVal >= document.getElementById('content3').offsetTop - 16) {
            $("#swipe3").css("background", "#5d5d5d");
            $("#swipe1, #swipe2, #swipe4").css("background", "#C3C3C3");
        } else if (scrollVal >= document.getElementById('content2').offsetTop - 16) {
            $("#swipe2").css("background", "#5d5d5d");
            $("#swipe1, #swipe3, #swipe4").css("background", "#C3C3C3");
        } else {
            $("#swipe1").css("background", "#5d5d5d");
            $("#swipe2, #swipe3, #swipe4").css("background", "#C3C3C3");
        }
    });
    var coll = document.getElementsByClassName("collapse-btn");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            var content = this.nextElementSibling;
            var collapse_section = content.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "flex";
                collapse_section.style.display = "none";
                this.setAttribute('src', '../../static/webpages/img/downArrow.png');
            } else {
                content.style.display = "none";
                collapse_section.style.display = "block";
                this.setAttribute('src', '../../static/webpages/img/topArrow.png');
            }
        });
    }
    $("#contentList1").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList2, #contentList3, #contentList4, #contentList5, #contentList6").removeClass('list-clicked');
        $("#contentList-info1").toggleClass('not-shown');
        //$("#contentList-info1").toggleClass('shown');
        $("#contentList-info2, #contentList-info3, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown');
    })
    $("#contentList2").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList1, #contentList3, #contentList4, #contentList5, #contentList6").removeClass('list-clicked');
        $("#contentList-info2").toggleClass('not-shown');
        //$("#contentList-info2").toggleClass('shown');
        $("#contentList-info1, #contentList-info3, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown');
    })
    $("#contentList3").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList1, #contentList2, #contentList4, #contentList5, #contentList6").removeClass('list-clicked');
        $("#contentList-info3").toggleClass('not-shown');
        //$("#contentList-info3").toggleClass('shown');
        $("#contentList-info1, #contentList-info2, #contentList-info4, #contentList-info5, #contentList-info6").addClass('not-shown');
    })
    $("#contentList4").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList1, #contentList2, #contentList3, #contentList5, #contentList6").removeClass('list-clicked');
        $("#contentList-info4").toggleClass('not-shown');
        // $("#contentList-info4").toggleClass('shown');
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info5, #contentList-info6").addClass('not-shown');
    })
    $("#contentList5").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList1, #contentList2, #contentList3, #contentList4, #contentList6").removeClass('list-clicked');
        $("#contentList-info5").toggleClass('not-shown');
        //$("#contentList-info5").toggleClass('shown');
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info4, #contentList-info6").addClass('not-shown');
    })
    $("#contentList6").click(function () {
        $(this).toggleClass('list-clicked');
        $("#contentList1, #contentList2, #contentList3, #contentList4, #contentList5").removeClass('list-clicked');
        $("#contentList-info6").toggleClass('not-shown');
        //$("#contentList-info6").toggleClass('shown');
        $("#contentList-info1, #contentList-info2, #contentList-info3, #contentList-info4, #contentList-info5").addClass('not-shown');
    })

    var externalWebsites = document.getElementById('all-external-Websites');
    externalWebsites.style.left = document.getElementById('externalPage').offsetLeft + "px";

    $("#externalPage").click(function () {
        $(this).toggleClass('list-clicked');
        // externalWebsites.style.left = document.getElementById('externalPage').offsetLeft;
        // externalWebsites.style.left = 990;

        $("#all-external-Websites").toggleClass('not-shown');

    })

    var readonly = true;
    var disabled = true;
    $("#edit").click(function () {
        $(this).css("background-color", "#fff4aa");
        $("div.check").addClass("not-shown");

        $(".contentGrid-container").css("grid-template-rows", "repeat(8,1fr)");
        $("#grid14").css("grid-row", "5 / 9");
        $(".moreInfo").css("display", "flex");

        $(".text-container input[type='text']").attr('readonly', !readonly);
        $(".text-container input[type='text']").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        });
        $(".text-container textarea").attr('readonly', !readonly);
        $(".text-container textarea").css({
            "background": "#f3f3f3",
            "border-radius": "6px"
        });
        $(".text-container select").attr('disabled', !disabled);
        // var downArrowURL = "{% static 'webpages/img/downArrow.png' %}"
        $(".text-container select").css("background", "url('../../static/webpages/img/downArrow.png') no-repeat scroll right center transparent");

        var houseCommunication = document.getElementById("House-communication");
        var companyCommunication = document.getElementById("company-communication");
        var contact = document.getElementById("contact");
        var businessOrigin = document.getElementById("business-origin");
        var monthlyPayment = document.getElementById("monthly-payment");
        var usage = document.getElementById("usage");
        var credit = document.getElementById("credit")
        var descriptionInput = document.getElementById("persondescription")

        houseCommunication.onchange = function () {
            descriptionInput.value += "住家: " + houseCommunication.value + "  ; ";
        }
        companyCommunication.onchange = function () {
            descriptionInput.value += "公司: " + companyCommunication.value + "  ; ";
        }
        contact.onchange = function () {
            descriptionInput.value += "照會本人方式: " + contact.value + "  ; ";
        }
        businessOrigin.onchange = function () {
            descriptionInput.value += "業務來源: " + businessOrigin.value + "  ; ";
        }
        monthlyPayment.onchange = function () {
            descriptionInput.value += "月薪: " + monthlyPayment.value + " 萬  ; ";
        }
        usage.onchange = function () {
            descriptionInput.value += "用途: " + usage.value + "  ; ";
        }
        credit.onchange = function () {
            descriptionInput.value += "申貸: " + credit.value + "  萬 ; ";
        }

        // $(".text-container textarea[name='description']").value = "[住家: ,公司: , 照會本人方式: , 業務來源: , 月薪: , 用途: ,申貸: ]";
    });

    $("#save").click(function () {
        $("#edit").css("background-color", "#ffffff");
        $(".check").removeClass("not-shown");

        $(".contentGrid-container").css("grid-template-rows", "repeat(7,1fr)");
        $("#grid14").css("grid-row", "5/8");
        $(".moreInfo").css("display", "none");

        $(".text-container input[type='text']").attr('readonly', readonly);
        $(".text-container input[type='text']").css({
            "background": "#ffffff"
        });
        $(".text-container textarea").attr('readonly', readonly);
        $(".text-container textarea").css({
            "background": "#ffffff"
        });
        $(".text-container select").attr('disabled', disabled);
        $(".text-container select").css("background", "none");
    });

    $("#grid1 .check").click(function () {
        $("#grid1-detail").toggleClass('shown');
        $("#grid1-detail").toggleClass('not-shown');
        $("#grid1-detail .close").click(function () {
            $("#grid1-detail").toggleClass('shown');
            $("#grid1-detail").toggleClass('not-shown');
        });
    });



    $("#grid2 .check").click(function () {
        $("#grid2-detail").toggleClass('shown');
        $("#grid2-detail").toggleClass('not-shown');
        $("#grid2-detail .close").click(function () {
            $("#grid2-detail").toggleClass('shown');
            $("#grid2-detail").toggleClass('not-shown');
        });
    });

    $("#grid3 .check").click(function () {
        $("#grid3-detail").toggleClass('shown');
        $("#grid3-detail").toggleClass('not-shown');
        $("#grid3-detail .close").click(function () {
            $("#grid3-detail").toggleClass('shown');
            $("#grid3-detail").toggleClass('not-shown');
        });
    });

    $("#grid4 .check").click(function () {
        $("#grid4-detail").toggleClass('shown');
        $("#grid4-detail").toggleClass('not-shown');
        $("#grid4-detail .close").click(function () {
            $("#grid4-detail").toggleClass('shown');
            $("#grid4-detail").toggleClass('not-shown');
        });
    });

    $("#grid5 .check").click(function () {
        $("#grid5-detail").toggleClass('shown');
        $("#grid5-detail").toggleClass('not-shown');
        $("#grid5-detail .close").click(function () {
            $("#grid5-detail").toggleClass('shown');
            $("#grid5-detail").toggleClass('not-shown');
        });
    });

    $("#grid6 .check").click(function () {
        $("#grid6-detail").toggleClass('shown');
        $("#grid6-detail").toggleClass('not-shown');
        $("#grid6-detail .close").click(function () {
            $("#grid6-detail").toggleClass('shown');
            $("#grid6-detail").toggleClass('not-shown');
        });
    });
    $("#grid7 .check").click(function () {
        $("#grid7-detail").toggleClass('shown');
        $("#grid7-detail").toggleClass('not-shown');
        $("#grid7-detail .close").click(function () {
            $("#grid7-detail").toggleClass('shown');
            $("#grid7-detail").toggleClass('not-shown');
        });
    });
    $("#grid8 .check").click(function () {
        $("#grid8-detail").toggleClass('shown');
        $("#grid8-detail").toggleClass('not-shown');
        $("#grid8-detail .close").click(function () {
            $("#grid8-detail").toggleClass('shown');
            $("#grid8-detail").toggleClass('not-shown');
        });
    });
    $("#grid9 .check").click(function () {
        $("#grid9-detail").toggleClass('shown');
        $("#grid9-detail").toggleClass('not-shown');
        $("#grid9-detail .close").click(function () {
            $("#grid9-detail").toggleClass('shown');
            $("#grid9-detail").toggleClass('not-shown');
        });
    });
    $("#grid10 .check").click(function () {
        $("#grid10-detail").toggleClass('shown');
        $("#grid10-detail").toggleClass('not-shown');
        $("#grid10-detail .close").click(function () {
            $("#grid10-detail").toggleClass('shown');
            $("#grid10-detail").toggleClass('not-shown');
        });
    });
    $("#grid11 .check").click(function () {
        $("#grid11-detail").toggleClass('shown');
        $("#grid11-detail").toggleClass('not-shown');
        $("#grid11-detail .close").click(function () {
            $("#grid11-detail").toggleClass('shown');
            $("#grid11-detail").toggleClass('not-shown');
        });
    });
    $("#grid12 .check").click(function () {
        $("#grid12-detail").toggleClass('shown');
        $("#grid12-detail").toggleClass('not-shown');
        $("#grid12-detail .close").click(function () {
            $("#grid12-detail").toggleClass('shown');
            $("#grid12-detail").toggleClass('not-shown');
        });
    });
    $("#grid13 .check").click(function () {
        $("#grid13-detail").toggleClass('shown');
        $("#grid13-detail").toggleClass('not-shown');
        $("#grid13-detail .close").click(function () {
            $("#grid13-detail").toggleClass('shown');
            $("#grid13-detail").toggleClass('not-shown');
        });
    });

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
        $(".conclusion-info select").css("background", "url('../../static/webpages/img/downArrow.png') no-repeat scroll right center transparent");
    })
    $("#conclusion-save").click(function () {
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


});