parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r,n,t,a,o,d){try{var c=e[o](d),i=c.value}catch(u){return void n(u)}c.done?r(i):Promise.resolve(i).then(t,a)}function r(r){return function(){var n=this,t=arguments;return new Promise(function(a,o){var d=r.apply(n,t);function c(r){e(d,a,o,c,i,"next",r)}function i(r){e(d,a,o,c,i,"throw",r)}c(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/* source and stuff */\n@import url("https://raw.githack.com/sneexy-boi/CutTheTheme/main/src/source.css");\n\n/* colors */\n:root {\n    --header-primary: #fff;\n    --header-secondary: #b9bbbe;\n    --text-normal: #dcddde;\n    --text-muted: #72767d;\n    --text-link: #00FF37;\n    --channels-default: #8e9297;\n    --interactive-normal: #b9bbbe;\n    --interactive-hover: #dcddde;\n    --interactive-active: #fff;\n    --interactive-muted: #4f545c;\n    --background-primary: #050505;\n    --background-color: #050505;\n    --background-secondary: #050505;\n    --background-tertiary: #050505;\n    --background-accent: #A23448;\n    --background-floating: #050505;\n    --background-modifier-hover: #1a1a1a;\n    --background-modifier-active: #252525;\n    --background-modifier-selected: #363636;\n    --background-modifier-accent: #141414;\n    --message-hover: #1a1a1a;\n    --elevation-low: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05), 0 2px 0 rgba(4, 4, 5, 0.05);\n    --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);\n    --guild-header-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n    --channeltextarea-background: #050505;\n    --activity-card-background: #050505;\n    --deprecated-panel-background: #050505;\n    --deprecated-card-bg: #050505;\n    --deprecated-card-editable-bg: #050505;\n    --deprecated-store-bg: #050505;\n    --deprecated-quickswitcher-input-background: #050505;\n    --deprecated-quickswitcher-input-placeholder: #050505;\n    --deprecated-text-input-bg: rgba(0, 0, 0, 0.1);\n    --deprecated-text-input-border: rgba(0, 0, 0, 0.3);\n    --deprecated-text-input-border-hover: #040405;\n    --deprecated-text-input-border-disabled: #202225;\n    --deprecated-text-input-prefix: #dcddde;\n    --toast-background: var(--background-primary);\n    --toast-header: var(--background-tertiary);\n    --toast-contents: var(--background-secondary);\n    --toast-border: var(--background-tertiary);\n    --toast-box-shadow: rgba(0, 0, 0, .2);\n    --rs-small-spacing: 0px;\n    --rs-large-spacing: 1px;\n    --rs-width: 2px;\n    --rs-avatar-shape: 10%;\n    --rs-online-color: #43b581;\n    --rs-idle-color: #faa61a;\n    --rs-dnd-color: #f04747;\n    --rs-offline-color: #636b75;\n    --rs-streaming-color: #643da7;\n    --rs-invisible-color: #747f8d;\n}'));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default