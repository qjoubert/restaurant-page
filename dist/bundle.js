!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n,e){var r=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function c(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],o=0;o<t.length;o++){var a=t[o],u=n.base?a[0]+n.base:a[0],s=e[u]||0,l="".concat(u," ").concat(s);e[u]=s+1;var d=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}function p(t,n,e){var r=e.css,o=e.media,a=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(t,n){var e,r,o;if(n.singleton){var a=h++;e=m||(m=s(n)),r=f.bind(null,e,a,!1),o=f.bind(null,e,a,!0)}else e=s(n),r=p.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);i[o].references--}for(var a=u(t,n),s=0;s<e.length;s++){var l=c(e[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=a}}}},function(t,n,e){var r=e(3),o=e(4),a=e(5),i=e(6);n=r(!1);var c=o(a),u=o(i);n.push([t.i,'@font-face {\n  font-family: "sacramento";\n  src: url('+c+') format("truetype");\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  background-image: url('+u+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white;\n  font-family: sacramento, cursive;\n  font-size: 3rem;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\na.current {\n  color: #69bf64;\n}\n\nul {\n  list-style-type: none;\n  margin: 2rem;\n}\n\nnav {\n  text-align: right;\n}\n\nnav li {\n  display: inline-block;\n}\n\nnav a {\n  background-color: rgba(0, 0, 0, .4);\n  padding: 1rem 2rem;\n  transition: all .4s ease;\n}\n\nnav a:hover {\n  background-color: rgba(0, 0, 0, .6);\n}\n\nmain {\n  transition: opacity .3s ease-in-out;\n}\n\n.content {\n  background-color: rgba(0, 0, 0, .4);\n  text-align: center;\n  position: absolute;\n  right: 0;\n  top: 35%;\n  transform: translateY(-35%);\n  width: 40vw;\n}\n\n.content p {\n  font-size: 3.5rem;\n}\n\nul.drinks li {\n  font-size: 3.2rem;\n  margin-bottom: .3rem;\n}\n\np.info {\n  font-family: arial, sans-serif;\n  font-size: 1.4rem;\n}\n\np.info a {\n  text-decoration: underline;\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,n,e){"use strict";e.r(n),n.default=e.p+"8e499a8cb6cdb915c291c15539829677.ttf"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"2bd3bf76cb66ece5c595859f616197d1.jpg"},function(t,n,e){"use strict";e.r(n);e(0);var r=function(){const t=document.createElement("div"),n=function(){const t=document.createElement("h1");return t.textContent="Matcha Moment",t}(),e=function(){const t=document.createElement("p");return t.textContent="Restorative drinks in a peaceful environment",t}();return t.classList.add("content"),t.setAttribute("data-page","about"),t.appendChild(n),t.appendChild(e),t}(),o=function(){const t=document.createElement("div"),n=function(){const t=document.createElement("h2");return t.textContent="Our matcha drinks",t}(),e=function(){const t=document.createElement("ul");t.classList.add("drinks");const n=["matcha tea","matcha iced tea","matcha chai latte","hot matchocolate","matcha green tea latte","iced matcha tea latte","matcha smoothie"];for(let e of n){const n=document.createElement("li");n.textContent=e,t.appendChild(n)}return t}();return t.classList.add("content"),t.setAttribute("data-page","menu"),t.appendChild(n),t.appendChild(e),t}(),a=function(){const t=document.createElement("div"),n=function(){const t=document.createElement("h2");return t.textContent="How to find us",t}(),e=a("42 Gyatso Street, Wellington"),r=a("Monday to Saturday, from 8 am to 8 pm"),o=function(){const t=document.createElement("a");t.setAttribute("href","https://www.theodinproject.com/"),t.setAttribute("target","_blank"),t.textContent="The Odin Project";const n=document.createElement("p");return n.setAttribute("class","info"),n.textContent="This is a fictional business created as an assignment for ",n.appendChild(t),n}();function a(t){const n=document.createElement("p");return n.textContent=t,n}return t.classList.add("content"),t.setAttribute("data-page","contact"),t.appendChild(n),t.appendChild(e),t.appendChild(r),t.appendChild(o),t}();!function(){const t=document.querySelector("main"),n=document.querySelectorAll("nav a");n.forEach(e=>{e.addEventListener("click",e=>{const i=e.target.dataset.page,c=document.querySelector("div.content").dataset.page;var u;i!==c&&(t.style.opacity="0",setTimeout(()=>function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(t),300),setTimeout(()=>function(n){const e="about"===n?r:"menu"===n?o:"contact"===n?a:null;e&&(t.appendChild(e),t.style.opacity="1")}(i),301),u=i,n.forEach(t=>{t.dataset.page===u?t.classList.add("current"):t.classList.remove("current")}))})})}()}]);