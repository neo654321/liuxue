"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[9705],{18720:function(t,n,e){e.d(n,{Z:function(){return P}});var o,i=e(38669),s=e(80811),a=e(35430),r=e.n(a),l=e(6403),c=e(85228),u=e(72681),h=e(92168),f=e(47508),d=e(8730),m=e(14737),g=(0,l.d)("goods-action"),p=g[0],v=g[1],w=p({mixins:[(0,m.G)("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:v({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),C=e(60803),b=(0,l.d)("goods-action-button"),y=b[0],B=b[1],$=y({mixins:[(0,m.j)("vanGoodsAction")],props:(0,i.Z)({},C.g2,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),(0,C.BC)(this.$router,this)}},render:function(){var t=arguments[0];return t(d.Z,{class:B([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),x=(0,l.d)("dialog"),k=x[0],A=x[1],S=x[2],Z=k({mixins:[(0,f.e)()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var n=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(e){!1!==e&&n.loading[t]&&n.onClose(t),n.loading.confirm=!1,n.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick((function(){var n;null==(n=t.$refs.dialog)||n.focus()}))},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var n=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;var e={Enter:this.showConfirmButton?function(){return n.handleAction("confirm")}:c.ZT,Escape:this.showCancelButton?function(){return n.handleAction("cancel")}:c.ZT};e[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,n=this.$createElement;return n(w,{class:A("footer")},[this.showCancelButton&&n($,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||S("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:A("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&n($,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||S("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:A("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,n=this,e=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return e("div",{class:[h.k7,A("footer")]},[this.showCancelButton&&e(d.Z,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||S("cancel"),nativeType:"button"},class:A("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&e(d.Z,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||S("confirm"),nativeType:"button"},class:[A("confirm"),(t={},t[h.a8]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})])},genContent:function(t,n){var e=this.$createElement;if(n)return e("div",{class:A("content")},[n]);var o=this.message,i=this.messageAlign;if(o){var s,a,l={class:A("message",(s={"has-title":t},s[i]=i,s)),domProps:(a={},a[this.allowHtml?"innerHTML":"textContent"]=o,a)};return e("div",{class:A("content",{isolated:!t})},[e("div",r()([{},l]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var n=this.message,e=this.slots(),o=this.slots("title")||this.title,i=o&&t("div",{class:A("header",{isolated:!n&&!e})},[o]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n,tabIndex:0},class:[A([this.theme]),this.className],style:{width:(0,u.N)(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[i,this.genContent(o,e),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function L(t){return document.body.contains(t)}function O(){o&&o.$destroy(),o=new(s["default"].extend(Z))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function E(t){return c.sk?Promise.resolve():new Promise((function(n,e){o&&L(o.$el)||O(),(0,i.Z)(o,E.currentOptions,t,{resolve:n,reject:e})}))}E.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},E.alert=E,E.confirm=function(t){return E((0,i.Z)({showCancelButton:!0},t))},E.close=function(){o&&(o.value=!1)},E.setDefaultOptions=function(t){(0,i.Z)(E.currentOptions,t)},E.resetDefaultOptions=function(){E.currentOptions=(0,i.Z)({},E.defaultOptions)},E.resetDefaultOptions(),E.install=function(){s["default"].use(Z)},E.Component=Z,s["default"].prototype.$dialog=E;var P=E},46021:function(t,n,e){e(22663),e(64420),e(23434),e(94108),e(32672),e(14628),e(34755)},94425:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});e(41631);var o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"account_cancellation"},[n("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("账号注销"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"h46",staticStyle:{width:"100%"}}),n("el-form",{staticClass:"acc_form",attrs:{"label-position":"top","label-width":"80px",model:t.formLabelAlign}},[n("el-form-item",{attrs:{label:t.$t("您的账号")}},[n("el-input",{attrs:{maxlength:"50",disabled:""},model:{value:t.formLabelAlign.account,callback:function(n){t.$set(t.formLabelAlign,"account","string"===typeof n?n.trim():n)},expression:"formLabelAlign.account"}})],1),n("el-form-item",{attrs:{label:t.$t("为什么要离开?")}},[n("el-input",{attrs:{type:"textarea",maxlength:"1000",autosize:{minRows:6,maxRows:8}},model:{value:t.formLabelAlign.reason,callback:function(n){t.$set(t.formLabelAlign,"reason","string"===typeof n?n.trim():n)},expression:"formLabelAlign.reason"}})],1)],1),n("div",{staticClass:"logout",on:{click:t.onLogout}},[t._v(t._s(t.$t("注销账号")))]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.pwtStatus,callback:function(n){t.pwtStatus=n},expression:"pwtStatus"}},[n("enter-Password",{attrs:{isPasswordShow:t.pwtStatus},on:{close:function(n){t.pwtStatus=!1},getPassword:t.getPassword}})],1)],1)},i=[],s=e(97644),a=e(66986),r=e(9610),l=(e(46021),e(18720)),c=(e(1846),e(46943)),u=(e(3761),e(68063),e(80332)),h=e(78455),f=e(47144),d=e(68593),m={components:{EnterPassword:f.Z,[c.Z.name]:c.Z,[l.Z.name]:l.Z},data(){return{itemName:"EShop",formLabelAlign:{account:"",reason:"",cashPassword:""},pwtStatus:!1}},created(){var t=this;return(0,r.Z)((0,a.Z)().mark((function n(){var e,o;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,h.xJ)({});case 2:e=n.sent,o=e.username,t.formLabelAlign.account=o;case 5:case"end":return n.stop()}}),n)})))()},computed:(0,s.Z)({},(0,u.Se)({userInfo:"userInfo",userMoney:"userMoney"})),methods:{onClickLeft(){this.$router.go(-1)},onLogout(){var t=this;if(""!=this.formLabelAlign.account.trim())if(""!=this.formLabelAlign.reason.trim()){var n=this.$t("警告！请谨慎操作注销账户，如果您不再使用该账号，可点击【同意注销】，注销后可能几天内无法注册。");({NODE_ENV:"production",VUE_APP_ITEM_NAME:"EShop",VUE_APP_MAIN_COLOR:"#f89900",VUE_APP_FOOTER_COLOR:"#f89900",BASE_URL:"./"}).VUE_APP_PUT_ON_SHELVES&&(n=this.$t("警告！请谨慎操作注销账户，如果您不再使用该账号，可点击【同意注销】，注销后72小时内无法注册。")),l.Z.alert({title:this.$t("您确认要注销账号吗？"),message:n,messageAlign:"left",showCancelButton:!0,confirmButtonText:this.$t("同意注销"),confirmButtonColor:"#FF0000",cancelButtonText:this.$t("取消"),cancelButtonColor:"#999999"}).then((0,r.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.$toast.loading(),!(t.userMoney.money>0)){n.next=4;break}return t.$notify(t.$t("您还有余额,不能注销账号"),"warning"),n.abrupt("return");case 4:0==t.userInfo.safeword?t.getPassword(null):t.pwtStatus=!0;case 5:case"end":return n.stop()}}),n)}))))}else this.$notify(this.$t("请输入您的离开原因"),"warning");else this.$notify(this.$t("请输入您的账号"),"warning")},getPassword(t){var n=this;return(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.formLabelAlign.cashPassword=t,n.$toast.loading(),""!=t){e.next=6;break}return n.$notify(n.$t("请输入密码"),"warning"),n.$toast.clear(),e.abrupt("return");case 6:return e.prev=6,e.next=9,(0,h.HT)(n.formLabelAlign);case 9:e.sent,n.$toast.clear(),n.$notify(n.$t("注销成功"),"success"),n.$router.replace("/login"),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](6),d.log("error ::->",e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})))()}}},g=m,p=e(48703),v=(0,p.Z)(g,o,i,!1,null,"260b9460",null),w=v.exports}}]);