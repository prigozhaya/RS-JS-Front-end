(()=>{"use strict";var t={767:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,"body{\r\n  background-color: #2d2d2d;\r\n}\r\n\r\np{\r\n  margin: 0;\r\n  margin: 0;\r\n  color: white;\r\n  font-family: system-ui;\r\n  font-size: 17px;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n    padding: 20px 0;\r\n    font-family: system-ui;\r\n    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;\r\n    color: white;\r\n    animation: shadow 1s infinite alternate;\r\n}\r\n\r\n@keyframes shadow {\r\n  from {\r\n    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;\r\n  }\r\n  to {\r\n    text-shadow: 2px 4px 5px red, 0 0 3em blue, 0 0 0.2em blue;\r\n\r\n  }\r\n}\r\n\r\nh3{\r\n  color: #ffffff;\r\n  font-family: system-ui;\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  padding: 5px 20px;\r\n  background: linear-gradient(rgb(255, 0, 81), blue);\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  border: none;\r\n  position: relative;\r\n  overflow-x: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-button{\r\n  border: solid;\r\n  border-image-slice: 1;\r\n  border-width: 3px;\r\n  border-image-source: linear-gradient(to left,rgb(255, 0, 81), blue);\r\n  background: none;\r\n}\r\n\r\nbutton:hover .flare {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 150px;\r\n  animation: flareAnimation;\r\n  left: -150%;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.114), rgba(255, 255, 255, 0.781));\r\n  animation: flareAnimation 1s ;\r\n}\r\n\r\n@keyframes flareAnimation {\r\n  0% {\r\n      left: -150%;\r\n  }\r\n  100% {\r\n      left: 150%;\r\n  }\r\n}\r\n\r\n.view-switcher{\r\n  padding: 5px 0 40px 0;\r\n}\r\n\r\n.model-input{\r\n  padding: 5px;\r\n  border-image-slice: 1;\r\n  border-width: 3px;\r\n  border-image-source: linear-gradient(to left,rgb(255, 0, 81), blue);\r\n}\r\n\r\n.car-input{\r\n  display: flex;\r\n  width: 350px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 5px 0;\r\n}\r\n\r\n.generate{\r\n  width: 100%;\r\n}\r\n\r\n.race-switcher{\r\n  padding: 25px 0;\r\n}\r\n\r\n.pagination{\r\n  display: flex;\r\n  width: 180px;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  padding: 30px 0;\r\n}\r\n\r\n.car-button{\r\n  padding: 3px 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.car-action{\r\n  display: flex;\r\n  padding: 15px 0 10px 0;\r\n}\r\n\r\n.car-select{\r\n  display: flex;\r\n  width: 145px;\r\n  justify-content: space-between;\r\n  padding-right: 10px;\r\n}\r\n\r\n.engine-switcher{\r\n  padding: 5px 10px;\r\n}\r\n\r\n.engine-switcher.disable{\r\n  background: linear-gradient(rgb(163, 163, 163), rgb(56, 56, 56));\r\n}\r\n\r\nbutton.engine-switcher.disable:hover .flare {\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.track{\r\n  height: 40px;\r\n  padding: 20px 0 10px;\r\n  border-bottom: dashed rgb(255, 255, 255);\r\n}\r\n\r\n.flag{\r\n  position: absolute;\r\n  float: right;\r\n  right: 5%;\r\n}\r\n\r\n.car{\r\n  position: relative;\r\n  left: 0;\r\n  transition: all 10s linear;\r\n}\r\n\r\n.winners-sort{\r\n  display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.table-button{\r\n  width: 150px;\r\n}\r\n\r\n.rating-line{\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 15px;\r\n}\r\n\r\n.rating-cell{\r\n  width: 150px;\r\n  text-align: center;\r\n}",""]);const a=o},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var s=0;s<t.length;s++){var i=[].concat(t[s]);r&&o[i[0]]||(e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),n.push(i))}},n}},379:(t,n,e)=>{var r,o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],o=0;o<t.length;o++){var s=t[o],i=n.base?s[0]+n.base:s[0],u=e[i]||0,l="".concat(i," ").concat(u);e[i]=u+1;var d=c(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:g(p,n),references:1}),r.push(l)}return r}function i(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=e.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=o(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var u,l=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function d(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(a,c[n]):t.appendChild(a)}}function p(t,n,e){var r=e.css,o=e.media,a=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(t,n){var e,r,o;if(n.singleton){var a=f++;e=h||(h=i(n)),r=d.bind(null,e,a,!1),o=d.bind(null,e,a,!0)}else e=i(n),r=p.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=s(t,n),u=0;u<e.length;u++){var l=c(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=function(){return t=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},t.apply(this,arguments)};const n=function(){function n(){this.garageState={totalCountCars:1,currentPage:1,cars:[],inputCreate:"",inputUpdate:"",selectedCar:""},this.winnersState={totalCountWinners:3,currentPage:1,winners:[]}}return n.prototype.setCars=function(t){this.garageState.cars=t},n.prototype.setSelectedCar=function(t){this.garageState.selectedCar=t},n.prototype.getCars=function(){return this.garageState.cars},n.prototype.getSelectedCar=function(){return this.garageState.selectedCar},n.prototype.getGarageState=function(){return this.garageState},n.prototype.getWinnersState=function(){return this.winnersState},n.prototype.setGarageState=function(n){this.garageState=t(t({},this.garageState),n)},n.prototype.setWinnersState=function(n){this.winnersState=t(t({},this.winnersState),n)},n}();var r,o,a,c;!function(t){t.Stopped="stopped",t.Started="started",t.Drive="drive"}(r||(r={})),function(t){t.Id="id",t.Wins="wins",t.Time="time"}(o||(o={})),function(t){t.Asc="ASC",t.Desc="DESC"}(a||(a={})),function(t){t.Garage="garage",t.Winners="winners"}(c||(c={}));var s=function(t,n,e,r){return new(e||(e=Promise))((function(o,a){function c(t){try{i(r.next(t))}catch(t){a(t)}}function s(t){try{i(r.throw(t))}catch(t){a(t)}}function i(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,s)}i((r=r.apply(t,n||[])).next())}))},i=function(t,n){var e,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(i){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(c=0)),c;)try{if(e=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){c.label=s[1];break}if(6===s[0]&&c.label<o[1]){c.label=o[1],o=s;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(s);break}o[2]&&c.ops.pop(),c.trys.pop();continue}s=n.call(t,c)}catch(t){s=[6,t],r=0}finally{e=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};const u=function(){function t(){}return t.prototype.GaragegetCars=function(t,n){return s(this,void 0,void 0,(function(){var e;return i(this,(function(r){try{return e="http://localhost:3000/garage",t&&n&&(e+="?_page=".concat(t,"&_limit=").concat(n)),[2,fetch(e,{method:"GET",mode:"cors",headers:{accept:"application/json"}}).then((function(t){if(t.ok){var n=t.headers.get("X-Total-Count");return t.json().then((function(t){return t.unshift({totalCount:n}),Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)}))}return t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("GetCars server error")]}return[2]}))}))},t.prototype.getCars=function(t,n){return s(this,void 0,void 0,(function(){var e;return i(this,(function(r){try{return e="http://localhost:3000/garage",t&&n&&(e+="?_page=".concat(t,"&_limit=").concat(n)),[2,fetch(e,{method:"GET",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("GetCars server error")]}return[2]}))}))},t.prototype.getCar=function(t){return s(this,void 0,void 0,(function(){return i(this,(function(n){try{return[2,fetch("http://localhost:3000/garage/"+t,{method:"GET",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("GetCar server error")]}return[2]}))}))},t.prototype.createCar=function(t,n){return s(this,void 0,void 0,(function(){var e;return i(this,(function(r){try{return e={name:t,color:n},[2,fetch("http://localhost:3000/garage",{method:"POST",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("CreateCars server error")]}return[2]}))}))},t.prototype.deleteCar=function(t){return s(this,void 0,void 0,(function(){return i(this,(function(n){try{return[2,fetch("http://localhost:3000/garage/"+t,{method:"DELETE",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("deleteCar server error")]}return[2]}))}))},t.prototype.updateCar=function(t,n,e){return s(this,void 0,void 0,(function(){var r;return i(this,(function(o){try{return r={name:n,color:e},[2,fetch("http://localhost:3000/garage/"+t,{method:"PUT",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("UpdeteCars server error")]}return[2]}))}))},t.prototype.startStopEngine=function(t,n){return s(this,void 0,void 0,(function(){var e;return i(this,(function(r){try{return e="http://localhost:3000/engine/?id=".concat(t,"&status=").concat(n),[2,fetch(e,{method:"PATCH",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("startStopEngine server error")]}return[2]}))}))},t.prototype.startEngineDriveMode=function(t){return s(this,void 0,void 0,(function(){var n;return i(this,(function(e){try{return n="http://localhost:3000/engine/?id=".concat(t,"&status=").concat(r.Drive),[2,fetch(n,{method:"PATCH",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("switchCarsEngine server error")]}return[2]}))}))},t.prototype.getWinners=function(t,n,e,r){return void 0===e&&(e=o.Wins),void 0===r&&(r=a.Asc),s(this,void 0,void 0,(function(){var o;return i(this,(function(a){try{return o="http://localhost:3000/winners?",t&&n&&(o+="_page=".concat(t,"&_limit=").concat(n,"&")),o+="_sort=".concat(e,"&_order=").concat(r),[2,fetch(o,{method:"GET",mode:"cors",headers:{accept:"application/json"}}).then((function(t){if(t.ok){var n=t.headers.get("X-Total-Count");return t.json().then((function(t){return t.unshift({totalCount:n}),Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)}))}return t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("GetCars server error")]}return[2]}))}))},t.prototype.getWinner=function(t){return s(this,void 0,void 0,(function(){return i(this,(function(n){try{return[2,fetch("http://localhost:3000/winners/"+t,{method:"GET",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("GetCar server error")]}return[2]}))}))},t.prototype.createWinner=function(t,n,e){return s(this,void 0,void 0,(function(){var r;return i(this,(function(o){try{return r={id:t,wins:n,time:e},[2,fetch("http://localhost:3000/winners",{method:"POST",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("createWinner server error")]}return[2]}))}))},t.prototype.deleteWinner=function(t){return s(this,void 0,void 0,(function(){return i(this,(function(n){try{return[2,fetch("http://localhost:3000/winners/"+t,{method:"DELETE",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("deleteWinner server error")]}return[2]}))}))},t.prototype.updateWinner=function(t,n,e){return s(this,void 0,void 0,(function(){var r;return i(this,(function(o){try{return r={wins:n,time:e},[2,fetch("http://localhost:3000/winners/"+t,{method:"PUT",mode:"cors",headers:{accept:"application/json","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)}).then((function(t){return t.ok?t.json().then((function(t){return Promise.resolve(t)})).catch((function(t){return console.log(t.message),Error(t.message)})):t.text().then((function(n){return new Error("Status: ".concat(t.status," Message: ").concat(n))})).catch((function(t){return console.log(t.message),Error(t.message)}))})).catch((function(t){return console.log(t.message),Error(t.message)}))]}catch(t){return console.log(t),[2,Error("updateWinner server error")]}return[2]}))}))},t}(),l=function(){function t(t){this.state=t,this.httpModule=new u}return t.prototype.generateCarConstructor=function(){var t=document.createElement("section");return t.innerHTML='<section class="car-constructor">\n  <div class="car-input">\n      <input type="text" placeholder="Model" class="model-input" id="create-input"/>\n      <input type="color" class="color-picker" id="create-color-picker" />\n      <button class="clear-button" id="create-button">CREATE<span class="flare"></span></button>\n  </div>\n  <div class="car-input">\n      <input type="text" placeholder="Model" class="model-input" id="update-input" />\n      <input type="color" class="color-picker" id="update-color-picker"/>\n      <button class="clear-button" id="update-button">UPDATE<span class="flare"></span></button>\n  </div>\n  <div class="car-input">\n      <button class="generate clear-button">GENERATE CARS <span class="flare"></span></button>\n  </div>\n  <div class="race-switcher">\n      <button>START RACE <span class="flare"></span></button>\n      <button>RESET <span class="flare"></span></button>\n  </div>\n  </section>',t},t.prototype.generateCarRace=function(){var t=this,n=document.createElement("section");n.classList.add("carRace");try{this.httpModule.GaragegetCars(1,7).then((function(e){if("object"==typeof e&&!(e instanceof Error)){n.innerHTML='  \n    <div>\n    <h3>GARAGE(<span id="car-count">'.concat(e[0].totalCount,"</span>)</h3>\n</div>");for(var r=1;r<e.length;r++)n.innerHTML+='                <div class="car-track">\n<div class="car-action">\n    <div class="car-select">\n        <button class="clear-button car-button car-select-button" data-select-car-id="'.concat(e[r].id,'">SELECT<span class="flare"></span></button>\n        <button class="clear-button car-button car-delete-button" data-delete-car-id="').concat(e[r].id,'">DELETE<span class="flare"></span></button>\n    </div>\n    <p class="car-model" data-model-car-id="').concat(e[r].id,'">').concat(e[r].name,'</p>\n</div>\n<button class="engine-switcher">⮞<span class="flare"></span></button>\n<button class="engine-switcher disable">⭯<span class="flare"></span></button>\n<div class="track">\n    <svg\n        class="car"\n        \n        onclick="this.style.left=\'90%\'"\n        width="120"\n        height="40"\n        viewBox="0 0 120 40"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path data-color-car-id = "').concat(e[r].id,'"\n            d="M43.2103 0.00041946C36.108 -0.0171378 28.1081 0.515126 18.7977 1.85086C17.6988 1.99409 7.1113 7.62096 4.25688 11.5046C1.40246 15.3884 0.426032 22.7812 0.426032 22.7812C-0.344601 25.8087 0.123532 30.8127 0.338505 31.2992C0.628609 32.3527 2.26757 33.2368 5.08256 33.876C5.41085 29.0115 9.7376 25.221 14.9694 25.2149C20.4471 25.2149 24.8874 29.3525 24.8874 34.4556C24.8839 34.8631 24.8515 35.27 24.7902 35.6735C24.9365 35.6754 25.1026 35.6791 25.2415 35.6805L84.5678 36.1402C84.4555 35.5847 84.398 35.0208 84.396 34.4556C84.396 29.3525 88.8368 25.2149 94.3141 25.2149C99.7918 25.2149 104.232 29.3525 104.232 34.4556C104.232 35.072 104.166 35.6869 104.035 36.2908L119.454 36.4102C119.781 31.1403 121.155 25.6056 117.712 20.9968C116.359 19.1856 109.795 15.9057 93.1576 13.4518C84.5616 9.42982 76.1722 4.86955 67.0359 2.2563C59.9916 0.954517 52.3423 0.0228281 43.2103 0.00041946ZM38.9463 2.76892C40.4335 2.77909 41.7977 2.83592 42.917 2.95605L44.7238 14.1262C34.4512 12.9496 23.9834 11.8938 18.4499 7.7732C18.5366 6.50261 20.4236 4.66326 22.5426 3.96004C23.7426 3.56177 32.502 2.72503 38.9465 2.76892H38.9463ZM47.5316 2.84931C53.7333 2.9103 62.9125 3.47075 69.2278 6.06968C72.2533 7.37493 77.9493 10.4299 81.7585 13.1272L80.1841 15.561C69.843 15.1267 56.0614 14.59 50.4051 13.9947L47.5316 2.84931ZM14.9694 28.9112C13.3911 28.9112 11.8775 29.4953 10.7615 30.5351C9.6455 31.5749 9.01854 32.9851 9.01854 34.4556C9.01854 35.9261 9.6455 37.3363 10.7615 38.3761C11.8775 39.4159 13.3911 40 14.9694 40C16.5476 40 18.0612 39.4159 19.1772 38.3761C20.2932 37.3363 20.9202 35.9261 20.9202 34.4556C20.9202 32.9851 20.2932 31.5749 19.1772 30.5351C18.0612 29.4953 16.5476 28.9112 14.9694 28.9112ZM94.3138 28.9112C92.7356 28.9112 91.2219 29.4953 90.1059 30.5351C88.9899 31.5749 88.363 32.9851 88.363 34.4556C88.363 35.9261 88.9899 37.3363 90.1059 38.3761C91.2219 39.4159 92.7356 40 94.3138 40C95.8921 40 97.4057 39.4159 98.5217 38.3761C99.6377 37.3363 100.265 35.9261 100.265 34.4556C100.265 32.9851 99.6377 31.5749 98.5217 30.5351C97.4057 29.4953 95.8921 28.9112 94.3138 28.9112Z"\n            fill="').concat(e[r].color,'"\n        />\n    </svg>\n    <svg\n        class="flag"\n        width="44"\n        height="44"\n        viewBox="0 0 44 44"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <g clip-path="url(#clip0_101_17)">\n            <path\n                d="M16.8674 26.4H4.4V44H0V0H26.4L27.1326 4.4H44L37.4 17.6L44 30.8H17.6L16.8674 26.4Z"\n                fill="url(#paint0_linear_101_17)"\n            />\n        </g>\n        <defs>\n            <linearGradient\n                id="paint0_linear_101_17"\n                x1="22"\n                y1="0"\n                x2="-4"\n                y2="40"\n                gradientUnits="userSpaceOnUse"\n            >\n                <stop offset="0.0074759" stop-color="#FB9D9D" />\n                <stop offset="0.491984" stop-color="#FF0303" />\n                <stop offset="0.918718" stop-color="#4E1414" />\n            </linearGradient>\n            <clipPath id="clip0_101_17">\n                <rect width="44" height="44" fill="white" />\n            </clipPath>\n        </defs>\n    </svg>\n</div>\n</div>');n.innerHTML+='  \n        <section class="pagination">\n            <button>←<span class="flare"></span></button>\n            <h3>(<span id="car-count">1</span>)</h3>\n            <button>→<span class="flare"></span></button>\n        </section>',document.querySelectorAll(".car-delete-button").forEach((function(n){n.addEventListener("click",(function(){try{t.httpModule.deleteCar(Number(n.dataset.deleteCarId)).then((function(t){})).catch((function(t){throw t}))}catch(t){console.log(t)}try{t.httpModule.deleteWinner(Number(n.dataset.deleteCarId)).then((function(t){})).catch((function(t){throw t}))}catch(t){console.log(t)}location.reload()}))})),document.querySelectorAll(".car-select-button").forEach((function(n){n.addEventListener("click",(function(){t.state.setSelectedCar("".concat(n.dataset.selectCarId));var e=document.getElementById("update-input"),r=document.querySelector('[data-model-car-id="'.concat(n.dataset.selectCarId,'"]'));r&&(e.value=r.textContent);var o=document.getElementById("update-color-picker"),a=document.querySelector('[data-color-car-id="'.concat(n.dataset.selectCarId,'"]'));a&&(console.log(null==a?void 0:a.getAttribute("fill")),o.value=null==a?void 0:a.getAttribute("fill"))}))}))}})).catch((function(t){throw t}))}catch(t){console.log(t)}try{this.httpModule.getCars().then((function(n){"object"!=typeof n||n instanceof Error||t.state.setCars(n)})).catch((function(t){throw t}))}catch(t){console.log(t)}return n},t.prototype.addCarConstructorFunctionality=function(){var t=this,n=document.getElementById("create-button");null==n||n.addEventListener("click",(function(){var n=document.getElementById("create-input"),e=document.getElementById("create-color-picker");try{t.httpModule.createCar(n.value,e.value).then((function(t){})).catch((function(t){throw t}))}catch(t){console.log(t)}location.reload()}));var e=document.getElementById("update-button");null==e||e.addEventListener("click",(function(){var n=document.getElementById("update-input"),e=document.getElementById("update-color-picker");try{t.httpModule.updateCar(Number(t.state.getSelectedCar()),n.value,e.value).then((function(t){})).catch((function(t){throw t}))}catch(t){console.log(t)}location.reload()}))},t}(),d=function(){function t(t,n){this.selectedView=c.Garage,this.garageLayout=t,this.winnersLayout=n}return t.prototype.renderHeader=function(){var t=document.createElement("header"),n=document.createElement("h1");return n.textContent="Async-Race",t.appendChild(n),t},t.prototype.renderViewSwitcher=function(){var t=this,n=document.createElement("section");n.classList.add("view-switcher");var e=document.createElement("button");e.textContent="TO GARAGE",e.addEventListener("click",(function(){var n=document.getElementById("view");n&&(n.innerHTML="",n.appendChild(t.garageLayout.generateCarConstructor()),n.appendChild(t.garageLayout.generateCarRace()))}));var r=document.createElement("button");r.textContent="TO WINNERS",r.addEventListener("click",(function(){var n=document.getElementById("view");n&&(n.innerHTML="",n.appendChild(t.winnersLayout.winners()))}));var o=document.createElement("span");return o.classList.add("flare"),e.appendChild(o),r.appendChild(o),n.appendChild(e),n.appendChild(r),n},t}(),p=function(){function t(t){this.state=t,this.httpModule=new u}return t.prototype.winners=function(){var t=this,n=document.createElement("section");n.classList.add("winners");try{this.httpModule.getWinners(1,10).then((function(e){if("object"==typeof e&&!(e instanceof Error)){n.innerHTML='  \n  <div>\n  <h3>WINNERS(<span id="car-count">'.concat(e[0].totalCount,"</span>)</h3>\n</div>"),n.innerHTML+='        \n<section class="winners-sort">\n<button class="clear-button table-button">№</button>\n<button class="clear-button table-button">Car</button>\n<button class="clear-button table-button">Name</button>\n<button class="clear-button table-button">Wins</button>\n<button class="clear-button table-button">Best time(sec)</button>\n</section>';var r=document.createElement("section");r.classList.add("winners-table"),n.appendChild(r);for(var o=t.state.getCars(),a=0;a<e.length;a++)for(var c=0;c<o.length;c++)o[c].id===e[a].id&&(r.innerHTML+='\n              <div class="rating-line">\n              <p class="rating-cell">'.concat(a+1,'</p>\n              <div class="rating-cell">\n              <svg class="car" onclick="this.style.left=\'90%\'" width="40" height="15" viewBox="0 0 120 40" fill="none"\n                  xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M43.2103 0.00041946C36.108 -0.0171378 28.1081 0.515126 18.7977 1.85086C17.6988 1.99409 7.1113 7.62096 4.25688 11.5046C1.40246 15.3884 0.426032 22.7812 0.426032 22.7812C-0.344601 25.8087 0.123532 30.8127 0.338505 31.2992C0.628609 32.3527 2.26757 33.2368 5.08256 33.876C5.41085 29.0115 9.7376 25.221 14.9694 25.2149C20.4471 25.2149 24.8874 29.3525 24.8874 34.4556C24.8839 34.8631 24.8515 35.27 24.7902 35.6735C24.9365 35.6754 25.1026 35.6791 25.2415 35.6805L84.5678 36.1402C84.4555 35.5847 84.398 35.0208 84.396 34.4556C84.396 29.3525 88.8368 25.2149 94.3141 25.2149C99.7918 25.2149 104.232 29.3525 104.232 34.4556C104.232 35.072 104.166 35.6869 104.035 36.2908L119.454 36.4102C119.781 31.1403 121.155 25.6056 117.712 20.9968C116.359 19.1856 109.795 15.9057 93.1576 13.4518C84.5616 9.42982 76.1722 4.86955 67.0359 2.2563C59.9916 0.954517 52.3423 0.0228281 43.2103 0.00041946ZM38.9463 2.76892C40.4335 2.77909 41.7977 2.83592 42.917 2.95605L44.7238 14.1262C34.4512 12.9496 23.9834 11.8938 18.4499 7.7732C18.5366 6.50261 20.4236 4.66326 22.5426 3.96004C23.7426 3.56177 32.502 2.72503 38.9465 2.76892H38.9463ZM47.5316 2.84931C53.7333 2.9103 62.9125 3.47075 69.2278 6.06968C72.2533 7.37493 77.9493 10.4299 81.7585 13.1272L80.1841 15.561C69.843 15.1267 56.0614 14.59 50.4051 13.9947L47.5316 2.84931ZM14.9694 28.9112C13.3911 28.9112 11.8775 29.4953 10.7615 30.5351C9.6455 31.5749 9.01854 32.9851 9.01854 34.4556C9.01854 35.9261 9.6455 37.3363 10.7615 38.3761C11.8775 39.4159 13.3911 40 14.9694 40C16.5476 40 18.0612 39.4159 19.1772 38.3761C20.2932 37.3363 20.9202 35.9261 20.9202 34.4556C20.9202 32.9851 20.2932 31.5749 19.1772 30.5351C18.0612 29.4953 16.5476 28.9112 14.9694 28.9112ZM94.3138 28.9112C92.7356 28.9112 91.2219 29.4953 90.1059 30.5351C88.9899 31.5749 88.363 32.9851 88.363 34.4556C88.363 35.9261 88.9899 37.3363 90.1059 38.3761C91.2219 39.4159 92.7356 40 94.3138 40C95.8921 40 97.4057 39.4159 98.5217 38.3761C99.6377 37.3363 100.265 35.9261 100.265 34.4556C100.265 32.9851 99.6377 31.5749 98.5217 30.5351C97.4057 29.4953 95.8921 28.9112 94.3138 28.9112Z"\n                      fill="').concat(o[c].color,'" />\n              </svg>\n          </div>\n              <p class="rating-cell">').concat(o[c].name,'</p>\n              <p class="rating-cell">').concat(e[a].wins,'</p>\n              <p class="rating-cell">').concat(e[a].time,"</p>\n          </div>"))}"object"!=typeof e||e instanceof Error||(n.innerHTML+='  \n              <section class="pagination">\n                  <button>←<span class="flare"></span></button>\n                  <h3>(<span id="car-count">1</span>)</h3>\n                  <button>→<span class="flare"></span></button>\n              </section>')})).catch((function(t){throw t}))}catch(t){console.log(t)}return n},t}();var h=function(){function t(){this.state=new n,this.garageLayout=new l(this.state),this.winnersLayout=new p(this.state),this.pageHeader=new d(this.garageLayout,this.winnersLayout)}return t.prototype.initPage=function(){var t=document.getElementById("app"),n=document.createElement("div");n.setAttribute("id","view"),null==t||t.appendChild(this.pageHeader.renderHeader()),null==t||t.appendChild(this.pageHeader.renderViewSwitcher()),null==t||t.appendChild(n),n.appendChild(this.garageLayout.generateCarConstructor()),n.appendChild(this.garageLayout.generateCarRace()),this.garageLayout.addCarConstructorFunctionality()},t}();const f=h,g=function(){function t(){this.httpModule=new u,this.pageRender=new f}return t.prototype.start=function(){this.pageRender.initPage()},t}();var m=e(379),v=e.n(m),C=e(767);v()(C.Z,{insert:"head",singleton:!1}),C.Z.locals,(new g).start()})()})();