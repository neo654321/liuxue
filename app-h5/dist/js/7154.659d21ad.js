"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[7154],{67154:function(t,e,o){o.r(e),o.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"iframe-main"},[e("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft}}),e("iframe",{staticClass:"nq-ys iframe",attrs:{src:t.url,scrolling:"auto",frameborder:"0"},on:{scroll:function(t){return t.stopPropagation(),(!1).apply(null,arguments)}}})],1)},l=[],s=o(97644),i=o(80332),n={data(){return{itemName:"EShop",url:"",title:"",paths:{Argos:"https://argos.me/",MetaShop:"https://e-metashop.com/",Tongda:"https://www.tongdashops.com/",FamilyMart:"https://familymartex.com/",FamilyShop:"https://www.familyshopit.com/",Inchoi:"https://Inchoishop.com/",Hive:"https://www.hivemalls.com/",TikTokMall:"https://tiktokmallit.com/",Shop2u:"https://shop2u.co/",EShop:"https://ml.thsjbvh.site/",GreenMall:"https://djeion.com/","SM-wholesaleShop":"https://justshopmall.com",ArgosShop:"https://argosshoppro.com",Iceland:"https://icelandmarts.com","INT Overstock":"https://overstock8.me","TikTok-Wholesale":"https://tiktok-wholesale.com/"}}},mounted(){var t=this;""==this.title&&(this.title=this.$route.query.title),this.url=this.$route.query.url,window.addEventListener("message",(function(e){var o,a;if(null!==(o=e.data)&&void 0!==o&&o.lang&&t.title==t.$t("商家入驻")){var l,s,i;if("en-US"==(null===(l=e.data)||void 0===l?void 0:l.lang))t.$i18n.locale="en",t.setLanguage("en");else if("CN"==(null===(s=e.data)||void 0===s?void 0:s.lang))t.$i18n.locale="tw",t.setLanguage("tw");else if("zh-CN"==(null===(i=e.data)||void 0===i?void 0:i.lang))t.$i18n.locale="cn",t.setLanguage("cn");else{var n,r;t.$i18n.locale=null===(n=e.data)||void 0===n?void 0:n.lang,t.setLanguage(null===(r=e.data)||void 0===r?void 0:r.lang)}t.$nextTick((function(){t.title=t.$t("商家入驻")}))}"jump"==e.data&&(null!==(a=window)&&void 0!==a&&a.plus?plus.runtime.openURL(t.paths[t.itemName]+"ww"):window.open(location.origin+"/ww"))}))},methods:(0,s.Z)((0,s.Z)({},(0,i.OI)(["setLanguage"])),{},{onClickLeft(){this.$router.go(-1)}})},r=n,h=o(48703),p=(0,h.Z)(r,a,l,!1,null,"5a45ef9f",null),u=p.exports}}]);