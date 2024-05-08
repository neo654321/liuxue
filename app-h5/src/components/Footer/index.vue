<template>
    <div>
        <div v-if="isShelves" class="footer">
            <div class="top">
                <img :src="logo" alt="" :style="itemData.logoHeight && { height: itemData.logoHeight + 'px' }" class="logo">
                <div class="email">
                    <span>{{ this.$t('获得您更多的优惠券') }}</span>
                    <input v-model.trim="email" :placeholder="this.$t('您的电子邮箱')" :maxlength="50" />
                    <button @click="subscription">{{ this.$t('订阅') }}</button>
                </div>

            </div>
            <!-- 支付方式 -->
            <div class="mid">
                <div class="title">{{ '友情链接' }}</div>
                <ul>
                    <li v-for="(item, index) of paymentList" :key="index" @click="handleJump(item)">
                        <!-- <img :src="item?.icon" alt=""> -->
                        <span>{{ item?.name }}</span>
                    </li>
                </ul>
            </div>
            <!-- Argos -->
            <div class="argos">
                <div class="title">关于我们</div>
                <div :class="['text', isCn && 'cn_text']" v-if="name !== 'TikTokMall'">
                    {{ introduce }}
                </div>
    
            </div>
            <!-- 版权信息 -->
            <div class="copyright" v-if="name !== 'INT Overstock'">
                <span >© {{ name }} {{ this.$t('有限公司2023 版权所有') }}</span>

            </div>

            <van-dialog v-model="dialogShow" :title="$t('联系我们')">
                <div class="dialog_message" >

                    <div ><span>{{ $t('企业邮箱') }}:</span> <span>{{ "tescomall819@gmail.com"}}</span></div>

                </div>

            </van-dialog>
        </div>
        <div style="height:50px" v-else></div>
    </div>
