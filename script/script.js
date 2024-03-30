$(document).ready(function () {

    // 그라데이션, 박스셰도우 실행
    startGrd();
    updateBoxShadow();

    // input[type=color] 추가
    var colorBtnNum = 1;

    $("#addColorBtn").on("click", function () {
        if (colorBtnNum <= 3) {
            $("#inputBox").append(`
                <div class="colorInput">
                    <input type="color" class="gdColor" value="#ffffff">
                    <input type="number" class="percent" min="0" max="100" value="0">
                    <button id="removeBtn">-</button>
                </div>
            `);
            colorBtnNum++;
        } else {
            $("#warningMsg").text("최대 5개 까지 가능합니다.");
        }
    });

    // #removeBtn 클릭시 추가된 input[type=color] 제거
    $(document).on("click", "#removeBtn", function () {
        $(this).parent().remove();
        $("#warningMsg").text("");
        colorBtnNum--;
    });

    // 그라데이션 추천(랜덤 값)
    $("#randomBtn").on("click", function () {
        var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        var randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        $("#randomColor1").val(randomColor1);
        $("#randomColor2").val(randomColor2);
    });

    // 적용 버튼 클릭시 실행
    $("#applyBtn").on("click", function () {
        startGrd();
    });

    // 그라데이션
    var gradientValue;

    function startGrd() {
        var gdColor = [];
        var percent = [];
        var angle = $(".angleInput").val() + "deg";

        $(".colorInput").each(function () {
            gdColor.push($(this).find(".gdColor").val());
            percent.push($(this).find(".percent").val() + "%");
        });

        gradientValue = "linear-gradient(" + angle + ", ";

        $.each(gdColor, function (e) {
            gradientValue = gradientValue + gdColor[e] + " " + percent[e];
            if (!(e === gdColor.length - 1)) {
                gradientValue = gradientValue + ", ";
            }
        });

        $("#gradientBg").css("background", gradientValue);
        $("#gradientText").text("background: " + gradientValue + ");");
    }

    // 박스셰도우
    var boxShadowValue;

    function updateBoxShadow() {
        // parseInt = 문자열을 정수로
        var boxShadow1 = parseInt($("#hRange").val() || $("#hNumber").val(), 10);
        var boxShadow2 = parseInt($("#vRange").val() || $("#vNumber").val(), 10);
        var boxShadow3 = parseInt($("#blurRange").val() || $("#blurNumber").val(), 10);
        var boxShadow4 = parseInt($("#spreadRange").val() || $("#spreadNumber").val(), 10);
        var boxShadow4 = parseInt($("#spreadRange").val() || $("#spreadNumber").val(), 10);

        var bxbgColor = $("#bgcolor").val();
        var alpha = $("#colorAlphaRange").val() || $("#colorAlphaNumber").val();

        var rgb = rgb($("#color2").val());

        // hex 값을 rgb값으로
        function rgb(e) {
            return {
                r: parseInt(e.slice(1, 3), 16),
                g: parseInt(e.slice(3, 5), 16),
                b: parseInt(e.slice(5, 7), 16)
            };
        }

        boxShadowValue = "" + boxShadow1 + "px " + boxShadow2 + "px " + boxShadow3 + "px " + boxShadow4 + "px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + ")";
        $("#boxshadowBox").css("background", bxbgColor);
        $("#boxshadowBox").css("box-shadow", boxShadowValue);
        $("#boxshadowText").text("box-shadow: " + boxShadowValue + ";");
    }

    // 변경된 값을 실행, input[type=range] input[type=Number] 을 연동
    // rangeS 를 통해 true 일 경우 Number로 false일 경우 Range로 
    var rangeS;

    $("#boxShadow>div>label>input[type='range']").on("input", function () {
        rangeS = true;
        replace(this, rangeS);
        updateBoxShadow();
    });

    $("#boxShadow>div>label>input[type='number']").on("input", function () {
        rangeS = false;
        replace(this, rangeS);
        updateBoxShadow();
    });

    $("#boxShadow>div>label>input[type='color']").on("input", function () {
        updateBoxShadow();
    });

    function replace(e) {
        if (rangeS) {
            $("#" + $(e).attr("id").replace("Range", "Number")).val($(e).val());
        } else {
            $("#" + $(e).attr("id").replace("Number", "Range")).val($(e).val());
        }
    }

    $(".effect>label>input").on("input", function () {
        var effectValue = $(this).val();

        var random10 = Math.floor(Math.random() * 10) + 1;
        var random20 = Math.floor(Math.random() * 20) + 1;
        var random20_ = Math.floor(Math.random() * 20) + 1;
        var random20__ = Math.floor(Math.random() * 20) + 1;
        var random100 = Math.floor(Math.random() * 100) + 1;
        var random200 = Math.floor(Math.random() * 200) + 1;
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        var filterImg = $("#filterBox>img");
        var filterValue = $("#filterValue");
        if (effectValue == "normal") {
            filterImg.css("filter", "url('./images/filter.svg')");
            filterValue.text("filter: url('./images/filter.svg')");
        } else if (effectValue == "blur") {
            filterImg.css("filter", "blur(" + random10 + "px)");
            filterValue.text("filter: blur(" + random10 + "px)");
        } else if (effectValue == "contrast") {
            filterImg.css("filter", "contrast(" + random200 + "%)");
            filterValue.text("filter: contrast(" + random200 + "%)");
        } else if (effectValue == "grayscale") {
            filterImg.css("filter", "grayscale(" + random100 + "%)");
            filterValue.text("filter: (" + random100 + "%)");
        } else if (effectValue == "hue-rotate") {
            filterImg.css("filter", "hue-rotate(" + random100 + "deg)");
            filterValue.text("filter: hue-rotate(" + random100 + "deg)");
        } else if (effectValue == "drop-shadow") {
            filterImg.css("filter", "drop-shadow(" + random20 + "px " + random20_ + "px " + random20__ + "px " + randomColor + ")");
            filterValue.text("filter: drop-shadow(" + random20 + "px " + random20_ + "px " + random20__ + "px " + randomColor + ")");
        } else if (effectValue == "drop-shadowInvert") {
            filterImg.css("filter", "drop-shadow(" + random20 + "px " + random20_ + "px " + random20__ + "px " + randomColor + ") invert(" + random100 + "%)");
            filterValue.text("filter: drop-shadow(" + random20 + "px " + random20_ + "px " + random20__ + "px " + randomColor + ") invert(" + random100 + "%)");
        }
    });

    // 클릭시 복사
    $("#gradientCopy").on("click", function () {
        textCopy("background: " + gradientValue + ");");
    });

    $("#boxShadowCopy").on("click", function () {
        textCopy("box-shadow: " + boxShadowValue + ";");
    });

    $("#filterCopy").on("click", function () {
        var filterValuetext = $("#filterValue").text();
        textCopy(filterValuetext)
    });

    function textCopy(copyText) {
        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(copyText).select();
        document.execCommand("copy");
        tempInput.remove();
        alert("복사되었습니다!");
    }

    // input 최대 숫자 제한
    $(".angleInput").on("input", function () {
        var value = $(this).val();
        if (value > 360) {
            $(this).val("0");
            $("#warningMsg2").text("최대 360deg 까지만 가능합니다.");
            setTimeout(function () {
                $("#warningMsg2").text("");
            }, 3000);
        }
    });

    $(".percent").on("input", function () {
        var value = $(this).val();
        if (value < 0 || value > 100) {
            $(this).val("0");
            $("#warningMsg").text("최대 100% 까지만 가능합니다.");
            setTimeout(function () {
                $("#warningMsg").text("");
            }, 3000);
        }
    });

    $("#colorAlphaNumber").on("input", function () {
        var value = $(this).val();
        if (value < 0 || value > 1) {
            $(this).val("0");
        }
    });

    $("#hv>label>input").on("input", function () {
        var value = $(this).val();
        if (value < -100 || value > 100) {
            $(this).val("0");
            rangeS = false;
            replace(this);
            updateBoxShadow();
        }
    });

    $("#bs>label>input").on("input", function () {
        var value = $(this).val();
        if (value < 0 || value > 100) {
            $(this).val("0");
            rangeS = false;
            replace(this);
            updateBoxShadow();
        }
    });

    // UI settingMenu
    var openUiMenu = true;
    $("#openUiMenu").on("click", function () {
        if (openUiMenu) {
            $("#uiMenu").stop().slideDown(300);
            openUiMenu = false;
        } else {
            $("#uiMenu").stop().slideUp(200);
            openUiMenu = true;
        }
    });

    $(".range>input#fontSize").on("input", function () {
        var value = parseInt($(this).val());
        $("#size").text(value);
        $("*").css("font-size", value + "px");
        $(".channelName>span").css("font-size", value + 4 + "px");
    });

    var switchBox = true;
    $(".switch>input").on("input", function () {
        if (switchBox) {
            dark()
            switchBox = false;
        } else {
            light()
            switchBox = true;
        }
    });

    var darkModeBgColor;
    var darkModeBsColor;

    function dark() {
        darkModeBgColor = "#000000";
        darkModeBsColor = "#ffffff";
        // css href
        $("#darkMode").attr("href", "./css/dark.css");
        // background
        $("#bgcolor").val(darkModeBgColor);
        $("#boxshadowBox").css("background", darkModeBgColor);
        // box-shadow
        $("#color2").val(darkModeBsColor);
    }

    function light() {
        darkModeBgColor = "#ffffff";
        darkModeBsColor = "#000000";
        // css href
        $("#darkMode").attr("href", "./css/style.css");
        // background
        $("#bgcolor").val(darkModeBgColor);
        $("#boxshadowBox").css("background", darkModeBgColor);
        // box-shadow
        $("#color2").val(darkModeBsColor);
    }

    // 새로고침
    $("#uiReset").on("click", function () {
        window.location.reload()
    });

});