!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Rhoa",[],t):"object"==typeof exports?exports.Rhoa=t():e.Rhoa=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s=o[1],u=o[2],c=o[3],l={css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function o(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),o(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),o(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=A++;n=g||(g=s(t)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=C(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=y(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,A=0,b=[],y=n(7);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,o.push(u)}if(e){r(i(e,t),t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:a,options:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n.n(r),o=n(10),a=n.n(o);t.VERSION="0.0.6";const s=i.a;t.SmartLink=s;const u=a.a;t.FlexibleImage=u},function(e,t,n){function r(e){n(5)}var i=n(2)(n(8),n(9),r,"data-v-f5193c44",null);e.exports=i.exports},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={sourceMap:!0};i.transform=void 0;n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(!0),t.push([e.i,".smart-link.-reset[data-v-f5193c44]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.smart-link.-reset>.submit[data-v-f5193c44]{border:none;text-decoration:underline;cursor:pointer}","",{version:3,sources:["/Users/isuke/Projects/rhoa/src/components/SmartLink.vue"],names:[],mappings:"AACA,oCACE,SAAU,AACV,UAAW,AACX,SAAU,AACV,eAAgB,AAChB,aAAc,AACd,uBAAyB,CAC1B,AACD,4CACE,YAAa,AACb,0BAA2B,AAC3B,cAAgB,CACjB",file:"SmartLink.vue",sourcesContent:["\n.smart-link.-reset[data-v-f5193c44] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n.smart-link.-reset > .submit[data-v-f5193c44] {\n  border: none;\n  text-decoration: underline;\n  cursor: pointer;\n}"],sourceRoot:""}])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SmartLink",introduction:"Link for HTTP method such as 'post'.",description:"TODO",token:'<smart-link href="/logout" method="delete" text="Log out" is-reseted-style></smart-link>',props:{href:{type:String,required:!0,note:"link url"},method:{type:String,required:!0,validator:function(e){return["get","post","patch","put","delete"].includes(e)},note:"HTTP methods kind. 'get', 'post', 'patch', 'put' or 'delete'"},text:{type:String,required:!0,note:"link text"},token:{type:String,required:!1,default:null,note:"Authenticity Token for CSRF"},tokenName:{type:String,required:!1,default:"authenticity_token",note:"paramater name of 'token'"},isResetedStyle:{type:Boolean,required:!1,default:!0,note:"Style reset or not reset"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"smart-link",class:{"-reset":e.isResetedStyle},attrs:{method:"post",action:e.href}},[n("input",{staticClass:"method",attrs:{type:"hidden",name:"_method"},domProps:{value:e.method.toUpperCase()}}),n("input",{staticClass:"token",attrs:{type:"hidden",name:e.tokenName},domProps:{value:e.token}}),n("input",{staticClass:"submit",attrs:{type:"submit"},domProps:{value:e.text}})])},staticRenderFns:[]}},function(e,t,n){function r(e){n(11)}var i=n(2)(n(13),n(14),r,"data-v-9c3e4e6a",null);e.exports=i.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={sourceMap:!0};i.transform=void 0;n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(!0),t.push([e.i,".flexible-image[data-v-9c3e4e6a]{position:relative;overflow:hidden}.flexible-image>.image[data-v-9c3e4e6a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["/Users/isuke/Projects/rhoa/src/components/FlexibleImage.vue"],names:[],mappings:"AACA,iCACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,wCACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C",file:"FlexibleImage.vue",sourcesContent:["\n.flexible-image[data-v-9c3e4e6a] {\n  position: relative;\n  overflow: hidden;\n}\n.flexible-image > .image[data-v-9c3e4e6a] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}"],sourceRoot:""}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FlexibleImage",introduction:"Zoom in/out the image by centering.",description:"TODO",token:'<flexible-image image-url="http://placehold.it/350x250" :width="150" :height="150"></flexible-image>',props:{imageUrl:{type:String,required:!0,note:"image url"},width:{type:Number,required:!0,note:"image width"},height:{type:Number,required:!0,note:"image height"},unit:{type:String,required:!1,default:"px",note:"unit of image height/width"}},data:function(){return{image:null,fixedWidth:null,fixedHeight:null}},computed:{aspectRatio:function(){return this.width/this.height}},methods:{loadImage:function(){return this.image=new Image,this.image.onload=function(){return this.calcLength()}},calcLength:function(){var e;return e=this.image.width/this.image.height,this.fixedWidth=this.aspectRatio<e?null:this.width,this.fixedHeight=this.aspectRatio<e?this.height:null}},mounted:function(){return this.loadImage()}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexible-image",style:{width:e.width+e.unit,height:e.height+e.unit}},[n("img",{staticClass:"image",style:{width:e.fixedWidth+e.unit,height:e.fixedHeight+e.unit},attrs:{src:e.imageUrl}})])},staticRenderFns:[]}}])});
//# sourceMappingURL=rhoa.js.map