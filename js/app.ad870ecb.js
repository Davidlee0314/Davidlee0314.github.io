(function(t){function e(e){for(var i,c,r=e[0],s=e[1],l=e[2],p=0,f=[];p<r.length;p++)c=r[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"068d":function(t,e,n){},"0f61":function(t,e,n){t.exports=n.p+"img/shapelined.779c8e20.png"},1687:function(t,e,n){t.exports=n.p+"img/pixnet.ce9f5bf2.jpg"},1771:function(t,e,n){var i={"./bgwhite.jpg":"22a8","./blog.jpg":"7de6","./forkify.png":"5bcd","./louis.jpg":"e496","./majan.jpg":"6ba4","./pixnet.jpg":"1687","./self-pic.jpg":"f67a","./shapelined.jpg":"9d22","./shapelined.png":"0f61"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="1771"},"20fc":function(t,e,n){"use strict";var i=n("068d"),a=n.n(i);a.a},"22a8":function(t,e,n){t.exports=n.p+"img/bgwhite.1aa51377.jpg"},"22e9":function(t,e,n){"use strict";var i=n("c068"),a=n.n(i);a.a},"50b6":function(t,e,n){"use strict";var i=n("e104"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("landing")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing"},[n("div",{staticClass:"dv-menu-btn",on:{click:function(e){t.menubtn=!t.menubtn}}},[n("div",{staticClass:"line one",class:{on:t.menubtn}}),n("div",{staticClass:"line two",class:{on:t.menubtn}}),n("div",{staticClass:"line three",class:{on:t.menubtn}})]),n("div",{staticClass:"dv-background",class:{"shift-left":t.menubtn},on:{click:t.clickBackLanding}},[n("landing-intro",{attrs:{menubtn:t.menubtn}})],1),n("div",{staticClass:"dv-menu",class:{"shift-left-menu":t.menubtn}},[n("landing-menu",{attrs:{menubtn:t.menubtn},on:{clickMenuItem:t.showPage}})],1),n("div",{staticClass:"dv-page-project dv-page",class:{"shift-right-page":1==t.pageOn,"shift-right-slow":0!=t.prePageOn&&1==t.pageOn}},[n("project")],1),n("div",{staticClass:"dv-page-about dv-page",class:{"shift-right-page":2==t.pageOn,"shift-right-slow":0!=t.prePageOn&&2==t.pageOn}}),n("div",{staticClass:"dv-page-contact dv-page",class:{"shift-right-page":3==t.pageOn,"shift-right-slow":0!=t.prePageOn&&3==t.pageOn}})])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing-intro"},[n("div",{staticClass:"pic"}),n("span",{staticClass:"intro-title"},[t._v("Hi! I'm David Lee")]),t._m(0),n("div",{staticClass:"dv-account"},t._l(t.iconList,(function(e,i){return n("a",{key:"icon"+i,class:{disable:t.menubtn},attrs:{href:e.link,target:"_blank"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab",e.name],size:"2x"}})],1)})),0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"intro-para"},[t._v("\n        As an Accounting graduate from National Taiwan University, "),n("br"),t._v("I'm keen on frontend development, machine learning and data analytics.\n    ")])}],u={data:function(){return{iconList:[{name:"github",link:"https://github.com/Davidlee0314"},{name:"codepen",link:"https://codepen.io/DavidLee0314"},{name:"facebook",link:"https://www.facebook.com/profile.php?id=100002614714669&ref=bookmarks"}]}},props:{menubtn:Boolean}},p=u,f=(n("50b6"),n("2877")),d=Object(f["a"])(p,s,l,!1,null,"6737fc26",null),g=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing-menu"},t._l(t.menuItem,(function(e,i){return n("div",{key:e+i,staticClass:"menu-item"},[n("span",{class:{active:t.menuActive[i]},on:{click:function(e){return t.activeMenu(i)}}},[t._v(t._s(e))])])})),0)},v=[],h={data:function(){return{menuItem:["Home","Project","About","Contact"],menuActive:[!0,!1,!1,!1],lastActive:0}},methods:{activeMenu:function(t){void 0!=this.lastActive&&(this.menuActive[this.lastActive]=!1),this.menuActive[t]=!0,this.lastActive=t,this.menuActive=JSON.parse(JSON.stringify(this.menuActive)),this.$emit("clickMenuItem",t)}},watch:{menubtn:function(){this.menubtn||(this.menuActive=[!0,!1,!1,!1],this.lastActive=0)}},props:{menubtn:Boolean}},b=h,j=(n("f1a2"),Object(f["a"])(b,m,v,!1,null,"5f596f2c",null)),k=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-project"},[n("div",{staticClass:"dv-project-list"},t._l(t.projectList,(function(t,e){return n("project-item",{key:"dv-project-item"+e,attrs:{detail:t.detail,image:t.image,color:t.color,link:t.link}})})),1)])},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-project-item"},[n("div",{staticClass:"block",class:{"block-mousein":t.enterBlock},style:{"background-image":t.imageUrl}}),n("div",{staticClass:"cover",class:{mousein:t.enterBlock},style:{"background-color":t.color},on:{mouseenter:function(e){t.enterBlock=!0},mouseleave:function(e){t.enterBlock=!1}}},[n("span",[t._v(t._s(t.detail))]),n("a",{attrs:{href:t.link,target:"_blank"}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fab","github"]}}),t._v("\n            Github Page\n        ")],1)])])},w=[],C={data:function(){return{enterBlock:!1}},computed:{imageUrl:function(){return"url("+n("1771")("./"+this.image)+")"}},props:{detail:{type:String,required:!0},image:{type:String,required:!0},color:{type:String,required:!0},link:{type:String,required:!0}}},x=C,P=(n("20fc"),Object(f["a"])(x,_,w,!1,null,"ca1e12b0",null)),A=P.exports,B={data:function(){return{projectList:[{detail:"It's a blog posts recommendation application for Pixnet hackthon. Build by Vue and Flask.",image:"blog.jpg",color:"#9C528B",link:"https://github.com/Davidlee0314/articles-recommend"},{detail:"A Chinese mahjong game implement in C++, as the final project in programming basic course.",image:"majan.jpg",color:"#1B998B",link:"https://github.com/Davidlee0314/ProgrammingDesign--majanGame"},{detail:"A JavaScript recipe search application, final project of an online course.",image:"forkify.png",color:"#BA3B46",link:"https://github.com/Davidlee0314/JScourse-Forkify"}]}},components:{ProjectItem:A}},S=B,L=(n("22e9"),Object(f["a"])(S,O,y,!1,null,"50f8a1ac",null)),M=L.exports,D={data:function(){return{menubtn:!1,prePageOn:0,pageOn:0}},components:{LandingIntro:g,LandingMenu:k,Project:M},methods:{clickBackLanding:function(){this.menubtn=!1},showPage:function(t){this.prePageOn=this.pageOn,this.pageOn=t,0==this.pageOn&&(this.menubtn=!1)}},watch:{menubtn:function(){this.menubtn||(this.pageOn=0,this.prePageOn=0)}}},E=D,I=(n("9326"),Object(f["a"])(E,c,r,!1,null,"eb0353a0",null)),$=I.exports,J={components:{Landing:$}},N=J,T=(n("7faf"),Object(f["a"])(N,a,o,!1,null,null,null)),U=T.exports,q=n("8c4f");i["a"].use(q["a"]);var F=new q["a"]({mode:"history",base:"/",routes:[]}),G=n("2f62");i["a"].use(G["a"]);var H=new G["a"].Store({state:{},mutations:{},actions:{}}),z=n("ecee"),V=n("f2d1"),K=n("ad3d");z["c"].add(V["c"],V["a"],V["b"]),i["a"].component("font-awesome-icon",K["a"]),i["a"].config.productionTip=!1,new i["a"]({router:F,store:H,render:function(t){return t(U)}}).$mount("#app")},"5bcd":function(t,e,n){t.exports=n.p+"img/forkify.f9293b12.png"},"63ca":function(t,e,n){},"6ba4":function(t,e,n){t.exports=n.p+"img/majan.e8678cae.jpg"},"7de6":function(t,e,n){t.exports=n.p+"img/blog.94f3b578.jpg"},"7faf":function(t,e,n){"use strict";var i=n("8fba"),a=n.n(i);a.a},"85ce":function(t,e,n){},"8fba":function(t,e,n){},9326:function(t,e,n){"use strict";var i=n("63ca"),a=n.n(i);a.a},"9d22":function(t,e,n){t.exports=n.p+"img/shapelined.bfe0cac5.jpg"},c068:function(t,e,n){},e104:function(t,e,n){},e496:function(t,e,n){t.exports=n.p+"img/louis.0d9525ed.jpg"},f1a2:function(t,e,n){"use strict";var i=n("85ce"),a=n.n(i);a.a},f67a:function(t,e,n){t.exports=n.p+"img/self-pic.cd186e28.jpg"}});
//# sourceMappingURL=app.ad870ecb.js.map