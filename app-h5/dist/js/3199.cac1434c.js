"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[3199],{61333:function(t,e,i){i.d(e,{Z:function(){return u}});i(53987);var n=i(6403),s=i(72681),a="van-empty-network-",r={render:function(){var t=arguments[0],e=function(e,i,n){return t("stop",{attrs:{"stop-color":e,offset:i+"%","stop-opacity":n}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:a+"1",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:a+"2",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:a+"3",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:a+"4",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:a+"5",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:a+"6",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:a+"7",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#"+a+"1)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#"+a+"1)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#"+a+"7)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#"+a+"2)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+a+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+a+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+a+"4)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+a+"4)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#"+a+"5)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#"+a+"6)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},o=(0,n.d)("empty"),l=o[0],c=o[1],h=["error","search","default"],u=l({props:{imageSize:[Number,String],description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(r);var i=this.image;return-1!==h.indexOf(i)&&(i="https://img01.yzcdn.cn/vant/empty-image-"+i+".png"),t("img",{attrs:{src:i}})},genImage:function(){var t=this.$createElement,e={width:(0,s.N)(this.imageSize),height:(0,s.N)(this.imageSize)};return t("div",{class:c("image"),style:e},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:c("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:c("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:c()},[this.genImage(),this.genDescription(),this.genBottom()])}})},15611:function(t,e,i){i(22663)},27676:function(t,e,i){var n=i(6403),s=i(8993),a=i(27843),r=i(7034),o=i(33719),l=(0,n.d)("list"),c=l[0],h=l[1],u=l[2];e["Z"]=c({mixins:[(0,r.X)((function(t){this.scroller||(this.scroller=(0,a.Ob)(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,a=t.offset,r=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||(0,s.x)(i))return!1;var l=!1,c=t.$refs.placeholder.getBoundingClientRect();l="up"===r?e.top-c.top<=a:c.bottom-e.bottom<=a,l&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:h("loading")},[this.slots("loading")||t(o.Z,{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:h("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:h("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:h("placeholder")});return t("div",{class:h(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},14223:function(t,e,i){i(22663),i(14628)},85434:function(t,e,i){i(73927);var n=i(6403),s=i(93820),a=i(27843),r=i(8303),o=i(33719),l=(0,n.d)("pull-refresh"),c=l[0],h=l[1],u=l[2],d=50,g=["pulling","loosing","success"];e["Z"]=c({mixins:[r.D],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:d}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==d)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=(0,a.Ob)(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===(0,a.cx)(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&((0,s.PF)(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,n=this.slots(e,{distance:i});if(n)return n;var s=[],a=this[e+"Text"]||u(e);return-1!==g.indexOf(e)&&s.push(t("div",{class:h("text")},[a])),"loading"===e&&s.push(t(o.Z,{attrs:{size:"16"}},[a])),s},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:h()},[t("div",{ref:"track",class:h("track"),style:e},[t("div",{class:h("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},30678:function(t,e,i){i(22663),i(14628)},53760:function(t,e,i){i.d(e,{Wn:function(){return l},d1:function(){return c}});var n=i(85228),s=Date.now();function a(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var r=n.sk?i.g:window,o=r.requestAnimationFrame||a;r.cancelAnimationFrame||r.clearTimeout;function l(t){return o.call(r,t)}function c(t){l((function(){l(t)}))}},8993:function(t,e,i){function n(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}i.d(e,{x:function(){return n}})},4141:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});i(73927);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-content"},[e("cancel-dialog",{attrs:{"dialog-show":t.cancelShow,"dialog-data":t.currentData},on:{"update:dialogShow":function(e){t.cancelShow=e},"update:dialog-show":function(e){t.cancelShow=e},done:t.tableChange}}),e("reminds-dialog",{attrs:{"dialog-show":t.remindShow,"dialog-data":t.currentData},on:{"update:dialogShow":function(e){t.remindShow=e},"update:dialog-show":function(e){t.remindShow=e},done:t.tableChange}}),e("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("我的订单"),"left-arrow":""},on:{"click-left":function(){return t.$router.push({path:"/me",dir:"left"})}}}),e("div",{staticClass:"nav-content"},[e("van-tabs",{on:{change:t.tableChange},model:{value:t.currentNav,callback:function(e){t.currentNav=e},expression:"currentNav"}},t._l(t.navData,(function(t,i){return e("van-tab",{key:i,attrs:{title:t.title,name:t.name}})})),1)],1),e("div",{staticStyle:{width:"100%",height:"90px"}}),e("van-pull-refresh",{staticClass:"pull-content",attrs:{"pulling-text":t.$t("下拉即可刷新"),"loosing-text":t.$t("释放即可刷新"),"loading-text":t.$t("加载中")},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":t.list.length?t.$t("没有更多了"):"","loading-text":t.$t("加载中")},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list.length?e("div",{staticClass:"list-content"},t._l(t.list,(function(i){return e("div",{key:i.id,staticClass:"item"},[e("div",{staticClass:"info-item"},[e("p",[t._v(t._s(t.$t("流水号"))+"：")]),e("div",[e("div",{on:{click:function(e){return t.copyHandle(i.id)}}},[e("span",{staticClass:"nowrap",staticStyle:{width:"200px"}},[t._v(t._s(i.id))]),e("img",{attrs:{src:t.copyIcon,alt:""}})])])]),e("div",{staticClass:"info-item"},[e("p",[t._v(t._s(t.$t("信息"))+"：")]),e("div",[e("div",[t._v(t._s(i.goodsCount)+" "+t._s(t.$t("个商品")))]),e("p",[t._v(t._s(t.$t("来自"))+" "+t._s(i.goodsFrom))])])]),e("div",{staticClass:"info-item money"},[e("p",[t._v(t._s(t.$t("金额"))+"：")]),e("div",[t._v("$"+t._s(t.priceFormat(i.priceCount)))])]),e("div",{staticClass:"info-item opreate"},[e("p",[t._v(t._s(t.$t("操作"))+"：")]),e("div",{on:{click:function(e){return t.openPage("/orderDetails",{id:i.id,returnStatus:i.returnStatus,index:t.currentNav})}}},[t._v(" "+t._s(t.$t("查看详情"))+" ")])]),-1!==Number(i.status)?e("div",{staticClass:"btn-content"},[0===Number(i.status)?e("div",{staticClass:"btn-item",on:{click:function(e){return t.cancleOrder(i)}}},[t._v(" "+t._s(t.$t("取消订单"))+" ")]):t._e(),0===Number(i.status)?e("div",{staticClass:"btn-item color",on:{click:function(e){return t.openPeddingPay(i)}}},[t._v(" "+t._s(t.$t("立即付款"))+" ")]):t._e(),1===Number(i.status)?e("div",{staticClass:"btn-item color",on:{click:function(e){return t.remindHandle(i)}}},[t._v(" "+t._s(t.$t("提醒发货"))+" ")]):t._e(),1===Number(i.status)?e("div",{staticClass:"btn-item",on:{click:function(e){return t.openPage("/orderRefund",{id:i.id,a:i.priceCount})}}},[t._v(" "+t._s(t.$t("申请退货"))+" ")]):t._e(),3===Number(i.status)?e("div",{staticClass:"btn-item color",on:{click:function(e){return t.orderPick(i)}}},[t._v(" "+t._s(t.$t("确认收货"))+" ")]):t._e(),4===Number(i.status)?e("div",{staticClass:"btn-item",on:{click:function(e){return t.openPage("/orderEvaluate",{id:i.id})}}},[t._v(" "+t._s(t.$t("立即评价"))+" ")]):t._e(),6===Number(i.status)?e("div",{staticClass:"tips"},[Boolean(i.returnStatus)?t._e():e("span",[t._v(t._s(t.$t("未退款")))]),1===Number(i.returnStatus)?e("span",{staticClass:"running"},[t._v(t._s(t.$t("退款中")))]):t._e(),2===Number(i.returnStatus)?e("span",{staticClass:"success"},[t._v(t._s(t.$t("退款成功")))]):t._e(),3===Number(i.returnStatus)?e("span",{staticClass:"fail"},[t._v(t._s(t.$t("退款失败")))]):t._e()]):t._e()]):t._e()])})),0):t._e(),t.list.length||t.loading?t._e():e("van-empty",{attrs:{description:t.$t("暂无数据")}})],1)],1),t._m(0),e("transition",{attrs:{name:"fade"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.isShowTopBtn,expression:"isShowTopBtn"}],staticClass:"to_top",attrs:{src:i(14533)},on:{click:t.handleToTop}})])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-content"},[e("div",{staticClass:"item"})])}],a=i(79401),r=(i(46021),i(18720)),o=(i(30678),i(85434)),l=(i(23465),i(17263)),c=(i(15611),i(61333)),h=(i(72154),i(86881)),u=(i(53958),i(52798)),d=(i(14223),i(27676)),g=(i(177),i(87929)),f=(i(6717),i(78245)),m=i(30622),p=i(22204),v=i(78455),S=i(68593),x={name:"Order",components:{[g.Z.name]:g.Z,[d.Z.name]:d.Z,[u.Z.name]:u.Z,[h.Z.name]:h.Z,[c.Z.name]:c.Z,[l.Z.name]:l.Z,[o.Z.name]:o.Z,[r.Z.name]:r.Z,CancelDialog:f.Z,RemindsDialog:m.Z},data(){return{isShowTopBtn:!1,copyIcon:i(78481),currentNav:"",navData:[{title:this.$t("全部"),name:""},{title:this.$t("待付款"),name:"0"},{title:this.$t("待发货"),name:"1"},{title:this.$t("待收货"),name:"3"},{title:this.$t("待评价"),name:"4"},{title:this.$t("退款/售后"),name:"6"}],loading:!1,finished:!1,refreshing:!1,pageNum:1,pageSize:10,list:[],cancelShow:!1,remindShow:!1,currentData:{},isToask:!0}},mounted(){var t=this;window.addEventListener("scroll",(function(){t.isShowTopBtn=document.documentElement.scrollTop||document.body.scrollTop>500}))},created(){if((0,p.bg)()){var t=this.$route.query;t&&t.type&&(this.currentNav=t.type)}else this.$router.push("/");this.onLoad()},methods:{copyHandle(t){var e=this;this.$copyText(t).then((function(){(0,l.Z)(e.$t("复制成功"))}),(function(){(0,l.Z)(e.$t("复制失败"))}))},priceFormat(t){return(0,p.XY)(t)},onRefresh(){this.finished=!1,this.pageNum=1,this.loading=!0,this.onLoad(),this.isToask=!0},tableChange(t){l.Z.loading({duration:0,message:this.$t("加载中")}),this.list=[],this.onRefresh()},onLoad(){this.refreshing&&(this.list=[],this.refreshing=!1),this.getTableList()},getTableList(){var t=this,e={pageNum:this.pageNum,pageSize:this.pageSize};this.currentNav&&(e.status=Number(this.currentNav)),(0,v.es)(e).then((function(e){var i=e.pageList;t.list=1===t.pageNum?i:[].concat((0,a.Z)(t.list),(0,a.Z)(i)),t.pageNum++,t.loading=!1,l.Z.clear(),i.length<t.pageSize&&(t.finished=!0);var n={};t.list=t.list.reduce((function(t,e){return!n[e.id]&&(n[e.id]=t.push(e)),t}),[])})).catch((function(){t.loading=!1,t.finished=!0,l.Z.clear()}))},cancleOrder(t){this.currentData=t,this.cancelShow=!0},remindHandle(t){var e=localStorage.getItem("remindStore")?JSON.parse(localStorage.getItem("remindStore")):[];e.includes(t.id)?(0,l.Z)(this.$t("该订单已提醒过啦~")):(this.currentData=t,this.remindShow=!0)},openPage(t,e){var i={path:t};e&&(i.query=e),this.$router.push(i)},openPeddingPay(t){var e=[{orderList:t.id,orderId:t.id}];this.$router.push({path:"/PendingPayment",query:{orderList:JSON.stringify(e),total:t.priceCount}})},orderPick(t){var e=this;r.Z.confirm({title:this.$t("提示"),message:this.$t("确认收货吗？"),confirmButtonText:this.$t("确认"),cancelButtonText:this.$t("取消")}).then((function(){l.Z.loading({duration:0,message:e.$t("提交中"),forbidClick:!0});var i={orderId:t.id};(0,v.lI)(i).then((function(){l.Z.clear(),(0,l.Z)(e.$t("收货成功")),e.isToask=!1,setTimeout((function(){e.tableChange()}),1e3)})).catch((function(){l.Z.clear()}))})).catch((function(){S.log("cancel")}))},handleToTop(){scrollTo({top:0,left:0,behavior:"smooth"})}}},b=x,y=i(48703),C=(0,y.Z)(b,n,s,!1,null,"00c22d0e",null),w=C.exports},14533:function(t){t.exports="data:image/png;base64,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"}}]);