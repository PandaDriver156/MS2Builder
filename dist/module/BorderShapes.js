parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r,o,t,s,n,d){try{var l=e[n](d),u=l.value}catch(i){return void o(i)}l.done?r(u):Promise.resolve(u).then(t,s)}function r(r){return function(){var o=this,t=arguments;return new Promise(function(s,n){var d=r.apply(o,t);function l(r){e(d,s,n,l,u,"next",r)}function u(r){e(d,s,n,l,u,"throw",r)}l(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name BorderShapes\n * @version 1.0.0\n * @author JayWilson\n * @authorLink https://github.com/JayWilson7\n * @description Custom border shapes for elements.\n * @source https://github.com/JayWilson7/BorderShapes\n * @invite jcDvkVk\n**/\n\n  /*------------------------------*/\n /*-----<Source Code Import>-----*/\n/*------------------------------*/\n\n@import url(https://jaywilson7.github.io/BorderShapes/Source/base.css);\n\n  /*---------------------------*/\n /*-----<Basic Variables>-----*/\n/*---------------------------*/\n\n:root {\n   --borders-buttons-rounded: 0px; /*Border shapes for rounded buttons. 25px for circle, 0px for square*/\n   --borders-buttons-circle: 0px; /*Border shapes for circle buttons. 25px for circle, 0px for square*/\n   --borders-switches: 0px; /*Border shapes for switches. 15px for circle, 0px for square*/\n   --borders-checkboxes: 0%; /*Border shapes for checkboxes. 50% for circle, 0% for square*/\n   --borders-slider-bars: 0px; /*Border shapes for slider bars. 5px for circle, 0px for square*/\n   --borders-slider-grabbers: 0px; /*Border shapes for slider grabbers. 8px for circle, 0px for square*/\n   --borders-progress-bars: 0px; /*Border shapes for progress bars. 5px for circle, 0px for square*/\n   --borders-inputs: 0px; /*Border shapes for inputs. 25px for circle, 0px for square*/\n   --borders-contexts: 0px; /*Border shapes for context menus. 25px for circle, 0px for square*/\n   --borders-popouts: 0px; /*Border shapes for popouts. 25px for circle, 0px for square*/\n   --borders-modals: 0px; /*Border shapes for modals. 25px for circle, 0px for square*/\n   --borders-cards: 0px; /*Border shapes for cards. 25px for circle, 0px for square*/\n   --borders-media: 0px; /*Border shapes for images, videos, audios and gifs. 25px for circle, 0px for square*/\n   --borders-previews: 0px; /*Border shapes for previews. 25px for circle, 0px for square*/\n   --borders-servers-default: 0%; /*Border shapes for server icons and circle buttons on server side. 50% for circle, 0% for square*/\n   --borders-servers-interactive: 0%; /*Border shapes for hovered or selected elements mentioned in previous description. 50% for circle, 0% for square*/\n   --borders-folders: 0px; /*Border shapes for server folders. 35px for circle, 0px for square*/\n   --borders-avatars: 0%; /*Border shapes for avatars. 50% for circle, 0% for square*/\n   --borders-icons-default: 0%; /*Border shapes for icons that have width equal height. 50% for circle, 0% for square*/\n   --borders-icons-wide: 0px; /*Border shapes for icons that have more width than height. 5px for circle, 0px for square*/\n   --borders-labels-large: 0px; /*Border shapes for large text and number indicators. 15px for circle, 0px for square*/\n   --borders-labels-small: 0px; /*Border shapes for small text and number indicators. 10px for circle, 0px for square*/\n   --borders-pills: 0px; /*Border shapes for unread badges and selected server pills. 5px for circle, 0px for square*/\n   --borders-lines: 0px; /*Border shapes for lines when you drag categories or channels. 2px for circle, 0px for square*/\n   --borders-role-outlines: 0px; /*Border shapes for roles outlines. 10px for circle, 0px for square*/\n   --borders-role-dots: 0px; /*Border shapes for roles dots. 10px for circle, 0px for square*/\n   --borders-messages: 0px; /*Border shapes for hovered or highlighted messages. 25px for circle, 0px for square*/\n   --borders-mentions: 0px; /*Border shapes for mentions. 10px for circle, 0px for square*/\n   --borders-reactions: 0px; /*Border shapes for reactions. 10px for circle, 0px for square*/\n   --borders-codes: 0px; /*Border shapes for codes and codeblocks. 10px for circle, 0px for square*/\n   --borders-embeds: 0px; /*Border shapes for embeds. 25px for circle, 0px for square*/\n   --borders-replies: 0px; /*Shape for top left replies border. 15px for circle, 0px for square*/\n   --borders-quotes: 0px; /*Border shapes for quote icon. 2px for circle, 0px for square*/\n   --borders-spoilers: 0px; /*Border shapes for spoilers. 10px for circle, 0px for square*/\n   --borders-tooltips: 0px; /*Border shapes for tooltips. 25px for circle, 0px for square*/\n   --borders-scrollbars: 0px; /*Border shapes for scrollbars. 10px for circle, 0px for square*/\n   --borders-sidebar-and-notices: 0px; /*Shape for top left sidebar and notices border. 25px for circle, 0px for square*/\n   --borders-navigation-highlight: 0px; /*Border shapes for navigation highlight when you press TAB. 25px for circle, 0px for square*/\n   --borders-toasts: 0px; /*Border shapes for toasts. 25px for circle, 0px for square*/\n   --borders-code-editors: 0px; /*Border shapes for code editors workspace. 10px for circle, 0px for square*/\n}\n\n  /*--------------------------*/\n /*-----<Root Variables>-----*/\n/*--------------------------*/\n\n/*You can find root variables here: https://github.com/JayWilson7/BorderShapes/blob/master/Source/base.css */\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("BorderShapes",["",{type:"text-input",text:"Borders Buttons Rounded",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-buttons-rounded",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-buttons-rounded")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Buttons Circle",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-buttons-circle",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-buttons-circle")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Switches",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-switches",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-switches")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Checkboxes",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-checkboxes",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-checkboxes")||"0%";return console.log(e),e}},{type:"text-input",text:"Borders Slider Bars",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-slider-bars",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-slider-bars")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Slider Grabbers",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-slider-grabbers",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-slider-grabbers")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Progress Bars",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-progress-bars",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-progress-bars")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Inputs",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-inputs",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-inputs")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Contexts",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-contexts",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-contexts")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Popouts",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-popouts",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-popouts")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Modals",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-modals",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-modals")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Cards",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-cards",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-cards")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Media",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-media",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-media")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Previews",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-previews",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-previews")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Servers Default",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-servers-default",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-servers-default")||"0%";return console.log(e),e}},{type:"text-input",text:"Borders Servers Interactive",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-servers-interactive",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-servers-interactive")||"0%";return console.log(e),e}},{type:"text-input",text:"Borders Folders",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-folders",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-folders")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Avatars",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-avatars",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-avatars")||"0%";return console.log(e),e}},{type:"text-input",text:"Borders Icons Default",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-icons-default",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-icons-default")||"0%";return console.log(e),e}},{type:"text-input",text:"Borders Icons Wide",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-icons-wide",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-icons-wide")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Labels Large",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-labels-large",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-labels-large")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Labels Small",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-labels-small",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-labels-small")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Pills",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-pills",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-pills")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Lines",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-lines",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-lines")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Role Outlines",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-role-outlines",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-role-outlines")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Role Dots",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-role-dots",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-role-dots")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Messages",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-messages",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-messages")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Mentions",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-mentions",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-mentions")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Reactions",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-reactions",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-reactions")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Codes",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-codes",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-codes")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Embeds",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-embeds",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-embeds")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Replies",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-replies",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-replies")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Quotes",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-quotes",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-quotes")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Spoilers",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-spoilers",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-spoilers")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Tooltips",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-tooltips",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-tooltips")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Scrollbars",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-scrollbars",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-scrollbars")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Sidebar And Notices",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-sidebar-and-notices",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-sidebar-and-notices")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Navigation Highlight",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-navigation-highlight",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-navigation-highlight")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Toasts",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-toasts",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-toasts")||"0px";return console.log(e),e}},{type:"text-input",text:"Borders Code Editors",oninput:function(e){console.log(e),document.body.style.setProperty("--borders-code-editors",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--borders-code-editors")||"0px";return console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.remove();try{goosemodScope.settings.removeItem("BorderShapes")}catch(r){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--borders-buttons-rounded",document.body.style.getPropertyValue("--borders-buttons-rounded")],["--borders-buttons-circle",document.body.style.getPropertyValue("--borders-buttons-circle")],["--borders-switches",document.body.style.getPropertyValue("--borders-switches")],["--borders-checkboxes",document.body.style.getPropertyValue("--borders-checkboxes")],["--borders-slider-bars",document.body.style.getPropertyValue("--borders-slider-bars")],["--borders-slider-grabbers",document.body.style.getPropertyValue("--borders-slider-grabbers")],["--borders-progress-bars",document.body.style.getPropertyValue("--borders-progress-bars")],["--borders-inputs",document.body.style.getPropertyValue("--borders-inputs")],["--borders-contexts",document.body.style.getPropertyValue("--borders-contexts")],["--borders-popouts",document.body.style.getPropertyValue("--borders-popouts")],["--borders-modals",document.body.style.getPropertyValue("--borders-modals")],["--borders-cards",document.body.style.getPropertyValue("--borders-cards")],["--borders-media",document.body.style.getPropertyValue("--borders-media")],["--borders-previews",document.body.style.getPropertyValue("--borders-previews")],["--borders-servers-default",document.body.style.getPropertyValue("--borders-servers-default")],["--borders-servers-interactive",document.body.style.getPropertyValue("--borders-servers-interactive")],["--borders-folders",document.body.style.getPropertyValue("--borders-folders")],["--borders-avatars",document.body.style.getPropertyValue("--borders-avatars")],["--borders-icons-default",document.body.style.getPropertyValue("--borders-icons-default")],["--borders-icons-wide",document.body.style.getPropertyValue("--borders-icons-wide")],["--borders-labels-large",document.body.style.getPropertyValue("--borders-labels-large")],["--borders-labels-small",document.body.style.getPropertyValue("--borders-labels-small")],["--borders-pills",document.body.style.getPropertyValue("--borders-pills")],["--borders-lines",document.body.style.getPropertyValue("--borders-lines")],["--borders-role-outlines",document.body.style.getPropertyValue("--borders-role-outlines")],["--borders-role-dots",document.body.style.getPropertyValue("--borders-role-dots")],["--borders-messages",document.body.style.getPropertyValue("--borders-messages")],["--borders-mentions",document.body.style.getPropertyValue("--borders-mentions")],["--borders-reactions",document.body.style.getPropertyValue("--borders-reactions")],["--borders-codes",document.body.style.getPropertyValue("--borders-codes")],["--borders-embeds",document.body.style.getPropertyValue("--borders-embeds")],["--borders-replies",document.body.style.getPropertyValue("--borders-replies")],["--borders-quotes",document.body.style.getPropertyValue("--borders-quotes")],["--borders-spoilers",document.body.style.getPropertyValue("--borders-spoilers")],["--borders-tooltips",document.body.style.getPropertyValue("--borders-tooltips")],["--borders-scrollbars",document.body.style.getPropertyValue("--borders-scrollbars")],["--borders-sidebar-and-notices",document.body.style.getPropertyValue("--borders-sidebar-and-notices")],["--borders-navigation-highlight",document.body.style.getPropertyValue("--borders-navigation-highlight")],["--borders-toasts",document.body.style.getPropertyValue("--borders-toasts")],["--borders-code-editors",document.body.style.getPropertyValue("--borders-code-editors")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=r(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default