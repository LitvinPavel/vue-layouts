(function(n){function e(e){for(var c,u,a=e[0],f=e[1],i=e[2],h=0,d=[];h<a.length;h++)u=a[h],r[u]&&d.push(r[u][0]),r[u]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(n[c]=f[c]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,u=1;u<t.length;u++){var a=t[u];0!==r[a]&&(c=!1)}c&&(o.splice(e--,1),n=f(f.s=t[0]))}return n}var c={},u={app:0},r={app:0},o=[];function a(n){return f.p+"js/"+({}[n]||n)+"."+{"chunk-07fe9e61":"a850c233","chunk-0a197b96":"a6d6f79a","chunk-17eff36a":"61654fa7","chunk-1a9b039e":"a0fa625d","chunk-20d8745d":"082dbfc3","chunk-236b9f3c":"1386ebab","chunk-24aa3508":"a1c65f7d","chunk-2f4ad5c4":"98ba9226","chunk-2f619ae3":"9adcc039","chunk-489a182e":"76737db1","chunk-57b8f6cc":"133129ad","chunk-6452bef4":"541cb5e0","chunk-6ea41fee":"c16dac03","chunk-72072d54":"be99df27","chunk-85280be2":"fa8752c8","chunk-98f7e128":"7c3f92fa","chunk-ce662848":"38abd58e","chunk-d4f4b3d8":"432bff25","chunk-d7cb6b00":"253d9c5e","chunk-ebca3d20":"c5891201"}[n]+".js"}function f(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(n){var e=[],t={"chunk-07fe9e61":1,"chunk-0a197b96":1,"chunk-17eff36a":1,"chunk-1a9b039e":1,"chunk-20d8745d":1,"chunk-236b9f3c":1,"chunk-24aa3508":1,"chunk-2f4ad5c4":1,"chunk-2f619ae3":1,"chunk-489a182e":1,"chunk-57b8f6cc":1,"chunk-6452bef4":1,"chunk-6ea41fee":1,"chunk-72072d54":1,"chunk-85280be2":1,"chunk-98f7e128":1,"chunk-ce662848":1,"chunk-d4f4b3d8":1,"chunk-d7cb6b00":1,"chunk-ebca3d20":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-07fe9e61":"39c482c6","chunk-0a197b96":"e404f02d","chunk-17eff36a":"adaf82e4","chunk-1a9b039e":"043d09b9","chunk-20d8745d":"471a3d1c","chunk-236b9f3c":"c8e9d8a3","chunk-24aa3508":"bba83d4d","chunk-2f4ad5c4":"747db332","chunk-2f619ae3":"04340d86","chunk-489a182e":"00dab57e","chunk-57b8f6cc":"660d5521","chunk-6452bef4":"3fbf2589","chunk-6ea41fee":"13270972","chunk-72072d54":"51879779","chunk-85280be2":"02290471","chunk-98f7e128":"c08ac9e2","chunk-ce662848":"00e33b5e","chunk-d4f4b3d8":"8542f192","chunk-d7cb6b00":"a40cdcf0","chunk-ebca3d20":"02fbf448"}[n]+".css",r=f.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===r))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],h=i.getAttribute("data-href");if(h===c||h===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete u[n],l.parentNode.removeChild(l),t(o)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){u[n]=0}));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise(function(e,t){c=r[n]=[e,t]});e.push(c[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,f.nc&&h.setAttribute("nonce",f.nc),h.src=a(n),i=function(e){h.onerror=h.onload=null,clearTimeout(d);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");o.type=c,o.request=u,t[1](o)}r[n]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:h})},12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(e)},f.m=n,f.c=c,f.d=function(n,e,t){f.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},f.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},f.t=function(n,e){if(1&e&&(n=f(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)f.d(t,c,function(e){return n[e]}.bind(null,c));return t},f.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return f.d(e,"a",e),e},f.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},f.p="/",f.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("64a9"),u=t.n(c);u.a},4805:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("14c6"),t("08c1"),t("4842"),t("d9fc");var c=t("2b0e"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={name:"app"},a=o,f=(t("034f"),t("2877")),i=Object(f["a"])(a,u,r,!1,null,null,null),h=i.exports,d=t("8c4f");c["default"].use(d["a"]);var l=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return t.e("chunk-57b8f6cc").then(t.bind(null,"0f93"))}},{path:"/form",component:function(){return t.e("chunk-20d8745d").then(t.bind(null,"3004"))},children:[{path:"sign-in",name:"sign-in",component:function(){return t.e("chunk-d4f4b3d8").then(t.bind(null,"677f"))}},{path:"sign-up",name:"sign-up",component:function(){return t.e("chunk-24aa3508").then(t.bind(null,"5ace"))}},{path:"sign-up-pay",name:"sign-up-pay",component:function(){return t.e("chunk-0a197b96").then(t.bind(null,"d3fd"))}},{path:"recovery",name:"recovery",component:function(){return t.e("chunk-6452bef4").then(t.bind(null,"8263"))}},{path:"success-vebinar",name:"success-vebinar",component:function(){return t.e("chunk-72072d54").then(t.bind(null,"4a7a"))}}]},{path:"/product",component:function(){return t.e("chunk-236b9f3c").then(t.bind(null,"b2ba"))},children:[{path:"vebinar",name:"vebinar",component:function(){return t.e("chunk-07fe9e61").then(t.bind(null,"3520"))}},{path:"product-free",name:"product free",component:function(){return t.e("chunk-1a9b039e").then(t.bind(null,"7e3f"))}},{path:"product-payment",name:"product payment",component:function(){return t.e("chunk-6ea41fee").then(t.bind(null,"d5e1"))}}]},{path:"/course",component:function(){return t.e("chunk-d7cb6b00").then(t.bind(null,"121e"))},children:[{path:"landing",name:"landing",component:function(){return t.e("chunk-ebca3d20").then(t.bind(null,"5d73"))}},{path:"room",name:"room",component:function(){return t.e("chunk-85280be2").then(t.bind(null,"66ef"))}}]},{path:"/author",component:function(){return t.e("chunk-ce662848").then(t.bind(null,"1b2b"))},children:[{path:"account",name:"account",component:function(){return t.e("chunk-489a182e").then(t.bind(null,"4c16"))}},{path:"index-page",name:"index-page",component:function(){return t.e("chunk-98f7e128").then(t.bind(null,"1fc5"))}},{path:"news",name:"news",component:function(){return t.e("chunk-17eff36a").then(t.bind(null,"e761"))}},{path:"settings",name:"settings",component:function(){return t.e("chunk-2f619ae3").then(t.bind(null,"f9ea"))}},{path:"lesson-page",name:"lesson-page",component:function(){return t.e("chunk-2f4ad5c4").then(t.bind(null,"a149"))}}]}]}),p=t("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var s=t("5c96"),b=t.n(s),k=t("dccd"),m=t.n(k);c["default"].use(b.a,{locale:m.a});t("4805"),t("e05f"),t("c50f"),t("ce21"),t("e9b4");var g=t("ca95");c["default"].config.productionTip=!1,c["default"].prototype.$isTChat=!1,c["default"].use(g,{name:"v-touch"}),new c["default"]({router:l,render:function(n){return n(h)}}).$mount("#app")},"64a9":function(n,e,t){},c50f:function(n,e,t){},ce21:function(n,e,t){},e9b4:function(n,e,t){}});
//# sourceMappingURL=app.f3cb28a6.js.map