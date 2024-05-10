"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[1586],{71586:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-content",staticStyle:{"min-height":"100vh"}},[e("nationality-list",{ref:"controlChild",attrs:{title:t.$t("选择区域码")},on:{getName:function(e){return t.getName(arguments)}}}),e("Vcode",{staticStyle:{direction:"ltr"},attrs:{imgs:[t.img1,t.img2,t.img3,t.img4,t.img5],show:t.show,canvasHeight:200,sliderText:t.$t("拖动滑块以完成拼图"),successText:t.$t("验证通过!"),failText:t.$t("验证失败,请重试")},on:{success:t.onSuccess,close:function(e){t.show=!1}}}),e("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("手机绑定"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"h46",staticStyle:{width:"100%"}}),e("div",{staticClass:"form-content"},[e("div",{staticClass:"form-item"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("手机号")))]),e("div",{staticClass:"input-content"},[e("el-input",{attrs:{placeholder:t.$t("请输入手机号"),maxlength:"20",clearable:""},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:" formData.phone "}},[e("div",{attrs:{slot:"prepend"},on:{click:t.openNational},slot:"prepend"},[e("p",[t._v("+"),e("span",[t._v(t._s(t.dialCode))]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:t.triangleDown,alt:""}})])])])],1)]),e("div",{staticClass:"form-item"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("验证码")))]),e("div",{staticClass:"input-content code"},[e("el-input",{attrs:{placeholder:t.$t("请输入验证码"),maxlength:"6"},model:{value:t.formData.verifcode,callback:function(e){t.$set(t.formData,"verifcode",e)},expression:" formData.verifcode "}}),e("div",{staticClass:"btn",class:{disabled:t.btnDisabled},on:{click:t.getCode}},[t._v(t._s(t.codeBtnTxt))])],1)]),e("div",{staticClass:"submit-btn",on:{click:t.submitVertify}},[t._v(t._s(t.$t("提交")))])])],1)},s=[],n=i(66986),o=i(9610),c=i(97644),l=(i(23465),i(17263)),r=(i(73927),i(3761),i(98877)),h=i.n(r),d=i(14569),m=i(79009),f=i(78455),u={name:"BindPhone",components:{NationalityList:d.Z,Vcode:h()},data(){return{img1:i(38580),img2:i(31406),img3:i(75042),img4:i(5431),img5:i(41376),triangleDown:i(44499),show:!1,pageDiaCode:!1,dialCode:localStorage.getItem("dialCode")||1,codeBtnTxt:this.$t("收取验证码"),count:60,interval:null,btnDisabled:!1,formData:{phone:"",verifcode:""}}},methods:{onClickLeft(){this.$router.push({path:"/Setting",dir:"left"})},onSuccess(){this.submitHandle(),this.show=!1},getName(t){this.pageDiaCode?(this.dialCode=t[2],localStorage.setItem("dialCode",this.dialCode)):this.pageDiaCode=!0},openNational(){this.$refs.controlChild.open()},getCode(){var t=this;if(""!==this.formData.phone){var e=/^[0-9]+[0-9]*$/;if(e.test(this.formData.phone)){l.Z.loading({duration:0,message:this.$t("发送中"),forbidClick:!0});var i={target:"".concat(this.dialCode," ").concat(this.formData.phone)};(0,m.TB)(i).then((function(){l.Z.success(t.$t("发送成功")),t.timerFn()})).catch((function(t){l.Z.clear()}))}else(0,l.Z)(this.$t("手机号格式有误"))}else(0,l.Z)(this.$t("请输入手机号"))},timerFn(){var t=this;this.codeBtnTxt="".concat(this.$t("再次获取")," ").concat(this.count," s"),this.btnDisabled=!0,this.interval=setInterval((function(){1===t.count?(t.count=60,t.codeBtnTxt=t.$t("再次获取"),t.btnDisabled=!1,clearInterval(t.interval)):(t.count-=1,t.codeBtnTxt="".concat(t.$t("再次获取")," ").concat(t.count," s"))}),1e3)},submitVertify(){if(""!==this.formData.phone){var t=/^[0-9]+[0-9]*$/;t.test(this.formData.phone)?""!==this.formData.verifcode?this.show=!0:(0,l.Z)(this.$t("请输入验证码")):(0,l.Z)(this.$t("手机号格式有误"))}else(0,l.Z)(this.$t("请输入手机号"))},submitHandle(){var t=this;l.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0});var e=(0,c.Z)((0,c.Z)({},this.formData),{},{phone:"".concat(this.dialCode," ").concat(this.formData.phone)});(0,f.Ch)(e).then((0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l.Z.success(t.$t("绑定成功")),e.next=3,t.$store.dispatch("getUserInfo");case 3:t.onClickLeft();case 4:case"end":return e.stop()}}),e)})))).catch((function(t){l.Z.clear()}))}}},A=u,p=i(48703),C=(0,p.Z)(A,a,s,!1,null,"3e770af5",null),v=C.exports},44499:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB3ZI9DoJAEEZn4QJaQucNNITE0tLWI3gC4xHsLD2Ona0F4B6BCryCBeBMgdkM2WWRxcKXwA6zP182PIB/R9AriqILDgf4AaItMPSGwwamRXptVVXVvmmaHCaCzsaMnVCbcRwv67qmm87AMRi2kFLmvtosiuIZBMFLCLEFh+B5xyzLrlT7fLIsy3sYhnMs1+AADDslSXL+fOsWOpJIpmm6UhuebuVYiVpJeF+YNo2RqJWE933Tpm8lUiUZFEgMlYhL0pkHSywl6kjC8cCSPol0knCsb0iYJNJJwun9hyo6iUySjAokuER9kjiDJMLnAQN5AwgPjbeTqmD3AAAAAElFTkSuQmCC"}}]);