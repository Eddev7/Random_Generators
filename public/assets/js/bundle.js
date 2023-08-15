(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Staatliches', cursive;\n}\n\n.header {\n    width: 100%;\n    padding: 20px;\n    background-color: var(--primary-color);\n}\n\n.header h1 {\n    font-size: 2rem;\n}\n\n.container-principal {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    width: 100%;\n    height: 87vh;\n}\n\n.container-principal aside ul {\n    display: flex;\n    flex-direction: column;\n}\n\n.container-principal aside ul li button {\n    font-family: 'Patua One', cursive;\n    font-family: 'Staatliches', cursive;\n    background-color: var(--white-color);\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    width: 100%;\n    padding: 20px;\n    border: var(--white-color) solid 3px;\n}\n\n.container-principal aside ul li button:hover {\n    background-color: var(--primary-color);\n    border: rgba(0, 0, 0, 0.753) solid 3px;\n    cursor: pointer;\n}\n\n.coitaner-function {\n    background-color: rgb(38, 0, 255);\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,mCAAmC;IACnC,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,sCAAsC;IACtC,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Staatliches', cursive;\n}\n\n.header {\n    width: 100%;\n    padding: 20px;\n    background-color: var(--primary-color);\n}\n\n.header h1 {\n    font-size: 2rem;\n}\n\n.container-principal {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    width: 100%;\n    height: 87vh;\n}\n\n.container-principal aside ul {\n    display: flex;\n    flex-direction: column;\n}\n\n.container-principal aside ul li button {\n    font-family: 'Patua One', cursive;\n    font-family: 'Staatliches', cursive;\n    background-color: var(--white-color);\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    width: 100%;\n    padding: 20px;\n    border: var(--white-color) solid 3px;\n}\n\n.container-principal aside ul li button:hover {\n    background-color: var(--primary-color);\n    border: rgba(0, 0, 0, 0.753) solid 3px;\n    cursor: pointer;\n}\n\n.coitaner-function {\n    background-color: rgb(38, 0, 255);\n}\n"],sourceRoot:""}]);const c=i},983:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,":root {\n    --primary-color: rgba(18, 109, 214, 0.589);\n    --white-color: #FFF;\n}\n","",{version:3,sources:["webpack://./src/assets/css/variaveis.css"],names:[],mappings:"AAAA;IACI,0CAA0C;IAC1C,mBAAmB;AACvB",sourcesContent:[":root {\n    --primary-color: rgba(18, 109, 214, 0.589);\n    --white-color: #FFF;\n}\n"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var A=[].concat(n[l]);t&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),r&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=r):A[2]=r),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],A=a[l]||0,u="".concat(l," ").concat(A);a[l]=A+1;var p=r(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=o(d,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var A=r(a[l]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),l=r(216),A=r.n(l),u=r(589),p=r.n(u),d=r(983),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=A(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var C=r(122),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=A(),e()(C.Z,v),C.Z&&C.Z.locals&&C.Z.locals,console.log("test")})()})();
//# sourceMappingURL=bundle.js.map