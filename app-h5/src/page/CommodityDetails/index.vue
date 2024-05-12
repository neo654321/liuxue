<template>
    <div class="CommodityDetails">
        <van-nav-bar safe-area-inset-top fixed :title="$t('详情')" left-arrow @click-left="onClickLeft">
            <div slot="title" class="tab-wrap">
         
            </div>
        </van-nav-bar>
        <div style="width: 100%; height: 46px" id="product"></div>
        <div class="banner-product">
            <van-swipe @change="handleChangeSwiper" :autoplay="swiperWaitTime" ref="swiperRef" style="direction: ltr;">
                <van-swipe-item class="swipe-item" v-for="(item, index) in imageList" :key="index">
                    <img :src="item" style="width: 100% ;height: auto;border-radius: 3px 3px 0 0;" />
                </van-swipe-item>
                <template #indicator>
                    <ul class="indicators indicator">
                        <li v-for="(item, index) in imageList" :key="index" :class="{ active: checkActive(index) }">
                        </li>
                    </ul>
                </template>
            </van-swipe>
        </div>

        <div style="margin-top: 0px;"  class="markdown-container">
            <vue-markdown v-if="markdownContent">
                 {{ markdownContent }}
            </vue-markdown>

        </div>


 

        <div class="product-info-wrap">
   
    
        </div>
        <div class="Evaluation">
       
<!-- 
            <div class="sort">
                <span :class="[isEn && 'en_span', sort_index === -2 && 'active']" @click="sort_index = -2">{{
                    $t('有图')
                }}
                    ({{ havePicture > 99 ? '99+' : havePicture }})
                </span>
                <span :class="[isEn && 'en_span', sort_index === 1 && 'active']" @click="sort_index = 1">{{ $t('好评') }}
                    ({{ positiveComments > 99 ? '99+' : positiveComments }})
                </span>
                <span :class="[isEn && 'en_span', sort_index === 2 && 'active']" @click="sort_index = 2">{{ $t('中评') }}
                    ({{ mediumReview > 99 ? '99+' : mediumReview }})
                </span>
                <span :class="[isEn && 'en_span', sort_index === 3 && 'active']" @click="sort_index = 3">{{ $t('差评') }}
                    ({{ negativeComment > 99 ? '99+' : negativeComment }})
                </span>
            </div> -->
            <div class="reviews-list">
                <div v-for="(item, index) in EvaluationInfo" :key="index" class="sheet-item">
                    <div class="top">
                        <img :src="require(`@/assets/image/avatar/${item.avatar}.png`)" class="img" />
                        <div class="name-title">
                            {{ item.userName }}
     
                        </div>

                    </div>
                    <div class="mid">
                        <van-rate class="rate-wrap" v-model="item.rating" allow-half :size="15" :color="mainColor"
                            void-icon="star" void-color="#eee" readonly />
                        <span>{{ $t('订单已完成') }}</span>

                    </div>
                    <p class="reviews">{{ item.content || $t('用户未发表评论') }}</p>
                    <div class="comment_image">
                        <div v-for="(url, i) of item.images" :key="i">
                            <img @click="ImagePreview({ images: item.images, startPosition: i })" v-if="url" :src="url"
                                alt="">
                        </div>
                    </div>

                </div>
                <van-empty v-if="EvaluationInfo.length == 0" :description="$t('暂无数据')" />
            </div>

    
        </div>
    
        <div class="buy-bottom-fiexd">
            <div class="fiexd-left">
       
                <div class="item" @click="openCustomer()">
                    <div class="icon kefu-icon"></div>
                    <div class="text">{{ itemName == 'FamilyMart' ? $t("联系商家") : $t("客服") }}</div>
                </div>
 
                <div class="item" @click="isCard = productPropertiesShow = true">
                    <div class="icon gouwuc-icon">
                        <div class="tips" v-if="$ls.get('productList')">
                            {{ $ls.get('productList').length }}
                        </div>
                    </div>
                    <div class="text">{{ $t("购物车") }}</div>
                </div>
            </div>
            <div class="fiexd-right" @click="productPropertiesShow = true; isCard = false;">
                <p>
                    ${{ priceFormat($operation(goods_info.discountPrice, bugNum, 'times')) ||
                        priceFormat($operation(goods_info.sellingPrice, bugNum, 'times')) }}
                </p>
                <p>{{ $t("立即购买") }}</p>
            </div>
        </div>

        

        <Footer />

    </div>
