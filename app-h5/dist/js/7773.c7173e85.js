"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[7773],{61333:function(t,e,r){r.d(e,{Z:function(){return d}});r(53987);var a=r(6403),s=r(72681),i="van-empty-network-",n={render:function(){var t=arguments[0],e=function(e,r,a){return t("stop",{attrs:{"stop-color":e,offset:r+"%","stop-opacity":a}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:i+"1",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:i+"2",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:i+"3",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:i+"4",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:i+"5",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:i+"6",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:i+"7",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#"+i+"1)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#"+i+"1)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#"+i+"7)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#"+i+"2)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+i+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+i+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+i+"4)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+i+"4)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#"+i+"5)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#"+i+"6)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},l=(0,a.d)("empty"),o=l[0],c=l[1],u=["error","search","default"],d=o({props:{imageSize:[Number,String],description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(n);var r=this.image;return-1!==u.indexOf(r)&&(r="https://img01.yzcdn.cn/vant/empty-image-"+r+".png"),t("img",{attrs:{src:r}})},genImage:function(){var t=this.$createElement,e={width:(0,s.N)(this.imageSize),height:(0,s.N)(this.imageSize)};return t("div",{class:c("image"),style:e},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:c("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:c("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:c()},[this.genImage(),this.genDescription(),this.genBottom()])}})},15611:function(t,e,r){r(22663)},30551:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my_loan"},[e("van-nav-bar",{ref:"header",attrs:{"safe-area-inset-top":"",title:t.$t("我的贷款"),"left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{class:["top_card",t.isEn&&"en_card"]},[e("div",{staticClass:"tt"},[e("div",{staticClass:"tl"},[e("span",[t._v(t._s(t.$t("我的贷款")))]),e("span",[t._v(t._s(t.applyAmount))])])]),e("div",{staticClass:"tb"},t._l(t.cardList,(function(r,a){return e("div",{key:a,staticClass:"item",class:t.isEn&&0!=a&&"en_item"},[e("span",[t._v(" "+t._s(r.value)+" "),e("em",[t._v(t._s(0==a?t.$t("天"):""))])]),e("span",[t._v(t._s(r.title))])])})),0)]),e("div",{staticClass:"loan_history"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("贷款记录")))]),e("ul",t._l(t.loanHistory,(function(a,s){return e("li",{key:s,class:t.isEn&&"en_li"},[e("img",{attrs:{src:r(22680),alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"top"},[e("div",{staticClass:"tleft"},[e("span",[t._v(t._s(t.priceFormat(a.applyAmount)))]),e("span",[t._v(t._s(t.$t("申请日期"))+": "+t._s(t.$formatZoneDate(a.customerSubmitTime)))])]),1!=a.status&&5!=a.status?e("div",{staticClass:"btn",on:{click:function(e){return t.handleRepayment(a.status,a.id)}}},[2==a.status||3==a.status?e("button",[t._v(t._s(t.$t("还款")))]):4==a.status?e("button",[t._v(" "+t._s(t.$t("重新申请"))+" ")]):t._e()]):e("div",{staticClass:"null"},[t._v("--")])]),e("div",{staticClass:"btm"},[e("span",[t._v(" "+t._s(t.$t("还款周期"))+": "+t._s(a.creditPeriod)),e("em",[t._v(t._s(t.$t("天")))])]),e("span",[t._v(t._s(t.$t("固定利率"))+": "+t._s(Math.floor(100*a.creditRate)+"%"))]),1==a.status?e("span",{staticStyle:{color:"var(--main-color)"}},[t._v(t._s(t.$t("申请中")))]):t._e(),2==a.status?e("span",{staticStyle:{color:"#2FAA59"}},[t._v(t._s(t.$t("借款成功")))]):t._e(),3==a.status?e("span",{staticStyle:{color:"#E43434"}},[t._v(t._s(t.$t("已逾期")))]):t._e(),4==a.status?e("span",{staticStyle:{color:"#E43434"}},[t._v(t._s(t.$t("借款失败")))]):t._e(),5==a.status?e("span",{staticStyle:{color:"#EB9D38"}},[t._v(t._s(t.$t("已节清")))]):t._e()])])])})),0),t.loanHistory.length?t._e():e("van-empty",{attrs:{description:t.$t("暂无数据")}})],1),e("Footer")],1)},s=[],i=r(66986),n=r(9610),l=(r(15611),r(61333)),o=(r(73927),r(62241)),c=r(22204),u=r(89882),d={components:{Footer:u.Z,[l.Z.name]:l.Z},data(){return{priceFormat:c.XY,cardList:[{title:this.$t("已贷款"),value:0},{title:this.$t("产生利息"),value:"--"},{title:this.$t("预计还款"),value:"--"}],isEn:"cn"!==(0,c.cF)("lang")||"tw"!==(0,c.cF)("lang"),pageNo:1,loanHistory:[],applyAmount:"--",isCheckAvailability:"false"}},mounted(){this.requireMyLoan(),this.requireMyLoanRecord(),this.requireCheckAvailability()},methods:{requireMyLoan(){var t=this;return(0,n.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.nD)();case 2:r=e.sent,t.cardList[0].value=r.alreadyCreditDays,t.cardList[1].value=t.priceFormat(r.interest)||"--",t.cardList[2].value=t.priceFormat(r.estimatePayment)||"--",t.applyAmount=t.priceFormat(r.applyAmount)||"--";case 7:case"end":return e.stop()}}),e)})))()},requireMyLoanRecord(){var t=this;return(0,n.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.bh)({pageNo:t.pageNo});case 2:r=e.sent,t.loanHistory=r.elements;case 4:case"end":return e.stop()}}),e)})))()},handleRepayment(t,e){2!=t&&3!=t||this.$router.push("/repayment/expected?creditId="+e),4!=t&&5!=t||this.$router.push("/loan/apply?creditId="+e)},requireCheckAvailability(){var t=this;return(0,n.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.eb)();case 2:t.isCheckAvailability=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},p=d,h=r(48703),v=(0,h.Z)(p,a,s,!1,null,"1d608f5b",null),m=v.exports},22680:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB7ZpLctNAEIb/kV/KCnMDcQP7BvgGuUHIBopVkiVFUTFQrCErKiuTExBOQDiBc4PMEbSzY2MP3WO9TBQWihWkUX9VtjQjVbn+6ce05AYEQRAEQfhfqOzATNBf/MaRMXgOgwB1RkEb4MLv4FIdIkynI2ZfESgPP+k0gFtos8Zo7zU0D6xgh8XG6F4XQ7Z0m0deC6dm24U1LcUPmgtRU8iSB0gNGMwXOKbj2Fp4fo6bzMVkNVBjOB/dLslrDQY8JqFh7xWeenwB2658VnexDGswK5zFY0pg/dmEQjeK35vMvde0HLUXbNmEaZAMu3jWzrltwMvhKh4aRtv3ES6W+IYG0IMjoSr8A2Xr5yU+owF0OzjJ25achbel5mXpnLkQ7mSzfvRJuCPYKJzsvXRjm6JwfUHhOsnONc6lRbDriGDXEcGu00ZBzHQcAK3vdNbHo6O0Gr4boQCFBavhWJvpp0Ngxa93H1l08VcyD3JpNXx7TVbmla5NKVrYwjEsmiw9yrG0JktcoBRU4QV+sGD786loiun05Tc5kKFYe48KsbMsvXHvNbu3TmfN2Ew/nqJC7HRb4kRWddE734fvF/3hGBWglMIjRzQdO5eoAKVVWqlodUViR2r4RqMC7CRL38dGNApVRGUhDw+uI4JdwnjbDzU+1fxe1N2S1Ka0AkdRV0CtYQ2sJTOlk6YWw20OgK2GjMHgdoHp7BwlFf7l0/LwhDTsI/Pvv1K4skf+sg0gJBIOty3FvVo2hm0DyBp/lYPOcLcxLYYtPZ9jX7Vw4ETr4Qq/fB9fXOhKEgRBEAQX+AOTRc7aGzjLpAAAAABJRU5ErkJggg=="}}]);