(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f61":function(t,e,n){t.exports=n.p+"img/shapelined.779c8e20.png"},1687:function(t,e,n){t.exports=n.p+"img/pixnet.ce9f5bf2.jpg"},1771:function(t,e,n){var a={"./bgwhite.jpg":"22a8","./blog.jpg":"7de6","./forkify.png":"5bcd","./louis.jpg":"e496","./majan.jpg":"6ba4","./pixnet.jpg":"1687","./self-pic.jpg":"f67a","./shapelined.jpg":"9d22","./shapelined.png":"0f61"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="1771"},"1d63":function(t,e,n){},"22a8":function(t,e,n){t.exports=n.p+"img/bgwhite.1aa51377.jpg"},"4ea2":function(t,e,n){"use strict";var a=n("add2"),i=n.n(a);i.a},"50b6":function(t,e,n){"use strict";var a=n("e104"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("landing")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing"},[n("div",{staticClass:"dv-menu-btn",on:{click:function(e){t.menubtn=!t.menubtn}}},[n("div",{staticClass:"line one",class:{on:t.menubtn}}),n("div",{staticClass:"line two",class:{on:t.menubtn}}),n("div",{staticClass:"line three",class:{on:t.menubtn}})]),n("div",{staticClass:"dv-background",class:{"shift-left":t.menubtn},on:{click:t.clickBackLanding}},[n("landing-intro",{attrs:{menubtn:t.menubtn}})],1),n("div",{staticClass:"dv-menu",class:{"shift-left-menu":t.menubtn}},[n("landing-menu",{attrs:{menubtn:t.menubtn},on:{clickMenuItem:t.showPage}})],1),n("div",{staticClass:"dv-page-project dv-page",class:{"shift-right-page":1==t.pageOn,"shift-right-slow":0!=t.prePageOn&&1==t.pageOn}},[n("project")],1),n("div",{staticClass:"dv-page-about dv-page",class:{"shift-right-page":2==t.pageOn,"shift-right-slow":0!=t.prePageOn&&2==t.pageOn}}),n("div",{staticClass:"dv-page-contact dv-page",class:{"shift-right-page":3==t.pageOn,"shift-right-slow":0!=t.prePageOn&&3==t.pageOn}},[n("contact")],1)])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing-intro"},[n("div",{staticClass:"pic"}),n("span",{staticClass:"intro-title"},[t._v("Hi! I'm David Lee")]),t._m(0),n("div",{staticClass:"dv-account"},t._l(t.iconList,(function(e,a){return n("a",{key:"icon"+a,class:{disable:t.menubtn},attrs:{href:e.link,target:"_blank"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab",e.name],size:"2x"}})],1)})),0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"intro-para"},[t._v("\n        As an Accounting graduate from National Taiwan University, "),n("br"),t._v("I'm keen on frontend development, machine learning and data analytics.\n    ")])}],u={data:function(){return{iconList:[{name:"github",link:"https://github.com/Davidlee0314"},{name:"codepen",link:"https://codepen.io/DavidLee0314"},{name:"facebook",link:"https://www.facebook.com/profile.php?id=100002614714669&ref=bookmarks"}]}},props:{menubtn:Boolean}},p=u,f=(n("50b6"),n("2877")),d=Object(f["a"])(p,c,l,!1,null,"6737fc26",null),m=d.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-landing-menu"},t._l(t.menuItem,(function(e,a){return n("div",{key:e+a,staticClass:"menu-item"},[n("span",{class:{active:t.menuActive[a]},on:{click:function(e){return t.activeMenu(a)}}},[t._v(t._s(e)+"\n            "),n("div",{staticClass:"line"})])])})),0)},v=[],b={data:function(){return{menuItem:["Home","Project","About","Contact"],menuActive:[!0,!1,!1,!1],lastActive:0}},methods:{activeMenu:function(t){void 0!=this.lastActive&&(this.menuActive[this.lastActive]=!1),this.menuActive[t]=!0,this.lastActive=t,this.menuActive=JSON.parse(JSON.stringify(this.menuActive)),this.$emit("clickMenuItem",t)}},watch:{menubtn:function(){this.menubtn||(this.menuActive=[!0,!1,!1,!1],this.lastActive=0)}},props:{menubtn:Boolean}},h=b,j=(n("73f9"),Object(f["a"])(h,g,v,!1,null,"bedebb7a",null)),k=j.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-project"},[n("div",{staticClass:"dv-project-list"},t._l(t.projectList,(function(t,e){return n("project-item",{key:"dv-project-item"+e,attrs:{detail:t.detail,image:t.image,color:t.color,link:t.link}})})),1)])},y=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-project-item"},[n("div",{staticClass:"block",class:{"block-mousein":t.enterBlock},style:{"background-image":t.imageUrl}}),n("div",{staticClass:"cover",class:{mousein:t.enterBlock},style:{"background-color":t.color},on:{mouseenter:function(e){t.enterBlock=!0},mouseleave:function(e){t.enterBlock=!1}}},[n("span",[t._v(t._s(t.detail))]),n("a",{attrs:{href:t.link,target:"_blank"}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fab","github"]}}),t._v("\n            Github Page\n        ")],1)])])},C=[],w={data:function(){return{enterBlock:!1}},computed:{imageUrl:function(){return"url("+n("1771")("./"+this.image)+")"}},props:{detail:{type:String,required:!0},image:{type:String,required:!0},color:{type:String,required:!0},link:{type:String,required:!0}}},x=w,P=(n("7f6b"),Object(f["a"])(x,O,C,!1,null,"3303165c",null)),A=P.exports,S={data:function(){return{projectList:[{detail:"It's a blog posts recommendation application for Pixnet hackthon. Build by Vue and Flask.",image:"blog.jpg",color:"#9C528B",link:"https://github.com/Davidlee0314/articles-recommend"},{detail:"A Chinese mahjong game implement in C++, as the final project in programming basic course.",image:"majan.jpg",color:"#1B998B",link:"https://github.com/Davidlee0314/ProgrammingDesign--majanGame"},{detail:"A JavaScript recipe search application, final project of an online course.",image:"forkify.png",color:"#BA3B46",link:"https://github.com/Davidlee0314/JScourse-Forkify"}]}},components:{ProjectItem:A}},B=S,E=(n("c66b"),Object(f["a"])(B,_,y,!1,null,"4e7f32d8",null)),L=E.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv-contact"},[n("form",{attrs:{id:"fs-frm",name:"simple-contact-form","accept-charset":"utf-8",action:"https://formspree.io/davidlee860314@gmail.com",method:"post"}},[n("fieldset",{attrs:{id:"fs-frm-inputs"}},[n("label",{staticClass:"title",attrs:{for:"full-name"}},[t._v("Name*")]),n("input",{attrs:{type:"text",name:"name",id:"full-name",placeholder:"Your name...",required:""}}),n("label",{staticClass:"title",attrs:{for:"email-address"}},[t._v("Email Address*")]),n("input",{attrs:{type:"email",name:"_replyto",id:"email-address",placeholder:"Your email...",required:""}}),n("label",{staticClass:"title",attrs:{for:"message"}},[t._v("Message*")]),n("textarea",{attrs:{rows:"5",name:"message",id:"message",placeholder:"Your message...",required:""}}),n("input",{attrs:{type:"hidden",name:"_subject",id:"email-subject",value:"Contact Form Submission"}})]),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])}],D={},I=D,q=(n("4ea2"),Object(f["a"])(I,M,$,!1,null,"3c736143",null)),J=q.exports,N={data:function(){return{menubtn:!1,prePageOn:0,pageOn:0}},components:{LandingIntro:m,LandingMenu:k,Project:L,Contact:J},methods:{clickBackLanding:function(){this.menubtn=!1},showPage:function(t){this.prePageOn=this.pageOn,this.pageOn=t,0==this.pageOn&&(this.menubtn=!1)}},watch:{menubtn:function(){this.menubtn||(this.pageOn=0,this.prePageOn=0)}}},T=N,U=(n("6983"),Object(f["a"])(T,r,o,!1,null,"6db44f1c",null)),F=U.exports,Y={components:{Landing:F}},G=Y,H=(n("7faf"),Object(f["a"])(G,i,s,!1,null,null,null)),z=H.exports,V=n("8c4f");a["a"].use(V["a"]);var K=new V["a"]({mode:"history",base:"/",routes:[]}),Q=n("2f62");a["a"].use(Q["a"]);var R=new Q["a"].Store({state:{},mutations:{},actions:{}}),W=n("ecee"),X=n("f2d1"),Z=n("ad3d");W["c"].add(X["c"],X["a"],X["b"]),a["a"].component("font-awesome-icon",Z["a"]),a["a"].config.productionTip=!1,new a["a"]({router:K,store:R,render:function(t){return t(z)}}).$mount("#app")},"5bcd":function(t,e,n){t.exports=n.p+"img/forkify.f9293b12.png"},6983:function(t,e,n){"use strict";var a=n("bc3f"),i=n.n(a);i.a},"6ba4":function(t,e,n){t.exports=n.p+"img/majan.e8678cae.jpg"},"73f9":function(t,e,n){"use strict";var a=n("7b4e"),i=n.n(a);i.a},"7b4e":function(t,e,n){},"7de6":function(t,e,n){t.exports=n.p+"img/blog.94f3b578.jpg"},"7f6b":function(t,e,n){"use strict";var a=n("1d63"),i=n.n(a);i.a},"7faf":function(t,e,n){"use strict";var a=n("8fba"),i=n.n(a);i.a},"8fba":function(t,e,n){},"9d22":function(t,e,n){t.exports=n.p+"img/shapelined.bfe0cac5.jpg"},add2:function(t,e,n){},bc3f:function(t,e,n){},c66b:function(t,e,n){"use strict";var a=n("fa5e"),i=n.n(a);i.a},e104:function(t,e,n){},e496:function(t,e,n){t.exports=n.p+"img/louis.0d9525ed.jpg"},f67a:function(t,e,n){t.exports=n.p+"img/self-pic.cd186e28.jpg"},fa5e:function(t,e,n){}});
//# sourceMappingURL=app.cde84f9e.js.map