(function(n){function e(e){for(var c,r,a=e[0],i=e[1],d=e[2],f=0,h=[];f<a.length;f++)r=a[f],u[r]&&h.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-06a5286c":"c6746370","chunk-07fe9e61":"9678c9ba","chunk-19a8e4ba":"90d2b630","chunk-1a9b039e":"288378a4","chunk-20a7a6ba":"89a023f3","chunk-20d8745d":"e72299e6","chunk-24aa3508":"9d611b2d","chunk-26251c40":"c7f8df42","chunk-3b1c3c36":"5496b54d","chunk-57b8f6cc":"13d20979","chunk-7dffd3da":"d89c5d80","chunk-85280be2":"69278921","chunk-9c57c57a":"ea04dc88","chunk-b3ebe714":"9c261255","chunk-d0d2ae12":"c2822b9f","chunk-d4f4b3d8":"8bf7b5d7"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-06a5286c":1,"chunk-07fe9e61":1,"chunk-19a8e4ba":1,"chunk-1a9b039e":1,"chunk-20a7a6ba":1,"chunk-20d8745d":1,"chunk-24aa3508":1,"chunk-26251c40":1,"chunk-3b1c3c36":1,"chunk-57b8f6cc":1,"chunk-7dffd3da":1,"chunk-85280be2":1,"chunk-9c57c57a":1,"chunk-b3ebe714":1,"chunk-d0d2ae12":1,"chunk-d4f4b3d8":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-06a5286c":"5607420b","chunk-07fe9e61":"35b5bdb3","chunk-19a8e4ba":"c1376496","chunk-1a9b039e":"81eeffdd","chunk-20a7a6ba":"7c15e38a","chunk-20d8745d":"4589cc95","chunk-24aa3508":"2444d922","chunk-26251c40":"1619a43c","chunk-3b1c3c36":"99e851c4","chunk-57b8f6cc":"660d5521","chunk-7dffd3da":"61671f2c","chunk-85280be2":"99e851c4","chunk-9c57c57a":"ee0f64b3","chunk-b3ebe714":"d1bab117","chunk-d0d2ae12":"7d8752e8","chunk-d4f4b3d8":"815078f8"}[n]+".css",u=i.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var d=o[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===c||f===u))return e()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){d=h[a],f=d.getAttribute("data-href");if(f===c||f===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[n]=0}));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise(function(e,t){c=u[n]=[e,t]});e.push(c[2]=o);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(n),d=function(e){f.onerror=f.onload=null,clearTimeout(h);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+c+": "+r+")");o.type=c,o.request=r,t[1](o)}u[n]=void 0}};var h=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=e,d=d.slice();for(var h=0;h<d.length;h++)e(d[h]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("64a9"),r=t.n(c);r.a},4805:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("14c6"),t("08c1"),t("4842"),t("d9fc");var c=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],o={name:"app"},a=o,i=(t("034f"),t("2877")),d=Object(i["a"])(a,r,u,!1,null,null,null),f=d.exports,h=t("8c4f");c["default"].use(h["a"]);var l=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return t.e("chunk-57b8f6cc").then(t.bind(null,"0f93"))}},{path:"/form",component:function(){return t.e("chunk-20d8745d").then(t.bind(null,"3004"))},children:[{path:"sign-in",name:"sign-in",component:function(){return t.e("chunk-d4f4b3d8").then(t.bind(null,"677f"))}},{path:"sign-up",name:"sign-up",component:function(){return t.e("chunk-24aa3508").then(t.bind(null,"5ace"))}},{path:"sign-up-pay",name:"sign-up-pay",component:function(){return t.e("chunk-7dffd3da").then(t.bind(null,"d3fd"))}},{path:"recovery",name:"recovery",component:function(){return t.e("chunk-06a5286c").then(t.bind(null,"8263"))}},{path:"success-vebinar",name:"success-vebinar",component:function(){return t.e("chunk-9c57c57a").then(t.bind(null,"4a7a"))}}]},{path:"/product",component:function(){return t.e("chunk-b3ebe714").then(t.bind(null,"b2ba"))},children:[{path:"vebinar",name:"vebinar",component:function(){return t.e("chunk-07fe9e61").then(t.bind(null,"3520"))}},{path:"product-free",name:"product free",component:function(){return t.e("chunk-1a9b039e").then(t.bind(null,"7e3f"))}},{path:"product-payment",name:"product payment",component:function(){return t.e("chunk-d0d2ae12").then(t.bind(null,"d5e1"))}}]},{path:"/course",component:function(){return t.e("chunk-20a7a6ba").then(t.bind(null,"121e"))},children:[{path:"landing",name:"landing",component:function(){return t.e("chunk-26251c40").then(t.bind(null,"5d73"))}},{path:"room",name:"room",component:function(){return t.e("chunk-85280be2").then(t.bind(null,"66ef"))}}]},{path:"/author",component:function(){return t.e("chunk-19a8e4ba").then(t.bind(null,"1b2b"))},children:[{path:"account",name:"account",component:function(){return t.e("chunk-3b1c3c36").then(t.bind(null,"4c16"))}}]}]}),p=t("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var s=t("5c96"),b=t.n(s),k=t("dccd"),m=t.n(k);c["default"].use(b.a,{locale:m.a});t("4805"),t("e05f"),t("c50f"),t("ce21");var g=t("ca95");c["default"].config.productionTip=!1,c["default"].prototype.$isTChat=!1,c["default"].use(g,{name:"v-touch"}),new c["default"]({router:l,render:function(n){return n(f)}}).$mount("#app")},"64a9":function(n,e,t){},c50f:function(n,e,t){},ce21:function(n,e,t){}});
//# sourceMappingURL=app.47ffcbcf.js.map