"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[5047],{22091:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});a(28436);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"complaint"},[t("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:e.$t("投诉卖家"),"left-arrow":""},on:{"click-left":e.onClickLeft}}),t("div",{staticClass:"h46",staticStyle:{width:"100%"}}),t("el-form",{ref:"ruleForm",staticClass:"acc_form",attrs:{"label-position":"top","label-width":"80px",model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{label:e.$t("投诉类型"),prop:"type"}},[t("el-select",{attrs:{placeholder:e.$t("请选择投诉类型")},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.complaintType,(function(a){return t("el-option",{key:a.value,attrs:{label:e.$t(a.label),value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:e.$t("截图、凭证"),prop:"images"}},[t("van-uploader",{attrs:{multiple:""},model:{value:e.formData.images,callback:function(t){e.$set(e.formData,"images",t)},expression:"formData.images"}})],1),t("el-form-item",{attrs:{label:e.$t("投诉原因"),prop:"reason"}},[t("el-input",{attrs:{type:"textarea",maxlength:"1000",autosize:{minRows:6,maxRows:8}},model:{value:e.formData.reason,callback:function(t){e.$set(e.formData,"reason","string"===typeof t?t.trim():t)},expression:"formData.reason"}})],1)],1),t("div",{staticClass:"sub_btn",on:{click:e.submitForm}},[e._v(e._s(e.$t("提交")))])],1)},r=[],s=a(4648),o=(a(42511),a(29538)),i=a(63822),n=a(15941),m={components:{[o.Z.name]:o.Z},data(){return{itemName:"EShop",formData:{reason:"",images:[],type:""},complaintType:[{label:"长时间不发货",value:"1"},{label:"卖家服务态度恶劣",value:"2"},{label:"卖家交易欺诈",value:"3"},{label:"卖家承诺不履行",value:"4"},{label:"其他",value:"5"}],pwtStatus:!1,rules:{type:[{required:!0,message:this.$t("请选择投诉类型"),trigger:"change"}],reason:[{required:!0,message:this.$t("请选择投诉原因"),trigger:"blur"}],images:[{required:!0,message:this.$t("请上传截图、凭证"),trigger:"change"}]}}},computed:(0,s.Z)({},(0,i.Se)({userInfo:"userInfo"})),methods:{onClickLeft(){this.$router.go(-1)},handleRemove(e,t){n.log(e,t)},handlePictureCardPreview(e){n.log("file ::->",e)},submitForm(){this.$refs.ruleForm.validate((function(e){if(!e)return n.log("error submit!!"),!1;alert("submit!")}))}}},u=m,c=a(1001),f=(0,c.Z)(u,l,r,!1,null,"3c327aec",null),p=f.exports}}]);