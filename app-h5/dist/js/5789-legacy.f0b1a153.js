"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[5789],{95789:function(t,a,s){s.r(a),s.d(a,{default:function(){return _}});s(58549);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"page-content"},[a("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("提现详情"),"left-arrow":""},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"h46",staticStyle:{width:"100%"}}),t.pageDone&&t.dataInfo?a("div",{staticClass:"info-content"},[a("div",{staticClass:"order-info-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("订单号"))+"：")]),a("div",{staticClass:"copy"},[a("span",[t._v(t._s(t.dataInfo.order_no))]),a("img",{attrs:{src:s(78481)},on:{click:function(a){return t.copyData(t.dataInfo.order_no)}}})])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("创建时间"))+"：")]),a("div",[t._v(t._s(t.dataInfo.create_time))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("提现金额"))+"：")]),a("div",{staticClass:"money"},[t._v(" "+t._s(["BTC","ETH"].includes(t.dataInfo.coin)?t.dataInfo.volume:t.priceFormat(t.dataInfo.volume))+" "+t._s(t.dataInfo.coin)+" ")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("订单状态"))+"：")]),a("div",{staticClass:"money",class:t.dataInfo.className},[t._v(t._s(t.dataInfo.stateStr))])]),2==t.dataInfo.state?a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("失败原因"))+"：")]),a("div",{staticClass:"money",class:t.dataInfo.className},[t._v(t._s(t.dataInfo.failureMsg||"--"))])]):t._e(),"bank"!=t.dataInfo.coin_blockchain?[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("币种协议"))+"：")]),a("div",[t._v(t._s(t.dataInfo.coin_blockchain))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("钱包地址"))+"：")]),a("div",{staticClass:"copy"},[a("span",[t._v(t._s(t.dataInfo.to))]),a("img",{attrs:{src:s(78481)},on:{click:function(a){return t.copyData(t.dataInfo.to)}}})])])]:[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("开户行"))+"：")]),a("div",[t._v(t._s(t.dataInfo.bank))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("姓名"))+"：")]),a("div",[t._v(t._s(t.dataInfo.bankUserName))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("卡号"))+"：")]),a("div",{staticClass:"copy"},[a("span",[t._v(t._s(t.dataInfo.bankCardNo))]),a("img",{attrs:{src:s(78481)},on:{click:function(a){return t.copyData(t.dataInfo.bankCardNo)}}})])])],a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("手续费"))+"：")]),a("div",[t._v(t._s(t.priceFormat(t.dataInfo.fee))+" USDT")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("实际到账"))+"：")]),t.$t("处理中")==t.dataInfo.stateStr?a("div",{staticClass:"money"},[t._v("--")]):a("div",{staticClass:"money"},[t._v(t._s(t.priceFormat(t.dataInfo.amount))+" "+t._s(t.dataInfo.coin))])])],2)]):t._e()],1)},n=[],e=(s(23465),s(17263)),o=(s(177),s(87929)),c=s(78455),d=s(22204),r={name:"withdrawRecordDetails",components:{[o.Z.name]:o.Z,[e.Z.name]:e.Z},data(){return{pageDone:!1,orderNo:null,dataInfo:null,priceFormat:d.XY,failureMsg:""}},mounted(){var t=this;this.$nextTick((function(){var a=t.$route.query,s=a.order_no,i=a.failure_msg;s?(t.orderNo=s,t.failureMsg=i,t.getDataInfo()):(0,e.Z)(t.$t("订单号不存在"))}))},methods:{onClickLeft(){this.$router.go(-1)},copyData(t){var a=this;this.$copyText(t).then((function(){(0,e.Z)(a.$t("复制成功"))}),(function(){(0,e.Z)(a.$t("复制失败"))}))},getDataInfo(){var t=this;e.Z.loading({duration:0,message:this.$t("请求中")}),(0,c.td)({order_no:this.orderNo}).then((function(a){a.stateStr="",a.className="",0===a.state&&(a.stateStr=t.$t("处理中")),1===a.state&&(a.className="success",a.stateStr=t.$t("成功")),2===a.state&&(a.className="fail",a.stateStr=t.$t("失败")),t.dataInfo=a,t.pageDone=!0,e.Z.clear()})).catch((function(t){e.Z.clear()}))}}},l=r,v=s(48703),f=(0,v.Z)(l,i,n,!1,null,"46b95017",null),_=f.exports},78481:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7ZftDcIgEIYP2kEcgcACdRK7iXWSOkLdwAUgdQMnAV9MMMaU9A8fMeFJLrTlx5MrOQ6YUspRRpxzF2PM9PudUyX68KC1ZpQQKeXEGDvH5utnnBpr7cI5f2JcqaR4BX6IzW+KsT4j1udEGYllfEAMVEEcWFCHN0oI/uS8K4b0geK/UkKwYb3F1cqpiZu4iZv4j8VCiBExUCE+4q7rZkTWHvyN70738OK7ERWix+nySBVo5VSMzdvD3i0gBdUyfgGy/zMdqB3d+wAAAABJRU5ErkJggg=="}}]);