parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,t,r,o,a,i){try{var p=n[a](i),s=p.value}catch(l){return void t(l)}p.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function p(e){n(i,o,a,p,s,"next",e)}function s(e){n(i,o,a,p,s,"throw",e)}p(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('/*~~~~~~~~~~~~~~~~~~~~~~~~~Windows only optional Discord logo~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n/*  --\x3e Delete this whole line enable the logo on the top of the bottom bar ✂ <--\n.platform-win .wordmarkWindows-1v0lYD{ \n  margin-top: 1170px;\n  margin-left: -4px;\n}\n--\x3e Delete this whole line enable the logo on the top of the bottom bar ✂ <-- */\n\n\n/* --\x3e Delete this whole line enable the logo down below the bottom bar ✂ <--\n.platform-win .wordmarkWindows-1v0lYD{\n  margin-top: 1234px;\n  margin-left: -4px;\n}\n--\x3e Delete this whole line enable the logo down below the bottom bar ✂ <-- */\n\n\n/*~~~~~~~~~~Optional, change powercord music background to match bottom bar~~~~~~~~~~~*/ \n\n/* --\x3e Delete this whole line enable ✂ <--\n.powercord-spotify { \n background-color: var(--background-tertiary);\n}\n--\x3e Delete this whole line enable ✂ <-- */ \n\n\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Optional Burple Theming~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n/* --\x3e Delete this whole line enable ✂ <--\n.statusWithPopout-3ZfFol, .theme-dark .secured-1Yihly, .isEnabled-24g9qA{color: #7289DA !important;\n}\n.container-3auIfb, .uid_34136, .colorGreen-29iAKY{background-color: #7289DA !important;\n} \n--\x3e Delete this whole line enable ✂ <-- */\n\n\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Optional Message bubbles~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n/* --\x3e Delete this whole line enable ✂ <--\n.message-2qnXI6 {\n background-color: rgba(0,0,0,0.1);\n border-radius: 10px;\n margin-left: 10px;\n margin-right: 10px;\n\n}\n.message-2qnXI6:hover {\n background-color: rgba(0,0,0,0.0);\n}\n.message-2qnXI6:not(.groupStart-23k01U) {\n clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 1px 4px, 2px 5px, 3px 6px, 4px 7px, 8px 8px, calc(100% - 8px) 8px, calc(100% - 4px) 7px, calc(100% - 3px) 6px, calc(100% - 2px) 5px, calc(100% - 1px) 4px);\n border-radius: 0 0 8px 8px;\n margin-top: -8px;\n\n}\n.contents-2mQqc9 {\n margin-top: 8px;\n\n}\n.message-2qnXI6:not(.groupStart-23k01U) .buttonContainer-DHceWr {\n margin-top: 30px;\n\n}\n--\x3e Delete this whole line enable ✂ <-- */\n\n /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Optional Profile Modal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n /* --\x3e Delete this whole line enable ✂ <--\n.headerPlaying-j0WQBV, .topSectionPlaying-1J5E4n {\n  z-index: 1;\n  background-image: url(https://cdn.naila.bot/Discord/playing-background.svg),linear-gradient(to top right,#60adff,#4453fc);\n}\n\n\n.headerSpotify-zpWxgT, .topSectionSpotify-1lI0-P {\n  z-index: 1;\n  background-image: url(https://cdn.naila.bot/Discord/playing-background.svg),linear-gradient(to top right,#1db954,#44fc9d);\n}\n--\x3e Delete this whole line enable ✂ <-- */\n\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Blurple Additions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n.iconBadge-2wi9r4.iconBadge-2NuvG9.base-PmTxvP, /* Audio from server icon */\n.numberBadge-2s8kKX, /* Noti amount */\n.iconBadge-qZ4Ksk /* Pin mark */\n  {\n  background-color: #7289DA !important;\n  }\n  \n.icon-3BcwQu.iconServer-3Z_nSE, /* Deafened in VC */\n.circleIconButton-jET_ig, /* Server discovery, create/join */\n.strikethrough-1n4ekb, /* Strikethrough on mute, deafen */\n.attachButtonPlay-3iJ0mf,\n.strikethrough-3Wiitd /* Blurple attach icon */ \n  {\ncolor: #7289DA;\n  }\n  \n.circleIconButton-jET_ig:hover, .circleIconButton-jET_ig.selected-ugP_am { /* Add hovers for \'create a new server\', discovery */\n  background-color: #7289DA;\n  color:#7289DA;\n  }\n  \n.item-2hkk8m { /* Server pills */\n  background-color:#7289DA !important;\n  }\n\n.fas, .fa-backward, .fa-fw, .fa-heart:before, .fa-sync:before, .fa-undo:before { /*Spotify controls WIP*/\n  color: #7289DA ;\n  }\n\n.spotify-seek-bar-progress { /*Spotify progress bar color*/\n  background-color: #7289DA !important;\n  }\n\n.circleButtonMask-2VNJsN { /* Personal fix for horizontal bar */ \n  margin-left: -6.5px\n  }\n \n.membersGroup-v9BXpm { /* Personal CSS fix for shrinking member list*/\n  height: 40px;\n  margin-top: -17px;\n  }\n \n.unread-2lAfLh { /* Blurple channel unread marker */\n  background-color: #7289da;\n  width: 2.5px;\n  height: 27px;\n  margin-top: -15px;\n  border-radius: 0px 4px 4px 0;\n }\n\n.warningIcon-3rQ5yJ { /* Blurple warning icon for vc */\n  color: #7289DA !important;\n}\n\n /*~~~~~~Bottombar matching CSS~~~~~*/\n\n.notice-3bPHh-, .colorDefault-22HBa0{ /* Voice disconnected popup theming */\n  background-color: rgba(114,137,2181);\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  border-radius: 10px;\n}\n\n.toolbar-1t6TWx { /* Add a border around the toolbar*/\n  background-color: var(--background-secondary);\n  border-radius: 25px;\n  padding: 5px;\n}\n\n.searchBar-3dMhjb { /* Rounds tiny search bar */\n  border-radius: 25px;\n  padding-left: 5px;\n  padding-right: 7px;\n  padding-bottom: 2px;\n}\n\n.jumpToPresentBar-G1R9s6 { /* Blurred Grey Jump to Present Bar */\n  background-color: rgba(0,0,0,0.2);\n  backdrop-filter: blur(5px);\n  margin-right: 20px;\n  border-radius: 10px;\n}\n\n.newMessagesBar-265mhP { /* Blurred Grey New Messsages Bar */\n  background-color: rgba(0,0,0,0.2);\n  border-radius: 10px;\n  backdrop-filter: blur(5px);\n  margin-top: 5px;\n  margin-right: 20px;\n}\n\n.container-1r6BKw.themed-ANHk51{ /* Thank you Luckfire for helping my dumbass fix this.*/\n  border-radius: 0px 15px 0px 0px;\n  border-spacing: 15px;\n  margin-left: -54px;\n  padding-left: 50px;\n  border-right-style: none;\n  border-right-color: #202225;\n  position: relative;\n  z-index: 0;\n}\n    \n.container-1r6BKw.themed-ANHk51 .children-19S4PO{\n  padding-left: 8px;\n}\n        \n.tutorialContainer-SGrQ1h{ /* Fix server add button */ \n  margin-top: -5px;\n  position: relative !important;\n  display: flex;\n  background: rgba(0,0,0,0.0) !important;\t\n}\n\n.members-1998pB, .members-1998pB>div { /*Spacing for user list*/\n  margin-top: 5px\n}\n.membersWrap-2h-GB4 { /*Curves for user list*/\n  border-radius: 0px 0px 0px 0px;\n}\n\n.addMembersButton-1eG9YC{ /*Fixes new useradd button*/\n  margin-left: -7px;\n}\n\n.container-3baos1{ /*Adds 5px of space on the bottom right to match the left*/\n  padding-left: 15px;\n}\n\n.usernameContainer-1fp4nu{ /* Fixes username container cutoff */\n  width: 90px;\n}\n\n .wrapper-1Rf91z::after { /* Add a Server tab background hider */\n  display:none;\n}\n\n.membersWrap-2h-GB4{ /* Move userlist to higher*/\n  margin-top: -53px !important;\n\tposition: relative;\n}\n\n.content-yTz4x3::before{\n  display: none;\n}\n\n/* Fix picture in picture */\n/* .pictureInPicture-3VocJq{\n  z-index: 3001;} */\n\n /* Bottom bar tweaked */\n .form-2fGMdU {\n  z-index: 1;\n  width: calc(100vw - 275px);\n}\n\n/* Powerclock Support https://github.com/BenSegal855/powerclock \n.powerclock {\n  transform: rotate(90deg);\n  padding: 15px;} \n  */\n\n/*Move the Windows window controls (Thank you to Doggybootsy#1333 for making this CSS)~~~~~*/\n\n.platform-win .typeWindows-1za-n7{\n  position: fixed;\n  right: 0px;\n  height:100px;\n  background:var(--secondary-background-alt) !important; margin:0px;\n}\n\n.platform-win .winButton-iRh8-Z{\n  top:71px;\n  right:65px;\n  margin:2px;\n}\n\n.platform-win .typeWindows-1za-n7 {\n  margin:0px !important\n}\n\n.platform-win .toolbar-1t6TWx { \n  padding-right: 95px;\n}\n\n/*~~~~~~~MODIFY macOS TITLE BAR FOR HORIZONTAL SERVER LIST (Hacky implementation)~~~~~*/\n\n.platform-osx .app-1q1i1E {\n  margin-top: -31px;\n/*margin-left: 5px;*/\n}\n\n.platform-osx .wrapper-1Rf91z {\n margin-left: 20px;\n}\n\n.platform-osx .macButtons-2MuSAC{\n  margin-left: -22px;\n  margin-top: 14px;\n transform: rotate(90deg);  \n}\n\nhtml.platform-osx #app-mount .base-3dtUhz {\n  top: calc(var(--server-container) + 32px) !important;\n}\n\n.platform-osx .wrapper-1Rf91z, .guilds-1SWlCJ{\n z-index: 3001;\n}\n\n/*~~~~~~~~~~~~~~~~~~~CSS SNIPPETS BY OTHER USERS THAT I\'VE MODIFIED~~~~~~~~~~~~~~~~~~~*/\n \n/*~~~~~~~~~~~*/\n /* Cool Member List */\n :root {\n  --hover-animation-speed: 0.48s;\n  --seperator-color: var(--background-accent);\n}\n\n.membersWrap-2h-GB4 {\n  min-width: unset;\n  width: 65px;\n  justify-content: right;\n}\n\n.membersWrap-2h-GB4 {\n  min-width: unset;\n  width: 65px;\n  justify-content: right;\n}\n\n.members-1998pB {\n  transition: transform var(--hover-animation-speed);\n}\n\n.platform-win  .members-1998pB {\n  transition: transform var(--hover-animation-speed);\n         padding-top: 25px;  \n}\n\n.membersWrap-2h-GB4:hover .members-1998pB {\n \n  transform: translateX(-190px);\n}\n\n.membersWrap-2h-GB4 .membersGroup-v9BXpm::after {\n  content: \'\';\n  width: 30px;\n  height: 2px;\n  border-radius: 0px;\n  background: unset;\n  background-color: var(--seperator-color);\n  position: absolute;\n  left: -36px;\n  top: 29px;\n  margin-left: 0px;\n}\n\n.membersWrap-2h-GB4 .members-1998pB .member-3-YXUe {\n  background-color: unset;\n  margin-left: 0px;\n  transition: margin-left var(--hover-animation-speed);\n}\n\n.membersWrap-2h-GB4:hover .members-1998pB .member-3-YXUe {\n  margin-left: 8px;\n}\n\n.membersWrap-2h-GB4:hover .membersGroup-v9BXpm {\n  transform: translateX(-5px);\n}\n\n.membersWrap-2h-GB4 .membersGroup-v9BXpm {\n  cursor: default;\n  transform: translateX(45px);\n  transition: transform var(--hover-animation-speed);\n  overflow: visible;\n}\n\n.members-1998pB {\nborder-radius: 15px 0px 0px 0px !important;\nborder-left: 10px;\n}\n\n.membersWrap-2h-GB4, .members-1998pB {\nleft: 6px;\nmargin-right: -5px\n}\n\n.chat-3bRxxu {\nbackground: var(--background-tertiary);\n}\n\n.chatContent-a9vAAp {\nbackground-color: var(--background-primary);\nleft: 6px;\nmargin-left: -6px\n}\n\n.toolbar-1t6TWx {\nbackground-color: var(--background-secondary);\nborder-radius: 25px;\npadding: 5px;\n}\n\n/*~~~~~~~~~~~*/\n .connectedAccount-36nQx7 {\n     display:flex;\n     flex-wrap:wrap;\n     height:auto;\n }\n \n .connectedAccount-36nQx7 .connectedAccountIcon-3P3V6F {\n     width:24px;\n     height:24px;\n }\n .connectedAccount-36nQx7 .anchor-3Z-8Bb {\n     width:100%;\n     display:block;\n     position:relative;\n     overflow:hidden;\n     text-overflow:ellipsis;\n     line-height:normal;\n }\n .connectedAccount-36nQx7 .anchor-3Z-8Bb svg {\n     display:none;\n }\n \n .connectedAccount-36nQx7 .anchor-3Z-8Bb:after {\n     content:attr(href);\n     width:100%;\n     white-space:nowrap;\n }\n \n/*~~~~~~~~~~~*/\n /* Compact Status Menu */\n \n .status-1fhblQ, .description-2L932D {\n     display: none;\n }\n .separator-2I32lJ {\n     display: none;\n }\n .mask-1qbNWk.icon-1IxfJ2 {\n     --status-icon-size: 75%;\n     height: var(--status-icon-size); \n     width: var(--status-icon-size);\n     margin-left: 33%;\n }\n .animatorTop-2Y7x2r.scale-3iLZhb.didRender-33z1u8 > .menu-3sdvDG.styleFixed-sX-yHV > .scroller-3BxosC.thin-1ybCId.scrollerBase-289Jih {\n     display: grid;\n     align-items: center;\n     grid-template-columns: auto auto auto auto;\n     visibility: visible;\n }\n .item-1tOPte.colorDefault-2K3EoJ:nth-of-type(7) {\n     grid-column: 1/5;\n }\n .animatorTop-2Y7x2r.scale-3iLZhb.didRender-33z1u8 {\n     transition: opacity 0.15s linear 0s;\n }\n .customText-tY5LJn {\n     font-size: 15px;\n }\n\n/*~~~~~~~~~~~*/\n [aria-label="Online"]::after {\n    content: \'ONLINE\';\n    font-weight: bold;\n    padding-left: 5px;\n    color: #43B581\n }\n [aria-label="Do Not Disturb"]::after {\n    content: \'DO NOT DISTURB\';\n    font-weight: bold;\n    padding-left: 5px;\n    color: #F04747\n }\n [aria-label="Idle"]::after {\n    content: \'IDLE\';\n    font-weight: bold;\n    padding-left: 5px;\n    color: #FFB740\n }\n [aria-label="Offline"]::after {\n    content: \'OFFLINE/INVISIBLE\';\n    font-weight: bold;\n    padding-left: 5px;\n    color: #747F8D\n }\n\n/*~~~~~~~~~~~*/\n .sidebar-2K8pFh, .chat-3bRxxu, .container-3Mxszk, .container-1D34oG, .applicationStore-1pNvnv {\n    border-radius: 15px 15px 0 0 !important\n }\n \n .chat-3bRxxu, .container-1D34oG, .container-3Mxszk, .applicationStore-1pNvnv {\n    position: relative;\n    left: 5px;\n    padding-right: 5px\n }\n \n/*~~~~~~~~~~~*/\n .mention-1f5kbO{ /* Remove red unread indicator */\n     display:none;\n }\n\n/*~~~~~~~~~~~*/\n .unread-1xRYoj{ /* Remove red unread indicator */\n   display: none;\n }\n \n/*~~~~~~~~~~~*/\n .buttons-3JBrkn [aria-label="Send a gift"] { /* Fuck the gift button */\n   display: none;  \n }\n\n/*~~~~~~~~~~~*/\n div[aria-label="Explore Public Servers"]{ /* Hide public servers button */\n   display: none; \n } \n\n/*~~~~~~~~~~~*/\n .px-10SIf7.botTag-2WPJ74 {\n     height: 15px;\n     padding: 0 4px;\n     margin-top: 1px;\n     padding-right: 0px;\n     border-radius: 3px;\n }\n \n span.botText-1526X_::before {\n     font-family: "Font Awesome 5 Pro" !important;\n     content: "\\f544";\n     font-weight: 900;\n     visibility: visible;\n     position: absolute;\n     top: 0;\n     left: 0;\n }\n \n span.botText-1526X_ {\n     visibility: hidden;\n     position: relative;\n }\n\n/*~~~~~~~~~~~*/\n img[src="/assets/9a43e631d506ae4818ecefc825dc02ad.svg"],\n img[src="/assets/13c8662cff8e029799a35878b56e23eb.svg"] { \n   filter: invert(1); \n }\n\n/*~~~~~~~~~~~*/\n .sidebarRegion-VFTUkN {\n   flex-grow: 0;\n }\n \n .contentColumnDefault-1VQkGM {\n   max-width: calc(85% - 15px);\n }\n/*~~~~~~~~~~~*/\n [class|=toolbar] a {/*Help Button*/\n   display: none;\n }\n\n/*~~~~~~~~~~~*/\n .clearStatusIcon-3-MDNF,\n .scrollerBase-289Jih > [id*="status-picker-"] + .separator-2I32lJ,\n .statusItem-33LqPf > .status-1fhblQ,\n .statusItem-33LqPf > .description-2L932D,\n .statusItem-33LqPf > .separator-2I32lJ,\n .statusItem-33LqPf > .customText-tY5LJn,\n .statusItem-33LqPf > .clearStatusIcon-3-MDNF,\n .tutorialContainer-SGrQ1h + div {\n     display: none;\n }\n\n/*~~~~~~~~~~~*/\n/* Makes roles look like how they do on mobile - Thanks LuckFire for the CSS*/\n.role-2irmRk {\n background-color: var(--background-tertiary);\n border-radius: 4px;\n border: none;\n padding: 0 5px 0 8px;\n height: 25px;\n}\n.role-2irmRk.actionButton-VzECiy {\n background-color: var(--background-tertiary);\n padding-left: 7px;\n padding-right: 7px;\n}\n.role-2irmRk .roleCircle-3xAZ1j {\n margin-right: 6px;\n width: 9px;\n height: 9px;\n}\n\n/*~~~~~~~~~~~*/\n/* Rounded context menu (Courtesy of wathhr#1459) */\n\n.item-1tOPte, .menu-3sdvDG.styleFlexible-wGDiIL { border-radius: 15px; }\n.submenu-2-ysNh.menu-3sdvDG { border-radius: 15px; }\n.colorDefault-2K3EoJ { border-radius: 15px; }\n\n/*~~~~~~~~~~~*/\n/* Cleaner Search Tab - Courtesy of Doggybootsy#1333 */\n.search-36MZv- {order: 1;}\n.searchBar-3dMhjb {\n    width: 28px;\n    transition: 0.6s ease-in-out;\n    color:#fff;\n    background: none;\n}\n.focused-31_ccS .searchBar-3dMhjb,\n.open-6_Y_aH .searchBar-3dMhjb,\n.searchBar-3dMhjb:hover {\n    width: 240px;\n    background: var(--background-tertiary);\n}\n.icon-3cZ1F_{height: 24px;width: 24px;color:var(--interactive-normal);}\n.iconContainer-O4O2CN{bottom: 3px;}\n.search-36MZv-{margin-left: 0px;}\n\n/*~~~~~~~~~~~*/\n/* Seach header curve */\n\n/*.searchHeader-2XoQg7, section.searchResultsWrap-3-pOjs {\n  border-radius: 15px 0px 0px 0px;\n}*/')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Semi-Stock Discord",["",{type:"text-input",text:"Hover Animation Speed",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--hover-animation-speed",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--hover-animation-speed")||"0.48s";return console.log(n),n}},{type:"text-input",text:"Status Icon Size",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--status-icon-size",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--status-icon-size")||"75%";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();try{goosemodScope.settings.removeItem("Semi-Stock Discord")}catch(e){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--hover-animation-speed",document.body.style.getPropertyValue("--hover-animation-speed")],["--status-icon-size",document.body.style.getPropertyValue("--status-icon-size")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=e(regeneratorRuntime.mark(function n(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default