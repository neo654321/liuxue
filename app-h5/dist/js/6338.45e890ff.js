"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[6338],{36338:function(t,i,s){s.r(i),s.d(i,{default:function(){return g}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"FundPasswordReset",staticStyle:{"min-height":"100vh"}},[i("Vcode",{staticStyle:{direction:"ltr"},attrs:{imgs:[t.img1,t.img2,t.img3,t.img4,t.img5],show:t.show,canvasHeight:200,sliderText:t.$t("拖动滑块以完成拼图"),successText:t.$t("验证通过!"),failText:t.$t("验证失败,请重试")},on:{success:t.onSuccess,close:function(i){t.show=!1}}}),i("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("重置资金密码"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"h46",staticStyle:{width:"100%"}}),i("div",{staticClass:"nr"},[i("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("原密码")))]),i("div",{staticClass:"shuru"},[i("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:t.$t("请输入6位数数字原密码"),maxlength:"6","show-password":"",clearable:""},model:{value:t.it.input1,callback:function(i){t.$set(t.it,"input1",i)},expression:" it.input1 "}})],1),i("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("新密码")))]),i("div",{staticClass:"shuru"},[i("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:t.$t("请输入6位数数字新密码"),maxlength:"6","show-password":"",clearable:""},model:{value:t.it.input2,callback:function(i){t.$set(t.it,"input2",i)},expression:" it.input2 "}})],1),i("div",{staticClass:"biaoti"},[t._v(t._s(t.$t("再次输入新密码")))]),i("div",{staticClass:"shuru"},[i("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:t.$t("请再次输入6位数数字新密码"),maxlength:"6","show-password":"",clearable:""},model:{value:t.it.input3,callback:function(i){t.$set(t.it,"input3",i)},expression:" it.input3 "}})],1),i("div",{staticClass:"tijiao",on:{click:t.biaodantijiao}},[t._v(t._s(t.$t("提交")))])])],1)},a=[],n=s(66986),l=s(9610),u=(s(23465),s(17263)),c=(s(177),s(87929)),o=(s(73927),s(78455)),r=s(22204),d=s(98877),p=s.n(d),h={data(){return{img1:s(38580),img2:s(31406),img3:s(75042),img4:s(5431),img5:s(41376),show:!1,it:{input1:"",input2:"",input3:""}}},components:{[c.Z.name]:c.Z,Vcode:p()},created(){(0,r.bg)()||this.$router.push("/")},methods:{onClickLeft(){this.$router.push({path:"/Setting",dir:"left"})},biaodantijiao(){var t=this;""!==t.it.input1?""!==t.it.input2?t.it.input3===t.it.input2?this.submitHandle():(0,u.Z)(t.$t("两次密码输入不一致")):(0,u.Z)(t.$t("请输入6位数数字新密码")):(0,u.Z)(t.$t("请输入6位数数字原密码"))},onSuccess(){this.submitHandle(),this.show=!1},submitHandle(){var t=this;u.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0});var i={old_safeword:this.it.input1,safeword:this.it.input2,re_safeword:this.it.input3};(0,o.z1)(i).then((0,l.Z)((0,n.Z)().mark((function i(){return(0,n.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u.Z.success(t.$t("修改成功")),i.next=3,t.$store.dispatch("getUserInfo");case 3:t.onClickLeft();case 4:case"end":return i.stop()}}),i)})))).catch((function(t){u.Z.clear()}))}}},v=h,f=s(48703),m=(0,f.Z)(v,e,a,!1,null,"56ffdbed",null),g=m.exports}}]);