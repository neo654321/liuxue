"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[6627],{29557:function(t,i,e){e.d(i,{Z:function(){return M}});var o=e(38669),s=e(80811),n=e(6403),a=(0,n.d)("image-preview"),h=a[0],r=a[1],c=e(47508),l=e(8303),u=e(7034),f=e(76174),m=e(82622),v=e(47741),d=e(93820),g=e(32698),p=e(33719),w=e(55599);function y(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var S,x={mixins:[l.D],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,i=this.rootHeight,e=i/t;return this.imageRatio>e},imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var e=this.moveX/t,o=this.moveY/t;i.transform="scale("+t+", "+t+") translate("+e+"px, "+o+"px)"}return i},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=(0,v.w6)(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var i=t.touches,e=this.offsetX,o=void 0===e?0:e;this.touchStart(t),this.touchStartTime=new Date,this.fingerNum=i.length,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===this.fingerNum&&1!==this.scale,this.zooming=2===this.fingerNum&&!o,this.zooming&&(this.startScale=this.scale,this.startDistance=y(t.touches))},onTouchMove:function(t){var i=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&(0,d.PF)(t,!0),this.moving){var e=this.deltaX+this.startMoveX,o=this.deltaY+this.startMoveY;this.moveX=(0,v.w6)(e,-this.maxMoveX,this.maxMoveX),this.moveY=(0,v.w6)(o,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var s=y(i),n=this.startScale*s/this.startDistance;this.setScale(n)}},onTouchEnd:function(t){var i=!1;(this.moving||this.zooming)&&(i=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.zooming&&(this.moveX=(0,v.w6)(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=(0,v.w6)(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),(0,d.PF)(t,i),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this;if(!(this.fingerNum>1)){var i=this.offsetX,e=void 0===i?0:i,o=this.offsetY,s=void 0===o?0:o,n=new Date-this.touchStartTime,a=250,h=5;e<h&&s<h&&n<a&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),a))}},onLoad:function(t){var i=t.target,e=i.naturalWidth,o=i.naturalHeight;this.imageRatio=o/e}},render:function(){var t=arguments[0],i={loading:function(){return t(p.Z,{attrs:{type:"spinner"}})}};return t(w.Z,{class:r("swipe-item")},[t(g.Z,{attrs:{src:this.src,fit:"contain"},class:r("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:i,on:{load:this.onLoad}})])}},T=h({mixins:[l.D,(0,c.e)({skipToggleEvent:!0}),(0,u.X)((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:r("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var i=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){i.resize(),i.$refs.swipe.swipeTo(+i.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:r("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:r("cover")},[i])},genImages:function(){var t=this,i=this.$createElement;return i(m.Z,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:r("swipe"),on:{change:this.setActive}},[this.images.map((function(e){return i(x,{attrs:{src:e,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(f.Z,{attrs:{role:"button",name:this.closeIcon},class:r("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,i){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,i)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[r(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),C=e(85228),b={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},z=function(){S=new(s["default"].extend(T))({el:document.createElement("div")}),document.body.appendChild(S.$el),S.$on("change",(function(t){S.onChange&&S.onChange(t)})),S.$on("scale",(function(t){S.onScale&&S.onScale(t)}))},$=function(t,i){if(void 0===i&&(i=0),!C.sk){S||z();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return(0,o.Z)(S,b,e),S.$once("input",(function(t){S.value=t})),S.$once("closed",(function(){S.images=[]})),e.onClose&&(S.$off("close"),S.$once("close",e.onClose)),S}};$.Component=T,$.install=function(){s["default"].use(T)};var M=$},55599:function(t,i,e){var o=e(38669),s=e(6403),n=e(14737),a=(0,s.d)("swipe-item"),h=a[0],r=a[1];i["Z"]=h({mixins:[(0,n.j)("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,o=i.vertical;return e&&(t[o?"height":"width"]=e+"px"),this.offset&&(t.transform="translate"+(o?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,o=this.mounted;if(!e.lazyRender||i)return!0;if(!o)return!1;var s=e.activeIndicator,n=e.count-1,a=0===s&&e.loop?n:s-1,h=s===n&&e.loop?0:s+1,r=t===s||t===a||t===h;return r&&(this.inited=!0),r}},render:function(){var t=arguments[0];return t("div",{class:r(),style:this.style,on:(0,o.Z)({},this.$listeners)},[this.shouldRender&&this.slots()])}})},82622:function(t,i,e){var o=e(6403),s=e(8993),n=e(93820),a=e(53760),h=e(47741),r=e(8303),c=e(14737),l=e(7034),u=(0,o.d)("swipe"),f=u[0],m=u[1];i["Z"]=f({mixins:[r.D,(0,c.G)("vanSwipe"),(0,l.X)((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var i=this.vertical?"height":"width",e=this.vertical?"width":"height";t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!(0,s.x)(this.$el)){clearTimeout(this.timer);var i={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&((0,n.PF)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,o=i/e,s=Math.abs(o)>.25||Math.abs(i)>t/2;if(s&&this.isCorrectDirection){var n=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?n>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,o=this.maxCount;return t?this.loop?(0,h.w6)(i+t,-1,e):(0,h.w6)(i+t,0,o):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var o=i-e;return this.loop||(o=(0,h.w6)(o,this.minOffset,0)),o},move:function(t){var i=t.pace,e=void 0===i?0:i,o=t.offset,s=void 0===o?0:o,n=t.emitChange,a=this.loop,h=this.count,r=this.active,c=this.children,l=this.trackSize,u=this.minOffset;if(!(h<=1)){var f=this.getTargetActive(e),m=this.getTargetOffset(f,s);if(a){if(c[0]&&m!==u){var v=m<u;c[0].offset=v?l:0}if(c[h-1]&&0!==m){var d=m>0;c[h-1].offset=d?-l:0}}this.active=f,this.offset=m,n&&f!==r&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,a.d1)((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,a.d1)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),(0,a.d1)((function(){var o;o=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?(0,a.d1)((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:o-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,o=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:m("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:m("indicator",{active:s===o}),style:s===o?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:m()},[t("div",{ref:"track",style:this.trackStyle,class:m("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},53760:function(t,i,e){e.d(i,{Wn:function(){return r},d1:function(){return c}});var o=e(85228),s=Date.now();function n(t){var i=Date.now(),e=Math.max(0,16-(i-s)),o=setTimeout(t,e);return s=i+e,o}var a=o.sk?e.g:window,h=a.requestAnimationFrame||n;a.cancelAnimationFrame||a.clearTimeout;function r(t){return h.call(a,t)}function c(t){r((function(){r(t)}))}},8993:function(t,i,e){function o(t){var i=window.getComputedStyle(t),e="none"===i.display,o=null===t.offsetParent&&"fixed"!==i.position;return e||o}e.d(i,{x:function(){return o}})},14178:function(){},9371:function(){},40793:function(){}}]);