(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("44eb")},"0f9a":function(e,t,n){"use strict";n.r(t);n("7f7f");var r=n("bc3a"),o=n.n(r),a=n("5c96"),i=n("4360"),u=n("a78e"),c=n.n(u),s="Admin-Token";function f(){return c.a.get(s)}function l(e){return c.a.set(s,e)}function d(){return c.a.remove(s)}var m=o.a.create({baseURL:"https://api.antfact.com/intelligent/analysis",timeout:5e3});m.interceptors.request.use((function(e){return i["a"].getters.token&&(e.headers["X-Token"]=f()),e}),(function(e){return console.log(e),Promise.reject(e)})),m.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(a["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||a["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var p=m;function g(e){return p({url:"/vue-element-admin/user/login",method:"post",data:e})}function v(e){return p({url:"/vue-element-admin/user/info",method:"get",params:{token:e}})}function h(){return p({url:"/vue-element-admin/user/logout",method:"post"})}var b={token:f(),name:"",avatar:"",introduction:""},_={SET_TOKEN:function(e,t){e.token=t},SET_INTRODUCTION:function(e,t){e.introduction=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t}},y={login:function(e,t){var n=e.commit,r=t.username,o=t.password;return new Promise((function(e,t){g({username:r.trim(),password:o}).then((function(t){var r=t.data;n("SET_TOKEN",r.token),l(r.token),e()})).catch((function(e){t(e)}))}))},getInfo:function(e){var t=e.commit,n=e.state;return new Promise((function(e,r){v(n.token).then((function(n){var o=n.data;o||r("Verification failed, please Login again.");var a=o.name,i=o.avatar,u=o.introduction;t("SET_NAME",a),t("SET_AVATAR",i),t("SET_INTRODUCTION",u),e(o)})).catch((function(e){r(e)}))}))},logout:function(e){var t=e.commit,n=e.state;e.dispatch;return new Promise((function(e,r){h(n.token).then((function(){t("SET_TOKEN",""),d(),e()})).catch((function(e){r(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),d(),e()}))}};t["default"]={namespaced:!0,state:b,mutations:_,actions:y}},"2ea5":function(e,t,n){},"3d39":function(e,t,n){},4360:function(e,t,n){"use strict";n("a481"),n("ac6a");var r=n("2b0e"),o=n("2f62"),a=(n("7f7f"),{token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},introduction:function(e){return e.user.introduction}}),i=a;r["default"].use(o["a"]);var u=n("c653"),c=u.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=u(t);return e[n]=r.default,e}),{}),s=new o["a"].Store({modules:c,getters:i});t["a"]=s},"44eb":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container index-box"},[n("div",{staticClass:"item title"},[e._v("首页")]),e._m(0),e.login_state?e._e():n("div",{staticClass:"item"},[n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.login()}}},[e._v("登录")])],1),e.login_state?n("div",{staticClass:"item"},[n("a",{attrs:{href:"/news.html"}},[n("el-button",{attrs:{type:"primary"}},[e._v("跳转")])],1)]):e._e()])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"item"},[r("img",{staticClass:"logo",attrs:{src:n("9d64"),alt:""}})])}],i=(n("2ea5"),n("3d39"),n("dbcc"),{name:"index",components:{},data:function(){return{loading:!1,loginForm:{username:"admin",password:"111111"},login_state:!1}},methods:{login:function(){var e=this;this.$store.dispatch("user/login",this.loginForm).then((function(){e.$message({message:"登录成功",type:"success"}),e.login_state=!0,e.loading=!1})).catch((function(){e.loading=!1}))}}}),u=i,c=n("2877"),s=Object(c["a"])(u,o,a,!1,null,null,null),f=s.exports,l=n("4360"),d=n("5c96"),m=n.n(d);n("0fae");r["default"].use(m.a),new r["default"]({store:l["a"],render:function(e){return e(f)}}).$mount("#app")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.c9241552.png"},c653:function(e,t,n){var r={"./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},dbcc:function(e,t,n){}});