(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[3113],{98877:function(t,e,n){var i=n(97781)["default"];n(26870),n(53987),n(55895),n(43316),n(3726),n(47408),n(73927),n(48285),n(39099),n(6717),n(46603),n(76106),n(93019),n(57782),n(80926),n(24714),n(10347),function(e,n){t.exports=n()}(0,(function(){return function(){"use strict";var t={358:function(t,e,n){var i=n(81),o=n.n(i),a=n(645),s=n.n(a)()(o());s.push([t.id,".vue-puzzle-vcode {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n}\n.vue-puzzle-vcode.show_ {\n  opacity: 1;\n  pointer-events: auto;\n}\n.vue-auth-box_ {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 20px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.vue-auth-box_ .auth-body_ {\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n  opacity: 1;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ {\n  opacity: 0;\n  pointer-events: none;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ .loading-gif_ span {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n          flex: none;\n  height: 5px;\n  line-height: 0;\n}\n@-webkit-keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n@keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span {\n  display: inline-block;\n  width: 5px;\n  height: 100%;\n  margin-left: 2px;\n  border-radius: 50%;\n  background-color: #888;\n  -webkit-animation: load 1.04s ease infinite;\n          animation: load 1.04s ease infinite;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(1) {\n  margin-left: 0;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(2) {\n  -webkit-animation-delay: 0.13s;\n          animation-delay: 0.13s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(3) {\n  -webkit-animation-delay: 0.26s;\n          animation-delay: 0.26s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(4) {\n  -webkit-animation-delay: 0.39s;\n          animation-delay: 0.39s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(5) {\n  -webkit-animation-delay: 0.52s;\n          animation-delay: 0.52s;\n}\n.vue-auth-box_ .auth-body_ .info-box_ {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  overflow: hidden;\n  font-size: 13px;\n  background-color: #83ce3f;\n  opacity: 0;\n  -webkit-transform: translateY(24px);\n          transform: translateY(24px);\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  color: #fff;\n  z-index: 10;\n}\n.vue-auth-box_ .auth-body_ .info-box_.show {\n  opacity: 0.95;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.vue-auth-box_ .auth-body_ .info-box_.fail {\n  background-color: #ce594b;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas2_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 100%;\n  z-index: 2;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity 600ms;\n  transition: opacity 600ms;\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_.show {\n  opacity: 1;\n}\n.vue-auth-box_ .auth-body_ .flash_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .flash_.show {\n  -webkit-transition: -webkit-transform 600ms;\n  transition: -webkit-transform 600ms;\n  transition: transform 600ms;\n  transition: transform 600ms, -webkit-transform 600ms;\n}\n.vue-auth-box_ .auth-body_ .reset_ {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 35px;\n  height: auto;\n  z-index: 12;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.vue-auth-box_ .auth-body_ .reset_:hover {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vue-auth-box_ .auth-control_ .range-box {\n  position: relative;\n  width: 100%;\n  background-color: #eef1f8;\n  margin-top: 20px;\n  border-radius: 3px;\n  box-shadow: 0 0 8px rgba(240, 240, 240, 0.6) inset;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: #b7bcd1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  width: 100%;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  background-color: rgba(106, 160, 255, 0.8);\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  right: 0;\n  width: 50px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 0 4px #ccc;\n  cursor: pointer;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div {\n  width: 0;\n  height: 40%;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  border: solid 1px #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div:nth-child(2) {\n  margin: 0 4px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:first-child,\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:first-child {\n  border: solid 4px transparent;\n  height: 0;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(2),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(2) {\n  border-width: 3px;\n  height: 0;\n  border-radius: 3px;\n  margin: 0 6px;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(3),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(3) {\n  border: solid 4px transparent;\n  height: 0;\n  border-left-color: #6aa0ff;\n}\n.vue-puzzle-overflow {\n  overflow: hidden !important;\n}\n",""]),e.Z=s},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(i)for(var r=0;r<this.length;r++){var h=this[r][0];null!=h&&(s[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);i&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var a={},s=[],r=0;r<t.length;r++){var h=t[r],l=i.base?h[0]+i.base:h[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var d=n(u),p={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var f=o(p,i);i.byIndex=r,e.splice(r,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=i(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var r=n(a[s]);e[r].references--}for(var h=i(t,o),l=0;l<a.length;l++){var c=n(a[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=h}}},569:function(t){var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,exports:{}};return t[i](a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return function(){n.r(o),n.d(o,{default:function(){return w}});var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["vue-puzzle-vcode",{show_:t.show}],on:{mousedown:t.onCloseMouseDown,mouseup:t.onCloseMouseUp,touchstart:t.onCloseMouseDown,touchend:t.onCloseMouseUp}},[n("div",{staticClass:"vue-auth-box_",on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("div",{staticClass:"auth-body_",style:"height: "+t.canvasHeight+"px"},[n("canvas",{ref:"canvas1",style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("canvas",{ref:"canvas3",class:["auth-canvas3_",{show:t.isSuccess}],style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("canvas",{ref:"canvas2",staticClass:"auth-canvas2_",style:"width:"+t.puzzleBaseSize+"px;height:"+t.canvasHeight+"px;transform:translateX("+(t.styleWidth-t.sliderBaseSize-(t.puzzleBaseSize-t.sliderBaseSize)*((t.styleWidth-t.sliderBaseSize)/(t.canvasWidth-t.sliderBaseSize)))+"px)",attrs:{width:t.puzzleBaseSize,height:t.canvasHeight}}),t._v(" "),n("div",{class:["loading-box_",{hide_:!t.loading}]},[t._m(0)]),t._v(" "),n("div",{class:["info-box_",{show:t.infoBoxShow},{fail:t.infoBoxFail}]},[t._v("\n        "+t._s(t.infoText)+"\n      ")]),t._v(" "),n("div",{class:["flash_",{show:t.isSuccess}],style:"transform: translateX("+(t.isSuccess?t.canvasWidth+.578*t.canvasHeight+"px":"-"+.578*t.canvasHeight+"px")+") skew(-30deg, 0);"}),t._v(" "),n("img",{staticClass:"reset_",attrs:{src:t.resetSvg},on:{click:t.reset}})]),t._v(" "),n("div",{staticClass:"auth-control_"},[n("div",{staticClass:"range-box",style:"height:"+t.sliderBaseSize+"px"},[n("div",{staticClass:"range-text"},[t._v(t._s(t.sliderText))]),t._v(" "),n("div",{ref:"range-slider",staticClass:"range-slider",style:"width:"+t.styleWidth+"px"},[n("div",{class:["range-btn",{isDown:t.mouseDown}],style:"width:"+t.sliderBaseSize+"px",on:{mousedown:function(e){return t.onRangeMouseDown(e)},touchstart:function(e){return t.onRangeMouseDown(e)}}},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])])])])])};t._withStripped=!0;var e={props:{canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},imgs:{type:Array},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},data:function(){return{mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:null,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1,resetSvg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="}},mounted(){document.body.appendChild(this.$el),document.addEventListener("mousemove",this.onRangeMouseMove,!1),document.addEventListener("mouseup",this.onRangeMouseUp,!1),document.addEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.addEventListener("touchend",this.onRangeMouseUp,!1),this.show&&(document.body.classList.add("vue-puzzle-overflow"),this.reset())},beforeDestroy(){clearTimeout(this.timer1),document.body.removeChild(this.$el),document.removeEventListener("mousemove",this.onRangeMouseMove,!1),document.removeEventListener("mouseup",this.onRangeMouseUp,!1),document.removeEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onRangeMouseUp,!1)},watch:{show(t){t?(document.body.classList.add("vue-puzzle-overflow"),this.reset()):(this.isSubmting=!1,this.isSuccess=!1,this.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}},computed:{styleWidth(){var t=this.startWidth+this.newX-this.startX;return t<this.sliderBaseSize?this.sliderBaseSize:t>this.canvasWidth?this.canvasWidth:t},puzzleBaseSize(){return Math.round(52.5*Math.max(Math.min(this.puzzleScale,2),.2)+6)},sliderBaseSize(){return Math.max(Math.min(Math.round(this.sliderSize),Math.round(.5*this.canvasWidth)),10)}},methods:{onClose(){this.mouseDown||this.isSubmting||(clearTimeout(this.timer1),this.$emit("close"))},onCloseMouseDown(){this.closeDown=!0},onCloseMouseUp(){this.closeDown&&this.onClose(),this.closeDown=!1},onRangeMouseDown(t){this.isCanSlide&&(this.mouseDown=!0,this.startWidth=this.$refs["range-slider"].clientWidth,this.newX=t.clientX||t.changedTouches[0].clientX,this.startX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseMove(t){this.mouseDown&&(t.preventDefault(),this.newX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseUp(){this.mouseDown&&(this.mouseDown=!1,this.submit())},init(t){var e=this;if(!this.loading||t){this.loading=!0,this.isCanSlide=!1;var n=this.$refs.canvas1,o=this.$refs.canvas2,a=this.$refs.canvas3,s=n.getContext("2d"),r=o.getContext("2d"),h=a.getContext("2d"),l=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,c=document.createElement("img");if(s.fillStyle="rgba(255,255,255,1)",h.fillStyle="rgba(255,255,255,1)",s.clearRect(0,0,this.canvasWidth,this.canvasHeight),r.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.pinX=this.getRandom(this.puzzleBaseSize,this.canvasWidth-this.puzzleBaseSize-20),this.pinY=this.getRandom(20,this.canvasHeight-this.puzzleBaseSize-20),c.crossOrigin="anonymous",c.onload=function(){var t=e.makeImgSize(c),n=i(t,4),o=n[0],a=n[1],u=n[2],d=n[3];s.save(),e.paintBrick(s),s.closePath(),l?(s.clip(),s.save(),s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.restore()):(s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.clip()),s.drawImage(c,o,a,u,d),h.fillRect(0,0,e.canvasWidth,e.canvasHeight),h.drawImage(c,o,a,u,d),s.globalCompositeOperation="source-atop",e.paintBrick(s),s.arc(e.pinX+Math.ceil(e.puzzleBaseSize/2),e.pinY+Math.ceil(e.puzzleBaseSize/2),1.2*e.puzzleBaseSize,0,2*Math.PI,!0),s.closePath(),s.shadowColor="rgba(255, 255, 255, .8)",s.shadowOffsetX=-1,s.shadowOffsetY=-1,s.shadowBlur=Math.min(Math.ceil(8*e.puzzleScale),12),s.fillStyle="#ffffaa",s.fill();var p=s.getImageData(e.pinX-3,e.pinY-20,e.pinX+e.puzzleBaseSize+5,e.pinY+e.puzzleBaseSize+5);r.putImageData(p,0,e.pinY-20),s.restore(),s.clearRect(0,0,e.canvasWidth,e.canvasHeight),s.save(),e.paintBrick(s),s.globalAlpha=.8,s.fillStyle="#ffffff",s.fill(),s.restore(),s.save(),s.globalCompositeOperation="source-atop",e.paintBrick(s),s.arc(e.pinX+Math.ceil(e.puzzleBaseSize/2),e.pinY+Math.ceil(e.puzzleBaseSize/2),1.2*e.puzzleBaseSize,0,2*Math.PI,!0),s.shadowColor="#000",s.shadowOffsetX=2,s.shadowOffsetY=2,s.shadowBlur=16,s.fill(),s.restore(),s.save(),s.globalCompositeOperation="destination-over",s.drawImage(c,o,a,u,d),s.restore(),e.loading=!1,e.isCanSlide=!0},c.onerror=function(){e.init(!0)},!t&&this.imgs&&this.imgs.length){var u=this.getRandom(0,this.imgs.length-1);u===this.imgIndex&&(u===this.imgs.length-1?u=0:u++),this.imgIndex=u,c.src=this.imgs[u]}else c.src=this.makeImgWithCanvas()}},getRandom:function(t,e){return Math.ceil(Math.random()*(e-t)+t)},makeImgSize(t){var e=t.width/t.height,n=0,i=0,o=0,a=0;return e>this.canvasWidth/this.canvasHeight?(a=this.canvasHeight,o=e*a,i=0,n=(this.canvasWidth-o)/2):(o=this.canvasWidth,a=o/e,n=0,i=(this.canvasHeight-a)/2),[n,i,o,a]},paintBrick(t){var e=Math.ceil(15*this.puzzleScale);t.beginPath(),t.moveTo(this.pinX,this.pinY),t.lineTo(this.pinX+e,this.pinY),t.arcTo(this.pinX+e,this.pinY-e/2,this.pinX+e+e/2,this.pinY-e/2,e/2),t.arcTo(this.pinX+e+e,this.pinY-e/2,this.pinX+e+e,this.pinY,e/2),t.lineTo(this.pinX+e+e+e,this.pinY),t.lineTo(this.pinX+e+e+e,this.pinY+e),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e,this.pinX+e+e+e+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e+e,this.pinX+e+e+e,this.pinY+e+e,e/2),t.lineTo(this.pinX+e+e+e,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e),t.arcTo(this.pinX+e/2,this.pinY+e+e,this.pinX+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e/2,this.pinY+e,this.pinX,this.pinY+e,e/2),t.lineTo(this.pinX,this.pinY)},makeImgWithCanvas(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.canvasWidth,t.height=this.canvasHeight,e.fillStyle="rgb(".concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),")"),e.fillRect(0,0,this.canvasWidth,this.canvasHeight);for(var n=0;n<12;n++)if(e.fillStyle="rgb(".concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),")"),e.strokeStyle="rgb(".concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),",").concat(this.getRandom(100,255),")"),this.getRandom(0,2)>1)e.save(),e.rotate(this.getRandom(-90,90)*Math.PI/180),e.fillRect(this.getRandom(-20,t.width-20),this.getRandom(-20,t.height-20),this.getRandom(10,t.width/2+10),this.getRandom(10,t.height/2+10)),e.restore();else{e.beginPath();var i=this.getRandom(-Math.PI,Math.PI);e.arc(this.getRandom(0,t.width),this.getRandom(0,t.height),this.getRandom(10,t.height/2+10),i,i+1.5*Math.PI),e.closePath(),e.fill()}return t.toDataURL("image/png")},submit(){var t=this;this.isSubmting=!0;var e=Math.abs(this.pinX-(this.styleWidth-this.sliderBaseSize)+(this.puzzleBaseSize-this.sliderBaseSize)*((this.styleWidth-this.sliderBaseSize)/(this.canvasWidth-this.sliderBaseSize))-3);e<this.range?(this.infoText=this.successText,this.infoBoxFail=!1,this.infoBoxShow=!0,this.isCanSlide=!1,this.isSuccess=!0,clearTimeout(this.timer1),this.timer1=setTimeout((function(){t.isSubmting=!1,t.$emit("success",e)}),800)):(this.infoText=this.failText,this.infoBoxFail=!0,this.infoBoxShow=!0,this.isCanSlide=!1,this.$emit("fail",e),clearTimeout(this.timer1),this.timer1=setTimeout((function(){t.isSubmting=!1,t.reset()}),800))},resetState(){this.infoBoxFail=!1,this.infoBoxShow=!1,this.isCanSlide=!1,this.isSuccess=!1,this.startWidth=this.sliderBaseSize,this.startX=0,this.newX=0},reset(){this.isSubmting||(this.resetState(),this.init())}}},a=n(379),s=n.n(a),r=n(795),h=n.n(r),l=n(569),c=n.n(l),u=n(565),d=n.n(u),p=n(216),f=n.n(p),g=n(589),v=n.n(g),b=n(358),m={};m.styleTagTransform=v(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=h(),m.insertStyleElement=f(),s()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals;var x=function(t,e,n,i,o,a,s,r){var h,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-gif_"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}],l._compiled=!0),h)if(l.functional){l._injectStyles=h;var c=l.render;l.render=function(t,e){return h.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:l}}(e,t);x.options.__file="src/app.vue";var w=x.exports}(),o}()}))},38580:function(t,e,n){"use strict";t.exports=n.p+"img/1.8e91c55a.png"},31406:function(t,e,n){"use strict";t.exports=n.p+"img/2.e4a7f760.png"},75042:function(t,e,n){"use strict";t.exports=n.p+"img/3.ffce2410.png"},5431:function(t,e,n){"use strict";t.exports=n.p+"img/4.05b3045a.png"},41376:function(t,e,n){"use strict";t.exports=n.p+"img/5.1f640ee8.png"},91331:function(t){function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=e,t.exports.__esModule=!0,t.exports["default"]=t.exports},51871:function(t){function e(t){if(Array.isArray(t))return t}t.exports=e,t.exports.__esModule=!0,t.exports["default"]=t.exports},388:function(t,e,n){function i(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,a,s,r=[],h=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;h=!1}else for(;!(h=(i=a.call(n)).done)&&(r.push(i.value),r.length!==e);h=!0);}catch(c){l=!0,o=c}finally{try{if(!h&&null!=n["return"]&&(s=n["return"](),Object(s)!==s))return}finally{if(l)throw o}}return r}}n(26870),n(53987),n(73927),n(93019),n(56110),t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},22967:function(t,e,n){function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n(43316),t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},97781:function(t,e,n){var i=n(51871),o=n(388),a=n(56641),s=n(22967);function r(t,e){return i(t)||o(t,e)||a(t,e)||s()}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},56641:function(t,e,n){n(2840),n(93019),n(3761),n(81049),n(57782);var i=n(91331);function o(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports}}]);