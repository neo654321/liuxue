"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[8235],{18235:function(t,i,e){e.r(i),e.d(i,{default:function(){return g}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"page-content",staticStyle:{"min-height":"100vh"}},[i("Vcode",{staticStyle:{direction:"ltr"},attrs:{imgs:[t.img1,t.img2,t.img3,t.img4,t.img5],show:t.show,canvasHeight:200,sliderText:t.$t("拖动滑块以完成拼图"),successText:t.$t("验证通过!"),failText:t.$t("验证失败,请重试")},on:{success:t.onSuccess,close:function(i){t.show=!1}}}),i("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("邮箱绑定"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"h46",staticStyle:{width:"100%"}}),i("div",{staticClass:"form-content"},[i("div",{staticClass:"form-item"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("邮箱")))]),i("div",{staticClass:"input-content"},[i("el-input",{attrs:{placeholder:t.$t("请输入邮箱"),maxlength:"40",clearable:""},model:{value:t.formData.email,callback:function(i){t.$set(t.formData,"email",i)},expression:" formData.email "}})],1)]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("验证码")))]),i("div",{staticClass:"input-content code"},[i("el-input",{attrs:{placeholder:t.$t("请输入验证码"),maxlength:"6"},model:{value:t.formData.verifcode,callback:function(i){t.$set(t.formData,"verifcode",i)},expression:" formData.verifcode "}}),i("div",{staticClass:"btn",class:{disabled:t.btnDisabled},on:{click:t.getCode}},[t._v(t._s(t.codeBtnTxt))])],1)]),i("div",{staticClass:"submit-btn",on:{click:t.submitVertify}},[t._v(t._s(t.$t("提交")))])])],1)},a=[],n=e(66986),c=e(9610),o=e(97644),l=(e(23465),e(17263)),r=(e(3726),e(73927),e(3761),e(81049),e(98877)),m=e.n(r),h=e(79009),u=e(78455),A={name:"BindEmail",components:{Vcode:m()},data(){return{img1:e(38580),img2:e(31406),img3:e(75042),img4:e(5431),img5:e(41376),triangleDown:e(44499),show:!1,codeBtnTxt:this.$t("收取验证码"),count:60,interval:null,btnDisabled:!1,formData:{email:"",verifcode:""}}},methods:{onClickLeft(){this.$router.push({path:"/Setting",dir:"left"})},onSuccess(){this.submitHandle(),this.show=!1},getCode(){var t=this;if(""!==this.formData.email){var i=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(i.test(this.formData.email)){l.Z.loading({duration:0,message:this.$t("发送中"),forbidClick:!0});var e={target:this.formData.email};(0,h.TB)(e).then((function(){l.Z.clear(),l.Z.success(t.$t("发送成功")),t.timerFn()})).catch((function(t){l.Z.clear()}))}else(0,l.Z)(this.$t("邮箱格式有误"))}else(0,l.Z)(this.$t("请输入邮箱"))},timerFn(){var t=this;this.codeBtnTxt="".concat(this.$t("再次获取")," ").concat(this.count," s"),this.btnDisabled=!0,this.interval=setInterval((function(){1===t.count?(t.count=60,t.codeBtnTxt=t.$t("再次获取"),t.btnDisabled=!1,clearInterval(t.interval)):(t.count-=1,t.codeBtnTxt="".concat(t.$t("再次获取")," ").concat(t.count," s"))}),1e3)},submitVertify(){if(""!==this.formData.email){var t=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;t.test(this.formData.email)?""!==this.formData.verifcode?this.show=!0:(0,l.Z)(this.$t("请输入验证码")):(0,l.Z)(this.$t("邮箱格式有误"))}else(0,l.Z)(this.$t("请输入邮箱"))},submitHandle(){var t=this;l.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0});var i=(0,o.Z)({},this.formData);(0,u.it)(i).then((0,c.Z)((0,n.Z)().mark((function i(){return(0,n.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return l.Z.success(t.$t("绑定成功")),i.next=3,t.$store.dispatch("getUserInfo");case 3:t.onClickLeft();case 4:case"end":return i.stop()}}),i)})))).catch((function(t){l.Z.clear()}))}}},f=A,d=e(48703),v=(0,d.Z)(f,s,a,!1,null,"35163b9e",null),g=v.exports},44499:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB3ZI9DoJAEEZn4QJaQucNNITE0tLWI3gC4xHsLD2Ona0F4B6BCryCBeBMgdkM2WWRxcKXwA6zP182PIB/R9AriqILDgf4AaItMPSGwwamRXptVVXVvmmaHCaCzsaMnVCbcRwv67qmm87AMRi2kFLmvtosiuIZBMFLCLEFh+B5xyzLrlT7fLIsy3sYhnMs1+AADDslSXL+fOsWOpJIpmm6UhuebuVYiVpJeF+YNo2RqJWE933Tpm8lUiUZFEgMlYhL0pkHSywl6kjC8cCSPol0knCsb0iYJNJJwun9hyo6iUySjAokuER9kjiDJMLnAQN5AwgPjbeTqmD3AAAAAElFTkSuQmCC"}}]);