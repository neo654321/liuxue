"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[3948],{60817:function(t,s,i){i.r(s),i.d(s,{default:function(){return _}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search-container",staticStyle:{"min-height":"100vh"}},[s("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"","left-arrow":"","right-text":t.$t("搜索")},on:{"click-right":t.searchView,"click-left":function(s){return t.$router.go(-1)}},scopedSlots:t._u([{key:"title",fn:function(){return[s("van-search",{attrs:{shape:"round",clearable:!1,placeholder:t.$t("找货源/商品/供应商/求购")},on:{input:t.inputHandle},scopedSlots:t._u([{key:"left-icon",fn:function(){return[s("img",{staticClass:"search-icon",attrs:{src:t.searchIcon,alt:""},on:{click:t.searchHandle}})]},proxy:!0},{key:"right-icon",fn:function(){return[t.keyword?s("van-icon",{attrs:{name:"cross",size:"14",color:"#333333"},on:{click:t.clearHandle}}):t._e()]},proxy:!0}]),model:{value:t.keyword,callback:function(s){t.keyword=s},expression:"keyword"}})]},proxy:!0}])}),s("div",{staticStyle:{width:"100%",height:"44px"}}),t.tipsShow||t.shopShow||t.listShow?t._e():s("div",{staticClass:"search-history"},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(t.$t("历史搜索")))]),t.searchHistory1.length?s("div",{staticClass:"clear",on:{click:t.emptyHandle}},[s("img",{staticClass:"search-icon",attrs:{src:t.clearIcon,alt:""}}),s("p",[t._v(t._s(t.$t("清空")))])]):t._e()]),t.searchHistory1.length?s("div",{staticClass:"content"},t._l(t.searchHistory1,(function(i,e){return s("div",{key:e,staticClass:"item",on:{click:function(s){return t.tipsHandle(i,!1)}}},[t._v(" "+t._s(i)+" ")])})),0):s("van-empty",{attrs:{description:t.$t("暂无记录")}})],1),t.tipsShow?s("div",{staticClass:"search-tips-content"},[t.tipsData.length?t._l(t.tipsData,(function(i,e){return s("div",{key:e,staticClass:"item",on:{click:function(s){return t.tipsHandle(i,i.isShop)}}},[i.isShop?s("van-icon",{attrs:{name:"shop-o",size:"18"}}):t._e(),s("p",[t._v(t._s(i.name))])],1)})):s("van-empty",{attrs:{description:t.$t("暂无数据")}})],2):t._e(),t.listShow?s("div",{staticClass:"search-result-content"},[s("div",{staticStyle:{padding:"0 15px"}},[s("goods-content-one",{attrs:{"goods-data":t.listData}}),t.listData.length||t.listLoading||t.loading?t._e():s("van-empty",{attrs:{description:t.$t("暂无数据")}})],1)]):t._e(),t.shopShow?s("div",{staticClass:"shop-list-content"},["en"===t.activeLang?s("div",{staticClass:"tips"},[t._v(" Find "+t._s(t.shopData.length)+" "),s("span",[t._v('"'+t._s(t.keyword))]),t._v('" related stores for you ')]):s("div",{staticClass:"tips"},[t._v(" "+t._s(t.$t("为您找到"))+" "),s("span",[t._v('"'+t._s(t.keyword))]),t._v('" '+t._s(t.$t("相关的店铺"))+" "+t._s(t.shopData.length||0)+" "+t._s(t.$t("家"))+" ")]),s("shop-content-two",{attrs:{"shop-data":t.shopData}})],1):t._e()],1)},a=[],o=i(79401),r=i(97644),n=(i(23465),i(17263)),h=(i(15611),i(61333)),c=(i(45155),i(76174)),l=(i(14223),i(27676)),d=(i(48326),i(62405)),p=(i(30678),i(85434)),g=(i(60702),i(6717),i(3761),i(68063),i(41631),i(61306),i(60419),i(74797),i(88990),i(85081),i(7719),i(62616),i(56110),i(5656)),u=i(59346),y=i(80332),S=i(12257),w=i.n(S),m=i(79009),f={name:"Search",components:{[p.Z.name]:p.Z,[d.Z.name]:d.Z,[l.Z.name]:l.Z,[c.Z.name]:c.Z,[h.Z.name]:h.Z,[n.Z.name]:n.Z,GoodsContentOne:g.Z,ShopContentTwo:u.Z},data(){return{searchIcon:i(70452),clearIcon:i(50334),keyword:"",tipsShow:!1,tipsData:[],shopData:[],shopShow:!1,listData:[],listShow:!1,listLoading:!1,loading:!1,finished:!1,refreshing:!1,pageNum:1,pageSize:20,currentGoodsId:null,searchHistory1:[]}},computed:(0,r.Z)({},(0,y.Se)({searchHistory:"searchHistory",activeLang:"language"})),watch:{$route(t,s){"CommodityDetails"==t.path&&sessionStorage.setItem("searchList",this.listData),"CommodityDetails"==s.path&&(this.listData=sessionStorage.getItem("searchList"))}},mounted(){this.searchHistory1=JSON.parse(localStorage.getItem("searchHistory1"))||[],this.searchHistory1=(0,o.Z)(new Set(this.searchHistory1))},methods:{onRefresh(){this.finished=!1,this.pageNum=1,this.loading=!0,this.onLoad()},onLoad(){this.refreshing&&(this.list=[],this.refreshing=!1),this.getListData()},getListData(){var t=this;this.currentGoodsId?(0,m.lr)({goodsId:this.currentGoodsId,pageNum:this.pageNum,pageSize:this.pageSize}).then((function(s){var i=s.pageList;t.listData=1===t.pageNum?i:[].concat((0,o.Z)(t.listData),(0,o.Z)(i)),t.pageNum++,t.loading=!1,i.length<t.pageSize&&(t.finished=!0),t.listLoading=!1,n.Z.clear()})).catch((function(){t.loading=!1,t.listLoading=!1,n.Z.clear()})):(this.listLoading=!1,this.finished=!0,n.Z.clear(),this.listData=[])},tipsHandle(t,s){var i=this;if(n.Z.loading({duration:0,message:this.$t("加载中")}),"string"==typeof t)return this.keyword=t,void this.searchHandle();var e=String(this.keyword).trim();s?(this.shopShow=!0,this.tipsShow=!1,this.listShow=!1,this.searchHistory1.unshift(t.keyword),this.searchHistory1=(0,o.Z)(new Set(this.searchHistory1)),localStorage.setItem("searchHistory1",JSON.stringify(this.searchHistory1)),(0,m.HH)({keyword:e,isHot:"0",isPrice:"0",isNew:"0"}).then((function(t){i.shopData=t.sellerList,n.Z.clear()}))):(this.searchHistory1.unshift(t.name),this.searchHistory1=(0,o.Z)(new Set(this.searchHistory1)),localStorage.setItem("searchHistory1",JSON.stringify(this.searchHistory1)),this.listShow=!0,this.tipsShow=!1,this.shopShow=!1,this.keyword=t.name,this.currentGoodsId=t.goodsId,this.$store.dispatch("setSearchHistory",{name:t.name,goodsId:t.goodsId}),n.Z.loading({duration:0,message:this.$t("加载中")}),this.pageNum=1,this.finished=!1,this.loading=!0,this.listLoading=!0,this.refreshing=!0,this.listData=[],this.onLoad())},clearHandle(){this.tipsShow=!1,this.listShow=!1,this.shopShow=!1,this.keyword=""},inputHandle:w()((function(){this.searchHandle()}),1e3),searchView(){var t=this;if(""==this.keyword.trim())return this.$notify(this.$t("请输入搜索内容"),"warning");n.Z.loading({duration:0,message:this.$t("加载中")}),this.listData=[],this.tipsShow=!1,this.listShow=!0,this.shopShow=!1,this.searchHistory1.unshift(this.keyword.trim()),this.searchHistory1=(0,o.Z)(new Set(this.searchHistory1)),localStorage.setItem("searchHistory1",JSON.stringify(this.searchHistory1));var s=String(this.keyword).trim(),i=localStorage.getItem("lang");i=i.replace(/"/g,""),(0,m.EX)({keyword:s,lang:i,discount:this.$route.query.discount||0}).then((function(s){var i=s.pageList;s.pageInfo;t.listData=i,n.Z.clear()}))},searchHandle(){var t=this,s=String(this.keyword).trim();if(""==s&&(this.tipsData=[],(0,n.Z)(this.$t("请输入搜索内容"))),this.tipsShow=!0,this.listShow=!1,this.shopShow=!1,s){this.tipsData=[];var i=localStorage.getItem("lang");i=i.replace(/"/g,""),(0,m.HH)({keyword:s,lang:i,discount:this.$route.query.discount||0}).then((function(i){var e=i.goodsList,a=(i.pageInfo,{keyword:s,name:'"'.concat(s,'" ').concat(t.$t("相关的店铺")),isShop:!0});t.listData=e,t.tipsData=[a].concat((0,o.Z)(e)),n.Z.clear()})).catch((function(t){n.Z.clear()}))}else this.tipsShow=!1,this.listShow=!1,this.shopShow=!1},emptyHandle(){this.$store.dispatch("clearSearchHistory"),localStorage.removeItem("searchHistory1"),this.searchHistory1=[]}}},v=f,H=i(48703),k=(0,H.Z)(v,e,a,!1,null,"ebf0d442",null),_=k.exports}}]);