</template>
<script>
import {
    NavBar,
    Swipe,
    SwipeItem,
    Popup,
    Stepper,
    Rate,
    Toast,
    ImagePreview,
    Dialog,
    Tab,
    Tabs,
    Loading,
    Empty,
    Icon
} from "vant";
import {
    getSellerGoods,
    getEvaluationList,
    getSellerInfo,
    keepGoods,
    keepGoodsDel,
    apiEvaluationCountType,
    apiRecommendAndLike,
} from "@/API/commodity";
import { apiGetRecommendNew } from '@/API/home'
import { isLogin, priceFormat, getStorage, formatZoneDate, priceFormatInt } from "@/utils/utis";
import Footer from '@/components/Footer'
import VueMarkdown from 'vue-markdown'

export default {
    data() {
        return {
            formatZoneDate,
            priceFormatInt,
            markdownContent: '',

           
            itemName: process.env.VUE_APP_ITEM_NAME,
            mainColor: process.env.VUE_APP_MAIN_COLOR,
            sort_index: '',
            goods_info: {}, //商品信息
            tab_nav_list: [this.$t("商品"), this.$t("评价"), this.$t("详情")],
            tab_index: 0,
            swiperWaitTime: 5000,
            imageList: [],
            isShippingShow: false,
            isShowTopBtn: false,
            EvaluationInfo: [],
            SellerInfo: {},
            sellerGoodsId: '',
            cartNum: 0, //购物车数量
            bugNum: 1, //购买数量
            evaluationNum: 0,
            collectTitle: '',
            cardShow: false,
            isCard: false,
            attributesIndex: [],
            Token: "",
            isWatch: true,
            productPropertiesShow: false,
            activeAttrs: [],
            allSkus: [],
            currentSkuTitle: [],
            currentSkuId: "-1",
            user:{},
            //
            attrsIdSkuId: [],
            defaultSku: [],
            defaultAvatar: require("@/assets/image/default_avatar.png"),
            ImagePreview,
            isLoading: false,
            isEn: getStorage('lang') == 'en',
            havePicture: '0',
            mediumReview: '0',
            negativeComment: '0',
            positiveComments: '0',
            recommendedGoods: [],
            likeGoods: [],
            currentCoverImg: '',
            defaultImageList: [],
            btnDisabled: true,
            originalPrice: 0,
            maxBuyNum: localStorage.getItem('maxBuyNum') || 500,
        };
    },
    computed: {
   
    },
    components: {
        Footer,
        VueMarkdown, // 注册 vue-markdown 组件
        [ImagePreview.name]: ImagePreview,
        [Empty.name]: Empty,
        [Loading.name]: Loading,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [NavBar.name]: NavBar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Popup.name]: Popup,
        [Stepper.name]: Stepper,
        [Rate.name]: Rate,
        [Icon.name]: Icon,
        [Toast.name]: Toast,
        [Dialog.Component.name]: Dialog.Component,
    },
    created() {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50)

        this.loadMarkdownContent();

        if (this.$route.query.userData) {
           this.user = JSON.parse(this.$route.query.userData);
           this.imageList = this.user.imgList
           console.log( this.user)
        }
    

        

        let lang = this.$route.query?.lang
        if (lang) {
            switch (lang) {
                case 'zh-CN':
                    lang = 'cn'
                    break;
                case 'zh-TW':
                case 'CN':
                    lang = 'tw'
                    break;
                case 'en-US':
                    lang = 'en'
                    break;
                default:
                    lang = 'en'
                    break;
            }
            sessionStorage.setItem('backPath', '/')
            if (lang !== localStorage.getItem('lang')) {
                localStorage.setItem('lang', lang)
                location.reload()
            }
        }
        this.sellerGoodsId = this.$route.query.sellerGoodsId.id;
        console.log(JSON.stringify(this.$route.query.sellerGoodsId));
   
   
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
       
    },
    methods: {

        loadMarkdownContent() {
            fetch('/1.md')
                .then(response => response.text())
                .then(text => {
                    this.markdownContent = text;
                })
                .catch(error => {
                console.error('Error fetching markdown content:', error);
                });
        },





        handleTabsChange(index) {
            this.tab_index = index
            this.toTop(index)
        },
        handleToggle(info, index, dis, bool) {
            if (dis) return
            const disAttr = new Set();
            const allGood = this.goods_info?.canSelectAttributes?.goodAttrs
            const temparr = JSON.parse(JSON.stringify(this.activeAttrs))
            if (allGood.length === this.activeAttrs.length) {
                allGood.forEach((item, i) => {
                    if (i != index) {
                        item.attrValues.forEach((attr, j) => {
                            if (attr.attrValueId !== info.attrValueId) {
                                temparr[i] = attr.attrValueId
                                if (!this.getSkusAndPrice(true, temparr)) {
                                    disAttr.add(attr.attrValueId)
                                    this.$set(this.activeAttrs, index, info.attrValueId);
                                }
                            }
                        })
                    }
                })
            }


            this.$set(this.activeAttrs, index, info.attrValueId);
            this.getSkusAndPrice()
            disAttr.clear()
            this.$forceUpdate();
            !bool && this.handleToggle(info, index, dis, true)
        },
        getSkusAndPrice(find, arr) {
            // let skuMap = {}
            // this.allSkus.forEach((item) => {
            //     const attrIds = item.attrs.map(attr => attr.attrValueId).join(',')
            //     if (skuMap[attrIds]) return
            //     skuMap[attrIds] = {
            //         title: item.attrs.map(attr => attr.attrName && attr.attrValueName ? `${attr.attrName}: ${attr.attrValueName}` : ''),
            //         coverImg: item.coverImg,
            //         discountPrice: item.discountPrice,
            //         sellingPrice: item.sellingPrice,
            //         skuId: item.skuId,
            //         img: item?.img || this.defaultImageList,
            //         hidden: item.hidden,
            //         price: item.price,
            //     }
            // })
            // const attrIds = find ? arr.join(',') : this.activeAttrs.join(',')
            // if (skuMap[attrIds] && !find) {
            //     this.currentSkuTitle = skuMap[attrIds].title
            //     this.goods_info.discountPrice = skuMap[attrIds].discountPrice || skuMap[attrIds].sellingPrice
            //     this.currentSkuId = skuMap[attrIds].skuId
            //     this.currentCoverImg = skuMap[attrIds].coverImg
            //     this.imageList = skuMap[attrIds].img
            //     this.btnDisabled = false
            //     this.originalPrice = skuMap[attrIds].discountPrice ? skuMap[attrIds].price : 0
            // } else {
            //     if (Object.keys(skuMap).length === 0) {
            //         this.btnDisabled = false
            //     } else {
            //         this.btnDisabled = true
            //     }
            //     return skuMap[attrIds]
            // }
        },
        handleSubmit() {
            this.getSkusAndPrice()
            this.isCard ? this.addCart() : this.openPay();
        },
        handleScroll() {
            this.isShowTopBtn = (document.documentElement.scrollTop || document.body.scrollTop) > 500
            if (!this.isWatch) return;
            let EvaluationOffsetTop =
                this.$el.querySelector("#Evaluation").offsetTop - 50;
            let detailsOffsetTop =
                this.$el.querySelector("#details").offsetTop - 50;
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop <= EvaluationOffsetTop) {
                this.tab_index = 0;
            } else if (
                scrollTop >= EvaluationOffsetTop &&
                scrollTop <= detailsOffsetTop
            ) {
                this.tab_index = 1;
            } else if (scrollTop >= detailsOffsetTop) {
                this.tab_index = 2;
            }
        },
        priceFormat(num) {
            return priceFormat(num);
        },

        //获取商品详情
        getSellerGoodsInfo(sellerGoodsId) {
            this.collectTitle = this.$t('收藏')
            this.$toast.loading()
            // 推荐商品/猜你喜欢
            if (sellerGoodsId) {
                this.activeAttrs = []
                this.allSkus = []
                this.goods_info = {}
                this.imageList = this.defaultImageList = []
                scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
            let dataJson = {
                sellerGoodsId: sellerGoodsId || this.sellerGoodsId,
                skuId: this.$route.query?.skuId || null,
            };
  
        },
        //获取评论
  

        jumpAllReviews() {
  
        },
        // 商家详情
        getSellerInfo(id) {
            let dataJson = {
                sellerId: id,
            };
            getSellerInfo(dataJson).then((res) => {
                this.SellerInfo = res;
                //详情里添加商铺名称
                this.goods_info.storeName = res.name;
                this.isLoading = false
                isLogin() && this.requestRecommendedProduct()
            }).catch(err => {
                console.log(`err ::->`, err);
                this.isLoading = false
            })
        },
        checkActive(index) {
            return index === this.current; // current为监听的轮播index
        },
        //监听product轮播index
        handleChangeSwiper(index) {
            this.current = index;
        },
        onClickLeft() {
            const backPath = sessionStorage.getItem("backPath")
            if (backPath) {
                this.$router.replace('/')
                sessionStorage.removeItem("backPath")
            } else {
                this.$router.go(-1);
            }
        },
        toTop(index) {
            this.isWatch = false;
            setTimeout(() => (this.isWatch = true), 1000);
            this.tab_index = index;
            if (index === 0) {
                this.$el
                    .querySelector("#product")
                    .scrollIntoView({ block: "start", behavior: "smooth" });
            } else if (index === 1) {
                this.$el
                    .querySelector("#Evaluation")
                    .scrollIntoView({ block: "start", behavior: "smooth" });
            } else {
                this.$el
                    .querySelector("#details")
                    .scrollIntoView({ block: "start", behavior: "smooth" });
            }
        },
        //跳转商铺
        jumpShop() {
            sessionStorage.removeItem("shopState");
            this.$router.push(`/shop?sellerId=${this.SellerInfo.id}&index=0`);
        },
        //跳转下单
        openPay() {
            if (!isLogin()) {
                this.productPropertiesShow = false;
                this.$notifyWarn(this.$t("请先登录"));
                this.$router.push("/login");
                return;
            }
            if (this.goods_info?.isShelf == 0) {
                this.$notifyWarn(this.$t("该商品已下架"));
                return
            }
            localStorage.setItem("sellerId", this.goods_info.sellerId);
            localStorage.setItem("storeName", this.goods_info.storeName);
            this.goods_info.tempId = new Date().getTime();
            //type:1直接购买,2购物车购买
            this.$router.push({
                path: "/orderComnfirmation",
                query: {
                    skuId: this.currentSkuId,
                    type: 1,
                    goodsInfo: JSON.stringify(this.goods_info),
                    bugNum: this.bugNum,
                    isCart: 0,
                    currentCoverImg: this.currentCoverImg
                },
            });
        },
        // 打开客服
        openCustomer() {
            localStorage.setItem("sellerId", this.goods_info.sellerId);
            localStorage.setItem("storeName", this.goods_info.storeName);
            if (isLogin()) {
                // Toast(this.$t("请先登录"));
                sessionStorage.setItem('shopName', this.SellerInfo.name)
                this.$router.push({ path: `/customerServiceIndex?goodsId=${this.goods_info.id}` });
            } else {
                this.$notifyWarn(this.$t("请先登录"));
                this.$router.push("/login");
            }
        },
    },
    watch: {
        bugNum(val) {
            this.cartNum = val;
        },
        sort_index() {
            this.getEvaluationList()
        },
        productPropertiesShow(val) {
            val && (this.swiperWaitTime = 5000)
        },
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        //撤销监听
        this.$ls.off("productList");
    },
};
</script>
<style lang="scss" scoped>

