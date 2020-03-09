<template>
  <ImageEditor :options="options"
                ref="tuiImageEditor"
                @addText="onAddText"
                @objectMoved="onObjectMoved"
  ></ImageEditor>
</template>

<script>
// import 'tui-image-editor/dist/tui-image-editor.css';
import './About.scss';
import 'tui-color-picker/dist/tui-color-picker.css';

import {ImageEditor} from '@toast-ui/vue-image-editor';
import icon_a from "tui-image-editor/dist/svg/icon-a.svg";
import icon_b from "tui-image-editor/dist/svg/icon-b.svg";
import icon_c from "tui-image-editor/dist/svg/icon-c.svg";
import icon_d from "tui-image-editor/dist/svg/icon-d.svg";
// import "file-saver";


const locale_ko = {
  Load: "파일선택",
  Download: "다운로드",
  Apply: "적용",
  Arrow: "화살표",
  "Arrow-2": "화살표2",
  "Arrow-3": "화살표3"
}
var theme = {
  //공통스타일
  "common.bi.image": "",
  "common.bisize.width": "0px",
  "common.bisize.height": "0px",
  "common.backgroundImage": "none",
  "common.backgroundColor": "black",
  "common.border": "0px",
  //헤더
  "header.backgroundImage": "none",
  "header.backgroundColor": "transparent",
  "header.border": "0px",
  //파일 업로드 버튼 스타일
  "loadButton.backgroundColor": "#fff",
  "loadButton.border": "1px solid #ddd",
  "loadButton.color": "#222",
  "loadButton.fontFamily": "NotoSans, sans-serif",
  "loadButton.fontSize": "12px",
  //다운로드 버튼 스타일
  "downloadButton.backgroundColor": "#fdba3b",
  "downloadButton.border": "1px solid #fdba3b",
  "downloadButton.color": "#fff",
  "downloadButton.fontFamily": "NotoSans, sans-serif",
  "downloadButton.fontSize": "12px",
  //메인 아이콘
  "menu.normalIcon.path": icon_d,
  "menu.activeIcon.path": icon_b,
  "menu.disabledIcon.path": icon_a,
  "menu.hoverIcon.path": icon_c,
  //하위메뉴 아이콘
  "submenu.normalIcon.path": icon_d,
  "submenu.activeIcon.path": icon_c,
//   submenu primary color
  "submenu.backgroundColor": "#ffffff",
  "submenu.partition.color": "#858585",
  // 서브메뉴
  "submenu.normalLabel.color": "#858585",
  "submenu.normalLabel.fontWeight": "lighter",
  "submenu.activeLabel.color": "#000",
  "submenu.activeLabel.fontWeight": "lighter",
  // 체크박스
  "checkbox.border": "1px solid #ccc",
  "checkbox.backgroundColor": "#fff",
  // 잘라내기
  "range.pointer.color": "#000",
  "range.bar.color": "#666",
  "range.subbar.color": "#d1d1d1",
  "range.value.color": "#000",
  "range.value.fontWeight": "lighter",
  "range.value.fontSize": "11px",
  "range.value.border": "1px solid #353535",
  "range.value.backgroundColor": "#151515",
  "range.title.color": "#000",
  "range.title.fontWeight": "lighter",
  // colorpicker 
  "colorpicker.button.border": "1px solid #1e1e1e",
  "colorpicker.title.color": "#fff"
 
};

export default {
    components: {
        ImageEditor,
    },
    data() {
        return {
            useDefaultUI: false,
            options: { // for tui-image-editor component's "options" prop
                cssMaxWidth: document.documentElement.clientWidth,
                cssMaxHeight: document.documentElement.clientHeight,
                
                selectionStyle: {
                  cornerSize: 10,
                  cornerStyle:"circle",
                  rotatingPointOffset: 40
                },

                includeUI : {
                    // 표시 메뉴의 설정. 기본적으로 모든 나타나는 
                    // menu : "flip", "crop", "rotate", "filter", 
                    // 컴포넌트 생성시에 선택되는 메뉴의 지정 
                    initMenu: "filter",
                    // 메뉴 바의 위치 지정 
                    menuBarPosition: "bottom",
                    uiSize:{
                        width: "100%",
                        height: "800px",
                    },
                    theme: theme,
                    locale: locale_ko,
                },
                resizeInfo: {
                    uiSize: {
                        width: "500px",
                        height: "500px",
                    },
                    imageSize:{
                        oldWidth: 100,
                        oldHeight: 100,
                        newWidth: 700,
                        newHeight: 700,
                    }
                }
            }
        };
    },
    mounted() {
     
        // console.log('imageEditor', imageEditor);
    },
    methods: {
        onAddText(res) {
           console.group('addText');
           console.log('Client Position : ', res.clientPosition);
           console.log('Origin Position : ', res.originPosition);
           console.groupEnd();
        },
        onObjectMoved(res) {
            console.log('addIcon');
            console.log('addIcon', res);
           console.groupEnd();
            
        }
    }
}
</script>
