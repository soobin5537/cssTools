var effect = new Vue({
    el: "#filterTool",
    data: {
        // 이미지
        imgSrc: "./images/logo.png",
        imgAlt: "filter 예시 로고",
        // 타이틀
        mainTitle: "효과 선택",
        warningMsg3: "모든 색상 및 효과 범위는 랜덤으로 변경됩니다.",
        // 하단상자
        filterValue: "filter: url('./images/filter.svg')",
        copy: "copy",
        // input
        inputs: [{
            title: "normal",
            type: "radio",
            id: "normal",
            name: "effect",
            value: "normal",
            checked: true
        }, {
            title: "blur",
            type: "radio",
            id: "blur",
            name: "effect",
            value: "blur",
            checked: false
        }, {
            title: "contrast",
            type: "radio",
            id: "contrast",
            name: "effect",
            value: "contrast",
            checked: false
        }, {
            title: "grayscale",
            type: "radio",
            id: "grayscale",
            name: "effect",
            value: "grayscale",
            checked: false
        }, {
            title: "hue-rotate",
            type: "radio",
            id: "hue-rotate",
            name: "effect",
            value: "hue-rotate",
            checked: false
        }, {
            title: "drop-shadow",
            type: "radio",
            id: "drop-shadow",
            name: "effect",
            value: "drop-shadow",
            checked: false
        }, {
            title: "drop-shadowInvert",
            type: "radio",
            id: "drop-shadowInvert",
            name: "effect",
            value: "drop-shadowInvert",
            checked: false
        }, ]
    }
})
