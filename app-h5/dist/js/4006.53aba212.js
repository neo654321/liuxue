"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[4006],{34006:function(t,a,e){e.r(a),e.d(a,{default:function(){return v}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"page-content"},[a("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("退款申请"),"left-arrow":""},on:{"click-left":function(){return t.$router.back()}}}),a("div",{staticClass:"h46",staticStyle:{width:"100%"}}),a("div",{staticClass:"nr"},[a("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("退款理由")))]),a("div",{staticClass:"shuru"},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("请选择")},model:{value:t.formData.returnReason,callback:function(a){t.$set(t.formData,"returnReason",a)},expression:"formData.returnReason"}},t._l(t.optionsData,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("退款金额")))]),a("div",{staticClass:"shuru"},[a("el-input",{attrs:{disabled:""},model:{value:t.formData.money,callback:function(a){t.$set(t.formData,"money",a)},expression:"formData.money"}})],1),a("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("退款说明")))]),a("div",{staticClass:"shuru"},[a("el-input",{attrs:{type:"textarea",rows:3,maxlength:"120","show-word-limit":"",placeholder:t.$t("请输入")},model:{value:t.formData.returnDetail,callback:function(a){t.$set(t.formData,"returnDetail",a)},expression:"formData.returnDetail"}})],1),a("div",{staticClass:"tijiao",on:{click:t.submitHandle}},[t._v(t._s(t.$t("提交")))])])],1)},i=[],r=e(97644),l=(e(23465),e(17263)),n=(e(177),e(87929)),o=e(22204),u=e(78455),c={name:"OrderRefund",components:{[n.Z.name]:n.Z,[l.Z.name]:l.Z},data(){return{optionsData:[{value:"1",label:this.$t("未收到货")},{value:"2",label:this.$t("不喜欢，不想要")},{value:"3",label:this.$t("卖家发错货")},{value:"4",label:this.$t("假冒品牌")},{value:"5",label:this.$t("少发、漏发")},{value:"6",label:this.$t("收到商品破损")},{value:"7",label:this.$t("存在质量问题")},{value:"8",label:this.$t("与商家协商一致退款")},{value:"9",label:this.$t("其他原因")}],orderId:null,priceFormat:o.XY,formData:{returnReason:"",money:0,returnDetail:""}}},mounted(){var t=this;this.$nextTick((function(){var a=t.$route.query,e=a.id,s=a.a;e&&(s||0===s)?(t.orderId=e,t.formData.money=t.priceFormat(s)):((0,l.Z)(t.$t("订单号不存在")),setTimeout((function(){t.$router.back()}),1500))}))},methods:{submitHandle(){var t=this;if(""===this.formData.returnReason)return(0,l.Z)(this.$t("请选择")+this.$t("退款理由")),!1;l.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0});var a=(0,r.Z)({orderId:this.orderId},this.formData);(0,u.Kb)(a).then((function(){(0,l.Z)(t.$t("提交成功")),setTimeout((function(){t.$router.back()}),1500)})).catch((function(){l.Z.clear()}))}}},d=c,f=e(48703),h=(0,f.Z)(d,s,i,!1,null,"a5ee6f8e",null),v=h.exports}}]);