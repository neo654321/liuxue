"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[5991],{15991:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var a=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"min-height":"100vh"}},[s("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("设置"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"h46",staticStyle:{width:"100%"}}),s("div",{staticClass:"nav-content"},t._l(t.navData,(function(e,a){return s("div",{key:a,staticClass:"item",on:{click:function(s){return t.openWin(e.path)}}},[s("div",{staticClass:"name"},[s("p",[t._v(t._s(e.name))])]),s("div",{staticClass:"arrow"},[null!==e&&void 0!==e&&e.tips?s("p",[t._v(t._s(null===e||void 0===e?void 0:e.tips))]):t._e(),s("img",{staticClass:"image_reversed",attrs:{src:t.images.arrow,alt:""}})])])})),0),s("div",{staticClass:"tuichu",on:{click:t.tuichu}},[t._v(t._s(t.$t("退出")))]),s("div",{staticClass:"version"},[t._v("v"+t._s(t.version))])],1)},i=[],n=e(97644),A=(e(177),e(87929)),o=(e(73927),e(22204)),r=e(80332),h=e(78455),u=e(68593),c={name:"Setting",components:{[A.Z.name]:A.Z},data(){return{version:"1.0.0",images:{arrow:e(68142)},itemName:"EShop",isShelves:{NODE_ENV:"production",VUE_APP_ITEM_NAME:"EShop",VUE_APP_MAIN_COLOR:"#f89900",VUE_APP_FOOTER_COLOR:"#f89900",BASE_URL:"./"}.VUE_APP_PUT_ON_SHELVES,navData:[{name:this.$t("登录密码"),path:"/LoginPasswordReset"},{name:this.$t("资金密码"),tips:"",path:"/FundPasswordSettings"},{name:this.$t("收货地址"),path:"/AddressList"}]}},computed:(0,n.Z)({},(0,r.Se)({userInfo:"userInfo"})),created(){(0,o.bg)()?(this.navData[1].tips=this.userInfo.safeword?"":this.$t("未设置"),this.navData[1].path=this.userInfo.safeword?"/FundPasswordReset":"/FundPasswordSettings"):this.$router.push("/")},methods:{onClickLeft(){this.$router.push({path:"/me",dir:"left"})},openWin(t){u.log("path ::->",t),this.$router.push({path:t})},tuichu(){(0,h.xS)({token:localStorage.getItem("token")}),this.$store.dispatch("logout"),this.$router.push("/")}}},l=c,d=e(48703),p=(0,d.Z)(l,a,i,!1,null,"265da6a3",null),v=p.exports},68142:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgBnZNhDYAgEIVfBCMQwQbaRBpABBsQwQhGIIIRjGAEhA02xw64823vB9t9d4/BAcARPUGgEH1HKwlQvEuBkCOqHuAJKEVce5DNRUESUeU4NXRhEFET09J5+zPNYSBNTBtqjn64gK2Km4AC/T6O2zWdF25XD+IdqK7JhorQ+ksLGqqLTwwW6nsxA4ZKhBlMOQh2+gW0mlnDNA3pIwAAAABJRU5ErkJggg=="}}]);