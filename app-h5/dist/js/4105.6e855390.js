(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[4105],{79824:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return f}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loan_wrap"},[e("van-nav-bar",{ref:"header",attrs:{"safe-area-inset-top":"",title:t.$t("关于我们"),fixed:""}}),e("div",{staticClass:"top"},[e("div",{class:["text",!t.isCn&&"en_text"]},[e("span",[t._v(t._s(t.$t("留学咨询 解决留学提升的烦恼")))]),e("span",[t._v(t._s(t.$t("提供解决方案 个性化匹配服务")))])])]),e("div",{staticClass:"worry_free"},[e("div",{staticClass:"main_title title"},[t._v(t._s(t.$t("留学无忧")))]),e("ul",t._l(t.worryFreeData,(function(i,n){return e("li",{key:n,class:!t.isCn&&"en_li"},[e("van-icon",{attrs:{"class-prefix":"icon",name:i.iconName}}),e("div",{staticClass:"name"},[t._v(t._s(i.name))]),e("div",{staticClass:"desc"},[t._v(t._s(i.desc))])],1)})),0)]),e("div",{staticClass:"about"},[e("div",{staticClass:"main_title title"},[t._v(t._s("我们宗旨"))]),e("div",{staticClass:"content"},[e("p",[t._v(" "+t._s(t.$t("我们致力于留学服务，基于“客户至上”的经营理念，以解决客户资金周转问题为使命，公司从成立至今，已帮助无数留客户实现留学愿望。"))+" ")]),e("p",[t._v(" "+t._s(t.$t("想要留学,苦于没有靠谱渠道，请找我们。"))+" ")])]),e("div",{class:["ad",!t.isCn&&"en_ad"]},[e("p",[e("span",[t._v(t._s(t.$t("致力于留学提升服务")))])]),e("p",[e("span",[t._v(t._s(t.$t("解决您的留学困惑")))])])])]),e("div",{staticClass:"partner"},[e("div",{staticClass:"main_title"},[t._v(t._s(t.$t("合作伙伴 - 相关院校")))]),e("ul",t._l(t.partnerIcon,(function(i,n){return e("li",{key:n,on:{click:function(e){return t.handleJump(i.path)}}},[e("img",{attrs:{src:i.icon,alt:""}})])})),0)]),e("Footer")],1)},s=[],a=i(4648),r=i(6835),o=i(48534),c=(i(65825),i(19858)),A=(i(37850),i(88848)),u=(i(70560),i(63822)),l=i(49728),p=i(10408),m=i(90400),w={components:{Footer:l.Z,[A.Z.name]:A.Z,[c.Z.name]:c.Z},data(){return{itemName:"EShop",worryFreeData:[{name:this.$t("业界高性价比"),desc:this.$t("校方源头合作机构,信息透明,靠谱高效。"),icon:i(11496),iconName:"meiyuan9"},{name:this.$t("急速获得留学资格"),desc:this.$t("申请资料辅导,避免资料遗漏和错误,绿色申请通道,最快2周获得申请。"),icon:i(140),iconName:"huojianjiasu"},{name:this.$t("安全无忧"),desc:this.$t("一站式留学,管家式服务,专业团队提供全程辅助,轻松完成学业。"),icon:i(17594),iconName:"dunpai"}],isCheckAvailability:"false",partnerIcon:[],isEn:"en"==(0,p.cF)("lang"),isCn:"cn"==(0,p.cF)("lang")}},created(){var t=this;return(0,o.Z)((0,r.Z)().mark((function e(){var n,s,a,o,c,A;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a=["https://www.cimbclicks.com.my","https://www.cimb.com.my","https://www.rhbgroup.com","https://www.loanstreet.sg/","https://www.dbs.com.sg/","https://www.graceloanadvance.com","https://hk.lendela.com","https://epaycash.hk","https://www.hangseng.com/","https://www.hsbc.com.hk"],o=0;o<12;o++)t.partnerIcon.push({icon:i(99575)("./".concat(o+1,".jpg")),path:a[o]});if(c=null===(n=t.$route.query)||void 0===n?void 0:n.lang,A=null===(s=t.$route.query)||void 0===s?void 0:s.token,A&&localStorage.setItem("token",A),e.t0=A,!e.t0){e.next=9;break}return e.next=9,t.$store.dispatch("getUserInfo");case 9:c&&c!=localStorage.getItem("lang")&&(t.$i18n.locale=c,t.setLanguage(c)),(0,p.bg)()&&t.requireCheckAvailability();case 11:case"end":return e.stop()}}),e)})))()},methods:(0,a.Z)((0,a.Z)({},(0,u.OI)(["setLanguage"])),{},{requireCheckAvailability(){var t=this;return(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,m.eb)();case 2:t.isCheckAvailability=e.sent;case 3:case"end":return e.stop()}}),e)})))()},handleJump(t){window.plus?plus.runtime.openURL(t):window.open(t)},handleApply(){if(!(0,p.bg)())return this.$notifyWarn(this.$t("请先登录")),this.$router.push("/login");"true"==this.isCheckAvailability&&this.$router.push("/loan/apply")},handleMine(){if(!(0,p.bg)())return this.$notifyWarn(this.$t("请先登录")),this.$router.push("/login");this.$router.push("/loan/my")}})},g=w,d=i(1001),D=(0,d.Z)(g,n,s,!1,null,"1975af0e",null),f=D.exports},65825:function(t,e,i){"use strict";i(22184),i(14106),i(4127)},99575:function(t,e,i){var n={"./1.jpg":81402,"./10.jpg":49665,"./11.jpg":13081,"./12.jpg":73942,"./2.jpg":52940,"./3.jpg":56663,"./4.jpg":50164,"./5.jpg":69370,"./6.jpg":9133,"./7.jpg":27712,"./8.jpg":86294,"./9.jpg":70920};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id=99575},81402:function(t,e,i){"use strict";t.exports=i.p+"img/1.d5e2d506.jpg"},49665:function(t,e,i){"use strict";t.exports=i.p+"img/10.689c0895.jpg"},13081:function(t,e,i){"use strict";t.exports=i.p+"img/11.ff7ca658.jpg"},73942:function(t,e,i){"use strict";t.exports=i.p+"img/12.c5a88f10.jpg"},52940:function(t,e,i){"use strict";t.exports=i.p+"img/2.d13421db.jpg"},56663:function(t,e,i){"use strict";t.exports=i.p+"img/3.eceaf2fc.jpg"},50164:function(t,e,i){"use strict";t.exports=i.p+"img/4.a6963a32.jpg"},69370:function(t,e,i){"use strict";t.exports=i.p+"img/5.fdf3f0be.jpg"},9133:function(t,e,i){"use strict";t.exports=i.p+"img/6.48c3865f.jpg"},27712:function(t,e,i){"use strict";t.exports=i.p+"img/7.80bd3e32.jpg"},86294:function(t,e,i){"use strict";t.exports=i.p+"img/8.ef0628b7.jpg"},70920:function(t,e,i){"use strict";t.exports=i.p+"img/9.67241245.jpg"},11496:function(t){"use strict";t.exports="data:image/png;base64,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"},140:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC4CAMAAABjGAbIAAAAPFBMVEUAAAD3mAD4mQD3mAD5mQD3mAD5mQD3lwD0lQD/nwD5mgD5mwD5mwD4mgD4mQD5mgD4mgD4mQD6mgD4mQA/A5uTAAAAE3RSTlMAIN+A70CgYDAQz39fv6+QUHAweDtQhQAAAxNJREFUeNrt3NFygjAQheHdEEAU1Hbf/1277ZTRWmMSVDg7s/81F58MTEIgkud5nud5nud5nud5nud5nud5nud5SxtOx67rGm0cx3Pbtp/MA1lo2Mv9Yghh0q5/FyGl8vICAVUll0g4qbwqgknlRukqN0qvlwsTRCo3Sle5UbrKjdKXyQVgOOUgRukqN0pfLJeRqgKSb0fPy0MIwPSUPE4903e7/ohJT8hjM9AlPiXoDa1cXn4cbo87otE5FIsaLHpC3hMV2k+0Sflznrd3tHoXeQ1nQqFzqJ0NMgg9JT+RVnrJHGmDOOSn4PnTPtHqXeR1mGl7elIuH0QVV8ye1o7Dwhn4ebOVu7xcBnoUb0znsHxRaFu6yl9Gj7RmKl9OH2oOX1OeX1lp30/fhVTxqafN/u30XZSiqqexR7mJceSZGy++mT7KM51rrhdhIPnDsT38pwPJH81iDu9duTvIs8XP1C0kd+hIcpHA5SNCCyW/2PNyOWPJ1T7SbWOUOzVocq1juo4neau8k1fWtfTb0E5iSf7ddGqapttHMSefy8jf/gbO5S5PjBZr1Lvc5S5/3WMorJwGTvQhP+HKcxMDk/Ifu1G52s3K1W5W/mJ7PNODkO1xRw/DteflqPYSOaa9TI5oL5Xj2VW+VY1ZudrNytVuVq52s3K1m5UvtAeEb+vVblaudoPy3Wy39mE9HWSc7cboB5GL3RRd5dd2Q3SV/7Wboav81m6ErvL/dhN0lV91mO0G6Cq/b4enqzxlB6erPG2Hpqv8Tp+zHZh+yKwaNrD0nFztoPS8XO2Q9C4v13pAeplc7XD0UrnawejlcrVD0e/KY0rRA9G7ytWUHoZeK1c7CL2tlqsdg059rVzr9xB06mvlGmPQqa+WE6Ps+e5r5cQgcqJdrJMTo8hne7GcGEY+20vlxDj7vX/t4UYOv2d6tlesjjOSXO17ptIYSl4Vm5Xf0PdkKP4jt/G3kzPdrJzYrJzYrPxCD9bkxDiveGtjs3Jis3Jis3Jis3Jis3Jis3Jis3IazMo9z/M8z/M8z/M8r7Avr3v4ddiEyb4AAAAASUVORK5CYII="},17594:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAACACAMAAAALbnZeAAAAQlBMVEUAAAD3mQD4mQD3mAD/nwD5mQD5mgD5mgD4mgD4mQD3lwD4mQD5mwD3lwD3lwD3lwD3mgD3mwD5mgD4mQD6nAD4mQB67RVwAAAAFXRSTlMAgN8gEO/PkL9wgKB/YEAwYEBQr19yEucMAAACvklEQVRo3u3Y227bMAyAYYY6W/Gx5fu/6oYOKJEIiSLJ5M383w1Y+0FiwiaG7mYDqs1IFDeQj72fUMe06cdTM+3dsadgmsAem3cDQu2RXpRX4ESus8xvVul4nMv7eRxP732YDIxn7pEaiptR4xjtPandA1JnPqztWqSxMB/205vcgqdz8uEw70+2biE6Ojf8uh3rI2P2Y0u3kL0juTB+5XBL274D3Ei3S/zbJV7iJb7qEi/xEl91if+t6LOyiAYmHZFBgMOpiAwCGNQS3Qr/Ml5JXOG3SUWcAbikICZ4aEVpcYLHjKxYghZFb7UEwQvPMT+DmWRF/wwGkhW9fQLvJCuiqYMsSoCJRMUS/CZZ0T2DKwmL6xNonLA4l7tNVkwlOCwGbNvew+IENn8MWk/DYuC/53UQIo2JvKAXbNjeQ6J/Nx8PxW4bFtHyrwtt27su1tdXqm7vQbH8nQYr23tYNPCUia/Bg04Q71A0vdzebkDkoinI2f2Ale098FotSYOV7T0mkksFaXNlezeL9WEu5UfhIbE+zMr2HhYJK+SXwJOH9A4MJCDyMMvuQk9XvHkJCog8zHGQxc5hflO32DfMnXrEmbjGYa6uSzwa/jeuxW7rEC21lLpBFqHtB8MgSMAvnbZhWqRuceF/NQzTjzygiB1fbjJ1tgAfsqEQekHkLwtKbQB8SI0igPIhzWef/UQeTibSCBu/+J38FMYiibfVP8aLDVHnLRKgaCbJPEDZRHJ5C1okg0okg6pkZFDn5ZPhbSueDU5QyZxMJqhm/ImeW0pA9PXjDXxWcueAwQKnMEyXoCEbtG6Um1HpRjkTBzxcoKfk1A7Ix9Q7IE9T6YCcyY1eXGC0AwXeg5Um7LlQ6avlC9UzcYFzW7BzgDLvFDfxAAVMFY/NqOVxS37w4gHymd/LdWEBpZbgyeW55zr/AHUySNX5JBpyAAAAAElFTkSuQmCC"}}]);