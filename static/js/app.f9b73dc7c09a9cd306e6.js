webpackJsonp([1],{"2CZP":function(t,e){},"5MmI":function(t,e,s){"use strict";var n,a=(n={},{getItem:function(t){return n[t]},setItem:function(t,e){n[t]=e.toString()},removeItem:function(t){delete n[t]}});window.localStorage||Object.defineProperty(window,"localStorage",{value:a}),e.a={getToken:function(){return window.localStorage.getItem("hf_shops_app_id_token")},saveToken:function(t){window.localStorage.setItem("hf_shops_app_id_token",t)},destroyToken:function(){window.localStorage.removeItem("hf_shops_app_id_token")}}},"5lnF":function(t,e){},"8F5z":function(t,e){},FTf3:function(t,e){t.exports="data:image/png;base64,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"},"G/2H":function(t,e,s){t.exports=s.p+"static/img/loading.de08ddb.gif"},IcnI:function(t,e,s){"use strict";var n,a,i,r,o=s("7+uW"),c=s("NYxO"),u=s("bOdI"),l=s.n(u),d=s("//Fk"),h=s.n(d),p=s("LguZ"),f=s("5MmI"),v=s("YaEn"),m=s("lHQJ"),g={state:{errors:null,user:{},isAuthenticated:!!f.a.getToken()},actions:(n={},l()(n,m.e,function(t,e){return new h.a(function(s,n){p.c.post("users/login",{user:e}).then(function(e){var n=e.data;t.commit("setUser",n.user),s(n)}).catch(function(e){var s=e.response;t.commit("setError",s.data.errors),n(s)})})}),l()(n,m.f,function(t){t.commit("logOut")}),l()(n,m.g,function(t,e){return new h.a(function(s,n){p.c.post("users",{user:e}).then(function(e){var n=e.data;t.commit("setUser",n.user),s(n)}).catch(function(e){var s=e.response;t.commit("setError",s.data.errors),n(s)})})}),l()(n,m.a,function(t){f.a.getToken()?(p.c.setHeader(),p.c.get("user").then(function(e){var s=e.data;t.commit("setUser",s.user)}).catch(function(e){t.commit("logOut"),v.a.push({name:"login"}),t.commit("setError",{"Session expired":e})})):t.commit("logOut")}),n),mutations:(a={},l()(a,"setError",function(t,e){t.errors=e}),l()(a,"setUser",function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},f.a.saveToken(t.user.token)}),l()(a,"logOut",function(t){t.isAuthenticated=!1,t.user={},t.errors={},f.a.destroyToken()}),a),getters:{currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}}},b={state:{},actions:(i={},l()(i,m.b,function(t,e){return p.a.add(e).then(function(e){var s=e.data;t.commit("updateShopInList",s.shop,{root:!0})})}),l()(i,m.c,function(t,e){return p.a.remove(e).then(function(e){var s=e.data;t.commit("updateShopInList",s.shop,{root:!0})})}),l()(i,m.h,function(t,e){return p.a.dislike(e).then(function(e){var s=e.data;t.commit("updateShopInList",s.shop,{root:!0})})}),i),mutations:{},getters:{}},A={state:{shops:[],isLoading:!0,shopsCount:0},getters:{shopsCount:function(t){return t.shopsCount},shops:function(t){return t.shops},isLoading:function(t){return t.isLoading}},actions:l()({},m.d,function(t,e){var s=t.commit;return s("setLoading"),p.b.query(e.filters).then(function(t){var e=t.data;s("setShops",e)}).catch(function(t){throw new Error(t)})}),mutations:(r={},l()(r,"setLoading",function(t){t.isLoading=!0}),l()(r,"setShops",function(t,e){var s=e.shops,n=e.shopsCount;t.shops=s,t.shopsCount=n,t.isLoading=!1}),l()(r,"updateShopInList",function(t,e){t.shops=t.shops.map(function(t){return t.id!==e.id?t:(t.favorited=e.favorited,t.disliked=e.disliked,t)})}),r)};o.a.use(c.a);e.a=new c.a.Store({modules:{home:A,auth:g,shop:b}})},"K/FS":function(t,e){},LguZ:function(t,e,s){"use strict";var n=s("7+uW"),a=s("mtWM"),i=s.n(a),r=s("Rf8U"),o=s.n(r),c=s("5MmI");s.d(e,"b",function(){return l}),s.d(e,"a",function(){return d});var u={init:function(){n.a.use(o.a,i.a),n.a.axios.defaults.baseURL="http://localhost:8000/api/v1"},setHeader:function(){n.a.axios.defaults.headers.common.Authorization="Token "+c.a.getToken()},query:function(t,e){return n.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return n.a.axios.post(""+t,e)},update:function(t,e,s){return n.a.axios.put(t+"/"+e,s)},put:function(t,e){return n.a.axios.put(""+t,e)},delete:function(t){return n.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}},l=(e.c=u,{query:function(t){return u.query("shops",{params:t})}}),d={add:function(t){return u.post("shops/"+t+"/favorite")},remove:function(t){return u.delete("shops/"+t+"/favorite")},dislike:function(t){return u.post("shops/"+t+"/dislike")}}},M93x:function(t,e,s){"use strict";var n=s("Dd8w"),a=s.n(n),i=s("lHQJ"),r=s("NYxO"),o={name:"HfHeader",computed:a()({},Object(r.b)(["currentUser","isAuthenticated"])),methods:{logout:function(){var t=this;this.$store.dispatch(i.f).then(function(){t.$router.push({name:"home"})})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-default navbar-static-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("span",{staticClass:"part1"},[t._v("HF")]),t._v(" "),s("span",{staticClass:"part2"},[t._v("web")]),s("span",{staticClass:"part3"},[t._v("Coding")]),s("span",{staticClass:"part4"},[t._v("Challenge")])])],1),t._v(" "),s("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[t.isAuthenticated?s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("div",{staticClass:"user-menu dropdown "},[s("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button",id:"header-right-menu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"}},[t._v("\n                "+t._s(t.currentUser.email)+"\n                "),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"header-right-menu"}},[s("li",[s("a",{attrs:{id:"logout",href:"#"},on:{click:function(e){e.preventDefault(),t.logout(e)}}},[t._v(" Logout ")])])])])])]):s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:"login"}},[s("i",{staticClass:"ion-compose"}),t._v("Sign in\n            ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:"register"}},[s("i",{staticClass:"ion-compose"}),t._v("Sign up\n            ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})])}]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mastfoot"},[e("div",{staticClass:"inner"},[e("p",[this._v("Web coding chanllenge "),e("a",{attrs:{href:"https://github.com/eissasoubhi/challenge-project"}},[this._v(" project")]),this._v(", by "),e("a",{attrs:{href:"https://github.com/eissasoubhi/"}},[this._v("@eissasoubhi")]),this._v(" "),e("span",{staticClass:"with"},[this._v("with care")])])])])}]};var l={name:"App",components:{HfHeader:s("VU/8")(o,c,!1,function(t){s("XwEe")},"data-v-7ad581da",null).exports,HfFooter:s("VU/8")(null,u,!1,function(t){s("f482")},"data-v-5746eb60",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("hf-header"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("hf-footer")],1)},staticRenderFns:[]};var h=s("VU/8")(l,d,!1,function(t){s("8F5z")},null,null);e.a=h.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=s("7+uW"),n=s("qb6w"),a=(s.n(n),s("e0XP")),i=(s.n(a),s("M93x")),r=s("YaEn"),o=s("IcnI"),c=s("LguZ"),u=s("hgdF");t.jQuery=s("7t+N"),s("gNGx"),e.a.config.productionTip=!1,e.a.filter("error",u.a),c.c.init(),new e.a({el:"#app",router:r.a,store:o.a,components:{App:i.a},template:"<App/>"})}.call(e,s("DuR2"))},Ougo:function(t,e){},XwEe:function(t,e){},YaEn:function(t,e,s){"use strict";var n=s("//Fk"),a=s.n(n),i=s("7+uW"),r=s("/ocq"),o=s("IcnI"),c=s("Dd8w"),u=s.n(c),l=s("NYxO"),d={name:"HfHome",computed:u()({},Object(l.b)(["isAuthenticated"]))},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[this.isAuthenticated?e("div",{staticClass:"home-toggle"},[e("ul",{staticClass:"nav nav-pills navbar-right"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"nearbyShops"},exact:"","active-class":"active"}},[this._v("\n            Nearby Shops\n          ")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"home-preferred-shops"},"active-class":"active"}},[this._v("\n            My preferred Shops\n          ")])],1)]),this._v(" "),e("div",{staticClass:"clearfix"})]):this._e(),this._v(" "),e("router-view")],1)])},staticRenderFns:[]};var p=s("VU/8")(d,h,!1,function(t){s("Ougo")},"data-v-397eca92",null).exports,f=s("lHQJ"),v={name:"HfLogin",data:function(){return{email:null,password:null,isLoading:!1}},methods:{onSubmit:function(t,e){var s=this;this.isLoading=!0,this.$store.dispatch(f.e,{email:t,password:e}).then(function(){return s.$router.push({name:"nearbyShops"})}).catch(function(){s.isLoading=!1})}},computed:u()({},Object(l.c)({errors:function(t){return t.auth.errors}}))},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[n("h1",{staticClass:"text-xs-center"},[t._v("Sign in")]),t._v(" "),n("p",{staticClass:"text-xs-center"},[n("router-link",{attrs:{to:{name:"register"}}},[t._v("\n            Need an account?\n          ")])],1),t._v(" "),t.errors?n("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return n("li",{key:s},[t._v("\n            "+t._s(s)+" "+t._s(t._f("error")(e))+"\n          ")])})):t._e(),t._v(" "),n("form",{on:{submit:function(e){t.onSubmit(t.email,t.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{id:"email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isLoading,id:"submit"}},[t._v("\n            Sign in\n          ")]),t._v(" "),t.isLoading?n("span",{staticClass:"text-center"},[n("img",{attrs:{width:"40",src:s("G/2H"),alt:""}})]):t._e()])])])])])},staticRenderFns:[]},g=s("VU/8")(v,m,!1,null,null,null).exports,b={name:"HfRegister",data:function(){return{email:"",password:"",isLoading:!1}},computed:u()({},Object(l.c)({errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(){var t=this;this.isLoading=!0,this.$store.dispatch(f.g,{email:this.email,password:this.password}).then(function(){return t.$router.push({name:"nearbyShops"})}).catch(function(){t.isLoading=!1})}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[n("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),t._v(" "),n("p",{staticClass:"text-xs-center"},[n("router-link",{attrs:{to:{name:"login"}}},[t._v("\n            Have an account?\n          ")])],1),t._v(" "),t.errors?n("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return n("li",{key:s},[t._v(t._s(s)+" "+t._s(t._f("error")(e)))])})):t._e(),t._v(" "),n("form",{on:{submit:t.onSubmit}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{id:"email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isLoading,id:"submit"}},[t._v("\n            Sign up\n          ")]),t._v(" "),t.isLoading?n("span",{staticClass:"text-center"},[n("img",{attrs:{width:"40",src:s("G/2H"),alt:""}})]):t._e()])])])])])},staticRenderFns:[]},C=s("VU/8")(b,A,!1,null,null,null).exports,w=s("Gu7T"),_=s.n(w),x={name:"HfShopActions",props:{shop:{type:Object,required:!0},requestConfig:{type:Object,required:!0},type:{type:String,required:!0}},data:function(){return{isLoading:!1}},methods:{like:function(t){var e=this;this.isLoading=!0,this.$store.dispatch(f.b,t).then(function(){e.isLoading=!1,e.refreshShops()})},unlike:function(t){var e=this;this.isLoading=!0,this.$store.dispatch(f.c,t).then(function(t){e.isLoading=!1,e.refreshShops()})},dislike:function(t){var e=this;this.isLoading=!0,this.$store.dispatch(f.h,t).then(function(t){e.isLoading=!1,e.refreshShops()})},refreshShops:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:600;setTimeout(function(){t.$store.dispatch(f.d,t.requestConfig)},e)}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-action"},[t.isLoading?n("div",{staticClass:"text-center shop-action-loading"},[n("img",{attrs:{width:"40",src:s("G/2H"),alt:""}})]):t._e(),t._v(" "),"all"==t.type?n("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[n("div",{staticClass:"btn-group",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-danger btn-dislike",attrs:{disabled:t.shop.disliked},on:{click:function(e){t.dislike(t.shop.id)}}},[t._v("Dislike")])]),t._v(" "),n("div",{staticClass:"btn-group",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-success btn-like",attrs:{disabled:t.shop.favorited},on:{click:function(e){t.like(t.shop.id)}}},[t._v("Like")])])]):t._e(),t._v(" "),"favorited"==t.type?n("div",{staticClass:"text-center",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-danger btn-unlike",attrs:{disabled:!t.shop.favorited},on:{click:function(e){t.unlike(t.shop.id)}}},[t._v("Remove")])]):t._e()])},staticRenderFns:[]};var y={name:"HfShopPreview",components:{HfShopActions:s("VU/8")(x,L,!1,function(t){s("2CZP")},"data-v-2856fee1",null).exports},props:{shop:{type:Object,required:!0},requestConfig:{type:Object,required:!0},type:{type:String,required:!0}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-3 col-md-4 col-xs-6 shop-item  "},[s("div",{staticClass:"thumbnail"},[s("h4",[t._v(" "+t._s(t.shop.name)+" ")]),t._v(" "),t.shop.distance?s("div",{staticClass:"text-muted"},[t._v("\n      ("+t._s(t.shop.distance)+" away)\n    ")]):t._e(),t._v(" "),s("img",{staticClass:"img-fluid ",attrs:{src:"http://placehold.it/400x300",alt:""}}),t._v(" "),s("hr"),t._v(" "),s("hf-shop-actions",{attrs:{shop:t.shop,type:t.type,requestConfig:t.requestConfig}})],1)])},staticRenderFns:[]};var k=s("VU/8")(y,S,!1,function(t){s("wwwG")},"data-v-6faa58da",null).exports,P={name:"Pagination",props:{pages:{type:Array,required:!0},currentPage:{type:Number,required:!0}},methods:{changePage:function(t){t!==this.currentPage&&this.$emit("update:currentPage",t)},paginationClass:function(t){return{"page-item":!0,active:this.currentPage===t}}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"text-center"},[s("ul",{staticClass:"pagination text-center"},t._l(t.pages,function(e){return s("li",{key:e,class:t.paginationClass(e),on:{click:function(s){s.preventDefault(),t.changePage(e)}}},[s("a",{staticClass:"page-link",attrs:{href:""}},[t._v(t._s(e))])])}))])},staticRenderFns:[]},H={name:"hf-shop-list",components:{HfShopPreview:k,VPagination:s("VU/8")(P,q,!1,null,null,null).exports},props:{userLocation:{type:String,required:!1},loadingLocation:{type:Boolean,required:!1},favorited:{type:String,required:!1},itemsPerPage:{type:Number,required:!1,default:16}},data:function(){return{currentPage:1}},computed:u()({type:function(){return this.favorited?"favorited":"all"},listConfig:function(){var t={offset:(this.currentPage-1)*this.itemsPerPage,limit:this.itemsPerPage,exceptdisliked:this.currentUser.email};return this.favorited?t.favorited=this.favorited:(t.exceptfavorited=this.currentUser.email,this.userLocation&&(t.nearby=this.userLocation)),{filters:t}},pages:function(){return this.isLoading||this.shopsCount<=this.itemsPerPage?[]:[].concat(_()(Array(Math.ceil(this.shopsCount/this.itemsPerPage)).keys())).map(function(t){return t+1})}},Object(l.b)(["currentUser"]),Object(l.b)(["shopsCount","isLoading","shops"])),watch:{currentPage:function(t){this.listConfig.filters.offset=(t-1)*this.itemsPerPage,this.fetchShops()},favorited:function(){this.resetPagination(),this.fetchShops()},loadingLocation:function(){this.fetchShops()}},mounted:function(){this.userLocation||this.fetchShops()},methods:{fetchShops:function(){this.$store.dispatch(f.d,this.listConfig)},resetPagination:function(){this.listConfig.offset=0,this.currentPage=1}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("div",{staticClass:"shop-preview text-center"},[t._m(0),t._v("\n    Loading shops...\n  ")]):s("div",[0===t.shops.length?s("div",{staticClass:"no-shop"},[t._v("\n      No shops are here... yet.\n    ")]):s("div",{staticClass:"shops-list"},[s("h1",{staticClass:"text-center"},[t._t("default")],2),t._v(" "),s("div",{staticClass:"row text-center text-lg-left"},t._l(t.shops,function(e,n){return s("hf-shop-preview",{key:n,attrs:{shop:e,type:t.type,requestConfig:t.listConfig}})})),t._v(" "),s("v-pagination",{attrs:{pages:t.pages,currentPage:t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e}}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:s("G/2H"),alt:""}})])}]};var N=s("VU/8")(H,U,!1,function(t){s("cqTv")},"data-v-241970a3",null).exports,V={name:"HfGeolocation",data:function(){return{error:"",location:{}}},methods:{startGeolocation:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.getLocation,this.getErrors):this.error="<strong>We can not sort shops by distance</strong>: Geolocation is not supported by this browser."},getLocation:function(t){this.location.latitude=t.coords.latitude,this.location.longitude=t.coords.longitude,this.$emit("coordinatesLoaded",{coordinates:this.location})},getErrors:function(t){switch(t.code){case t.PERMISSION_DENIED:case t.TIMEOUT:this.error="Please grant the request for Geolocation to sort the shops by distance.";break;case t.POSITION_UNAVAILABLE:this.error="Location information is unavailable.";break;case t.UNKNOWN_ERROR:this.error="<strong>We can not sort shops by distance</strong>: An unknown error occurred for Geolocation ."}}},mounted:function(){this.startGeolocation()}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[this.error?e("span",{staticClass:"alert alert-warning"},[this._v(this._s(this.error))]):this._e()])},staticRenderFns:[]};var R={name:"HfNearbyShops",data:function(){return{userCoordinates:{},loading:!0}},computed:{coordinates:function(){return this.userCoordinates.latitude+","+this.userCoordinates.longitude}},methods:{getCoordinates:function(t){this.userCoordinates=t.coordinates,this.loading=!1}},components:{HfShopList:N,HfGeolocation:s("VU/8")(V,F,!1,function(t){s("K/FS")},"data-v-17df9b4c",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("hf-geolocation",{on:{coordinatesLoaded:this.getCoordinates}}),this._v(" "),e("hf-shop-list",{attrs:{loadingLocation:this.loading,userLocation:this.coordinates}},[this._v("Nearby Shops")])],1)},staticRenderFns:[]},O=s("VU/8")(R,T,!1,null,null,null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"text-center"},[n("img",{attrs:{src:s("FTf3"),alt:""}}),t._v(" "),n("h1",[t._v("HF Shops App")]),t._v(" "),n("p",[t._v("\n        Welcome, this project is a simple web coding challenge created as the second step for job application in "),n("a",{attrs:{href:"http://hiddenfounders.com/",title:"hidden founders."}},[t._v("hidden founders.")]),n("br"),t._v("\n        It's coded using "),n("u",[t._v("VueJs")]),t._v(" for the SPA and "),n("u",[t._v("Laravel")]),t._v(" for the Api. The main application job is to list shops nearby the user location."),n("br"),t._v("\n        For more information please see the links below.\n      ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/hiddenfounders/web-coding-challenge",title:"Project specs"}},[t._v("Project specs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/eissasoubhi/challenge-project",title:"Peoject source code"}},[t._v("Peoject source code")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/eissasoubhi/challenge-project/blob/master/backend/readme.md",title:"Api documentation"}},[t._v("Api documentation")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/eissasoubhi/challenge-project/blob/master/frontend/README.md",title:"Frontend app documentation"}},[t._v("Frontend app documentation")])])])])])}]};var I=s("VU/8")({name:"Presentation"},E,!1,function(t){s("5lnF")},"data-v-4eb55bfc",null).exports,W={name:"HfPreferredShops",components:{HfShopList:N},computed:u()({},Object(l.b)(["currentUser"]),{favorited:function(){return this.currentUser.email}})},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("hf-shop-list",{attrs:{favorited:this.favorited}},[this._v("My preferred shops")])],1)},staticRenderFns:[]},G=s("VU/8")(W,K,!1,null,null,null).exports;i.a.use(r.a);var Z=new r.a({routes:[{path:"/",component:p,children:[{path:"",name:"home",component:I},{path:"nearby-shops",name:"nearbyShops",component:O,meta:{requiresAuth:!0}},{path:"my-preferred-shops",name:"home-preferred-shops",component:G,meta:{requiresAuth:!0}}]},{name:"register",path:"/register",component:C,meta:{requiresGuest:!0}},{name:"login",path:"/login",component:g,meta:{requiresGuest:!0}}]});e.a=Z;Z.beforeEach(function(t,e,s){return a.a.all([o.a.dispatch(f.a)]).then(function(){t.matched.some(function(t){return t.meta.requiresAuth})?o.a.state.auth.isAuthenticated?s():s({name:"login"}):t.matched.some(function(t){return t.meta.requiresGuest})&&o.a.state.auth.isAuthenticated?s({name:"home"}):s()})})},cqTv:function(t,e){},e0XP:function(t,e){},f482:function(t,e){},hgdF:function(t,e,s){"use strict";e.a=function(t){return Array.isArray(t)?""+t[0]:""+t}},lHQJ:function(t,e,s){"use strict";s.d(e,"e",function(){return n}),s.d(e,"f",function(){return a}),s.d(e,"g",function(){return i}),s.d(e,"a",function(){return r}),s.d(e,"d",function(){return o}),s.d(e,"h",function(){return c}),s.d(e,"b",function(){return u}),s.d(e,"c",function(){return l});var n="login",a="logout",i="register",r="checkAuth",o="fetchShops",c="dislikeShop",u="addFavorite",l="removeFavorite"},qb6w:function(t,e){},wwwG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f9b73dc7c09a9cd306e6.js.map