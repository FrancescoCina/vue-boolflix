(function(i){function e(e){for(var n,o,s=e[0],c=e[1],I=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,I||[]),t()}function t(){for(var i,e=0;e<a.length;e++){for(var t=a[e],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),i=o(o.s=t[0]))}return i}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=i,o.c=n,o.d=function(i,e,t){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)o.d(t,n,function(e){return i[e]}.bind(null,n));return t},o.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var I=0;I<s.length;I++)e(s[I]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"00b9":function(i,e,t){},"06cf1":function(i,e,t){"use strict";t("9d96")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"52ec":function(i,e,t){"use strict";t("00b9")},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{on:{passToApp:i.catchSearchTerm}}),t("Contents",{attrs:{movies:i.movies}})],1)},a=[],o=(t("99af"),t("bc3a")),s=t.n(o),c=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("header",[t("div",{staticClass:"h-100 container"},[t("div",{staticClass:"row h-100 justify-content-between align-items-center"},[t("div",{staticClass:"col"},[i._v("LOGO")]),t("div",{staticClass:"col"},[t("Search",{on:{passUserTerm:i.passToHeader}})],1)])])])},I=[],u=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"input-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.userResearch,expression:"userResearch"}],attrs:{placeholder:"Cerca il tuo contenuto",type:"search"},domProps:{value:i.userResearch},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.$emit("passUserTerm",i.userResearch)},input:function(e){e.target.composing||(i.userResearch=e.target.value)}}}),t("button",{on:{click:function(e){return i.$emit("passUserTerm",i.userResearch)}}},[i._v("Cerca")])])},l=[],f={name:"Search",data:function(){return{userResearch:""}}},A=f,v=t("2877"),p=Object(v["a"])(A,u,l,!1,null,null,null),g=p.exports,m={name:"Header",components:{Search:g},data:function(){return{termFromSearch:""}},methods:{passToHeader:function(i){this.termFromSearch=i,this.$emit("passToApp",this.termFromSearch)}}},d=m,h=(t("52ec"),Object(v["a"])(d,c,I,!1,null,"463fefc6",null)),C=h.exports,b=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("main",[t("div",{staticClass:"container"},[0==i.movies.length?t("div",{staticClass:"p-5"},[t("p",{staticClass:"error p-2"},[i._v("La tua ricerca non ha prodotto risultati")])]):t("div",[t("Card",{attrs:{movies:i.movies}})],1)])])},w=[],y=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"card-container"},i._l(i.movies,(function(e){return t("ul",{key:e.id,staticClass:"py-5"},[t("li",[t("div",{staticClass:"img-container"},[t("img",{staticClass:"img-fluid",attrs:{src:i.getUrlPoster(e.poster_path),alt:e.title||e.name}})])]),t("li",[i._v(i._s(e.title||e.name))]),e.title!==e.original_title||e.name!==e.original_name?t("li",[i._v(" "+i._s(e.original_title||e.original_name)+" ")]):i._e(),t("li",{staticClass:"flag-container"},[i.flags.includes(e.original_language)?t("img",{staticClass:"img-fluid",attrs:{src:i.printFlag(e.original_language),alt:e.original_title||e.original_name}}):t("span",{domProps:{textContent:i._s(e.original_language)}})]),t("li",[i._v(i._s(e.vote_average))])])})),0)},E=[],O={name:"Card",props:["movies"],data:function(){return{originalLanguage:"",flags:["en","it"],baseImgPath:"https://image.tmdb.org/t/p/w342"}},methods:{printFlag:function(i){return t("b967")("./".concat(i,".png"))},getUrlPoster:function(i){return this.baseImgPath+i}}},j=O,F=(t("fe3b"),Object(v["a"])(j,y,E,!1,null,"4aa662b0",null)),M=F.exports,P={name:"Contents",components:{Card:M},props:["movies"]},x=P,B=(t("06cf1"),Object(v["a"])(x,b,w,!1,null,"74602352",null)),S=B.exports,U={name:"App",components:{Header:C,Contents:S},data:function(){return{termFromHeader:"",baseUri:"https://api.themoviedb.org/3",apiKey:"7cc65adcc4f7b2a8a3bef496a2b1b091",movies:{}}},methods:{catchSearchTerm:function(i){this.termFromHeader=i,this.getMoviesFromApi(),this.getSeriesFromApi()},getMoviesFromApi:function(){var i=this;s.a.get("".concat(this.baseUri,"/search/movie?api_key=").concat(this.apiKey,"&query=").concat(this.termFromHeader)).then((function(e){i.movies=e.data.results,console.log(i.movies)}))},getSeriesFromApi:function(){var i=this;s.a.get("".concat(this.baseUri,"/search/tv?api_key=").concat(this.apiKey,"&query=").concat(this.termFromHeader)).then((function(e){i.movies=e.data.results,console.log(i.movies)}))}}},Q=U,X=(t("5c0b"),Object(v["a"])(Q,r,a,!1,null,null,null)),D=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(D)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},"9c0c":function(i,e,t){},"9d96":function(i,e,t){},a44c:function(i,e,t){},b967:function(i,e,t){var n={"./en.png":"17b5","./it.png":"e33f"};function r(i){var e=a(i);return t(e)}function a(i){if(!t.o(n,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=a,i.exports=r,r.id="b967"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},fe3b:function(i,e,t){"use strict";t("a44c")}});
//# sourceMappingURL=app.93a633d9.js.map