html[dir="rtl"] {
    .CommodityDetails /deep/ .van-tab--active {
        position: relative;

        &::after {
            content: '';
            width: 50px;
            height: 3px;
            background: var(--main-color);
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }
    }
}

.markdown-container {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;

}

.may_like {
    margin-top: 16px;
    width: 100%;


    .ml_title {
        font-size: 14px;
    }

    .ml_list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }

    .list-item {
        width: 46%;
        height: 245px;
        border: 1px solid #eeeeee;
        margin-top: 20px;
        border-radius: 4px;

        .commodity-img {
            width: 130px;
            height: 130px;
            // height: 160px;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: fit-content;
                width: auto;
                max-height: 100%;
                max-width: 100%;
            }
        }

        .money {

            color: var(--main-color);
            font-weight: 500;
            font-size: 16px;
            margin-top: 10px;
            padding-left: 8px;
            box-sizing: border-box;
        }

        .text {
            color: #999999;
            font-size: 12px;
            margin-top: 3px;
            padding-left: 8px;
            box-sizing: border-box;
        }

        .titlename {
            width: 100%;
            height: 37px;
            margin-top: 4px;
            padding-left: 8px;
            box-sizing: border-box;
            text-align: left !important;
        }
    }

    .list-item:nth-child(even) {
        margin-left: 6%;
    }
}

