(function(n){function e(e){for(var c,r,a=e[0],i=e[1],f=e[2],d=0,h=[];d<a.length;d++)r=a[d],u[r]&&h.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-07fe9e61":"a850c233","chunk-0a197b96":"a6d6f79a","chunk-1a9b039e":"a0fa625d","chunk-20d8745d":"082dbfc3","chunk-236b9f3c":"1386ebab","chunk-24aa3508":"a1c65f7d","chunk-489a182e":"76737db1","chunk-57b8f6cc":"7546eb0a","chunk-59283a1a":"bc3e313b","chunk-6452bef4":"541cb5e0","chunk-6ea41fee":"c16dac03","chunk-72072d54":"be99df27","chunk-85280be2":"fa8752c8","chunk-d4f4b3d8":"432bff25","chunk-d7cb6b00":"253d9c5e","chunk-ebca3d20":"c5891201"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-07fe9e61":1,"chunk-0a197b96":1,"chunk-1a9b039e":1,"chunk-20d8745d":1,"chunk-236b9f3c":1,"chunk-24aa3508":1,"chunk-489a182e":1,"chunk-57b8f6cc":1,"chunk-59283a1a":1,"chunk-6452bef4":1,"chunk-6ea41fee":1,"chunk-72072d54":1,"chunk-85280be2":1,"chunk-d4f4b3d8":1,"chunk-d7cb6b00":1,"chunk-ebca3d20":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-07fe9e61":"39c482c6","chunk-0a197b96":"e404f02d","chunk-1a9b039e":"043d09b9","chunk-20d8745d":"471a3d1c","chunk-236b9f3c":"c8e9d8a3","chunk-24aa3508":"bba83d4d","chunk-489a182e":"00dab57e","chunk-57b8f6cc":"660d5521","chunk-59283a1a":"8dbe133e","chunk-6452bef4":"3fbf2589","chunk-6ea41fee":"13270972","chunk-72072d54":"51879779","chunk-85280be2":"02290471","chunk-d4f4b3d8":"8542f192","chunk-d7cb6b00":"a40cdcf0","chunk-ebca3d20":"02fbf448"}[n]+".css",u=i.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var f=o[a],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===c||d===u))return e()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){f=h[a],d=f.getAttribute("data-href");if(d===c||d===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[n]=0}));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise(function(e,t){c=u[n]=[e,t]});e.push(c[2]=o);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(n),f=function(e){d.onerror=d.onload=null,clearTimeout(h);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+c+": "+r+")");o.type=c,o.request=r,t[1](o)}u[n]=void 0}};var h=setTimeout(function(){f({type:"timeout",target:d})},12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var h=0;h<f.length;h++)e(f[h]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("64a9"),r=t.n(c);r.a},4805:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("14c6"),t("08c1"),t("4842"),t("d9fc");var c=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],o={name:"app"},a=o,i=(t("034f"),t("2877")),f=Object(i["a"])(a,r,u,!1,null,null,null),d=f.exports,h=t("8c4f");c["default"].use(h["a"]);var l=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return t.e("chunk-57b8f6cc").then(t.bind(null,"0f93"))}},{path:"/form",component:function(){return t.e("chunk-20d8745d").then(t.bind(null,"3004"))},children:[{path:"sign-in",name:"sign-in",component:function(){return t.e("chunk-d4f4b3d8").then(t.bind(null,"677f"))}},{path:"sign-up",name:"sign-up",component:function(){return t.e("chunk-24aa3508").then(t.bind(null,"5ace"))}},{path:"sign-up-pay",name:"sign-up-pay",component:function(){return t.e("chunk-0a197b96").then(t.bind(null,"d3fd"))}},{path:"recovery",name:"recovery",component:function(){return t.e("chunk-6452bef4").then(t.bind(null,"8263"))}},{path:"success-vebinar",name:"success-vebinar",component:function(){return t.e("chunk-72072d54").then(t.bind(null,"4a7a"))}}]},{path:"/product",component:function(){return t.e("chunk-236b9f3c").then(t.bind(null,"b2ba"))},children:[{path:"vebinar",name:"vebinar",component:function(){return t.e("chunk-07fe9e61").then(t.bind(null,"3520"))}},{path:"product-free",name:"product free",component:function(){return t.e("chunk-1a9b039e").then(t.bind(null,"7e3f"))}},{path:"product-payment",name:"product payment",component:function(){return t.e("chunk-6ea41fee").then(t.bind(null,"d5e1"))}}]},{path:"/course",component:function(){return t.e("chunk-d7cb6b00").then(t.bind(null,"121e"))},children:[{path:"landing",name:"landing",component:function(){return t.e("chunk-ebca3d20").then(t.bind(null,"5d73"))}},{path:"room",name:"room",component:function(){return t.e("chunk-85280be2").then(t.bind(null,"66ef"))}}]},{path:"/author",component:function(){return t.e("chunk-59283a1a").then(t.bind(null,"1b2b"))},children:[{path:"account",name:"account",component:function(){return t.e("chunk-489a182e").then(t.bind(null,"4c16"))}}]}]}),p=t("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var s=t("5c96"),b=t.n(s),k=t("dccd"),m=t.n(k);c["default"].use(b.a,{locale:m.a});t("4805"),t("e05f"),t("c50f"),t("ce21");var g=t("ca95");c["default"].config.productionTip=!1,c["default"].prototype.$isTChat=!1,c["default"].use(g,{name:"v-touch"}),new c["default"]({router:l,render:function(n){return n(d)}}).$mount("#app")},"64a9":function(n,e,t){},c50f:function(n,e,t){},ce21:function(n,e,t){}});
//# sourceMappingURL=app.b6d16ca5.js.map