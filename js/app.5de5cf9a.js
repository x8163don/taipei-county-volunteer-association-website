(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-463050be":"a2814e3b","chunk-77ba958c":"194fa22d","chunk-7be5acbc":"1e1d252c","chunk-93d2f138":"dc8e4c81","chunk-bfd1018e":"71729381","chunk-2d0b61d7":"77991a88","chunk-6d7d1d02":"5983d6a8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-463050be":1,"chunk-77ba958c":1,"chunk-7be5acbc":1,"chunk-93d2f138":1,"chunk-6d7d1d02":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-463050be":"ec64bd65","chunk-77ba958c":"6deedd5b","chunk-7be5acbc":"45a9e5e4","chunk-93d2f138":"a3e6c4a2","chunk-bfd1018e":"31d6cfe0","chunk-2d0b61d7":"31d6cfe0","chunk-6d7d1d02":"1347496e"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0616":function(e,t,n){e.exports=n.p+"img/logo.257a1b85.png"},"328b":function(e,t,n){},4624:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"main_content"},[t("router-view")],1),t("Footer")],1)},o=[],c=function(){var e=this;e._self._c;return e._m(0)},u=[function(){var e=this,t=e._self._c;return t("header",[t("div",{staticClass:"logo"},[t("a",{attrs:{href:"./index.html"}},[t("img",{attrs:{src:n("0616")}})])]),t("nav",[t("a",{staticClass:"navitem",attrs:{href:"/about"}},[e._v("關於我們")]),t("a",{staticClass:"navitem",attrs:{href:"/activity"}},[e._v("最新消息")]),t("a",{staticClass:"navitem",attrs:{href:"/services"}},[e._v("服務概況")]),t("a",{staticClass:"navitem",attrs:{href:"/volunteer"}},[e._v("志工服務")]),t("a",{staticClass:"navitem",attrs:{href:"/contact"}},[e._v("聯絡我們")]),t("a",{staticClass:"navitem",attrs:{href:"/other"}},[e._v("相關連結")])])])}],i={},s=i,l=(n("5796"),n("2877")),d=Object(l["a"])(s,c,u,!1,null,"1568b314",null),f=d.exports,h=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,t=e._self._c;return t("footer",[t("div",{staticClass:"info"},[t("p",[e._v("社團法人新北市志願服務協會")]),t("br"),e._v(" 地址"),t("br"),e._v(" 220新北市板橋區大智街71巷5弄1號"),t("br"),t("br"),e._v(" 服務時間"),t("br"),e._v(" 週一至週五09:00-18:00 (週六、週日暨國定假日休館)"),t("br"),t("br"),e._v(" 聯絡資訊"),t("br"),e._v(" 電話：(02)8969-7736"),t("br"),e._v(" 傳真：(02)8969-7740"),t("br"),e._v(" 電子信箱：f2725082@ms65.hinet.net"),t("br"),t("br"),e._v(" 立案許可機關字號：北府社團換字第1011040783號"),t("br"),e._v(" 郵政劃撥帳號：19444971 戶名：社團法人新北市志願服務協會"),t("br")]),t("div",{staticClass:"webmap"},[t("ul",[t("p",[e._v("網站地圖")]),t("br"),t("li",[t("a",{attrs:{href:"/activity"}},[e._v("最新消息")])]),t("li",[t("a",{attrs:{href:"/about"}},[e._v("關於我們")])]),t("li",[t("a",{attrs:{href:"/services"}},[e._v("服務概況")])]),t("li",[t("a",{attrs:{href:"/volunteer"}},[e._v("志工服務")])]),t("li",[t("a",{attrs:{href:"/contact"}},[e._v("聯絡我們")])]),t("li",[t("a",{attrs:{href:"/other"}},[e._v("相關連結")])])]),t("div",{staticClass:"img_icon"},[t("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100088832875957"}},[t("img",{attrs:{src:n("8a3d")}})])])])])}],b={},v=b,m=(n("adab"),Object(l["a"])(v,h,p,!1,null,null,null)),k=m.exports,g={components:{Header:f,Footer:k}},A=g,_=(n("ad2e"),Object(l["a"])(A,a,o,!1,null,null,null)),y=_.exports,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),C=function(){return Promise.all([n.e("chunk-bfd1018e"),n.e("chunk-2d0b61d7")]).then(n.bind(null,"1c7f"))},I=function(){return Promise.all([n.e("chunk-bfd1018e"),n.e("chunk-6d7d1d02")]).then(n.bind(null,"61e4"))},P=function(){return n.e("chunk-7be5acbc").then(n.bind(null,"1185"))},j=function(){return n.e("chunk-463050be").then(n.bind(null,"545c"))},E=function(){return n.e("chunk-77ba958c").then(n.bind(null,"5f7d"))},O=function(){return n.e("chunk-93d2f138").then(n.bind(null,"bef2"))};r["a"].use(w["a"]);var G=[{path:"/",name:"Home",component:I},{path:"/about",name:"Introduce",component:P},{path:"/services",name:"ServiceIntro",component:j},{path:"/volunteer",name:"Volunteer",component:O},{path:"/contact",name:"Contact",component:E},{path:"/post/:id",name:"PostDetail",component:C},{path:"*",name:"Home",component:I}],B=new w["a"]({mode:"history",base:"/",routes:G}),D=B,S=(n("d1e78"),n("f309"));r["a"].use(S["a"]);var x=new S["a"]({icons:{iconfont:"md"}});r["a"].config.productionTip=!1,new r["a"]({router:D,vuetify:x,render:function(e){return e(y)}}).$mount("#app")},5796:function(e,t,n){"use strict";n("328b")},"8a3d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAhJJREFUaEPtmlFqwkAQhhvEJ5F6hPRNRMEb1J6g3qD2Br1B7QnqDao38Aa1J7CgiG9NT1ADeQuY/pMmkII62SGaUXZBl002ZL6ZnZnd7DpXSWk2m261Wn1Gs49fI72utN5ArmkYhi/r9dojGR3663Q6A1RvSoXmxHpcLBZjJ7HEF9db831Y5saBNcYQ8kGzoDlkmxDIzxn4BMeyIZCI63UO9y2INiud0iI+4GcU/6MoimP/jtKLc4LjPKG6NlHWKUB8CD4KgmDkeR4lMra02+0ZYG7ZjpkORwUBwPd2u+2vVqtPE6G0gfhIVN10CnG2ILDG3XK5JJ8wLmosAogPQMSOKylqQCB8PJGTQNAzakBoEpfHN1zXbdRqtXtEKDcLjfYA7X/XOKUUHrUoUmFYsUIkS4dXCFjI2ucYIKx/HGPpUAoIfGCI4UOr0cJKWSDGmZsjtiD7NJQnh0jCq7UIpwFrEWHm5hQrcvY8fsC9eN99yvb1ep0+iBgVdSAIBD3kmHcjCnRWByL96qkORJr1NYKIsr5GkDl8pHsJPiL68qnKIq1Wq1upVOam1qD+IpBDL8qTY+xc64AGrUXspFHTpNE6e6IBG7Vs1BKkWJsQBUrLPnJRCZH29Yw2HhWGX7/wIxwl+cik8EM1ZYDEh2pomEgX/LuGWAkgf8ecUmGSPYsh2nTwTOwzJwKhwwd08GyY7oz9AtoHw52T/ZFsAAAAAElFTkSuQmCC"},ad2e:function(e,t,n){"use strict";n("4624")},adab:function(e,t,n){"use strict";n("b193")},b193:function(e,t,n){}});