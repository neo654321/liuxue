(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[3007],{81717:function(t,n,r){var e=r(52788);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(e)},93661:function(t,n,r){var e=r(56393),a=r(65176),o=r(13312),i=r(12003),s=r(10601),c=e(i),u=e("".slice),l=Math.ceil,d=function(t){return function(n,r,e){var i,d,p=o(s(n)),f=a(r),g=p.length,v=void 0===e?" ":o(e);return f<=g||""==v?p:(i=f-g,d=c(v,l(i/v.length)),d.length>i&&(d=u(d,0,i)),t?p+d:d+p)}};t.exports={start:d(!1),end:d(!0)}},55154:function(t,n,r){"use strict";var e=r(51481),a=r(93661).start,o=r(81717);e({target:"String",proto:!0,forced:o},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},33007:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"logistics"},[n("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("查看物流"),"left-arrow":""},on:{"click-left":function(){return t.$router.back()}}}),n("van-steps",{attrs:{direction:"vertical",active:0}},t._l(t.list,(function(r,e){return n("van-step",{key:e},[n("p",{staticClass:"log",domProps:{innerHTML:t._s(r.log)}}),n("p",[t._v(t._s(t.$formatZoneDate(r.updateTime)))])])})),1)],1)},a=[],o=r(97644),i=(r(3726),r(47408),r(19705),r(3761),r(55154),r(97274),r(78857)),s=function(t){return(0,i.Z)({url:"api/orderLog!list.action",method:"get",params:t})},c=r(22204),u={data(){return{list:[]}},mounted(){var t=this,n=(0,c.bg)(),r=this.$route.query.id;s({token:n,orderId:r}).then((function(n){t.list=n.map((function(n){var e=n.log.split(r);return(0,o.Z)((0,o.Z)({},n),{},{log:"".concat(t.$t("订单"),'<span class="log_id">#').concat(r,"</span>").concat(t.$t("系统发货成功"===e[1]?"供应商发货成功":e[1]))})})).reverse()}))},methods:{formatTime(t){t=new Date(t);var n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"/").concat(e,"/").concat(n," ").concat(a,":").concat(o,":").concat(i)}}},l=u,d=r(48703),p=(0,d.Z)(l,e,a,!1,null,"308eb263",null),f=p.exports}}]);