var __wpo = {"assets":{"main":["./bundle.js","./style.css","./style.css.map","./","./manifest.json","./favicon.ico"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"a18aa36884e2cd17113df9245dcf18ffec6d2c74":"./bundle.js","0ade2d0cc8a8b14c952a3d0737db805676fbe8f3":"./style.css","7cc595a5f512c0501ef0288229c0dedeb383f8cd":"./style.css.map","b464473ddf2977b58becdcc298cbb8c37feb5626":"./","f1bd6001b16b2ffa115efa0271af353470e58c97":"./manifest.json","5bc4a5adc67e3675fb9ff243dd9d8b095a18976e":"./favicon.ico"},"strategy":"changed","responseStrategy":"cache-first","version":"6/8/2020, 10:18:09 PM","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="./",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a(t)?t:u(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function i(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function o(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function c(e,n){n.forEach(function(){})}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,i=t.get(r);return i?void i.push(Promise.resolve(n)):(i=[Promise.resolve(n)],t.set(r,i),e.call(r,Promise.resolve().then(function e(){var n=i.length;return Promise.all(i.map(function(e){return e.catch(function(){})})).then(function(){return i.length!=n?e():(t.delete(r),Promise.all(i))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===s)var s=!1;!function(e,n){function t(){if(!b.additional.length)return Promise.resolve();var e=void 0;return e="changed"===U?s("additional"):a("additional"),e.catch(function(){})}function a(n){var t=b[n];return caches.open(j).then(function(r){return y(r,t,{bust:e.version,request:L,failAll:"main"===n})}).then(function(){c("Cached assets: "+n,t)}).catch(function(e){throw e})}function s(n){return l().then(function(t){if(!t)return a(n);var r=t[0],i=t[1],o=t[2],u=o.hashmap,s=o.version;if(!o.hashmap||s===e.version)return a(n);var f=Object.keys(u).map(function(e){return u[e]}),l=i.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",""+n}),h=b[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===f.indexOf(e)});Object.keys(k).forEach(function(e){var n=k[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=u[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),c("Changed assets: "+n,p),c("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(j).then(function(t){var r=v.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,y(t,p,{bust:e.version,request:L,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function f(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(_)&&0!==e.indexOf(j))return caches.delete(e)});return Promise.all(n)})}function l(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(_)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(""+new URL(A,location))}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function h(){return caches.open(j).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:k}));return n.put(""+new URL(A,location),t)})}function d(e,n,t){return v(e),r(t,j).then(function(r){return r||fetch(e.request).then(function(r){return r.ok?(t===n&&function(){var t=r.clone(),i=caches.open(j).then(function(e){return e.put(n,t)}).then(function(){});e.waitUntil(i)}(),r):r})})}function p(e,n,t){return q(e).then(function(e){if(e.ok)return e;throw e}).catch(function(e){return r(t,j).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}function v(e){if(O&&"function"==typeof O.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=O.map(new URL(e.request.url),e.request);n&&m(n,e)}}function m(e,n){var t=new URL(e,location),r=n.preloadResponse;T.set(r,{url:t,response:r});var i=function(){return T.has(r)};n.waitUntil(r.then(function(e){if(e&&i()){var n=e.clone();return caches.open(M).then(function(e){if(i())return e.put(t,n).then(function(){if(!i())return caches.open(M).then(function(e){return e.delete(t)})})})}}))}function g(e){if(T){var n=void 0,t=void 0;return T.forEach(function(r,i){r.url.href===e.href&&(n=r.response,t=i)}),n?(T.delete(t),n):void 0}}function w(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&O&&O.test&&O.test(n,e.request)){var t=g(n),i=e.request;return t?(e.waitUntil(caches.open(M).then(function(e){return e.delete(i)})),t):r(i,M).then(function(n){return n&&e.waitUntil(caches.open(M).then(function(e){return e.delete(i)})),n||fetch(e.request)})}}function y(e,n,t){n=n.slice();var r=t.bust,o=!1!==t.failAll,a=!0===t.deleteFirst,c=t.request||{credentials:"omit",mode:"cors"},s=Promise.resolve();return a&&(s=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){return r&&(e=i(e,r)),fetch(e,c).then(u).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return o&&t.some(function(e){return e.error})?Promise.reject(Error("Wrong response status")):(o||(t=t.filter(function(e,t){return!e.error||(n.splice(t,1),!1)})),s.then(function(){var r=t.map(function(t,r){return e.put(n[r],t.response)});return Promise.all(r)}))})}function P(e){var n=e.url,t=new URL(n),r=void 0;r=o(e)?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var i=0;x.length>i;i++){var a=x[i];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(r))){var u=void 0;if((u="function"==typeof a.match?a.match(t,e):n.replace(a.match,a.to))&&u!==n)return u}}}function q(e){return e.preloadResponse&&!0===O?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}var x=n.cacheMaps,O=n.navigationPreload,U=e.strategy,R=e.responseStrategy,b=e.assets,k=e.hashesMap,E=e.externals,L=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},_=e.name,W=e.version,j=_+":"+W,M=_+"$preload",A="__offline_webpack__data";!function(){Object.keys(b).forEach(function(e){b[e]=b[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===E.indexOf(e)&&(n.search=""),""+n})}),k=Object.keys(k).reduce(function(e,n){var t=new URL(k[n],location);return t.search="",t.hash="",e[n]=""+t,e},{}),E=E.map(function(e){var n=new URL(e,location);return n.hash="",""+n})}();var F=[].concat(b.main,b.additional,b.optional);self.addEventListener("install",function(e){var n=void 0;n="changed"===U?s("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){var n=t();n=n.then(h),n=n.then(f),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),O&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var t=""+n;-1===E.indexOf(t)&&(n.search="",t=""+n);var r=-1!==F.indexOf(t),i=t;if(!r){var o=P(e.request);o&&(i=o,r=!0)}if(r){var a=void 0;a="network-first"===R?p(e,t,i):d(e,t,i),e.respondWith(a)}else{if("navigate"===e.request.mode&&!0===O)return void e.respondWith(q(e));if(O){var u=w(e);if(u)return void e.respondWith(u)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var T=new Map}(__wpo,{loaders:{},cacheMaps:[{match:/.*/,to:"/",requestTypes:["navigate"]}],navigationPreload:!1}),e.exports=t(1)},function(){}]);