parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,t,o,r,a,c){try{var d=n[a](c),i=d.value}catch(u){return void t(u)}d.done?e(i):Promise.resolve(i).then(o,r)}function e(e){return function(){var t=this,o=arguments;return new Promise(function(r,a){var c=e.apply(t,o);function d(e){n(c,r,a,d,i,"next",e)}function i(e){n(c,r,a,d,i,"throw",e)}d(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('@import url("https://luckfire.github.io/theme-source/src/css-compile/ThemeSource-Compiled.css");\n@import url("https://raw.githack.com/Snapperito/Settings-Icons/main/source.css");\n@import url("https://nyri4.github.io/Discolored/main.css");\n@import url("https://discord-custom-covers.github.io/usrbg/dist/usrbg.css");\n@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");\n:root {\n  /* --------- BASE THEME --------- */\n  --blurple-replace: #7289DA;\n  --background-primary: rgb(8, 8, 8);\n  --background-secondary: rgb(5, 5, 5);\n  --background-secondary-alt: rgb(15, 15, 15);\n  --background-tertiary: black;\n  --background-accent: rgb(15, 15, 15);\n  --background-floating: black;\n  --userarea-background: var(--background-tertiary);\n  --header-primary: #fff;\n  --header-secondary: #b9bbbe;\n  --elevation-low: 0 1px 0 rgba(40, 40, 50, 0.2), 0 1.5px 0 rgba(60, 60, 70, 0.05), 0 2px 0 rgba(40, 40, 50, 0.05);\n  --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);\n  --channels-default: #969696;\n  --channeltextarea-background: rgb(25, 25, 25);\n  --guild-header-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  --activity-card-background: #0f0f0f;\n  --interactive-normal: #b9bbbe;\n  --interactive-hover: #dcddde;\n  --interactive-active: #fff;\n  --interactive-muted: rgb(75, 75, 75);\n  --background-modifier-hover: rgba(50, 50, 50, 0.16);\n  --background-modifier-active: rgba(50, 50, 50, 0.24);\n  --background-modifier-selected: rgba(50, 50, 50, 0.32);\n  --background-modifier-accent: hsla(0, 0%, 100%, 0.06);\n  --text-link: #00b0f4;\n  --text-normal: #dcddde;\n  --text-muted: #969696;\n  --deprecated-panel-background: #292b2f;\n  --deprecated-card-bg: rgba(32, 34, 37, 0.6);\n  --deprecated-card-editable-bg: rgba(32, 34, 37, 0.3);\n  --deprecated-store-bg: #36393f;\n  --deprecated-quickswitcher-input-background: #72767d;\n  --deprecated-quickswitcher-input-placeholder: hsla(0, 0%, 100%, 0.3);\n  --deprecated-text-input-bg: rgba(0, 0, 0, 0.1);\n  --deprecated-text-input-border: rgba(0, 0, 0, 0.3);\n  --deprecated-text-input-border-hover: #040405;\n  --deprecated-text-input-border-disabled: #202225;\n  --deprecated-text-input-prefix: #dcddde;\n  --background-accent-1: rgb(15, 15, 15, 0.1);\n  --background-accent-3: rgb(15, 15, 15, 0.3);\n  --background-floating-2: rgba(0, 0, 0, 0.2);\n}\n\n#app-mount .scrollerBase-289Jih.disableScrollAnchor-3V9UtP::-webkit-scrollbar-thumb, #app-mount .scrollerBase-289Jih.auto-Ge5KZx::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n#app-mount .scrollerBase-289Jih.disableScrollAnchor-3V9UtP::-webkit-scrollbar-track, #app-mount .scrollerBase-289Jih.auto-Ge5KZx::-webkit-scrollbar-track {\n  background-color: var(--background-modifier-accent);\n}\n#app-mount .scrollerBase-289Jih.thin-1ybCId::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n#app-mount .rolesList-22qj2L::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n#app-mount .spoilerText-3p6IlD {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n/* Colored User Connections */\n.connectedAccount-36nQx7 {\n  background-color: transparent;\n  border: none;\n}\n.connectedAccount-36nQx7 .connectedAccountNameInner-1phBvE::after {\n  content: "";\n  position: absolute;\n  border-radius: 2px;\n  border: solid 1px transparent;\n  margin-left: -40px;\n  height: 46px;\n  width: 260px;\n}\n.connectedAccount-36nQx7 .connectedAccountVerifiedIcon-3aZz_K .flowerStar-1GeTsn path {\n  fill: rgba(255, 255, 255, 0.25);\n}\n.connectedAccount-36nQx7 .connectedAccountVerifiedIcon-3aZz_K .childContainer-1wxZNh {\n  margin-top: 1px;\n}\n.connectedAccount-36nQx7 .connectedAccountIcon-3P3V6F,\n.connectedAccount-36nQx7 .connectedAccountName-f8AEe2,\n.connectedAccount-36nQx7 .connectedAccountNameInner-1phBvE span,\n.connectedAccount-36nQx7 .connectedAccountNameInner-1phBvE + .anchor-3Z-8Bb {\n  z-index: 1;\n}\n.connectedAccount-36nQx7 .connectedAccountIcon-3P3V6F {\n  margin-left: 2px;\n}\n\n[alt="GitHub Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #181b1f;\n  border-color: #d9dadb;\n}\n\n[alt="Twitch Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #3A2E5E;\n  border-color: #563194;\n}\n\n[alt="Steam Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #171a21;\n  border-color: #2a475e;\n}\n\n[alt="Spotify Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #2C523E;\n  border-color: #1ED760;\n}\n\n[alt="Twitter Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #266994;\n  border-color: #1DA1F2;\n}\n\n[alt="Reddit Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #7D442A;\n  border-color: #FF6314;\n}\n\n[alt="YouTube Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #772528;\n  border-color: #EE0F0F;\n}\n\n[alt="Battle.net Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #264659;\n  border-color: #009AE4;\n}\n\n[alt="Xbox Live Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #394E31;\n  border-color: #5DC21E;\n}\n\n[alt="Facebook Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #14223d;\n  border-color: #3A5998;\n}\n\n[alt="League of Legends Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #424491;\n  border-color: #676AE6;\n}\n\n[alt="Skype Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #106d8f;\n  border-color: #00AAE8;\n}\n\n[alt="GitLab Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #6E4330;\n  border-color: #FC6D26;\n}\n\n[alt="Minecraft Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #693037;\n  border-color: #EE303D;\n}\n\n[alt="osu! Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #5F3E51;\n  border-color: #EE65A2;\n}\n\n[alt="discord.bio Logo"] + .connectedAccountNameInner-1phBvE::after {\n  background: #3d4870;\n  border-color: #7289da;\n}\n\n/* USRBG Support */\n.userPopout-3XzG_A .header-2BwW8b {\n  transform: translateZ(0);\n}\n.userPopout-3XzG_A .wrapper-3t9DeA::after {\n  content: "";\n  position: fixed;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  pointer-events: none;\n  opacity: 0.5;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: var(--user-popout-position) center;\n  background-image: var(--user-background);\n}\n\n.root-SR8cQa > div:not(.body-3ND3kc) {\n  transform: translateZ(0);\n}\n.root-SR8cQa > div:not(.body-3ND3kc) .header-QKLPzZ .wrapper-3t9DeA::after {\n  content: "";\n  position: fixed;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  z-index: 0 !important;\n  pointer-events: none;\n  background: var(--user-background) center/cover no-repeat;\n}\n.root-SR8cQa > div:not(.body-3ND3kc) .header-QKLPzZ .wrapper-3t9DeA svg {\n  z-index: 1;\n  position: relative;\n}\n.root-SR8cQa > div:not(.body-3ND3kc) .headerInfo-30uryT, .root-SR8cQa > div:not(.body-3ND3kc) .tabBarItem-1b8RUP, .root-SR8cQa > div:not(.body-3ND3kc) .activity-1ythUs {\n  z-index: 1;\n  position: relative;\n}\n\n/* Color Filled Roles */\n#app-mount .role-2irmRk {\n  position: relative;\n  overflow: hidden;\n  border: 0;\n  z-index: 0;\n  padding: 5px;\n}\n#app-mount .role-2irmRk .roleCircle-3xAZ1j::after {\n  content: "";\n  position: absolute;\n  background: inherit;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  opacity: 0.25;\n}\n#app-mount .role-2irmRk.addButton-pcyyf6 {\n  background-color: rgba(125, 125, 125, 0.25);\n}\n\n/* Light Theme Warning */\nhtml.theme-light #app-mount::after {\n  content: "You need to have dark theme enabled for this theme to work properly. To enable it, go into Settings -> Appearance";\n  background: var(--background-tertiary);\n  /* Container color */\n  position: fixed;\n  z-index: 5;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  max-width: 225px;\n  line-height: normal;\n  padding: 15px 0 15px 60px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-left: 2px solid #F04747;\n  border-radius: 2px;\n  color: rgba(255, 255, 255, 0.65);\n  /* Text Color */\n  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-size: 35px;\n  background-position: 10px center;\n}\n\n/* AMOLED-Cord Watermark */\n.titleBar-AC4pGV.typeWindows-1za-n7::after {\n  content: "";\n  position: absolute;\n  pointer-events: none;\n  background: url(\'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path></svg>\') center/100% no-repeat;\n  width: 16px;\n  height: 16px;\n  left: 5px;\n  top: 3px;\n}\n.titleBar-AC4pGV .wordmark-2iDDfm svg {\n  width: 0;\n}\n.titleBar-AC4pGV .wordmark-2iDDfm::after {\n  content: "AMOLED-Cord";\n  position: absolute;\n  font-family: "Fredoka One";\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 13px;\n  font-weight: 550;\n  top: 5px;\n  left: 25px;\n  width: 135px;\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("AMOLED-Cord",["",{type:"text-and-color",text:"Blurple Replace",oninput:function(n){document.body.style.setProperty("--blurple-replace",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--blurple-replace")||"#7289DA";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Deprecated Panel Background",oninput:function(n){document.body.style.setProperty("--deprecated-panel-background",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--deprecated-panel-background")||"#292b2f";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Accent 1",oninput:function(n){document.body.style.setProperty("--background-accent-1",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-accent-1")||"rgb(15, 15, 15, 0.1)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Accent 3",oninput:function(n){document.body.style.setProperty("--background-accent-3",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-accent-3")||"rgb(15, 15, 15, 0.3)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Floating 2",oninput:function(n){document.body.style.setProperty("--background-floating-2",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-floating-2")||"rgba(0, 0, 0, 0.2)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();try{goosemodScope.settings.removeItem("AMOLED-Cord")}catch(e){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--blurple-replace",document.body.style.getPropertyValue("--blurple-replace")],["--deprecated-panel-background",document.body.style.getPropertyValue("--deprecated-panel-background")],["--background-accent-1",document.body.style.getPropertyValue("--background-accent-1")],["--background-accent-3",document.body.style.getPropertyValue("--background-accent-3")],["--background-floating-2",document.body.style.getPropertyValue("--background-floating-2")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=e(regeneratorRuntime.mark(function n(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default