"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[9005],{13122:function(e,t,n){n.d(t,{Z:function(){return h}});n(73927);var i=n(6403),a=(n(60702),n(76174)),r=n(63544),o=n(14737),s=n(72681),l=function(e){var t=e.parent,n=e.bem,i=e.role;return{mixins:[(0,o.j)(t),r.f],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===i&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,n=e.target,i=this.$refs.icon,a=i===n||(null==i?void 0:i.contains(n));this.isDisabled||!a&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,i=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:(0,s.N)(i)}},[this.slots("icon",{checked:t})||e(a.Z,{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:i,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},u=(0,i.d)("checkbox"),c=u[0],d=u[1],h=c({mixins:[l({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,n=t.value.slice();if(e){if(t.max&&n.length>=t.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),t.$emit("input",n))}else{var i=n.indexOf(this.name);-1!==i&&(n.splice(i,1),t.$emit("input",n))}}}})},81171:function(e,t,n){n(22663),n(23434),n(94108)},98720:function(e,t,n){n.d(t,{Ew:function(){return c},Ko:function(){return o},Mz:function(){return g},S:function(){return m},VU:function(){return d},aN:function(){return s},h2:function(){return l},lR:function(){return h},mh:function(){return a},nT:function(){return p},tr:function(){return r},w:function(){return f},yS:function(){return u}});var i=n(78857),a=function(e){return(0,i.Z)({url:"api/sellerGoods!info.action",method:"post",params:e})},r=function(e){return(0,i.Z)({url:"/api/evaluation!list.action",method:"post",params:e})},o=function(e){return(0,i.Z)({url:"api/seller!info.action",method:"post",params:e})},s=function(e){return(0,i.Z)({url:"api/order!submit.action",method:"post",params:e})},l=function(e){return(0,i.Z)({url:"api/order!pay.action",method:"post",params:e})},u=function(e){return(0,i.Z)({url:"api/order!info.action",method:"post",params:e})},c=function(e){return(0,i.Z)({url:"/seller/version!register.action",method:"post",params:e})},d=function(e){return(0,i.Z)({url:"api/uploadimg!execute.action",method:"post",data:e})},h=function(e){return(0,i.Z)({url:"api/kyc!get.action",method:"post",params:e})},m=function(e){return(0,i.Z)({url:"api/keepGoods!add.action",method:"post",params:e})},p=function(e){return(0,i.Z)({url:"api/keepGoods!del.action",method:"post",params:e})},f=function(e){return(0,i.Z)({url:"api/evaluation!countType.action",method:"post",params:e})},g=function(e){return(0,i.Z)({url:"api/sellerGoods!recommend_like.action",method:"post",params:e})}},74783:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"merchantSettled"},[t("van-nav-bar",{ref:"header",attrs:{"safe-area-inset-top":"",title:e.$t("预计还款"),"left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.go(-1)}}}),t("div",{staticClass:"merchantSettled-wap"},[t("div",{staticClass:"step-div"},[t("div",[t("div",{staticClass:"content content2"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":e.labelPosition,"label-width":"200px"}},[t("el-form-item",{attrs:{label:e.$t("申请人"),prop:"name"}},[t("el-input",{attrs:{disabled:"",placeholder:e.$t("真实姓名")},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:e.$t("已贷款天数"),prop:"days"}},[t("el-input",{attrs:{disabled:"",placeholder:"1".concat(e.$t("天"))},model:{value:e.ruleForm.days,callback:function(t){e.$set(e.ruleForm,"days",t)},expression:"ruleForm.days"}})],1),t("el-form-item",{attrs:{label:e.$t("还款金额"),prop:"amount"}},[t("el-input",{attrs:{placeholder:e.$t("请输入还款金额"),disabled:""},model:{value:e.ruleForm.amount,callback:function(t){e.$set(e.ruleForm,"amount",t)},expression:"ruleForm.amount"}})],1),t("el-form-item",{attrs:{label:e.$t("贷款利率"),prop:"interestRate"}},[t("el-input",{attrs:{placeholder:"2%",disabled:""},model:{value:e.ruleForm.interestRate,callback:function(t){e.$set(e.ruleForm,"interestRate",t)},expression:"ruleForm.interestRate"}})],1),t("el-form-item",{attrs:{label:e.$t("还款方式"),prop:"loanMethod"}},[t("el-input",{attrs:{placeholder:"".concat(e.$t("账户余额")),disabled:""},model:{value:e.ruleForm.loanMethod,callback:function(t){e.$set(e.ruleForm,"loanMethod",t)},expression:"ruleForm.loanMethod"}})],1)],1)],1),t("div",{staticClass:"bottom"},[t("van-button",{staticClass:"button",attrs:{type:"primary",color:e.mainColor},on:{click:e.sellerRegister}},[e._v(e._s(e.$t("确认还款"))+" ")])],1)])])]),t("van-popup",{attrs:{position:"bottom"},model:{value:e.pwtStatus,callback:function(t){e.pwtStatus=t},expression:"pwtStatus"}},[t("enter-Password",{attrs:{isPasswordShow:e.pwtStatus},on:{close:function(t){e.pwtStatus=!1},getPassword:e.getPassword}})],1),t("nationality-list",{ref:"controlChild",attrs:{title:e.$t("选择区域码")},on:{getName:function(t){return e.getName(arguments)}}})],1)},a=[],r=n(66986),o=n(9610),s=(n(23465),n(17263)),l=n(60801),u=n.n(l),c=n(78062),d=n.n(c),h=(n(71131),n(32984)),m=n(7635),p=n.n(m),f=n(95127),g=n.n(f),b=n(73177),v=n.n(b),k=(n(32305),n(8730)),Z=(n(81171),n(13122)),$=(n(1846),n(46943)),y=n(58536),w=n.n(y),C=n(1897),F=n.n(C),x=n(12368),S=n.n(x),L=n(97644),P=(n(73927),n(80332)),D=n(98720),R=n(78455),I=n(62241),N=n(47144),_=n(14569),M=n(68593),q={name:"merchantSettled",data(){return{mainColor:"#f89900",screenWidth:document.body.clientWidth,uploadCheckIndex:1,areaCode:1,pwtStatus:!1,ruleForm:{loanMethod:"",term:"",name:"",idimg_1:"",idimg_2:"",idimg_3:"",idname:"身份证",interestRate:"2%",nationality:"",sellerImg:"",username:"",amount:""},labelPosition:"top",isCode:!0,rules:{amount:[{required:!0,message:this.$t("请输入金额"),trigger:"blur"}]},fileList1:[],fileList2:[],fileList3:[],fileList4:[],CountryList:[{label:"中国",value:"cn",icon:n(90876)}],tabList:[this.$t("电子邮箱"),this.$t("手机号")],tabIndex:0,lang:[{title:"简体中文",key:"cn",icon:n(90876)},{title:"English",key:"en",icon:n(75740)},{title:"繁体中文",key:"tw",icon:n(44012)}],pageDiaCode:!0}},computed:(0,L.Z)({languageIcon(){var e=this.$store.getters.language||"tw",t={cn:n(90876),en:n(75740),tw:n(44012)};return t[e]}},(0,P.Se)({activeLang:"language"})),components:{EnterPassword:N.Z,NationalityList:_.Z,[S().name]:S(),[F().name]:F(),[w().name]:w(),[$.Z.name]:$.Z,[Z.Z.name]:Z.Z,[k.Z.name]:k.Z,[v().name]:v(),[g().name]:g(),[p().name]:p(),[h.Z.name]:h.Z,[d().name]:d(),[u().name]:u(),[s.Z.name]:s.Z},created(){this.screenWidth>=500?this.labelPosition="left":this.labelPosition="top",this.requireLoanRepayForward()},watch:{tabIndex(e,t){e!==t&&(this.ruleForm.username="")}},methods:(0,L.Z)((0,L.Z)({requireLoanRepayForward(){var e=this;return(0,o.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,I.Br)({creditId:e.$route.query.creditId});case 2:n=t.sent,e.ruleForm.name=n.realName,e.ruleForm.days=n.alreadyCreditDays,e.ruleForm.interestRate=100*n.creditRate+"%",e.ruleForm.loanMethod="".concat(e.$t("账户余额"),": ").concat(n.accountAmount),e.ruleForm.amount=n.estimatePayment;case 8:case"end":return t.stop()}}),t)})))()},requireLoanPay(e){var t=this;return(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,I.ur)({creditId:t.$route.query.creditId,safeword:e});case 2:n.sent,t.$router.go(-1),t.$notify(t.$t("还款成功"),"success");case 5:case"end":return n.stop()}}),n)})))()},getPassword(e){this.requireLoanPay(e)},handleCutting(){this.isCutting=!0},handleCancel(){this.isCutting=!1,this.fileList1=[]},handleUpload(e){var t=this,n=new File([e],"logo.png");s.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});var i=new FormData;i.append("file",n),i.append("moduleName","selle"),(0,D.VU)(i).then((function(e){t.ruleForm.sellerImg=e,t.isCutting=!1,t.fileList1[0].content=e})).finally((function(){s.Z.clear()}))},handleCropData(e){M.log("裁剪数据"),M.log(e)}},(0,P.OI)(["setLanguage"])),{},{handleSetLang(e){M.log(e),this.$i18n.locale=this.lang[e].key,this.setLanguage(this.lang[e].key)},handleDelete(e){this["fileList".concat(e)]=[]},sellerRegister(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.handlePay()}))},handlePay(){var e=this;(0,R.bM)({}).then((function(t){1==t.safeword?e.pwtStatus=!0:e.$router.push({path:"/FundPasswordSettings"})}))},openNationality(e){this.isCode=1===e,this.$refs.controlChild.open()},getName(e){this.isCode?this.areaCode=e[2]:this.ruleForm.nationality=e[0]},afterRead1(e){this.imgFile=e.content,this.isCutting=!0},afterRead2(e){var t=this;s.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});var n=new FormData;n.append("file",e.file),n.append("moduleName","selle"),(0,D.VU)(n).then((function(e){t.ruleForm.idimg_1=e})).catch((function(e){t.fileList2=[],s.Z.fail(t.$t("上传失败"))})).finally((function(){s.Z.clear()}))},afterRead3(e){var t=this;s.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});var n=new FormData;n.append("file",e.file),n.append("moduleName","selle"),(0,D.VU)(n).then((function(e){t.ruleForm.idimg_2=e})).catch((function(e){t.fileList3=[],s.Z.fail(t.$t("上传失败"))})).finally((function(){s.Z.clear()}))},afterRead4(e){var t=this;s.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});var n=new FormData;n.append("file",e.file),n.append("moduleName","selle"),(0,D.VU)(n).then((function(e){t.ruleForm.idimg_3=e})).catch((function(e){t.fileList4=[],s.Z.fail(t.$t("上传失败"))})).finally((function(){s.Z.clear()}))}})},T=q,V=n(48703),G=(0,V.Z)(T,i,a,!1,null,"4202be6d",null),U=G.exports}}]);