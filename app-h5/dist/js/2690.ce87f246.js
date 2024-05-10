"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[2690],{52798:function(t,i,e){var n=e(38669),s=e(6403),r=e(14737),o=e(60803),l=(0,s.d)("tab"),c=l[0],a=l[1];i["Z"]=c({mixins:[(0,r.j)("vanTabs")],props:(0,n.Z)({},o.g2,{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,titleClass:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){var t;return null!=(t=this.name)?t:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine(),this.parent.scrollIntoView()},inited:function(t){var i=this;this.parent.lazyRender&&t&&this.$nextTick((function(){i.parent.$emit("rendered",i.computedName,i.title)}))}},render:function(t){var i=this.slots,e=this.parent,n=this.isActive,s=i();if(s||e.animated){var r=e.scrollspy||n,o=this.inited||e.scrollspy||!e.lazyRender,l=o?s:t();return e.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:a("pane-wrapper",{inactive:!n})},[t("div",{class:a("pane")},[l])]):t("div",{directives:[{name:"show",value:r}],attrs:{role:"tabpanel"},class:a("pane")},[l])}}})},53958:function(t,i,e){e(22663)},86881:function(t,i,e){e.d(i,{Z:function(){return W}});var n=e(6403),s=e(72681),r=e(85228),o=e(53760),l=e(27843);function c(t,i,e){var n=0,s=t.scrollLeft,r=0===e?1:Math.round(1e3*e/16);function l(){t.scrollLeft+=(i-s)/r,++n<r&&(0,o.Wn)(l)}l()}function a(t,i,e,n){var s=(0,l.cx)(t),r=s<i,c=0===e?1:Math.round(1e3*e/16),a=(i-s)/c;function h(){s+=a,(r&&s>i||!r&&s<i)&&(s=i),(0,l.QU)(t,s),r&&s<i||!r&&s>i?(0,o.Wn)(h):n&&(0,o.Wn)(n)}h()}var h=e(60803),u=e(8993),d=e(93820),f=e(92168);function v(t){var i=t.interceptor,e=t.args,n=t.done;if(i){var s=i.apply(void 0,e);(0,r.tI)(s)?s.then((function(t){t&&n()})).catch(r.ZT):s&&n()}else n()}var p=e(14737),m=e(7034),b=e(31826),x=(0,n.d)("tab"),g=x[0],y=x[1],S=g({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String},computed:{style:function(){var t={},i=this.color,e=this.isActive,n="card"===this.type;i&&n&&(t.borderColor=i,this.disabled||(e?t.backgroundColor=i:t.color=i));var s=e?this.activeColor:this.inactiveColor;return s&&(t.color=s),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,i=t("span",{class:y("text",{ellipsis:!this.scrollable})},[this.slots()||this.title]);return this.dot||(0,r.Xq)(this.info)&&""!==this.info?t("span",{class:y("text-wrapper")},[i,t(b.Z,{attrs:{dot:this.dot,info:this.info}})]):i}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[y({active:this.isActive,disabled:this.disabled})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),C=(0,n.d)("sticky"),I=C[0],k=C[1],$=I({mixins:[(0,m.X)((function(t,i){if(this.scroller||(this.scroller=(0,l.Ob)(this.$el)),this.observer){var e=i?"observe":"unobserve";this.observer[e](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return(0,s.L)(this.offsetTop)},style:function(){if(this.fixed){var t={};return(0,r.Xq)(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},watch:{fixed:function(t){this.$emit("change",t)}},created:function(){var t=this;!r.sk&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(i){i[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!(0,u.x)(this.$el)){this.height=this.$el.offsetHeight;var i=this.container,e=this.offsetTopPx,n=(0,l.cx)(window),s=(0,l.U4)(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(i){var o=s+i.offsetHeight;if(n+e+this.height>o){var c=this.height+n-o;return c<this.height?(this.fixed=!0,this.transform=-(c+e)):this.fixed=!1,void r()}}n+e>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}}},render:function(){var t=arguments[0],i=this.fixed,e={height:i?this.height+"px":null};return t("div",{style:e},[t("div",{class:k({fixed:i}),style:this.style},[this.slots()])])}}),T=e(38669),w=e(8303),N=(0,n.d)("tabs"),B=N[0],L=N[1],z=50,A=B({mixins:[w.D],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,i=this.deltaX,e=this.currentIndex;"horizontal"===t&&this.offsetX>=z&&(i>0&&0!==e?this.$emit("change",e-1):i<0&&e!==this.count-1&&this.$emit("change",e+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:L("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:L("content",{animated:this.animated}),on:(0,T.Z)({},this.listeners)},[this.genChildren()])}}),P=(0,n.d)("tabs"),X=P[0],O=P[1],W=X({mixins:[(0,p.G)("vanTabs"),(0,m.X)((function(t){this.scroller||(this.scroller=(0,l.Ob)(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],inject:{vanPopup:{default:null}},model:{prop:"active"},props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},offsetTopPx:function(){return(0,s.L)(this.offsetTop)},scrollOffset:function(){return this.sticky?this.offsetTopPx+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&(0,l.kn)(Math.ceil((0,l.U4)(this.$el)-this.offsetTopPx))},scrollspy:function(t){t?(0,d.on)(this.scroller,"scroll",this.onScroll,!0):(0,d.S1)(this.scroller,"scroll",this.onScroll)}},mounted:function(){var t=this;this.init(),this.vanPopup&&this.vanPopup.onReopen((function(){t.setLine()}))},activated:function(){this.init(),this.setLine()},methods:{resize:function(){this.setLine()},init:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=(0,l.$D)(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,i=this.inited;this.$nextTick((function(){var e=t.$refs.titles;if(e&&e[t.currentIndex]&&"line"===t.type&&!(0,u.x)(t.$el)){var n=e[t.currentIndex].$el,o=t.lineWidth,l=t.lineHeight,c=n.offsetLeft+n.offsetWidth/2,a={width:(0,s.N)(o),backgroundColor:t.color,transform:"translateX("+c+"px) translateX(-50%)"};if(i&&(a.transitionDuration=t.duration+"s"),(0,r.Xq)(l)){var h=(0,s.N)(l);a.height=h,a.borderRadius=h}t.lineStyle=a}}))},setCurrentIndexByName:function(t){var i=this.children.filter((function(i){return i.computedName===t})),e=(this.children[0]||{}).index||0;this.setCurrentIndex(i.length?i[0].index:e)},setCurrentIndex:function(t){var i=this.findAvailableTab(t);if((0,r.Xq)(i)){var e=this.children[i],n=e.computedName,s=null!==this.currentIndex;this.currentIndex=i,n!==this.active&&(this.$emit("input",n),s&&this.$emit("change",n,e.title))}},findAvailableTab:function(t){var i=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=i}},onClick:function(t,i){var e=this,n=this.children[i],s=n.title,r=n.disabled,o=n.computedName;r?this.$emit("disabled",o,s):(v({interceptor:this.beforeChange,args:[o],done:function(){e.setCurrentIndex(i),e.scrollToCurrentContent()}}),this.$emit("click",o,s),(0,h.BC)(t.$router,t))},scrollIntoView:function(t){var i=this.$refs.titles;if(this.scrollable&&i&&i[this.currentIndex]){var e=this.$refs.nav,n=i[this.currentIndex].$el,s=n.offsetLeft-(e.offsetWidth-n.offsetWidth)/2;c(e,s,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollTo:function(t){var i=this;this.$nextTick((function(){i.setCurrentIndexByName(t),i.scrollToCurrentContent(!0)}))},scrollToCurrentContent:function(t){var i=this;if(void 0===t&&(t=!1),this.scrollspy){var e=this.children[this.currentIndex],n=null==e?void 0:e.$el;if(n){var s=(0,l.U4)(n,this.scroller)-this.scrollOffset;this.lockScroll=!0,a(this.scroller,s,t?0:+this.duration,(function(){i.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,i=0;i<t.length;i++){var e=(0,l.wp)(t[i].$el);if(e>this.scrollOffset)return 0===i?0:i-1}return t.length-1}},render:function(){var t,i=this,e=arguments[0],n=this.type,s=this.animated,r=this.scrollable,o=this.children.map((function(t,s){var o;return e(S,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:null!=(o=t.badge)?o:t.info,title:t.title,color:i.color,isActive:s===i.currentIndex,disabled:t.disabled,scrollable:r,activeColor:i.titleActiveColor,inactiveColor:i.titleInactiveColor},style:t.titleStyle,class:t.titleClass,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){i.onClick(t,s)}}})})),l=e("div",{ref:"wrap",class:[O("wrap",{scrollable:r}),(t={},t[f.r5]="line"===n&&this.border,t)]},[e("div",{ref:"nav",attrs:{role:"tablist"},class:O("nav",[n,{complete:this.scrollable}]),style:this.navStyle},[this.slots("nav-left"),o,"line"===n&&e("div",{class:O("line"),style:this.lineStyle}),this.slots("nav-right")])]);return e("div",{class:O([n])},[this.sticky?e($,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[l]):l,e(A,{attrs:{count:this.children.length,animated:s,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},72154:function(t,i,e){e(22663),e(23434)}}]);