"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[7234],{17234:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"service-box",style:t.isApp?{height:"93%"}:null},[e("div",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}}),e("iframe",{ref:"frame",class:[this.localIsList&&"local_list"],attrs:{src:t.serviceUrl,frameborder:"0",width:"100%",height:"100%"}})])},i=[],n=o(4648),a=(o(65825),o(19858)),r=(o(34338),o(70560),o(63822)),l={name:"CustomerService",data(){return{isFirstRequest:!0,token:"",serviceUrl:"",pageHeight:"",lang:"",sellerId:"",storeName:"",isApp:!!window.plus,path:"",localIsList:!1,isShowIcon:!1}},components:{[a.Z.name]:a.Z},computed:(0,n.Z)({},(0,r.Se)({userInfo:"userInfo"})),mounted(){var t=this;this.init(),window.addEventListener("message",(function(e){"back"==e.data&&t.$router.push("/")}))},methods:{onClickLeft(){this.$router.push("/")},onClickRight(){var t={NODE_ENV:"production",VUE_APP_ITEM_NAME:"EShop",VUE_APP_MAIN_COLOR:"#f89900",VUE_APP_FOOTER_COLOR:"#f89900",BASE_URL:"./"}.VUE_APP_IS_APP?this.$store.state.multiItem["EShop"].app_url:location.origin;this.$refs.frame.contentWindow.postMessage("toContacts",t)},init(){var t,e,o,s,i,n;this.token=localStorage.getItem("token"),this.lang=localStorage.getItem("lang"),this.pageHeight=document.documentElement.clientHeight-44,this.sellerId=null!==(t=this.$route.query)&&void 0!==t&&t.path?"":localStorage.getItem("sellerId"),this.storeName=null!==(e=this.$route.query)&&void 0!==e&&e.path?"":localStorage.getItem("storeName");var a=null!==(o=this.$route.query)&&void 0!==o&&o.path?this.$t("消息"):sessionStorage.getItem("shopName"),r=null===(s=this.$route.query)||void 0===s?void 0:s.goodsId,l={NODE_ENV:"production",VUE_APP_ITEM_NAME:"EShop",VUE_APP_MAIN_COLOR:"#f89900",VUE_APP_FOOTER_COLOR:"#f89900",BASE_URL:"./"}.VUE_APP_IS_APP?this.$store.state.multiItem["EShop"].app_url:location.origin,c=this.sellerId?"?partyid=".concat(this.sellerId,"&name=").concat(this.storeName,"&token=").concat(this.token,"&lang=").concat(this.lang,"&height=").concat(this.pageHeight,"px"):"?token=".concat(this.token,"&lang=").concat(this.lang,"&height=100%");this.serviceUrl="".concat(l,"/chat/#/h5/").concat((null===(i=this.$route.query)||void 0===i?void 0:i.path)||"message","/yellow").concat(c,"&loginType=user&nohead=true&isH5=true&selfimg=").concat((null===(n=this.userInfo)||void 0===n?void 0:n.avatar)||1).concat(a&&"&shopName="+a).concat(r&&"undefined"!=r?"&productId="+r:"")}}},c=l,h=o(1001),u=(0,h.Z)(c,s,i,!1,null,"89f44142",null),d=u.exports},65825:function(t,e,o){o(22184),o(14106),o(4127)}}]);