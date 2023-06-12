(()=>{"use strict";var n={669:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",""]);const i=o},767:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 30px 50px;\r\n    display: flex;\r\n    align-items: center\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n    margin: 0;\r\n}\r\n\r\n.earth-news{\r\n    display: flex;\r\n    width: 70px;\r\n    height: 70px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n}\r\n\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.rs-school{\r\n    display: block;\r\n    width: 100px;\r\n}\r\n\r\n.github{\r\n    display: block;\r\n    width: 50px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    footer {\r\n        display: block;\r\n    text-align: center;\r\n    }\r\n\r\n    .rs-school{\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .github{\r\n        margin: 0 auto;\r\n    }\r\n}",""]);const i=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function s(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function a(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],c=r.base?a[0]+r.base:a[0],u=e[c]||0,l="".concat(c," ").concat(u);e[c]=u+1;var d=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:h(p,r),references:1}),t.push(l)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var u,l=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function d(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(i,s[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(n,r){var e,t,o;if(r.singleton){var i=m++;e=f||(f=c(r)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=c(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=s(e[t]);i[o].references--}for(var c=a(n,r),u=0;u<e.length;u++){var l=s(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=c}}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n;!function(n){n.GET="GET",n.POST="POST",n.PUT="PUT",n.DELETE="DELETE",n.HEAD="HEAD"}(n||(n={}));var r,t=function(){return t=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},t.apply(this,arguments)},o=function(){function r(n,r){this.options={},this.baseLink=n,this.options=r}return r.prototype.getResp=function(r,e){var t=r.endpoint,o=r.options,i=void 0===o?{}:o;void 0===e&&(e=function(n){console.error("No callback for GET response",n)}),this.load(n.GET,t,e,i)},r.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},r.prototype.makeUrl=function(n,r){var e=t(t({},this.options),n),o="".concat(this.baseLink).concat(r,"?");return Object.keys(e).forEach((function(n){o+="".concat(n,"=").concat(e[n],"&")})),o.slice(0,-1)},r.prototype.load=function(n,r,e,t){void 0===t&&(t={}),fetch(this.makeUrl(t,r),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return e(n)})).catch((function(n){return console.error(n)}))},r}(),i=(r=function(n,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])},r(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});const s=function(n){function r(){return n.call(this,"https://news-proxy.spanb4.shop/",{apiKey:"875797f721f44a379bbb3171f19d74d8"})||this}return i(r,n),r}(o);var a=function(){var n=function(r,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])},n(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}n(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();const c=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return a(r,n),r.prototype.getSources=function(r){n.prototype.getResp.call(this,{endpoint:"sources"},r)},r.prototype.getNews=function(r,e){for(var t=r.target,o=r.currentTarget;t!==o;){if(null==t?void 0:t.classList.contains("source__item")){var i=null==t?void 0:t.getAttribute("data-source-id");return void((null==o?void 0:o.getAttribute("data-source"))!==i&&(i&&(null==o||o.setAttribute("data-source",i)),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},e)))}t=null==t?void 0:t.parentNode}},r}(s);var u=e(379),l=e.n(u),d=e(669);l()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var p=function(){function n(){}return n.prototype.draw=function(n){var r=n.length>=10?n.filter((function(n,r){return r<10})):n,e=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");r.forEach((function(n,r){var o=null==t?void 0:t.content.cloneNode(!0),i=o.querySelector(".news__item");r%2&&i&&i.classList.add("alt");var s=o.querySelector(".news__meta-photo");s&&(s.style.backgroundImage="url(".concat(n.urlToImage||"https://i.ibb.co/k8ZhpLQ/spinner.png",")"));var a=o.querySelector(".news__meta-author");a&&(a.textContent=n.author||n.source.name);var c=o.querySelector(".news__meta-date");c&&(c.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"));var u=o.querySelector(".news__description-title");u&&(u.textContent=n.title);var l=o.querySelector(".news__description-source");l&&(l.textContent=n.source.name);var d=o.querySelector(".news__description-content");d&&(d.textContent=n.description);var p=o.querySelector(".news__read-more a");p&&p.setAttribute("href",n.url),e.append(o)}));var o=document.querySelector(".news");o&&(o.innerHTML="",o.appendChild(e))},n}();const f=p;var m=e(501);l()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;const h=function(){function n(){}return n.prototype.draw=function(n){var r=document.createDocumentFragment(),e=document.querySelector("#sourceItemTemp");n.forEach((function(n){var t=null==e?void 0:e.content.cloneNode(!0),o=t.querySelector(".source__item-name");o&&(o.textContent=n.name);var i=t.querySelector(".source__item");i&&i.setAttribute("data-source-id",n.id),r.append(t)}));var t=document.querySelector(".sources");t&&t.append(r)},n}();var _=function(){function n(){this.news=new f,this.sources=new h}return n.prototype.drawNews=function(n){var r=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(r)},n.prototype.drawSources=function(n){var r=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(r)},n}();const w=function(){function n(){this.controller=new c,this.view=new _}return n.prototype.start=function(){var n,r=this;null===(n=null===document||void 0===document?void 0:document.querySelector(".sources"))||void 0===n||n.addEventListener("click",(function(n){return r.controller.getNews(n,(function(n){return r.view.drawNews(n)}))})),this.controller.getSources((function(n){return r.view.drawSources(n)}))},n}();var v=e(767);l()(v.Z,{insert:"head",singleton:!1}),v.Z.locals,(new w).start()})()})();