</template>
<script>
import { Field, Dialog } from 'vant';
import { argosImages } from './data'
import { getStorage, isLogin } from '@/utils/utis'
import { apiSubscription } from '@/API/common'
import { removeStorage } from '@/utils/utis'
export default {
    components: {
        [Field.name]: Field,
        [Dialog.Component.name]: Dialog.Component,
    },
    data() {
        return {
            removeStorage,
            isLogin,
            argosImages,
            isShelves: !process.env.VUE_APP_PUT_ON_SHELVES,
            itemData: this.$store.state.multiItem[process.env.VUE_APP_ITEM_NAME],
            email: '',
            dialogShow: false,
            type: '',
            // name: process.env.VUE_APP_ITEM_NAME,
            name: '心瀚教育',
        
            paymentList: [
                {
                    path: 'https://ched.gov.ph/',
                    icon: require('@/assets/image/footer/1.png'),
                    name: '菲律宾高教委'
                },
                {
                    path: 'https://www.cscse.edu.cn/',
                    icon: require('@/assets/image/footer/2.png'),
                    name: '中国留学网'
                },
                {
                    path: 'https://jsj.moe.gov.cn/',
                    icon: require('@/assets/image/footer/3.png'),
                    name: '教育涉外网'
                },
                {
                    path: 'http://ph.china-embassy.gov.cn/',
                    icon: require('@/assets/image/footer/4.png'),
                    name: '驻菲律宾领事馆'
                },
                // {
                //     path: 'https://www.coinbase.com/',
                //     icon: require('@/assets/image/footer/5.png'),
                //     name: 'coinbase'
                // },
                // {
                //     path: 'https://metamask.io/',
                //     icon: require('@/assets/image/footer/6.png'),
                //     name: 'MetaMask'
                // },
                // {
                //     path: 'https://www.kucoin.com/',
                //     icon: require('@/assets/image/footer/7.png'),
                //     name: 'KuCoin'
                // },
                // {
                //     path: 'https://www.bitfinex.com/',
                //     icon: require('@/assets/image/footer/8.png'),
                //     name: 'Bitfinex'
                // },
            ],

            isCn: getStorage('lang') == 'cn',
            isEn: getStorage('lang') == 'en',

        }
    },
    computed: {
        introduce() {
    
            const text = '心瀚教育学留学服务有限公司（简称艾菲学留学）（Xiamen Effie Overseas Education Co., Ltd.）是一家集菲律宾留学、游学、中菲教育资源合作的菲律宾教育垂直服务企业。艾菲学留学以菲律宾本硕博留学为服务核心，为有志于读取菲律宾学士、硕士、博士的海内外学子提供菲律宾高等院校申请服务，为中国留学生顺利入读海外院校、获得学位提供各项保障'
    
            return text;
            // return `${name} ${this.$t(text)} `
       },
        logo() {
    
                return require(`@/assets/Argos/logo.png`)
        
        },
    },
    created() {

    

    },
    methods: {

        handleJump(item, noJump) {
            if(noJump) return
            const { path, name, text } = item
            if (!path) return

            if (path == 'phone') {
                if (!this.itemData?.phone) return
            }
            const types = ['popover', 'phone']
            if (types.includes(path)) {
                this.type = path
                this.dialogShow = true
                return
            }
            if (path.indexOf('http') != -1) {
                if(window.plus) {
                    plus.runtime.openURL(path)
                    return
                } else {
                    window.open(path)
                }
            } else if (path.indexOf('/#/') != -1) {
                let query = {title: name || text }
                if(window.plus) {
                    query.url = `${this.itemData.app_url}${path}?lang=${getStorage('lang') || 'en'}`
                } else {
                    query.url = `${window.origin}${path}?lang=${getStorage('lang') || 'en'}`
                }
                this.$router.push({
                    path: "/iframe",
                    query
                });
            } else {
                if (path == '/register') {
                    if (this.isLogin()) {
                        Dialog.confirm({
                            title: this.$t("您已登录"),
                            message: this.$t("是否跳转到注册页面"),
                            confirmButtonText: this.$t("确认"),
                            cancelButtonText: this.$t("取消"),
                        }).then(() => {
                            this.removeStorage('token')
                            this.$router.push("/register");
                        });
                    } else {
                        this.$router.push("/register");
                    }
                    return
                }
                const arr = ['/order', '/collectGoods']
                if (arr.includes(path)) {
                    if (!this.isLogin()) {
                        this.$notifyWarn(this.$t("请先登录"));
                        this.$router.push("/login");
                    } else {
                        this.$router.push(path);
                    }
                    return
                }
                if (this.$route.path != path) {
                    this.$router.push(path)
                } else {
                    scrollTo(0, 0);
                }
            }

        },
        async subscription() {
            if(!this.isValidEmail(this.email)) return this.$notify(this.$t('请输入正确的邮箱地址'))
            await apiSubscription({ email: this.email })
            this.$notify(this.$t('订阅成功'), 'success')
        },
        isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog_message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    box-sizing: border-box;
    div {
        width: 250px;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        // display: block;
        // flex: 0 0 50%;
        font-size: 14px;
        color: #3f3f3f;
        line-height: 20px;
        &:nth-child(1) {
            text-align: end;
            margin-right: 10px;
            flex: 0 0 30%;
        }
        &:nth-child(2) {
            text-align: start;
        }
    }
}

.footer {
    width: 100%;
    background: #212121;
    overflow: hidden;
    .top {
        padding: 28px 38px 38px 28px;


        .logo {
            // width: 118px;
            width: auto;
            height: 35px;
        }

        .email {
            margin-top: 0px;

            span {
                display: block;
                color: var(--main-footer-color);
                font-size: 12px;
            }

            input {
                margin-top: 12px;
                width: 288px;
                height: 44px;
                border-radius: 4px;
                padding-left: 10px;
                border: none;
                outline: none;
                font-size: 12px;

                &::placeholder {
                    color: #9E9E9E;
                }
            }

            button {
                margin-top: 39px;
                width: 156px;
                height: 42px;
                border: 1px solid var(--main-footer-color) !important;
                border-radius: 4px;
                font-size: 12px;
                color: var(--main-footer-color);
                background: transparent;
            }
        }

        ul {
            margin-top: 29px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            li {
                flex: 0 0 70%;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                &.tr_li,
                &.it_li,
                &.af_li,
                &.ru_li,
                &.es_li,
                &.pt_li,
                &.ms_li,
                &.fr_li,
                &.de_li,
                &.en_li {
                    flex: 0 0 55%;

                    &:nth-child(2n) {
                        align-items: flex-end;
                        flex: 0 0 45%;
                    }
                }
                &.de_li {
                    flex: 0 0 50%;
                }
                &.fr_li {
                    flex: 0 0 52%;
                }
                &.ms_li {
                    flex: 0 0 50%;
                }
                &.pt_li {
                    flex: 0 0 40%;
                }
                &.es_li {
                    flex: 0 0 40%;
                }
                &.ru_li {
                    flex: 0 0 50%;
                }
                &.af_li {
                    flex: 0 0 50%;
                }
                &.tr_li {
                    flex: 0 0 42%;
                }
                &.it_li {
                    flex: 0 0 45%;
                }
                &.el_li {
                    flex: 0 0 45%;
                    &:nth-child(2n) {
                        align-items: flex-end;
                        flex: 0 0 50%;
                    }
                }
                &.ja_li {
                    flex: 0 0 50%;
                    &:nth-child(2n) {
                        align-items: flex-end;
                        flex: 0 0 48%;
                    }
                }
                &.ph_li {
                    flex: 0 0 50%;
                    &:nth-child(2n) {
                        align-items: flex-end;
                        flex: 0 0 48%;
                    }
                }
                div {
                    width: 100%;
                    text-align: start;

                    &.title {
                        color: var(--main-footer-color);
                        font-weight: 700;
                        font-size: 16px;
                        // margin-bottom: 19px;
                        height: 45px;
                        word-wrap:break-word;
                    }

                    &.text {
                        // margin-bottom: 23px;
                        height: 40px;
                        font-size: 12px;
                        transform: translateX(4px);
                    }
                }

                &:nth-child(2n) {
                    align-items: flex-end;
                    flex: 0 0 30%;
                }

                &:nth-child(3),
                &:nth-child(4) {
                    margin-top: 23px;
                }
            }
        }
    }

    .mid {
        padding: 20px 0;
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 15px;
            width: 95%;
            height: 1px;
            background: #3f3f3f;
        }

        &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 15px;
            width: 95%;
            height: 1px;
            background: #3f3f3f;
        }

        .title {
            color: #fff;
            font-size: 12px;
            text-align: center;
        }

        ul {
            margin-top: 29px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0 10px;

            li {
                flex: 0 0 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 15px;

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }

                span {
                    margin-top: 10px;
                    color: #ABABAB;
                    font-size: 10px;
                }
            }
        }
    }

    .argos {
        padding: 23px 16px 36px 16px;
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 1px;
            background: #3f3f3f;
            box-sizing: border-box;
        }

        .title {
            color: #fff;
            font-size: 12px;
            text-align: center;
        }

        .text {
            padding-left: 16px;
            // width: 318px;
            margin-top: 10px;
            font-size: 12px;
            line-height: 17px;
            color: #FFFFFF;
            // word-break:break-all;
            // text-align: justify;
        }
        .cn_text {
            word-break:break-all;
            text-align: justify;
        }
        .bank_card {
            margin-top: 29px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 237px;
                height: 152px;
            }
        }

        .images {
            margin-top: 48px;
            min-height: 30px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            &.SM-wholesaleShop {
                img {
                    &:nth-child(1) {
                        width: auto !important;
                        height: 16px !important;
                        transform: translateY(2px);
                    }
                    &:nth-child(2) {
                        width: 49.6px;
                        height: 10.4px;
                        transform: translateY(4px);
                    }
                    &:nth-child(3) {
                        width: 49.6px;
                        height: 10.4px;
                    }
                    &:nth-child(6) {
                        width: 60px;
                        height: auto !important;
                        margin-left: 20px;
                    }
                    &:nth-child(7) {
                        width: 100px;
                        height: auto !important;
                        
                    }
                    &:nth-child(7) {
                        margin-left: 0;
                    }
                    &:nth-child(8) {
                        width: 52px;
                        height: auto;
                        margin-bottom: 0;
                    }
                }
            }
            &.Shop2u, &.Tongda {
                img {
                    &:nth-child(1) {
                        width: auto !important;
                        height: 14px !important;
                    }
                    &:nth-child(2) {
                        width: 49.6px;
                        height: 10.4px;
                    }
                    &:nth-child(4) {
                        width: 82.4px;
                        height: 15.2px;
                    }
                    &:nth-child(5) {
                        width: 26.4px;
                        height: 22.4px;
                    }
                    &:nth-child(8) {
                        width: 52px;
                        height: auto;
                        margin-bottom: 0;
                    }
                }
            }
            
            img {
                margin-bottom: 10px;
                margin-left: 20px;
                &:nth-child(1) {
                    margin-left: 0;
                    width: 34px;
                    height: 29px;
                }
                &:nth-child(2) {
                    width: 62px;
                    height: 13px;
                }

                &:nth-child(3) {
                    width: 22px;
                    height: 18px;
                }

                &:nth-child(4) {
                    width: 103px;
                    height: 19px;
                }

                &:nth-child(5) {
                    width: 33px;
                    height: 28px;
                }
                &:nth-child(6) {
                    margin: 0;
                    width: 159px;
                }
                &:nth-child(7) {
                    margin: 0;
                    width: 80px;
                    margin-left: 30px;
                }
            }
            &.amazon {
                img {
                    &:nth-child(1) {
                        width: 48.5px;
                        height: 15px;
                        transform: translateY(4px);
                    }
                }
            }
        }
    }

    .copyright {
        padding: 15px 16px 100px 16px;

        span {
            color: #6B6B6B;
            font-size: 10px;
            line-height: 16px;
            display: block;
            // text-align: justify;
            &:nth-child(1) {
                text-align: center;
                margin-bottom: 24px;
                font-size: 12px;
            }
        }
    }

    // :deep(.van-dialog__message) {
    //     text-align: inherit !important;
    // }
}
</style>