.recommended_product {
    margin-top: 16px;
    width: 100%;

    .rd_title {
        font-size: 14px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;

        li {
            flex: 0 0 167px;
            height: 70px;
            border: 1px solid #eee;
            margin-top: 16px;
            display: flex;
            border-radius: 2px;

            .img {
                flex: 0 0 63px;
                height: 63px;
                padding: 6px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .rd_right {
                flex: 1;
                padding-top: 10px;

                span {
                    &:nth-child(1) {
                        font-size: 10px;
                        min-height: 28px;
                    }

                    &:nth-child(2) {
                        margin-top: 4px;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;

                        color: var(--main-color);
                    }
                }
            }
        }
    }
}

.product_properties {
    min-height: 30%;
    padding: 20px 0;
    // z-index: 10000 !important;



    .p_top {
        padding: 0 20px;
        display: flex;
        align-items: center;
        min-height: 60px;

        .img {
            flex: 0 0 50px;
            width: 50px;
            height: 50px;
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            border: 1px solid #efefef;
            border-radius: 4px;

            img {
                max-width: 100%;
                max-height: 100%;
            }
        }

        .t_right {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            // align-items: center;
            .price {
                font-size: 16px;
                font-weight: 500;
                color: var(--main-color);
            }

            .num_box {
                display: flex;
                flex-direction: column;
                font-size: 12px;
            }
        }
    }

    .attributes_box {
        max-height: 330px;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .attributes {
        margin-top: 20px;
        padding: 0 0 0 20px;

        .p_title {
            font-size: 14px;
            margin-bottom: 10px;
        }

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                padding: 5px 16px;
                background: #f2f2f2;
                margin-right: 10px;
                margin-bottom: 10px;
                border-radius: 4px;
                // max-width: 38px;
                // max-height: 38px;
                border: 1px solid #eee;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-width: 25px;
                    max-height: 25px;
                }

                &.active {
                    background: var(--main-color);
                    color: #fff !important;
                }

                &.disabled {
                    // background: #ccc;
                    color: #A3A3A3;
                    opacity: .8;
                    // opacity: .5;
                }

                &.img_box {
                    min-width: 38px;
                    min-height: 38px;
                    padding: 0;
                    background: #fff;

                    &.disabled {
                        border: 1px dashed #eee !important;
                        background: transparent !important;
                        opacity: .5;
                        // -webkit-filter: grayscale(100%);
                        // -moz-filter: grayscale(100%);
                        // -ms-filter: grayscale(100%);
                        // -o-filter: grayscale(100%);
                        // filter: grayscale(100%);
                        // filter: gray;
                    }

                    &.active {
                        border-color: var(--main-color);
                    }
                }
            }
        }
    }

    .count_box {
        margin-top: 30px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sure {
        // width: 100%;
        margin-top: 40px;
        padding: 0 20px;

        .btn {
            // background: var(--main-color);
            background: var(--main-color);
            border: none;
            border-radius: 4px;
            font-size: 14px;
        }
    }
}

