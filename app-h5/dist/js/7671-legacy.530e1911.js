"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[7671],{48102:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});i(89730);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-content"},[e("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("评价"),"left-arrow":""},on:{"click-left":function(){return t.$router.back()}}}),e("div",{staticStyle:{width:"100%",height:"46px"}}),t.goodsData.length?e("div",{staticClass:"evaluate-content"},[t._l(t.goodsData,(function(i,n){var o;return e("div",{key:n,staticClass:"item"},[e("div",{staticClass:"goods-info"},[e("div",{staticClass:"poster"},[e("img",{attrs:{src:i.goodsIcon,alt:""}})]),e("div",{staticClass:"info"},[e("p",{staticClass:"name"},[t._v(t._s((null===(o=i.goodsName)||void 0===o?void 0:o.length)>27?i.goodsName.slice(0,27)+"...":i.goodsName))]),e("p",{staticClass:"price"},[t._v("$ "+t._s(t.priceFormat(i.goodsReal)))]),e("van-rate",{staticClass:"rate-wrap",attrs:{size:15,":color":t.mainColor,"void-icon":"star","void-color":"#D9D9D9"},model:{value:i.rating,callback:function(e){t.$set(i,"rating",e)},expression:"item.rating"}})],1)]),e("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:4},placeholder:t.$t("请输入评价信息"),resize:"none",maxlength:"1000","show-word-limit":""},model:{value:i.content,callback:function(e){t.$set(i,"content",e)},expression:"item.content"}}),e("div",{staticClass:"evaluate-title"},[t._v(t._s(t.$t("评价晒图")))]),e("van-uploader",{attrs:{"after-read":t.afterRead,name:n,"max-count":9,accept:".png,.jpg,.jpeg"},model:{value:i.fileList,callback:function(e){t.$set(i,"fileList",e)},expression:"item.fileList"}})],1)})),e("div",{staticClass:"submit-btn",on:{click:t.submitHandle}},[t._v(t._s(t.$t("提交评论")))])],2):t._e()],1)},o=[],a=i(6835),r=i(48534),s=(i(42511),i(29538)),l=(i(19066),i(87740)),c=(i(37850),i(88848)),u=(i(83627),i(90797)),d=(i(50886),i(60228),i(47522),i(14970)),f=i(10408),h=i(89158),p=i(15941),m={name:"OrderEvaluate",components:{[u.Z.name]:u.Z,[c.Z.name]:c.Z,[l.Z.name]:l.Z,[s.Z.name]:s.Z},data(){return{mainColor:"#f89900",fileList:[],cancelShow:!1,remindShow:!1,currentData:null,orderId:null,goodsData:[]}},mounted(){var t=this;this.$nextTick((function(){var e=t.$route.query.id;e?(t.orderId=e,t.getOrderGoods()):((0,c.Z)(t.$t("订单号不存在")),setTimeout((function(){t.$router.back()}),1500))}))},methods:{afterRead(t,e){var i=this,n=e.name,o=this.goodsData[n].fileList.length;c.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});var a=new FormData;a.append("file",t.file),a.append("moduleName","selle");(0,h.VU)(a).then((function(t){p.log("图片上传成功",t),i.goodsData[n]["imgUrl".concat(o)]=t})).catch((function(t){i.fileList=[],i.$notify(i.$t("上传失败"))})).finally((function(){c.Z.clear()}))},priceFormat(t){return(0,f.XY)(t)},getOrderGoods(){var t=this;c.Z.loading({duration:0,message:this.$t("请求中"),forbidClick:!0}),(0,d.K7)({orderId:this.orderId}).then((function(e){var i=e.pageList||[];i.forEach((function(t){t.rating=5,t.content=""})),t.goodsData=i,c.Z.clear()})).catch((function(){c.Z.clear()}))},submitHandle(){var t=this;return(0,r.Z)((0,a.Z)().mark((function e(){var i,n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.goodsData.map((function(e){var i=e.rating,n=e.content,o=e.goodsId,a="1";a=i<2?"3":i<4?"2":"1";var r={orderId:t.orderId,sellerGoodsId:o,rating:i,content:n,evaluationType:a};return Object.keys(e).forEach((function(t){-1!==t.indexOf("imgUrl")&&(r[t]=e[t])})),r})),c.Z.loading({duration:0,message:t.$t("提交中"),forbidClick:!0}),n=0;case 3:if(!(n<i.length)){e.next=9;break}return e.next=6,(0,d.MR)(i[n]);case 6:n++,e.next=3;break;case 9:c.Z.success(t.$t("成功")),setTimeout((function(){t.$router.back()}),1e3);case 11:case"end":return e.stop()}}),e)})))()}}},g=m,v=i(1001),b=(0,v.Z)(g,n,o,!1,null,"b97da806",null),Z=b.exports},87740:function(t,e,i){i(50886),i(70560),i(60228),i(47522);var n=i(32667),o=i(80408),a=i(85781),r=i(93969),s=i(35065),l=i(19858),c=(0,n.d)("rate"),u=c[0],d=c[1];function f(t,e,i){return t>=e?"full":t+.5>=e&&i?"half":"void"}e["Z"]=u({mixins:[r.D,s.f],props:{size:[Number,String],color:String,gutter:[Number,String],readonly:Boolean,disabled:Boolean,allowHalf:Boolean,voidColor:String,iconPrefix:String,disabledColor:String,value:{type:Number,default:0},icon:{type:String,default:"star"},voidIcon:{type:String,default:"star-o"},count:{type:[Number,String],default:5},touchable:{type:Boolean,default:!0}},computed:{list:function(){for(var t=[],e=1;e<=this.count;e++)t.push(f(this.value,e,this.allowHalf));return t},sizeWithUnit:function(){return(0,o.N)(this.size)},gutterWithUnit:function(){return(0,o.N)(this.gutter)}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{select:function(t){this.disabled||this.readonly||t===this.value||(this.$emit("input",t),this.$emit("change",t))},onTouchStart:function(t){var e=this;if(!this.readonly&&!this.disabled&&this.touchable){this.touchStart(t);var i=this.$refs.items.map((function(t){return t.getBoundingClientRect()})),n=[];i.forEach((function(t,i){e.allowHalf?n.push({score:i+.5,left:t.left},{score:i+1,left:t.left+t.width/2}):n.push({score:i+1,left:t.left})})),this.ranges=n}},onTouchMove:function(t){if(!this.readonly&&!this.disabled&&this.touchable&&(this.touchMove(t),"horizontal"===this.direction)){(0,a.PF)(t);var e=t.touches[0].clientX;this.select(this.getScoreByPosition(e))}},getScoreByPosition:function(t){for(var e=this.ranges.length-1;e>0;e--)if(t>this.ranges[e].left)return this.ranges[e].score;return this.allowHalf?.5:1},genStar:function(t,e){var i,n=this,o=this.$createElement,a=this.icon,r=this.color,s=this.count,c=this.voidIcon,u=this.disabled,f=this.voidColor,h=this.disabledColor,p=e+1,m="full"===t,g="void"===t;return this.gutterWithUnit&&p!==+s&&(i={paddingRight:this.gutterWithUnit}),o("div",{ref:"items",refInFor:!0,key:e,attrs:{role:"radio",tabindex:"0","aria-setsize":s,"aria-posinset":p,"aria-checked":String(!g)},style:i,class:d("item")},[o(l.Z,{attrs:{size:this.sizeWithUnit,name:m?a:c,color:u?h:m?r:f,classPrefix:this.iconPrefix,"data-score":p},class:d("icon",{disabled:u,full:m}),on:{click:function(){n.select(p)}}}),this.allowHalf&&o(l.Z,{attrs:{size:this.sizeWithUnit,name:g?c:a,color:u?h:g?f:r,classPrefix:this.iconPrefix,"data-score":p-.5},class:d("icon",["half",{disabled:u,full:!g}]),on:{click:function(){n.select(p-.5)}}})])}},render:function(){var t=this,e=arguments[0];return e("div",{class:d({readonly:this.readonly,disabled:this.disabled}),attrs:{tabindex:"0",role:"radiogroup"}},[this.list.map((function(e,i){return t.genStar(e,i)}))])}})},19066:function(t,e,i){i(22184),i(14106),i(4127)},89158:function(t,e,i){i.d(e,{Ew:function(){return c},Ko:function(){return a},VU:function(){return u},aN:function(){return r},h2:function(){return s},lR:function(){return d},nT:function(){return f},tr:function(){return o},w:function(){return h},yS:function(){return l}});var n=i(97344),o=function(t){return(0,n.Z)({url:"/api/evaluation!list.action",method:"post",params:t})},a=function(t){return(0,n.Z)({url:"api/seller!info.action",method:"post",params:t})},r=function(t){return(0,n.Z)({url:"api/order!submit.action",method:"post",params:t})},s=function(t){return(0,n.Z)({url:"api/order!pay.action",method:"post",params:t})},l=function(t){return(0,n.Z)({url:"api/order!info.action",method:"post",params:t})},c=function(t){return(0,n.Z)({url:"/seller/version!register.action",method:"post",params:t})},u=function(t){return(0,n.Z)({url:"api/uploadimg!execute.action",method:"post",data:t})},d=function(t){return(0,n.Z)({url:"api/kyc!get.action",method:"post",params:t})},f=function(t){return(0,n.Z)({url:"api/keepGoods!del.action",method:"post",params:t})},h=function(t){return(0,n.Z)({url:"api/evaluation!countType.action",method:"post",params:t})}}}]);