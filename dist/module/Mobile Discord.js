parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,s){try{var i=t[a](s),l=i.value}catch(d){return void n(d)}i.done?e(l):Promise.resolve(l).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var s=e.apply(n,o);function i(e){t(s,r,a,i,l,"next",e)}function l(e){t(s,r,a,i,l,"throw",e)}i(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode(':root\n{\n    --border-width: 2px;\n    /* Hides (Edited) after editing text */\n    --show-edited: inline; /* Yes=\'block,inline\' | No=\'none\' */\n    /* Timestamp of when the message was sent */\n    --show-timestamp: inline; /* Yes=\'inline\' | No=\'none\' */\n    /* Hides (translate) after translating text */\n    --show-translated: inline; /* Yes=\'block,inline\' | No=\'none\' */\n    /* Gives Color to emojis even if you cant use them */\n    --disabled-emoji-color: 1%; /* Yes=\'1%\'     | No=\'0%\'   */\n    /* Windows Discord Watermark */\n    --show-Discord-watermark: block; /* Yes=\'block\' | No=\'none\'  */\n    /* If the Tooltips top is marked \'none\' it hides bottom tool tips to*/\n    --show-tootips: block; /* Yes=\'block\' | No=\'none\' */\n    --show-bottom-tootips: block; /* Yes=\'block\' | No=\'none\' */\n    /* Hover over a spoiler and it reveals it */\n    --spoiler-hover: 1; /* Yes=\'1\'     | No=\'0\'    */\n    /*Emoji descriptions*/\n    --show-emoji-description: flex; /* Yes=\'flex\' | No=\'none\' */\n    /*system messages*/\n    --show-system-messages: flex; /* Yes=\'flex\' | No=\'none\' */\n    /*personal text direction*/\n    --Text-align:right;           /* \'Right\'  |  \'left\' */\n}\n\n\n.theme-dark,\nhtml.theme-dark #app-mount .theme-light .root-1gCeng,\nhtml.theme-dark .force-theme.theme-light {\n    --background: rgb(9, 10, 37) !important;\n\n    --chat-background: #333333;\n    --chat-border: #333333;\n\n    --text-link: #fff;\n    --chat-color: #fff;\n    --personal-chat-color: #fff;\n    --mentioned-color: #faa61a;\n\n    --Personal-chat-background: #007aff;\n    --personal-chat-border: #007aff;\n\n    --scrollbar-auto-track: transparent;\n}\n\n:root {\n    --emoji-color: calc(var(--disabled-emoji-color) * 100%);\n    --version1_0:\tnone;\t\t/* DO NOT CHANGE THIS VARIABLE , USED TO HIDE UPDATE NOTICE\t*/\n}\n\n\n.scrollerInner-2YIMLh,\n.scrollerContent-WzeG7R,\n.chatContent-a9vAAp,\n.theme-dark .form-2fGMdU:before {\n    background: var(--background);\n}\n/*variables*/\n.emojiItemDisabled-1FvFuF {\n    -webkit-filter: grayscale(var(--emoji-color));\n    filter: grayscale(var(--emoji-color));\n}\n.edited-3sfAzf {\n    display: var(--show-edited);\n    text-align: center;\n    color: var(--chat-color);\n}\n.timestamp-3ZCmNB {\n    display: var(--show-timestamp);\n}\n.translated-5YO8i3.edited-3sfAzf {\n    display: var(--show-translated);\n}\n.wordmarkWindows-1v0lYD {\n    display: var(--show-Discord-watermark);\n}\n.tooltip-2QfLtc {\n    display: var(--show-tootips);\n}\n.spoilerText-3p6IlD.hidden-HHr2R9:hover .inlineContent-3ZjPuv {\n    opacity: var(--spoiler-hover);\n    border-radius: 3px;\n    background-color: #4a4d53;\n}\n.flex-1xMQg5 > .flex-1xMQg5 {\n    display: var(--show-emoji-description);\n}\n.popoutContainer-1MXdqN {\n    width: fit-content;\n}\n.disabledPointerEvents-1ptgTB[style*="bottom"] {\n    display: var(--show-bottom-tootips);\n}\n.message-2qnXI6.systemMessage-1I9LCe {\n    display: var(--show-system-messages);\n}\n/**/\n.markup-2BOw-j {\n    color: var(--chat-color);\n}\n\n\n/*color*/\n.mentioned-xhSam7,\n.message-2qnXI6.mentioned-xhSam7.selected-2P5D_Z,\n.mouse-mode.full-motion .mentioned-xhSam7:hover {\n    background-color: transparent;\n}\n.mentioned-xhSam7:hover {\n    position: relative;\n    background-color: transparent;\n}\n.channelHeader-3Gd2xq {\n    border-radius: 8px;\n}\n\n.mentioned-xhSam7:before {\n    background-color: transparent;\n}\n\n\n.message-2qnXI6[data-is-author-self="true"] > .container-1ov-mD > .embedWrapper-lXpS3L {\n    border: solid var(--border-width) var(--personal-chat-border) !important;\n    border-radius: 8px 8px 0 8px;\n    padding: 2px 4px 2px 4px !important;\n    margin-left: 0;\n    background: var(--chat-background);\n    width: fit-content;\n    margin-left: auto;\n    box-sizing: border-box;\n    border-radius: 8px;\n}\n/*david chat*/\n.message-2qnXI6.mentioned-xhSam7>.contents-2mQqc9 >.markup-2BOw-j:not(.slateTextArea-1Mkdgw):not(.repliedTextContent-1R3vnK):not([data-is-author-self="true"]) {\n    border: solid var(--border-width) var(--mentioned-color) !important;\n    border-radius: 8px 8px 8px 0;\n    padding: 2px 4px 2px 4px !important;\n    margin-left: 0;\n    background: var(--chat-background);\n    width: fit-content;\n    box-sizing: border-box;\n}\n.markup-2BOw-j:not(.slateTextArea-1Mkdgw):not(.repliedTextContent-1R3vnK) {\n    border: solid var(--border-width) var(--chat-border) !important;\n    border-radius: 8px 8px 8px 0;\n    padding: 2px 4px 2px 4px !important;\n    margin-left: 0;\n    background: var(--chat-background);\n    width: fit-content;\n    box-sizing: border-box;\n}\n.repliedTextPreview-2NBljf {\n    border: solid var(--border-width) var(--chat-border) !important;\n    border-radius: 8px 8px 8px 8px;\n    padding: 2px 4px 2px 4px !important;\n    margin-left: 0;\n    background: var(--chat-background);\n    width: fit-content;\n    box-sizing: border-box;\n}\n[data-is-author-self="true"] > .contents-2mQqc9 > .markup-2BOw-j {\n    border: solid var(--border-width) var(--personal-chat-border) !important;\n    border-radius: 8px 8px 0 8px;\n    padding: 2px 4px 2px 4px !important;\n    margin-left: 0;\n    background: var(--Personal-chat-background);\n    width: fit-content;\n    margin-left: auto;\n    box-sizing: border-box;\n}\n\n\n.markup-2BOw-j blockquote,\n.markup-2BOw-j pre {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    max-width: 100%;\n}\n.cozy-3raOZG.wrapper-2a6GCs {\n    padding-left: 72px;\n}\n.message-2qnXI6:not([data-is-author-self="true"]) {\n    padding-right: 68px !important;\n}\n\n.cozy-3raOZG[data-is-author-self="true"] .contents-2mQqc9 {\n    text-align: var(--Text-align);\n    margin-right: 20px;\n}\n.cozy-3raOZG[data-is-author-self="true"] .contents-2mQqc9 img {\n    right: 16px;\n}\n.cozy-3raOZG[data-is-author-self="true"] .container-1ov-mD {\n    justify-content: flex-end;\n    margin-right: 20px;\n}\n\n.cozy-3raOZG[data-is-author-self="true"] .headerText-3Uvj1Y {\n    float: right;\n}\n.cozy-3raOZG[data-is-author-self="true"] .username-1A8OIy {\n    float: right;\n    margin-left: 5px;\n}\n.cozy-3raOZG[data-is-author-self="true"] .avatar-1BDn8e {\n    left: unset;\n}\n.cozy-3raOZG[data-is-author-self="true"] .botTag-1un5a6 {\n    float: right;\n}\n/* Repies */\n.cozy-3raOZG[data-is-author-self="true"] > .repliedMessage-VokQwo:before {\n    transform: rotateY(180deg);\n    right: -46px;\n    left: unset;\n    width: 40px;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo {\n    margin-right: 30px;\n    justify-content: flex-end;\n}\n.cozy-3raOZG[data-is-author-self="true"] .compact-T3H92H .username-1A8OIy ~ .badges-XRnWAp,\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .username-1A8OIy ~ .badges-XRnWAp {\n    margin-left: 0.25rem;\n    margin-right: 0;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .repliedTextContentIcon-1ivTae {\n    order: 0;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .repliedTextPreview-2NBljf {\n    order: 1;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .badges-XRnWAp {\n    order: 2;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .botTag-1un5a6 {\n    order: 3;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo .username-1A8OIy {\n    order: 4;\n}\n.cozy-3raOZG[data-is-author-self="true"] .repliedMessage-VokQwo img {\n    order: 5;\n}\n/* Codeblocks */\n.cozy-3raOZG[data-is-author-self="true"] .markup-2BOw-j blockquote,\n.cozy-3raOZG[data-is-author-self="true"] .markup-2BOw-j pre {\n    text-align: left;\n    max-width: unset;\n}\n/* Small margin in name */\n.cozy-3raOZG[data-is-author-self="true"] .headerText-3Uvj1Y {\n    margin-left: 0.25rem;\n    margin-right: 0;\n}\n.chat-3bRxxu {\n    border-radius: 0 0 0 0;\n}\n\n/* End */\n\n.sprite-2iCowe {\n    filter: var(--colored-emoji) !important;\n}\n.emojiItemSelected-1aLkfV {\n    background: var(--background-tertiary) !important;\n}\n\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Mobile Discord",["",{type:"text-input",text:"Border Width",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--border-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--border-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Show Edited",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-edited",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-edited")||"inline";return console.log(t),t}},{type:"text-input",text:"Show Timestamp",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-timestamp",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-timestamp")||"inline";return console.log(t),t}},{type:"text-input",text:"Show Translated",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-translated",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-translated")||"inline";return console.log(t),t}},{type:"text-input",text:"Disabled Emoji Color",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--disabled-emoji-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--disabled-emoji-color")||"1%";return console.log(t),t}},{type:"text-input",text:"Show Discord Watermark",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-Discord-watermark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-Discord-watermark")||"block";return console.log(t),t}},{type:"text-input",text:"Show Tootips",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-tootips",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-tootips")||"block";return console.log(t),t}},{type:"text-input",text:"Show Bottom Tootips",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-bottom-tootips",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-bottom-tootips")||"block";return console.log(t),t}},{type:"text-input",text:"Spoiler Hover",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--spoiler-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spoiler-hover")||"1";return console.log(t),t}},{type:"text-input",text:"Show Emoji Description",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-emoji-description",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-emoji-description")||"flex";return console.log(t),t}},{type:"text-input",text:"Show System Messages",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--show-system-messages",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--show-system-messages")||"flex";return console.log(t),t}},{type:"text-and-color",text:"Chat Background",oninput:function(t){console.log(t),document.body.style.setProperty("--chat-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-background")||"#333333";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chat Border",oninput:function(t){console.log(t),document.body.style.setProperty("--chat-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-border")||"#333333";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Chat Color",oninput:function(t){console.log(t),document.body.style.setProperty("--chat-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Personal Chat Color",oninput:function(t){console.log(t),document.body.style.setProperty("--personal-chat-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--personal-chat-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Mentioned Color",oninput:function(t){console.log(t),document.body.style.setProperty("--mentioned-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mentioned-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Personal Chat Background",oninput:function(t){console.log(t),document.body.style.setProperty("--Personal-chat-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--Personal-chat-background")||"#007aff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Personal Chat Border",oninput:function(t){console.log(t),document.body.style.setProperty("--personal-chat-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--personal-chat-border")||"#007aff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Mobile Discord")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--border-width",document.body.style.getPropertyValue("--border-width")],["--show-edited",document.body.style.getPropertyValue("--show-edited")],["--show-timestamp",document.body.style.getPropertyValue("--show-timestamp")],["--show-translated",document.body.style.getPropertyValue("--show-translated")],["--disabled-emoji-color",document.body.style.getPropertyValue("--disabled-emoji-color")],["--show-Discord-watermark",document.body.style.getPropertyValue("--show-Discord-watermark")],["--show-tootips",document.body.style.getPropertyValue("--show-tootips")],["--show-bottom-tootips",document.body.style.getPropertyValue("--show-bottom-tootips")],["--spoiler-hover",document.body.style.getPropertyValue("--spoiler-hover")],["--show-emoji-description",document.body.style.getPropertyValue("--show-emoji-description")],["--show-system-messages",document.body.style.getPropertyValue("--show-system-messages")],["--chat-background",document.body.style.getPropertyValue("--chat-background")],["--chat-border",document.body.style.getPropertyValue("--chat-border")],["--chat-color",document.body.style.getPropertyValue("--chat-color")],["--personal-chat-color",document.body.style.getPropertyValue("--personal-chat-color")],["--mentioned-color",document.body.style.getPropertyValue("--mentioned-color")],["--Personal-chat-background",document.body.style.getPropertyValue("--Personal-chat-background")],["--personal-chat-border",document.body.style.getPropertyValue("--personal-chat-border")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default