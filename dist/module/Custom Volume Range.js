parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/global/commands.js":[function(require,module,exports) {
"use strict";function e(e,n){return a(e)||o(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return t}}function a(e){if(Array.isArray(e))return e}function i(e,r,t,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void t(c)}s.done?r(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterCommand=exports.registerCommand=void 0;var u=goosemodScope.webpackModules.findByProps("sendMessage","receiveMessage").sendMessage,c=goosemodScope.webpackModules.findByProps("getChannelId").getChannelId,d=function(r){var t=r.command,n=(r.alias,r.description),o=(r.usage,r.executor);goosemodScope.patcher.commands.add(t,n,function(){var r=s(regeneratorRuntime.mark(function r(t){var n,a,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e(t.args,1),a=n[0].text,r.next=3,o(a.split(" "));case 3:if((i=r.sent).send){r.next=7;break}return goosemodScope.patcher.internalMessage(i.result),r.abrupt("return");case 7:u(c(),{content:i.result,tts:!1,invalidEmojis:[],validNonShortcutEmojis:[]});case 8:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),[{type:3,required:!1,name:"args",description:"Arguments for PC command"}])};exports.registerCommand=d;var m=function(e){goosemodScope.patcher.commands.remove(e)};exports.unregisterCommand=m;
},{}],"../../../moduleWrappers/powercord/global/notices.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendToast=void 0;var e=function(e,o){o.header;var t=o.content;o.type,o.buttons;goosemodScope.showToast(t)};exports.sendToast=e;
},{}],"../../../moduleWrappers/powercord/util/settings.js":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeStore=exports.settingStores=void 0;var n={};exports.settingStores=n;var r=function(t){n[t]=new o};exports.makeStore=r;var o=function n(){var r=this;t(this,n),e(this,"getSetting",function(t,e){var n;return null!==(n=r.store[t])&&void 0!==n?n:e}),e(this,"updateSetting",function(t,e){if(void 0===e)return r.toggleSetting(t);r.store[t]=e}),e(this,"toggleSetting",function(t){r.store[t]=!r.store[t]}),e(this,"deleteSetting",function(t){delete r.store[t]}),e(this,"getKeys",function(){return Object.keys(r.store)}),this.store={}};
},{}],"../../../moduleWrappers/powercord/global/settings.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterSettings=exports.registerSettings=void 0;var e=r(require("../util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var n=r.label,i=r.render,c=r.category,u=goosemodScope.webpackModules.common.React,p=goosemodScope.webpackModules.findByDisplayName("SettingsView"),s=goosemodScope.webpackModules.findByDisplayName("FormTitle"),a=goosemodScope.webpackModules.findByDisplayName("FormSection");goosemodScope.patcher.inject(t,p.prototype,"getPredicateSections",function(t,r){var p=r.find(function(e){return"logout"===e.section});if(!p)return r;var f="function"==typeof n?n():n;return r.splice(r.indexOf(p)-1,0,{section:f,label:f,predicate:function(){},element:function(){return u.createElement(a,{},u.createElement(s,{tag:"h2"},f),i(o({},e.settingStores[c])))}}),r})};exports.registerSettings=c;var u=function(e){goosemodScope.patcher.uninject(e)};exports.unregisterSettings=u;
},{"../util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/global/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./commands.js")),t=o(require("./notices.js")),r=o(require("./settings.js"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}var i={api:{commands:e,notices:t,settings:r}};exports.default=i;
},{"./commands.js":"../../../moduleWrappers/powercord/global/commands.js","./notices.js":"../../../moduleWrappers/powercord/global/notices.js","./settings.js":"../../../moduleWrappers/powercord/global/settings.js"}],"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plugin=void 0;var e=n(require("./util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var u=function(){function t(){r(this,t),this.stylesheets=[]}return i(t,[{key:"loadStylesheet",value:function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.stylesheets.push(t)}},{key:"delayedConstructor",value:function(){this.delayedConstructed||(this.delayedConstructed=!0,e.makeStore(this.entityID))}},{key:"entityID",get:function(){return this.name}},{key:"settings",get:function(){var t=e.settingStores[this.entityID];return{get:t.getSetting,set:t.setSetting,delete:t.deleteSetting,getKeys:t.getKeys,connectStore:function(){}}}},{key:"goosemodHandlers",get:function(){var e=this;return{onImport:function(){e.delayedConstructor(),e.startPlugin.bind(e)()},onRemove:function(){e.stylesheets.forEach(function(e){return e.remove()}),e.pluginWillUnload.bind(e)()}}}}]),t}();exports.Plugin=u;
},{"./util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/injector.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
function e(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var t=function(e){if(Array.isArray(e)){var r=e;e=function(e){return r.every(function(r){return e[r]||e.__proto__&&e.__proto__[r]})}}return e};module.exports=r({getModule:function(e,r,o){e=t(e);var n=goosemodScope.webpackModules.find(e);return r?new Promise(function(e){return e(n)}):n},getAllModules:function(e){return e=t(e),goosemodScope.webpackModules.findAll(e)},getModuleByDisplayName:function(e){return goosemodScope.webpackModules.findByDisplayName(e)}},goosemodScope.webpackModules.common);
},{}],"../../../moduleWrappers/powercord/components/settings/divider.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=a();return function(){var o,r=l(e);if(t){var n=l(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return i(this,o)}}function i(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?f(t):o}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=goosemodScope.webpackModules.common.React,s=goosemodScope.webpackModules.findByDisplayName("FormDivider"),y=goosemodScope.webpackModules.findByProps("dividerDefault","titleDefault"),b=function(e){n(u,p.PureComponent);var o=c(u);function u(){return t(this,u),o.apply(this,arguments)}return r(u,[{key:"render",value:function(){return p.createElement(s,{className:y.dividerDefault})}}]),u}();exports.default=b;
},{}],"../../../moduleWrappers/powercord/components/settings/formItem.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./divider"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=a();return function(){var o,r=l(e);if(t){var n=l(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return s(this,o)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=goosemodScope.webpackModules.common.React,d=goosemodScope.webpackModules.findByDisplayName("FormItem"),m=goosemodScope.webpackModules.findByDisplayName("FormText"),b=goosemodScope.webpackModules.findByDisplayName("Flex"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),g=goosemodScope.webpackModules.findByProps("formText","description"),v=function(t){c(n,y.PureComponent);var o=p(n);function n(){return r(this,n),o.apply(this,arguments)}return i(n,[{key:"render",value:function(){return y.createElement(d,{title:this.props.title,required:this.props.required,className:[b.Direction.VERTICAL,b.Justify.START,b.Align.STRETCH,b.Wrap.NO_WRAP,h.marginBottom20].join(" ")},this.props.children,this.props.note&&y.createElement(m,{className:g.description+(this.props.noteHasMargin?" "+h.marginTop8:"")},this.props.note),y.createElement(e.default))}}]),n}();exports.default=v;
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/textInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=b();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,h=goosemodScope.webpackModules.findByDisplayName("TextInput"),m=function(t){p(n,d.PureComponent);var r=l(n);function n(){return u(this,n),r.apply(this,arguments)}return f(n,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,d.createElement(e.default,{title:t,note:this.props.note,required:this.props.required,noteHasMargin:!0},d.createElement(h,o({},this.props)))}}]),n}();exports.default=m;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/sliderInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=b();return function(){var r,o=m(e);if(t){var n=m(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return l(this,r)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,O=goosemodScope.webpackModules.findByDisplayName("Slider"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),g=function(t){p(o,d.PureComponent);var r=a(o);function o(){return i(this,o),r.apply(this,arguments)}return f(o,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,d.createElement(e.default,{title:t,note:this.props.note,required:this.props.required},d.createElement(O,n(n({},this.props),{},{className:h.marginTop20+(this.props.className?" "+this.props.className:"")})))}}]),o}();exports.default=g;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FormItem",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"TextInput",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"SliderInput",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"Divider",{enumerable:!0,get:function(){return u.default}}),exports.SwitchItem=void 0;var e=n(require("./formItem")),t=n(require("./textInput")),r=n(require("./sliderInput")),u=n(require("./divider"));function n(e){return e&&e.__esModule?e:{default:e}}var i=goosemodScope.webpackModules.findByDisplayName("SwitchItem");exports.SwitchItem=i;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js","./textInput":"../../../moduleWrappers/powercord/components/settings/textInput.js","./sliderInput":"../../../moduleWrappers/powercord/components/settings/sliderInput.js","./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"Settings.jsx":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=a();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=require("powercord/webpack"),s=p.React,y=require("powercord/components/settings"),b=y.TextInput;module.exports=function(t){o(u,s.Component);var n=c(u);function u(){return e(this,u),n.apply(this,arguments)}return r(u,[{key:"render",value:function(){var t=this.props,e=t.getSetting,n=t.updateSetting;return s.createElement(b,{note:"Maximum adjustable volume on the volume slider",defaultValue:e("maxAdjustableVolume",this.props.defaultMaxVolume),onChange:function(t){return isNaN(t)?null:n("maxAdjustableVolume",Number(t))}},"Max Volume")}}]),u}();
},{"powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js"}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("_powercord/global"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=b();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m,d=require("powercord/entities"),O=d.Plugin,h=require("powercord/injector"),v=h.inject,j=h.uninject,w=require("powercord/webpack"),P=w.getModuleByDisplayName,_=w.i18n.Messages,S=w.React,x=require("./Settings"),R=400,D=new(function(t){s(n,O);var r=f(n);function n(){return i(this,n),r.apply(this,arguments)}return a(n,[{key:"startPlugin",value:function(){m=this.settings,this.adjustVolumeSlider(),e.default.api.settings.registerSettings("custom-volume-range-settings",{category:this.entityID,label:"Custom Volume Range",render:function(e){return S.createElement(x,o(o({},e),{},{defaultMaxVolume:R}))}})}},{key:"adjustVolumeSlider",value:function(){var e=P("Slider",!1);v("custom-volume-range",e.prototype,"render",function(e){var t=m.get("maxAdjustableVolume",R);return this&&this.props["aria-label"]===_.FORM_LABEL_INPUT_VOLUME&&(this.props.maxValue=t,this.state.value=this.state.initialValueProp,this.state.max=t,this.state.range=this.state.max),e},!0)}},{key:"pluginWillUnload",value:function(){j("custom-volume-range"),e.default.api.settings.unregisterSettings("custom-volume-range-settings")}}]),n}());exports.default=D;
},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/injector":"../../../moduleWrappers/powercord/injector.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","./Settings":"Settings.jsx"}]},{},["index.js"], null);parcelRequire('index.js').default