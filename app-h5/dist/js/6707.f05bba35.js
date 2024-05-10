"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[6707],{61333:function(t,i,e){e.d(i,{Z:function(){return u}});e(53987);var n=e(6403),s=e(72681),r="van-empty-network-",o={render:function(){var t=arguments[0],i=function(i,e,n){return t("stop",{attrs:{"stop-color":i,offset:e+"%","stop-opacity":n}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:r+"1",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[i("#FFF",0,.5),i("#F2F3F5",100)]),t("linearGradient",{attrs:{id:r+"2",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[i("#EBEDF0",0),i("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:r+"3",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[i("#EAEDF0",0),i("#DCDEE0",100)]),t("linearGradient",{attrs:{id:r+"4",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[i("#EAEDF0",0),i("#DCDEE0",100)]),t("linearGradient",{attrs:{id:r+"5",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[i("#EAEDF0",0),i("#DCDEE0",100)]),t("linearGradient",{attrs:{id:r+"6",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[i("#EAEDF0",0),i("#DCDEE0",100)]),t("radialGradient",{attrs:{id:r+"7",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[i("#EBEDF0",0),i("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#"+r+"1)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#"+r+"1)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#"+r+"7)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#"+r+"2)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+r+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+r+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+r+"4)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+r+"4)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#"+r+"5)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#"+r+"6)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},a=(0,n.d)("empty"),l=a[0],h=a[1],c=["error","search","default"],u=l({props:{imageSize:[Number,String],description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,i=this.slots("image");if(i)return i;if("network"===this.image)return t(o);var e=this.image;return-1!==c.indexOf(e)&&(e="https://img01.yzcdn.cn/vant/empty-image-"+e+".png"),t("img",{attrs:{src:e}})},genImage:function(){var t=this.$createElement,i={width:(0,s.N)(this.imageSize),height:(0,s.N)(this.imageSize)};return t("div",{class:h("image"),style:i},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,i=this.slots("description")||this.description;if(i)return t("p",{class:h("description")},[i])},genBottom:function(){var t=this.$createElement,i=this.slots();if(i)return t("div",{class:h("bottom")},[i])}},render:function(){var t=arguments[0];return t("div",{class:h()},[this.genImage(),this.genDescription(),this.genBottom()])}})},15611:function(t,i,e){e(22663)},27676:function(t,i,e){var n=e(6403),s=e(8993),r=e(27843),o=e(7034),a=e(33719),l=(0,n.d)("list"),h=l[0],c=l[1],u=l[2];i["Z"]=h({mixins:[(0,o.X)((function(t){this.scroller||(this.scroller=(0,r.Ob)(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var i,e=t.$el,n=t.scroller,r=t.offset,o=t.direction;i=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var a=i.bottom-i.top;if(!a||(0,s.x)(e))return!1;var l=!1,h=t.$refs.placeholder.getBoundingClientRect();l="up"===o?i.top-h.top<=r:h.bottom-i.bottom<=r,l&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:c("loading")},[this.slots("loading")||t(a.Z,{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var i=this.slots("finished")||this.finishedText;if(i)return t("div",{class:c("finished-text")},[i])}},genErrorText:function(){var t=this.$createElement;if(this.error){var i=this.slots("error")||this.errorText;if(i)return t("div",{on:{click:this.clickErrorText},class:c("error-text")},[i])}}},render:function(){var t=arguments[0],i=t("div",{ref:"placeholder",key:"placeholder",class:c("placeholder")});return t("div",{class:c(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():i,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():i])}})},14223:function(t,i,e){e(22663),e(14628)},26536:function(t,i,e){e.d(i,{O:function(){return s}});var n=e(93820),s=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var i=this,e=function(e){i.closeOnClickOutside&&!i.$el.contains(e.target)&&i[t.method]()};return{clickOutsideHandler:e}},mounted:function(){(0,n.on)(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){(0,n.S1)(document,t.event,this.clickOutsideHandler)}}}},85434:function(t,i,e){e(73927);var n=e(6403),s=e(93820),r=e(27843),o=e(8303),a=e(33719),l=(0,n.d)("pull-refresh"),h=l[0],c=l[1],u=l[2],d=50,f=["pulling","loosing","success"];i["Z"]=h({mixins:[o.D],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:d}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==d)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=(0,r.Ob)(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===(0,r.cx)(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&((0,s.PF)(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var i=+(this.pullDistance||this.headHeight);return t>i&&(t=t<2*i?i+(t-i)/2:1.5*i+(t-2*i)/4),Math.round(t)},setStatus:function(t,i){var e;e=i?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,e!==this.status&&(this.status=e)},genStatus:function(){var t=this.$createElement,i=this.status,e=this.distance,n=this.slots(i,{distance:e});if(n)return n;var s=[],r=this[i+"Text"]||u(i);return-1!==f.indexOf(i)&&s.push(t("div",{class:c("text")},[r])),"loading"===i&&s.push(t(a.Z,{attrs:{size:"16"}},[r])),s},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],i={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:c()},[t("div",{ref:"track",class:c("track"),style:i},[t("div",{class:c("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},30678:function(t,i,e){e(22663),e(14628)},77085:function(t,i,e){var n=e(6403),s=e(47741),r=e(93820),o=e(8303),a=e(26536),l=(0,n.d)("swipe-cell"),h=l[0],c=l[1],u=.15;i["Z"]=h({mixins:[o.D,(0,a.O)({event:"touchstart",method:"onClick"})],props:{onClose:Function,disabled:Boolean,leftWidth:[Number,String],rightWidth:[Number,String],beforeClose:Function,stopPropagation:Boolean,name:{type:[Number,String],default:""}},data:function(){return{offset:0,dragging:!1}},computed:{computedLeftWidth:function(){return+this.leftWidth||this.getWidthByRef("left")},computedRightWidth:function(){return+this.rightWidth||this.getWidthByRef("right")}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{getWidthByRef:function(t){if(this.$refs[t]){var i=this.$refs[t].getBoundingClientRect();return i.width}return 0},open:function(t){var i="left"===t?this.computedLeftWidth:-this.computedRightWidth;this.opened=!0,this.offset=i,this.$emit("open",{position:t,name:this.name,detail:this.name})},close:function(t){this.offset=0,this.opened&&(this.opened=!1,this.$emit("close",{position:t,name:this.name}))},onTouchStart:function(t){this.disabled||(this.startOffset=this.offset,this.touchStart(t))},onTouchMove:function(t){if(!this.disabled&&(this.touchMove(t),"horizontal"===this.direction)){this.dragging=!0,this.lockClick=!0;var i=!this.opened||this.deltaX*this.startOffset<0;i&&(0,r.PF)(t,this.stopPropagation),this.offset=(0,s.w6)(this.deltaX+this.startOffset,-this.computedRightWidth,this.computedLeftWidth)}},onTouchEnd:function(){var t=this;this.disabled||this.dragging&&(this.toggle(this.offset>0?"left":"right"),this.dragging=!1,setTimeout((function(){t.lockClick=!1}),0))},toggle:function(t){var i=Math.abs(this.offset),e=this.opened?1-u:u,n=this.computedLeftWidth,s=this.computedRightWidth;s&&"right"===t&&i>s*e?this.open("right"):n&&"left"===t&&i>n*e?this.open("left"):this.close()},onClick:function(t){void 0===t&&(t="outside"),this.$emit("click",t),this.opened&&!this.lockClick&&(this.beforeClose?this.beforeClose({position:t,name:this.name,instance:this}):this.onClose?this.onClose(t,this,{name:this.name}):this.close(t))},getClickHandler:function(t,i){var e=this;return function(n){i&&n.stopPropagation(),e.onClick(t)}},genLeftPart:function(){var t=this.$createElement,i=this.slots("left");if(i)return t("div",{ref:"left",class:c("left"),on:{click:this.getClickHandler("left",!0)}},[i])},genRightPart:function(){var t=this.$createElement,i=this.slots("right");if(i)return t("div",{ref:"right",class:c("right"),on:{click:this.getClickHandler("right",!0)}},[i])}},render:function(){var t=arguments[0],i={transform:"translate3d("+this.offset+"px, 0, 0)",transitionDuration:this.dragging?"0s":".6s"};return t("div",{class:c(),on:{click:this.getClickHandler("cell")}},[t("div",{class:c("wrapper"),style:i},[this.genLeftPart(),this.slots(),this.genRightPart()])])}})},72951:function(t,i,e){e(22663)},8993:function(t,i,e){function n(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}e.d(i,{x:function(){return n}})},98720:function(t,i,e){e.d(i,{Ew:function(){return c},Ko:function(){return o},Mz:function(){return m},S:function(){return f},VU:function(){return u},aN:function(){return a},h2:function(){return l},lR:function(){return d},mh:function(){return s},nT:function(){return g},tr:function(){return r},w:function(){return p},yS:function(){return h}});var n=e(78857),s=function(t){return(0,n.Z)({url:"api/sellerGoods!info.action",method:"post",params:t})},r=function(t){return(0,n.Z)({url:"/api/evaluation!list.action",method:"post",params:t})},o=function(t){return(0,n.Z)({url:"api/seller!info.action",method:"post",params:t})},a=function(t){return(0,n.Z)({url:"api/order!submit.action",method:"post",params:t})},l=function(t){return(0,n.Z)({url:"api/order!pay.action",method:"post",params:t})},h=function(t){return(0,n.Z)({url:"api/order!info.action",method:"post",params:t})},c=function(t){return(0,n.Z)({url:"/seller/version!register.action",method:"post",params:t})},u=function(t){return(0,n.Z)({url:"api/uploadimg!execute.action",method:"post",data:t})},d=function(t){return(0,n.Z)({url:"api/kyc!get.action",method:"post",params:t})},f=function(t){return(0,n.Z)({url:"api/keepGoods!add.action",method:"post",params:t})},g=function(t){return(0,n.Z)({url:"api/keepGoods!del.action",method:"post",params:t})},p=function(t){return(0,n.Z)({url:"api/evaluation!countType.action",method:"post",params:t})},m=function(t){return(0,n.Z)({url:"api/sellerGoods!recommend_like.action",method:"post",params:t})}},56707:function(t,i,e){e.r(i),e.d(i,{default:function(){return E}});var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"page-content"},[i("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("商品收藏"),"left-arrow":""},on:{"click-left":function(){return t.$router.back()}}}),i("div",{staticClass:"h46",staticStyle:{width:"100%"}}),i("van-pull-refresh",{staticClass:"pull-content",attrs:{"pulling-text":t.$t("下拉即可刷新"),"loosing-text":t.$t("释放即可刷新"),"loading-text":t.$t("加载中")},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(i){t.refreshing=i},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":t.list.length?t.$t("没有更多了"):"","loading-text":t.$t("加载中")},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[t.list.length?i("div",{staticClass:"list-content"},t._l(t.list,(function(e){return i("van-swipe-cell",{key:e.sellerGoodsId,scopedSlots:t._u([{key:"right",fn:function(){return[i("div",{staticClass:"btn",on:{click:function(i){return i.stopPropagation(),t.delHandle(e)}}},[t._v(t._s(t.$t("删除")))])]},proxy:!0}],null,!0)},[i("goods-item-two",{attrs:{"goods-data":e}})],1)})),1):i("van-empty",{attrs:{description:t.$t("暂无数据")}})],1)],1)],1)},s=[],r=e(79401),o=(e(30678),e(85434)),a=(e(72951),e(77085)),l=(e(15611),e(61333)),h=(e(14223),e(27676)),c=(e(177),e(87929)),u=(e(73927),function(){var t,i=this,e=i._self._c;return e("div",{staticClass:"goods-item",on:{click:i.openDetails}},[e("div",{staticClass:"poster"},[e("img",{attrs:{src:i.goodsData.imgUrl1||i.goodsData.imgUrl2||i.goodsData.imgUrl3||i.goodsData.imgUrl4||i.$defaultGoodsImage,alt:""}})]),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[i._v(" "+i._s((null===(t=i.goodsData.name)||void 0===t?void 0:t.length)>27?i.goodsData.name.slice(0,27)+"...":i.goodsData.name)+" ")]),e("div",{staticClass:"price"},[e("p",[i._v("$"+i._s(i.priceFormat(i.goodsData.sellingPrice)))])]),e("p",[e("span",[i._v(i._s(i.$t("已售")))]),i._v(" "+i._s(i.goodsData.soldNum)+" ")])])])}),d=[],f=e(22204),g={name:"GoodsItemTwo",props:{goodsData:{type:Object,required:!0,default:function(){return{}}}},methods:{priceFormat(t){return(0,f.XY)(t)},openDetails(){this.$router.push({path:"/CommodityDetails",query:{sellerGoodsId:this.goodsData.id}})}}},p=g,m=e(48703),v=(0,m.Z)(p,u,d,!1,null,"6ed48015",null),x=v.exports,k=e(78455),y=e(98720),S=e(68593),C={name:"CollectGoods",components:{[c.Z.name]:c.Z,[h.Z.name]:h.Z,[l.Z.name]:l.Z,[a.Z.name]:a.Z,[o.Z.name]:o.Z,GoodsItemTwo:x},data(){return{list:[],loading:!1,finished:!1,refreshing:!1,pageNum:1,pageSize:10}},created(){(0,f.bg)()||this.$router.push("/")},methods:{onRefresh(){this.finished=!1,this.pageNum=1,this.loading=!0,this.onLoad()},onLoad(){this.refreshing&&(this.list=[],this.refreshing=!1),this.getTableList()},getTableList(){var t=this,i={pageNum:this.pageNum,pageSize:this.pageSize};(0,k.kd)(i).then((function(i){var e=i.pageList;S.log("pageList ::->",e),t.list=1===t.pageNum?e:[].concat((0,r.Z)(t.list),(0,r.Z)(e)),t.pageNum++,t.loading=!1,e.length<t.pageSize&&(t.finished=!0);var n={};t.list=t.list.reduce((function(t,i){return!n[i.id]&&(n[i.id]=t.push(i)),t}),[])})).catch((function(){t.loading=!1,t.finished=!0}))},delHandle(t){var i=this;this.refreshing=!0,(0,y.nT)({sellerGoodsId:t.id}).then((function(){i.onRefresh()}))}}},b=C,D=(0,m.Z)(b,n,s,!1,null,"f4ee0df2",null),E=D.exports}}]);