.comment_image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    // padding: 0 15px;
    div {
        width: 77px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #EEEEEE;
        flex: 0 0 77px;
        margin-right: 8px;
        margin-top: 8px;

        img {
            max-width: 60px;
            max-height: 60px;
        }
    }
}

.CommodityDetails {
    width: 100%;
    min-height: 100%;
    font-size: 14px;
    padding-bottom: 53px;
    overflow-x: hidden;

    a {
        color: #333333;
    }

    .tab-wrap {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        width: 90%;
        height: 46px;
        margin-left: 10%;

        :deep(.van-tabs) {
            width: 100%;

            .van-tabs__line {
                width: 80px;
                // background: var(--main-color) !important;
                background: var(--main-color) !important;
            }
        }

        .tab-item {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .active {
            // border-bottom: 2px solid var(--main-color);
            border-bottom: 2px solid var(--main-color);
        }
    }

    .banner-product {
        width: 100%;
        // margin-top: 10px;
        //   filter: drop-shadow(0px 6px 12px rgba(55, 63, 69, 0.1));
        border-radius: 4px;
        position: relative;
        min-height: calc(100vw + 10px);

        .van-swipe {
            min-height: calc(100vw + 10px);
        }

        .swipe-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vw;

            .img {
                max-width: 100%;
                max-height: 100%;
                margin: 0 auto;
                // transform: translateY(-10px);
            }
        }

        //指示器
        .indicators {
            position: absolute;
            bottom: 0px;
            left: 50%;
            display: flex;
            transform: translateX(-50%);
        }

        .indicator li {
            display: inline;
            width: 12px;
            height: 2px;
            background-color: rgb(93, 91, 88);
            border-radius: 20%;
            opacity: 0.3;
            transition: opacity 0.5s,
                //@animation-duration-fast
                background-color 0.5s; //@animation-duration-fast

            &:not(:last-child) {
                margin-right: 6px;
            }

            &.active {
                background-color: var(--main-color);
                opacity: 1;
            }
        }
    }

    .product-info-wrap {
        padding: 0 10px;

        .product-name {
            font-weight: 500;
            font-size: 13x;
            padding: 15px 0;
            border-bottom: 1px solid #eeeeee;
        }


        .product-norm {
            display: flex;
            color: #999999;
            font-size: 12px;
            margin-top: 10px;
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 10px;
            justify-content: flex-end;
            // .left {
            //   // flex: 1;
            // }

            // .right {
            // }
        }

        .product-line-item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 12px;
            border-bottom: 1px solid #eeeeee;
            padding: 15px 0;

            .left {
                // flex: 1;
                // min-width: 10px;
                margin-right: 10px;
            }

            .right {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        }
    }

    .Evaluation {
        padding: 0 10px;

        .sort {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: 13px 0;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            &.en_sort {
                flex-wrap: wrap;

                span {
                    flex: 0 0 30%;
                    margin-right: 0 !important;
                    margin-top: 13px;
                    margin-left: 13px;
                }
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 12px;
                height: 28px;
                border-radius: 14px;
                margin-right: 13px;
                color: #999;
                background: #eee;
                white-space: nowrap;

                &.active {
                    // background: var(--main-color);
                    background: var(--main-color);
                    color: #fff !important;
                }

                &.en_span {
                    margin-right: 0px;

                    &:nth-child(1) {
                        transform: scale(.8) translateX(-15px);
                    }

                    &:nth-child(2) {
                        transform: scale(.8) translateX(-30px);
                    }

                    &:nth-child(3) {
                        transform: scale(.8) translateX(-45px);
                    }

                    &:nth-child(4) {
                        transform: scale(.8) translateX(-62px);
                    }
                }
            }
        }

        .nav-item {
            display: flex;
            font-size: 12px;
            margin-top: 10px;
            // padding-bottom: 10px;

            .left {
                flex: 1;
                min-width: 60px;
            }

            .right {
                img {
                    height: 10px;
                }
            }
        }

        .user-info {
            display: flex;
            align-items: center;

            .avatar {
                width: 32px;
                height: 32px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .info {
                margin-left: 10px;

                .name {
                    font-weight: 400;
                    display: flex;
                    align-items: center;

                    .name-title {
                        width: 60px;
                    }

                    .rate-wrap {
                        margin-left: 10px;
                    }
                }

                .datetime {
                    color: #999999;
                    font-size: 10px;
                }
            }
        }

        .centent {
            line-height: 17px;
            margin-top: 10px;
        }
    }

    .right-icon {
        width: 6px;
        height: 10px;
        background: url("../../assets/image/commodity/gengduo.png") no-repeat;
        background-size: 100% 100%;
        margin-left: 5px;
    }

    .details-wrap {
        padding: 0 10px;

        .shop-wrap {
            min-height: 120px;
            background: #ffffff;
            border: 1px solid #eeeeee;
            padding: 15px;
            margin-top: 20px;

            .shop-info {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #eeeeee;
                padding-bottom: 20px;

                .left {
                    flex: 1;
                    display: flex;
                    align-items: center;

                    .shop-logo {
                        img {
                            display: block;
                            width: 46px;
                            height: 46px;
                            border-radius: 50%;
                        }
                    }

                    .info {
                        margin-left: 10px;

                        .name {
                            font-size: 14px;
                            font-weight: bold;
                        }

                        .title {
                            color: #333333;
                            font-size: 10px;
                            line-height: 1.5;
                            padding-top: 5px;
                            text-align: start;

                            span {

                                color: var(--main-color);
                            }
                        }
                    }
                }

                .right {
                    background: #fcf2e2;
                    // border: 1px solid var(--main-color);
                    border: 1px solid var(--main-color);
                    border-radius: 27px;
                    min-width: 71px;
                    min-height: 17px;
                    padding: 0 5px;
                    font-size: 10px;
                    text-align: center;
                    line-height: 17px;

                    color: var(--main-color);
                }
            }

            .shop-bottom {
                display: flex;
                margin-top: 15px;

                .item {
                    flex: 1;
                    text-align: center;
                    position: relative;

                    .text {
                        color: #333333;
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .title {
                        color: #333333;
                        margin-top: 4px;
                        font-size: 10px;
                        line-height: 1;
                    }
                }

                .item:not(:last-child) {
                    &::after {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        height: 20px;
                        width: 1px;
                        transform: translateY(-50%);
                        background: #eeeeee;
                        content: "";
                    }
                }
            }
        }

        .details-centent {
            width: 100%;
            overflow-x: hidden;
            padding: 15px 0;

            :deep(*) {
                max-width: 100% !important;
            }
        }
    }

    .buy-bottom-fiexd {
        min-height: 53px;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 1888;

        .fiexd-left {
            flex: 1;
            display: flex;

            .item {
                padding: 0 5px;
                flex: 1;
                text-align: center;
                padding-top: 8px;

                .text {
                    font-size: 12px;
                    color: #333333;
                    transform: translateY(-1px) scale(0.9);
                }

                .icon {
                    width: 16px;
                    height: 16px;
                    margin: 0 auto;
                    margin-bottom: 2px;
                    position: relative;

                    .tips {
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background: #ff3e3e;
                        text-align: center;
                        line-height: 15px;
                        font-size: 10px;
                        color: #fff;
                        position: absolute;
                        right: -10px;
                        top: -10px;
                    }
                }

                .collect-icon {
                    background: url("../../assets/image/commodity/Star6.png") center no-repeat;
                    background-size: 100% 100%;
                }

                .collect-check-icon {
                    background: url("../../assets/image/commodity/Star7.png") center no-repeat;
                    background-size: 100% 100%;
                }

                .kefu-icon {
                    background: url("../../assets/image/commodity/kefu.png") center no-repeat;
                    background-size: 100% 100%;
                }

                .kefu-icon {
                    background: url("../../assets/image/commodity/kefu.png") center no-repeat;
                    background-size: 100% 100%;
                }

                .gouwuc-icon {
                    background: url("../../assets/image/commodity/gouwuc.png") center no-repeat;
                    background-size: 100% 100%;
                }
            }
        }

        .fiexd-right {
            width: 150px;
            height: 100%;
            min-height: 53px;
            // background: var(--main-color);
            background: var(--main-color);
            height: 100%;
            color: #ffffff;
            text-align: center;
            padding-top: 8px;
            box-sizing: border-box;
        }
    }

    .dingbu {
        position: fixed;
        bottom: 100px;
        right: 10px;
        font-size: 30px;
    }

    .pop-header-title {
        height: 55px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 55px;
        border-bottom: 1px solid #eeeeee;
        font-size: 16px;
        color: #333333;
    }

    .centent-wrap {
        padding: 65px 10px 10px 10px;

        p {
            color: #000;
            padding: 5px 0;
        }
    }

    .shop-description-title {
        color: #000000;
        padding: 10px 0;
    }

    .shop-description-text {
        color: #000000;
        font-size: 12px;
        width: 100%;
        overflow-x: hidden;
    }
}

.title {
    text-align: center;
    line-height: 50px;
    font-size: 16px;
}

.cart_title {
    text-align: center;
    font-size: 16px;
    transform: translateY(-8px);
}

.card-wrap {
    padding: 0 15px;
    padding-top: 30px;
    display: flex;
    align-items: center;

    .left {
        display: flex;
        flex: 1;

        .img {
            width: 70px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: fit-content;
                width: auto;
                max-height: 100%;
                max-width: 100%;
            }
        }

        .goods_info {
            width: 150px;
            padding-left: 5px;

            .money {

                color: var(--main-color);
                font-weight: bold;
                margin-top: 10px;
            }

            .name {
                //   height: 36.5px;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -moz-box-orient: vertical;
                box-orient: vertical;
                -webkit-line-clamp: 2;
                line-clamp: 2;
            }
        }
    }
}

.card-but {
    position: absolute;
    bottom: 10px;
    left: 5%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .but {
        margin: 0 auto;
        // background: var(--main-color);
        background: var(--main-color);
        border: none;
    }
}

.reviews-list {
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .sheet-item {
        width: 100%;
        margin-bottom: 30px;
        border-top: 1px solid rgba(238, 238, 238, 1);

        .top {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px 0 5px 0;

            .img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 1px solid rgba(238, 238, 238, 1);
                // margin: 0 4%;
            }

            .name {
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;


            }

            .name-title {
                margin-left: 10px;
                // width: 100px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -moz-box-orient: vertical;
                box-orient: vertical;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .date {
                font-size: 10px;
                margin-top: 5px;
            }
        }

        .mid {

            // padding: 0 15px;
            span {
                margin-left: 20px;

                color: var(--main-color);
                font-size: 12px;
            }

            .sku {
                margin-top: 5px;
                margin-bottom: 5px;

                span {
                    margin: 0;
                    color: #999999;
                    font-size: 10px;

                    &::before {
                        content: '';
                        display: inline-block;
                        width: 1px;
                        height: 7px;
                        background: #D9D9D9;
                        margin: 0 5px;
                    }

                    &:first-child {
                        &::before {
                            content: '';
                            display: none;
                        }
                    }
                }

            }
        }

        .btm_date {
            // padding: 0 15px;
            margin-top: 9px;
            font-size: 10px;
            color: #999;
        }

        .reviews {
            color: #000;
            font-size: 12px;
            display: inline-block;
            padding: 2% 1% 2% 0;
            word-break: break-word;
            white-space: pre-wrap;
        }
    }
}

.sku_box {
    border-bottom: 1px solid #eee;
    padding: 20px 0 15px 0;

    .attributes_box {
        max-height: 330px;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .attributes {

        .p_title {
            font-size: 14px;
            margin-bottom: 10px;
        }

        ul {
            display: flex;
            // flex-wrap: wrap;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                // width: 100px;
                // flex: 0 0 100px;
                padding: 5px 16px;
                background: #f2f2f2;
                margin-right: 10px;
                margin-bottom: 10px;
                border-radius: 4px;
                // min-width: 38px;
                // min-height: 38px;
                border: 1px solid #eee;
                display: flex;
                justify-content: center;
                align-items: center;
                white-space: nowrap;

                img {
                    max-width: 25px;
                    max-height: 25px;
                }

                &.active {
                    background: var(--main-color);
                    color: #fff !important;
                }

                &.disabled {
                    color: #A3A3A3;
                    opacity: .8;
                    // opacity: .5;
                }

                &.img_box {
                    min-width: 38px;
                    min-height: 38px;
                    padding: 0;
                    background: #fff;

                    &.disabled {
                        border: 1px dashed #eee !important;
                        background: transparent !important;
                        opacity: .5;
                        // -webkit-filter: grayscale(100%);
                        // -moz-filter: grayscale(100%);
                        // -ms-filter: grayscale(100%);
                        // -o-filter: grayscale(100%);
                        // filter: grayscale(100%);
                        // filter: gray;
                    }

                    &.active {
                        border-color: var(--main-color);
                    }
                }
            }
        }
    }
}




.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

:deep(.van-swipe) {
    overflow-y: auto !important;
}</style>
