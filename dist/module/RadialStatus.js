parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,s,a){try{var i=t[s](a),l=i.value}catch(u){return void o(u)}i.done?e(l):Promise.resolve(l).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,s){var a=e.apply(o,n);function i(e){t(a,r,s,i,l,"next",e)}function l(e){t(a,r,s,i,l,"throw",e)}i(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name RadialStatus\n * @author Gibbu#1211\n * @version 1.0.0\n * @description Changes the status icons to wrap around the avatar. Shape can be changed inside the theme file.\n * @source https://github.com/DiscordStyles/RadialStatus\n * @website https://www.gibbu.me\n*/\n\n@import url("https://discordstyles.github.io/RadialStatus/base.css");\n\n:root {\n  --rs-small-spacing: 2px;  /* Spacing between avatar and status | MUST end in px */\n  --rs-large-spacing: 3px;  /* Spacing between avatar and status for user popouts & modals/profiles | MUST end in px */\n  --rs-width: 2px;  /* Width/thickness of status border */\n  --rs-avatar-shape: 50%;  /* 50% for round - 0% for square */\n  --rs-online-color: #43b581;  /* Colour for online status */\n  --rs-idle-color: #faa61a;  /* Colour for idle status */\n  --rs-dnd-color: #f04747;  /* Colour for dnd status */\n  --rs-offline-color: #636b75;  /* Colour for offline status */\n  --rs-streaming-color: #643da7;  /* Colour for streaming status */\n  --rs-invisible-color: #747f8d;  /* Colour for invisible status - Note: this will only show for your own invisibility */\n  --rs-phone-visible: block; /* Visibility of the phone icon next to a users avatar. | block = visible | none = hidden */\n  --rs-phone-color: var(--rs-online-color); /* Colour of the ring and phone icon when a user is on their phone |  */\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("RadialStatus",["",{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Width",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"50%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){console.log(t),document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("RadialStatus")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-width",document.body.style.getPropertyValue("--rs-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default