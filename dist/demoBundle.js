!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define("VueMessageMask",["Vue"],t):"object"==typeof exports?exports.VueMessageMask=t(require("Vue")):e.VueMessageMask=t(e.Vue)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=6)}([function(e,t){e.exports=function(e,t,n,o,r){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),o&&(c._scopeId=o);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,f=u?c.render:c.beforeCreate;u?c.render=function(e,t){return l.call(t),f(e,t)}:c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:s,options:c}}},,function(e,t,n){(function(e){var n,o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(s,a){"object"==i(t)&&"object"==i(e)?e.exports=a():(o=[],n=a,void 0!==(r="function"==typeof n?n.apply(t,o):n)&&(e.exports=r))}(0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=7)}([function(e,t){e.exports=function(e,t,n,o,r){var s,a=e=e||{},c=i(e.default);"object"!==c&&"function"!==c||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=n),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?l.render=function(e,t){return u.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var o={showMask:!1,loadingText:"",showLoading:!1,showLoadingCloseButton:!1,showMessage:!1,message:"",showOkButton:!1,showCancelButton:!1,okAction:function(){},cancelAction:function(){},okText:"确认",cancelText:"取消",showDiy:!1,diyComponent:null};t.a=o},,,function(e,t,n){function o(e){n(14)}var r=n(0)(n(9),n(13),o,"data-v-7ee5880e",null);e.exports=r.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n.n(o),i=n(1),s=void 0,a=null,c=Vue.extend(r.a),l=function(e){for(var t=1,n=arguments.length;t<n;t++){var o=arguments[t];for(var r in o)if(o.hasOwnProperty(r)){var i=o[r];void 0!==i&&(e[r]=i)}}return e},u=function(){a=null;for(var e in i.a)i.a.hasOwnProperty(e)&&(s[e]=i.a[e])},f=function(){},d=function(){s=new c({el:document.createElement("div")}),document.body.appendChild(s.$el),s.callback=f},p=function(){if(s||d(),!s.showMask||s.closeTimer){var e=a;for(var t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);void 0===e.callback&&(s.callback=f),Vue.nextTick(function(){s.showMask=!0})}};t.default={install:function(e,t){e.prototype.VMaskController={showVMaskLoading:function(e){a=l({showLoading:!0},e),p()},closeVMask:function(e){u(),e&&e()},showVMaskMsg:function(e){a=l({showMessage:!0,message:e,showOkButton:!0}),p()},showVMaskMultiMsg:function(e){a=l({showMessage:!0},e),p()},showVMaskConfirm:function(e){a=l({showMessage:!0},e),p()},showDiyVMask:function(e){a=l({diyComponent:e}),p()}}}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){for(var t=1,n=arguments.length;t<n;t++){var o=arguments[t];for(var r in o)if(o.hasOwnProperty(r)){var i=o[r];void 0!==i&&(e[r]=i)}}return e};t.default={data:function(){return r({},o.a)},methods:{close:function(e){for(var t in o.a)o.a.hasOwnProperty(t)&&(this[t]=o.a[t]);e&&e()},handleAction:function(e){var t=this[e];this.close(t)}}}},function(e,t,n){t=e.exports=n(11)(),t.push([e.i,'.vmask-box[data-v-7ee5880e]{position:fixed;top:0;left:0;right:0;bottom:0;height:100%;width:100%;z-index:9999;background-color:rgba(0,0,0,.5)}.vmask-loading-inner[data-v-7ee5880e]{text-align:center;background-color:rgba(0,0,0,.5);color:#fff;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:50%;border-radius:6px;font-size:14px;padding:58px 0 10px}.vmask-loading-inner p[data-v-7ee5880e]{word-wrap:break-word;padding:0 10px;margin:0;background-color:transparent}.vmask-loading-icon[data-v-7ee5880e]{position:absolute;top:15px;left:50%;margin-left:-16px;width:24px;height:24px;border:2px solid #fff;border-radius:24px;-webkit-animation:gif-data-v-7ee5880e 1s infinite linear;animation:gif-data-v-7ee5880e 1s infinite linear;clip:rect(0 auto 12px 0);background-color:transparent}.vmask-close-icon[data-v-7ee5880e]{width:20px;height:20px;position:absolute;top:-8px;right:-8px;border-radius:100%;background-color:rgba(0,0,0,.5);text-align:center;z-index:99999}.vmask-close-icon[data-v-7ee5880e]:after{content:"x";font-style:normal;line-height:20px;text-align:left}@keyframes gif-data-v-7ee5880e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes gif{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}.vmask-msg-inner[data-v-7ee5880e]{text-align:center;background-color:#fff;color:#fff;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:66%;font-size:14px}.cui-error-tips[data-v-7ee5880e]{color:#000;padding:20px;text-align:left}.cui-roller-btns[data-v-7ee5880e]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;background:#fff;border-top:1px solid #bcbcbc;line-height:18px;text-align:center;box-sizing:border-box}.cui-roller-btns .cui-flexbd[data-v-7ee5880e]{padding:12px 0;color:#000}.cui-flexbd[data-v-7ee5880e]{-webkit-box-flex:1;-ms-flex:1;flex:1}.cui-roller-btns .cui-flexbd[data-v-7ee5880e]:nth-of-type(2){border-left:1px solid rgba(0,0,0,.3)}.vmask-diy[data-v-7ee5880e]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMask,expression:"showMask"}],staticClass:"vmask-box"},[e.showLoading?n("div",{staticClass:"vmask-loading-inner"},[e.showLoadingCloseButton?n("i",{staticClass:"vmask-close-icon",on:{click:function(t){e.close()}}}):e._e(),e._v(" "),n("i",{staticClass:"vmask-loading-icon"}),e._v(" "),n("p",[e._v(e._s(e.loadingText))])]):e._e(),e._v(" "),e.showMessage?n("div",{staticClass:"vmask-msg-inner"},[n("div",{staticClass:"cui-error-tips"},[e._v(e._s(e.message))]),e._v(" "),n("div",{staticClass:"cui-roller-btns"},[e.showCancelButton?n("div",{staticClass:"cui-flexbd cui-btns-cancel",on:{click:function(t){e.handleAction("cancelAction")}}},[e._v(e._s(e.cancelText))]):e._e(),e._v(" "),e.showOkButton?n("div",{staticClass:"cui-flexbd cui-btns-ok",on:{click:function(t){e.handleAction("okAction")}}},[e._v(e._s(e.okText))]):e._e()])]):e._e(),e._v(" "),e.diyComponent?n("div",{staticClass:"vmask-diy"},[n(e.diyComponent,{tag:"component"})],1):e._e()])},staticRenderFns:[]}},function(e,t,n){var o=n(10);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(15)("9d33c636",o,!0)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(g){var i=p++;o=d||(d=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(16),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=l(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,n.push(a)}t?(r=l(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}}])})}).call(t,n(17)(e))},function(e,t,n){var o=n(0)(n(8),n(12),null,null,null);e.exports=o.exports},,function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=n.n(o),i=n(2),s=n.n(i),a=n(3),c=n.n(a);r.a.use(s.a),new r.a({el:"#app",data:{message:"hello world"},methods:{showloading:function(){var e=this;this.VMaskController.showVMaskLoading({loadingText:this.message}),setTimeout(function(){e.VMaskController.closeVMask()},3e3)},showloadingWithClose:function(){this.VMaskController.showVMaskLoading({loadingText:this.message,showLoadingCloseButton:!0})},showCommonMsg:function(){this.VMaskController.showVMaskMsg(this.message)},showMultiMsg:function(){this.VMaskController.showVMaskMultiMsg({message:this.message,showOkButton:!0,okText:"知道了",okAction:function(){console.log("点击了知道按钮")}})},showconfirm:function(){this.VMaskController.showVMaskMultiMsg({message:this.message,showOkButton:!0,showCancelButton:!0,okText:"知道了",cancelText:"取消",okAction:function(){console.log("点击了确认按钮")},cancelAction:function(){console.log("点击了取消按钮")}})},showdiy:function(){this.VMaskController.showDiyVMask(c.a)}}})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{closemask:function(){this.VMaskController.closeVMask()}}}},,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"200px","background-color":"#fff","text-align":"center",padding:"5px","line-height":"20px"}},[e._v("\n    自定义的弹框内容"),n("br"),e._v("\n    测试自定义内容的正确显示"),n("br"),e._v("\n    默认宽度不能超过屏幕宽度"),n("br"),e._v("\n    默认上下左右居中"),n("br"),e._v(" "),n("button",{staticStyle:{border:"1px solid #3bab20",padding:"5px","background-color":"#3bab20",color:"#fff","margin-top":"10px"},on:{click:function(t){e.closemask()}}},[e._v("点击关闭自定义窗口")])])},staticRenderFns:[]}},,,,,function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});