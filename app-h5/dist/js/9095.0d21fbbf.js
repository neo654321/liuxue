"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[9095],{59095:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});s(73927),s(41631);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("nationality-list",{ref:"controlChild",attrs:{title:t.$t("选择区域码")},on:{getName:function(e){return t.getName(arguments)}}}),e("Vcode",{staticStyle:{direction:"ltr"},attrs:{imgs:[t.img1,t.img2,t.img3,t.img4,t.img5],show:t.show,canvasHeight:200,sliderText:t.$t("拖动滑块以完成拼图"),successText:t.$t("验证通过!"),failText:t.$t("验证失败,请重试")},on:{success:t.onSuccess,fail:t.onFail,close:function(e){t.show=!1}}}),t.isShelves?e("div",{staticClass:"lang-right"},[e("router-link",{attrs:{to:"/language"}},[e("img",{staticClass:"lang-icon",attrs:{src:s(21652)}})])],1):t._e(),e("div",{staticClass:"login-title"},[t._v(t._s(t.$t("注册")))]),e("div",{staticClass:"phone_form"},[e("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(1===t.TabShow?t.$t("手机号"):t.$t("邮箱")))]),2===t.TabShow?e("div",{staticClass:"login-input code_wrap"},[e("el-input",{attrs:{placeholder:t.$t("请输入邮箱"),maxlength:"64"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username","string"===typeof e?e.trim():e)},expression:"formData.username"}})],1):t._e(),e("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(t.$t("密码")))]),e("div",{staticClass:"login-input"},[e("el-input",{attrs:{placeholder:t.$t("请输入 6-12 位由数字或字母组成的密码"),maxlength:"20","show-password":"",clearable:""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password","string"===typeof e?e.trim():e)},expression:"formData.password"}})],1),e("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(t.$t("确认密码")))]),e("div",{staticClass:"login-input"},[e("el-input",{attrs:{placeholder:t.$t("请再次输入密码"),maxlength:"20","show-password":"",clearable:""},model:{value:t.formData.re_password,callback:function(e){t.$set(t.formData,"re_password","string"===typeof e?e.trim():e)},expression:"formData.re_password"}})],1)]),e("div",{staticClass:"tijiao",on:{click:t.post_form}},[t._v(t._s(t.$t("注册")))]),e("div",{staticClass:"zhuce"},[e("div",{staticClass:"zhuce-flex"}),e("div",{staticClass:"zhuce-text1"},[t._v(t._s(t.$t("已有账号？"))+" ")]),e("div",{staticClass:"zhuce-text2",on:{click:function(e){return t.$router.push("/login")}}},[t._v(t._s(t.$t("去登录")))]),e("div",{staticClass:"zhuce-flex"})]),e("div",{staticClass:"servece_box",on:{click:t.handleJump}},[e("img",{attrs:{src:s(62533)}})])],1)},i=[],o=s(66986),r=s(9610),n=(s(23465),s(17263)),c=(s(3761),s(98877)),A=s.n(c),l=s(14569),m=s(78455),u=s(22204),h=s(68593),d={name:"LoginPage",components:{NationalityList:l.Z,Vcode:A()},data(){return{isLogin:u.bg,isShelves:!{NODE_ENV:"production",VUE_APP_ITEM_NAME:"EShop",VUE_APP_MAIN_COLOR:"#f89900",VUE_APP_FOOTER_COLOR:"#f89900",BASE_URL:"./"}.VUE_APP_PUT_ON_SHELVES,itemName:"EShop",img1:s(38580),img2:s(31406),img3:s(75042),img4:s(5431),img5:s(41376),triangleDown:s(44499),TabShow:2,codeBtnTxt:this.$t("码"),formData:{username:"",password:"",re_password:"",verifcode:"",phone:""},count:60,interval:null,btnDisabled:!1,show:!1,pageDiaCode:!1,dialCode:localStorage.getItem("dialCode")||1}},created(){this.isLogin()&&this.$router.push("/")},methods:{getCode(){var t=this;if(""!==this.formData.username){var e=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(e.test(this.formData.username)){n.Z.loading({duration:0,message:this.$t("发送中"),forbidClick:!0});var s={target:this.formData.username};(0,m.Vv)(s).then((function(){n.Z.success(t.$t("发送成功")),t.timerFn()})).catch((function(t){n.Z.clear()}))}else(0,n.Z)(this.$t("邮箱格式有误"))}else(0,n.Z)(this.$t("请输入邮箱"))},timerFn(){var t=this;this.codeBtnTxt="".concat(this.$t("再次获取")," ").concat(this.count," s"),this.btnDisabled=!0,this.interval=setInterval((function(){1===t.count?(t.count=60,t.codeBtnTxt=t.$t("再次获取"),t.btnDisabled=!1,clearInterval(t.interval)):(t.count-=1,t.codeBtnTxt="".concat(t.$t("再次获取")," ").concat(t.count," s"))}),1e3)},handleJump(){this.$router.push({path:"customerServiceIndex?path=customerService"})},TabClick(t){this.TabShow=t,this.formData.username="",this.formData.password="",this.formData.re_password=""},post_form(){var t=this;if(1===this.TabShow){if(""===this.formData.username)return void(0,n.Z)(t.$t("请输入手机号"));var e=/^[0-9]+[0-9]*$/;if(!e.test(this.formData.username))return void(0,n.Z)(t.$t("手机号格式有误"))}if(2===this.TabShow){if(""===this.formData.username)return void(0,n.Z)(t.$t("请输入邮箱"));var s=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(!s.test(this.formData.username))return void(0,n.Z)(t.$t("邮箱格式有误"))}if(""!==this.formData.password){var a=/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;'"\\|,.<>?~`\-=/]{6,12}$/;a.test(this.formData.password)?this.formData.password===this.formData.re_password?this.show=!0:(0,n.Z)(this.$t("两次密码输入不一致")):(0,n.Z)(t.$t("请输入 6-12 位由数字或字母组成的密码"))}else(0,n.Z)(t.$t("请输入密码"))},onSuccess(){this.registerSubmit(),this.show=!1},onFail(){h.log("失败回调")},registerSubmit(){var t=this;return(0,r.Z)((0,o.Z)().mark((function e(){var s,a,i,c;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=["SM-wholesaleShop","FamilyShop"].includes(t.itemName)?m.hy:m.n$,c={password:null===(s=encodeURIComponent(t.formData.password))||void 0===s?void 0:s.trim(),re_password:null===(a=encodeURIComponent(t.formData.re_password))||void 0===a?void 0:a.trim(),type:t.TabShow},sessionStorage.getItem("ac_code")&&(c.agentCode=sessionStorage.getItem("ac_code"),sessionStorage.removeItem("ac_code")),["SM-wholesaleShop","FamilyShop"].includes(t.itemName)?(c.verifcode=t.formData.verifcode,c.phone=t.formData.phone,c.username=t.formData.username.trim()):c.username=1===t.TabShow?"".concat(t.dialCode," ").concat(t.formData.username.trim()):t.formData.username.trim(),n.Z.loading({duration:0,message:t.$t("提交中"),forbidClick:!0}),i(c).then(function(){var e=(0,r.Z)((0,o.Z)().mark((function e(s){var a;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.Z.clear(),t.$notify(t.$t("注册成功"),"success"),localStorage.setItem("token",s.token),a=t.dayjs.tz.guess(),localStorage.setItem("timeZone",a),e.next=7,t.$store.dispatch("getUserInfo");case 7:t.$router.push({path:"/"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){n.Z.clear()}));case 6:case"end":return e.stop()}}),e)})))()},getName(t){this.pageDiaCode?(this.dialCode=t[2],localStorage.setItem("dialCode",this.dialCode)):this.pageDiaCode=!0},openNational(){this.$refs.controlChild.open()}}},g=d,p=s(48703),f=(0,p.Z)(g,a,i,!1,null,"366d0de4",null),C=f.exports},62533:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA3CAYAAAClxaIBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgB7ZnRcdswDIbhXN/rbqARtEHVCeoN4g3iTiB3gmQDZwMnEygbOJ2A3sDe4C9xolsFIiWSIl275++Ol4sMEQAJghQ4o4wAKPSfuWlHbrPZbE+JmVEitMFsaKnbd90WuhUD4m+6vev2qp16o38Nj7Zuj7odEIfS7cHM2tmNnxvjU6F0qymCqHDSyir9Z0ttrLvYdxrR37VRerz3Lcfa+QOP1sBoNrqtxkJD/14aOeXoh0PznnIAd/g0ZnZi+lwMOBMVXkPKatjjuKIE6H7WDkdWlAKHAzt4ZBS0CYAz2NxDtoB9ViqagunY5sCc3EbXaENMpt2Deb50DYDDEQWPQRhywqtDo3yLMOqBvuQAPFIMZsTkSBYWuXtM2+xsfS4sshWFgv4srCwyNaZzsBmonz0LuYZCQH8WlEXmAelgR0rR/xz9Ga7IF7QLsMtS/F4gPQpijaCfete+DkgDlYeTqVgLPeWYLdIwnj4OI7kzb4RchXxw+MxHBozDmBd+IR2oBzpeCNkN8rIS+p4ccgqnMxb6i1giF5xCXl6EvsWQsGu6+kLuGM3BQegcTCJ3Rq4gN3vxf/z270+Qjju6UNBZtGMfSBfrRMiXXYwTe8rPMUQ42AkzQkFKIngPET45EWpUkJIIXkOE7zxesmWKn5SXF8uzt8E30B431EAqrizv7JCHjcNG3p9s3yy7rhBvKM/GOIWPTjWWTnOcnxQGvts7Np7s4xOue0+xGLmVCuCuUMSyoNSgf/A6GGfWJ4fQ//qKZU25gPsEeejITJkRHpgl5QbtKVcJ5UrIVAg/3TY4dzXcGLoyI186ZPjYvIW7+sHPeXYrSkSySxYbxtFT9sh2U3TjRkJG1wTaHZE3oa/kvuXheOdD4Q8d896HSZOZ+JhROET2NPWCEm1pJKTG6l1mhLuM74Jll779nxQ0iMPrUmRC/+PVcYSPkMRaORc6akxjM+bEBtNpRgYpBSuXgrEi2mQlSFd4s8840lf2lp2++cNrg7Q8cd+zjhJOnztKD6dITrtjl/Ax8DHmy6fOg4ryUFI+eHbLbsmmoOvkgxPnqLFm4WLLmCHcnLgU/jsn9nSdHLv7BO9+nKE+0/XwS292L78BGJueWkYnT3cAAAAASUVORK5CYII="},44499:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB3ZI9DoJAEEZn4QJaQucNNITE0tLWI3gC4xHsLD2Ona0F4B6BCryCBeBMgdkM2WWRxcKXwA6zP182PIB/R9AriqILDgf4AaItMPSGwwamRXptVVXVvmmaHCaCzsaMnVCbcRwv67qmm87AMRi2kFLmvtosiuIZBMFLCLEFh+B5xyzLrlT7fLIsy3sYhnMs1+AADDslSXL+fOsWOpJIpmm6UhuebuVYiVpJeF+YNo2RqJWE933Tpm8lUiUZFEgMlYhL0pkHSywl6kjC8cCSPol0knCsb0iYJNJJwun9hyo6iUySjAokuER9kjiDJMLnAQN5AwgPjbeTqmD3AAAAAElFTkSuQmCC"},21652:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7Vg7chs5EAWpT2223FKyVQo8zjYTqU+VMmNvIJ9A4xMslW1G6gSSTrBStKl8Ao8zVenj0Ql2nCielRS49PVrqzF6A2JmSNrlcuCuYhFoNBsPD2igm8b8lK+TlplSVldX7cPDw1Kr1bKPj49dfHeg7uhwDl0GXYp2Mjc39/7o6CgzU8hEAK21ncvLy01MvCFdM5kk+Oydnp4eTvKjsQEuLy/HALZjnlmaSsBsOj8//3pcRmeaDIS1hYWFfwHub3R/oYly6I7QjEjXh+4Tmn+oKsenZIPx33E0+ouLi62Li4vENEi7bnB9fT26urr6gOYGA8NniEle4vuA9NnZ2dne/f39G3LRgV0Mndjus2/0BysrK/+YaQEKuNvb23emzNCuAAOQ7TRNhcFNN4b2UL5Fb57Om9PH0An4Nwo0pWligHxnJgXogxPWxBkm2VIAptvtylm07jeY/D0t5IAAFjYKtCc7QNPZOiaDAAFuwODA2p+IvgO2mZmZsdRNZHLXgT1HqtXFFCI74IGMEYR9Mw5AiVb5geuDgT4mT307TLBE7dK4sCxnklSR/3sFuUvzDGTnGgGKIU286zNHdt3CSbudBMYLHdheCvkA09u0kI7uXDVAZS9ScJk4MBWC8ci1cf7ywHhG7W7IhzCNxXHUxz6LJYDMnkSlC4iQMIMAcB4w+Ui2lZf7yclJYijqb25uNoMA19bWZMJIuzlYeVvl1Dv0eWghYCZz7SoGnWAB29TuBwEC0CtyeFjHnqHnTq+gEbm7u8tC9iFRFp2fDgh4Pt/mGbmldlLncHZ2NiLbrMIsJ5tx3u/iauKgKgB6h/7cfKV4O9AIkK8qPhLMYET2mfn+8r9rMOOzZFAoccD/wpVT5ajEtrRhOzAN0mTjERSFALLx0Iwp6rjRfhKfLHwP5ubHkcw1Cga1hnCH89B/X1mUtdj9Dl/7FXZD8j80NaK3iCWfZYBa4HTVIJHks8qZXOqSiGo3l4fft8FVFuG6GLoJQzYsSLmsayMGCnL4mkkJ7EadMzzqjVcIKrnSa2NqxM8tccmfjwAEI5y1jORwnvAlHIUMsOAO2dQCBGNcUqScWxYA/VRdrpoqh2pbTNrr9V74NlhwRN1agF6SsstjfjZTerRDCaQTL536LWDygsYrA85P8bh0GAHopT6SQFbWChpUT07a7VeBcUvjQYBCALMH2eftHQGozraoa/EXx44JiBdUoXQqcg0c+o/+oNTbXmEWjPQRgMfHxymMtwhIHyCHZnQh52RjeUyPRqTd3K9pBNz19XWppJXCzAQkWNVhJXJQuSgf+EyCFZn0y+GXSOZAQVZsyTQxHngBxxmLkOBvbS1AERRLMTsXJ7hM/9PM20Uyb3NMbU7bizwPi+xjWz944IZ1j0Ljn0eIsh0/DZdJoROnv0r2rTopE14ime1CV/xbgKPQk2xdfUTsRBZdB24sgAqyr9HmX96ZN+m+eXoRWJf7v9OK8XWo3p4KoIi8rWBjwFs5qWj9Iv/v7DXUPGZigE4cUDRt1TMXkESOgjyn4wIz0wJkkeoLYOXALylY2covz6BuY4b220lB/ZRvKZ8B+KKyax+GEToAAAAASUVORK5CYII="}}]);