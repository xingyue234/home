(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05e1005d"],{"03e7":function(e,t,i){"use strict";i("1902")},1166:function(e,t,i){},1902:function(e,t,i){},"35a8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{minHeight:e.screenHeight+"px",background:"#F0F2F5"}},[i("div",{staticClass:"nav-header flex-box"},[i("div",{staticClass:"back-btn",on:{click:e.goBack}},[i("i",{staticClass:"iconfont icon-left-circle-fill"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],staticStyle:{width:"100%","text-align":"center"}},[i("span",{staticStyle:{"text-align":"center",width:"100%","font-size":".13rem",color:"#666",padding:"0 .25rem"},on:{click:function(t){return e.tabclick()}}},[e._v("云设计收藏")]),i("span",{staticStyle:{"text-align":"center",width:"100%","font-size":".15rem","font-weight":"bold",color:"#c8c8c8"}},[e._v("/")]),i("span",{staticStyle:{"text-align":"center",width:"100%","font-size":".13rem",color:"#1890ff","font-weight":"700",padding:"0 .25rem"}},[e._v("我的设计收藏")])]),i("div",{staticStyle:{position:"absolute",right:"0.5rem"}},[e.isEdit?[i("a-button",{staticStyle:{"margin-right":"10px","font-size":"0.11rem",padding:".1rem","line-height":".12rem","font-weight":"bold"},on:{click:e.handleSelectAll}},[e._v("全选")]),i("a-button",{staticStyle:{"margin-right":"10px","font-size":"0.11rem",padding:".1rem","line-height":".12rem","font-weight":"bold"},on:{click:e.handleCancelAll}},[e._v("全不选")]),i("a-button",{staticStyle:{"margin-right":"10px","font-size":"0.11rem",padding:".1rem","line-height":".12rem","font-weight":"bold"},attrs:{type:"danger"},on:{click:e.handleDel}},[e._v("删除")]),i("a-button",{staticStyle:{"font-size":"0.11rem",padding:".1rem","line-height":".12rem","font-weight":"bold"},on:{click:e.cancleAll}},[e._v("取消")])]:i("a-button",{directives:[{name:"show",rawName:"v-show",value:0!==e.main_page_list.length,expression:"main_page_list.length !== 0"}],staticStyle:{"font-size":"0.11rem",padding:".1rem","line-height":".12rem","font-weight":"bold"},attrs:{type:"primary"},on:{click:e.goManage}},[e._v(" 管理")])],2)]),i("a-spin",{attrs:{spinning:e.loading}},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.handle_search,expression:"handle_search"}],staticClass:"main-page-list",staticStyle:{margin:"0 auto"},attrs:{"infinite-scroll-disabled":e.loading,"infinite-scroll-distance":20}},[0==e.main_page_list.length?i("a-empty",{staticStyle:{margin:"0 auto"},attrs:{"image-style":{height:"100px",marginTop:e.screenHeight/4+"px"}}},[i("span",{staticStyle:{"font-size":".12rem",color:"rgb(162, 162, 162)"},attrs:{slot:"description"},slot:"description"},[e._v("您还没有收藏过方案哦")])]):e._e(),i("ul",{staticClass:"page-list"},[e._l(e.main_page_list,(function(t,n){return i("li",{key:n,style:{width:e.screenWidth>1e3?"2.6rem":"",height:e.screenWidth>1e3?"2rem":""}},[i("list-item",{attrs:{disabled:e.disabled,info:t},on:{click:e.listClick}})],1)})),e._l(e.moreNum,(function(t){return i("li",{style:{width:e.screenWidth>1e3?"2.6rem":"",height:e.screenWidth>1e3?"2rem":"",boxShadow:"none",background:"none!important"}})}))],2)],1)]),i("preview-image",{attrs:{img:e.previewImg,isLiked:e.isLiked,isHideLike:!0,isHideOffer:!1},on:{userOffer:e.userOffer},model:{value:e.prewVisible,callback:function(t){e.prewVisible=t},expression:"prewVisible"}})],1)},a=[],s=i("5530"),r=i("1da1"),o=(i("d81d"),i("4de4"),i("a15b"),i("99af"),i("96cf"),i("c5cf")),c=i("a09c"),l=i("487a"),d=i.n(l),u={data:function(){return{screenHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,screenWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,loading:!1,isLiked:!0,main_page_list:[],prewVisible:!1,isEdit:!1,previewImg:"",disabled:!0,finished:!1,limit:15,page:1,moreNum:0}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handle_search(1);case 1:case"end":return t.stop()}}),t)})))()},directives:{infiniteScroll:d.a},watch:{finished:function(e){if(e){var t=this.main_page_list.length,i=Math.floor(this.screenWidth/100/(.2+(this.screenWidth>1e3?2.6:2))),n=Math.ceil(t/i),a=t%i;this.moreNum=i-a,n>1?this.moreNum=0==a?0:this.moreNum:(n=1)&&(this.moreNum=i-t)}}},computed:{},components:{listItem:o["a"],previewImage:c["a"]},methods:{log:function(){console.log(this.main_page_list.length),console.log(this.moreNum)},tabclick:function(){this.$router.push("/shoucang_yun")},userOffer:function(){this.$router.push({path:"/inventory",query:{id:this.cid}}),console.log(this.cid)},listClick:function(e){this.cid=e.id,this.isEdit?e.selected=!e.selected:(this.previewImg=e.image,this.prewVisible=!0)},goBack:function(){this.$router.push("/home/userinfo")},getRoomList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$service.roomFinishedListMyCollection({page:1,per_page:100});case 2:i=t.sent,e.main_page_list=i.data.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{selected:!1,type:"collect"})}));case 4:case"end":return t.stop()}}),t)})))()},goManage:function(){this.isEdit=!0},handleSelectAll:function(){this.main_page_list=this.main_page_list.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{selected:!0})}))},handleCancelAll:function(){this.main_page_list=this.main_page_list.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{selected:!1})}))},handleDel:function(){var e=this,t=this.main_page_list.filter((function(e){return e.selected}));t.length>0?this.$confirm({title:"确认",content:"是否删除所选方案图",okText:"确认",cancelText:"取消",onOk:function(){var t=[];e.main_page_list.map((function(e){e.selected&&t.push(e.id)})),e.$service.roomFinishedDelete({id:t.join(",")}).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success("删除成功"),e.handle_search(1),e.isEdit=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},onCancel:function(){console.log("取消")}}):this.$message.warning("请选择方案图")},handle_search:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e&&(t.page=1,t.finished=!1),!t.loading){i.next=3;break}return i.abrupt("return");case 3:if(!t.finished){i.next=5;break}return i.abrupt("return");case 5:return t.loading=!0,i.next=8,t.$service.roomFinishedListMyCollection({page:t.page,per_page:t.limit});case 8:n=i.sent,t.loading=!1,n.data=n.data.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{selected:!1})})),t.main_page_list=e?n.data:t.main_page_list.concat(n.data),t.finished=n.data.length!==t.limit,t.page=t.page+1;case 14:case"end":return i.stop()}}),i)})))()},cancleAll:function(){this.main_page_list=this.main_page_list.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{selected:!1})})),this.isEdit=!1}}},h=u,m=(i("cd11"),i("b49e"),i("2877")),f=Object(m["a"])(h,n,a,!1,null,"bcad1c8a",null);t["default"]=f.exports},"447a":function(e,t,i){"use strict";i("91a0")},"487a":function(e,t,i){(function(t,i){e.exports=i()})(0,(function(){"use strict";var e="@@InfiniteScroll",t=function(e,t){var i,n,a,s,r,o=function(){e.apply(s,r),n=i};return function(){if(s=this,r=arguments,i=Date.now(),a&&(clearTimeout(a),a=null),n){var e=t-(i-n);e<0?o():a=setTimeout((function(){o()}),e)}else o()}},i=function(e){return e===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):e.scrollTop},n=document.defaultView.getComputedStyle,a=function(e){var t=e;while(t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType){var i=n(t).overflowY;if("scroll"===i||"auto"===i)return t;t=t.parentNode}return window},s=function(e){return e===window?document.documentElement.clientHeight:e.clientHeight},r=function(e){return e===window?i(window):e.getBoundingClientRect().top+i(window)},o=function(e){var t=e.parentNode;while(t){if("HTML"===t.tagName)return!0;if(11===t.nodeType)return!1;t=t.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var e=this,i=e.el,n=i.getAttribute("infinite-scroll-throttle-delay"),s=200;n&&(s=Number(e.vm[n]||n),(isNaN(s)||s<0)&&(s=200)),e.throttleDelay=s,e.scrollEventTarget=a(i),e.scrollListener=t(l.bind(e),e.throttleDelay),e.scrollEventTarget.addEventListener("scroll",e.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){e.scrollEventTarget.removeEventListener("scroll",e.scrollListener)}));var r=i.getAttribute("infinite-scroll-disabled"),o=!1;r&&(this.vm.$watch(r,(function(t){e.disabled=t,!t&&e.immediateCheck&&l.call(e)})),o=Boolean(e.vm[r])),e.disabled=o;var c=i.getAttribute("infinite-scroll-distance"),d=0;c&&(d=Number(e.vm[c]||c),isNaN(d)&&(d=0)),e.distance=d;var u=i.getAttribute("infinite-scroll-immediate-check"),h=!0;u&&(h=Boolean(e.vm[u])),e.immediateCheck=h,h&&l.call(e);var m=i.getAttribute("infinite-scroll-listen-for-event");m&&e.vm.$on(m,(function(){l.call(e)}))}},l=function(e){var t=this.scrollEventTarget,n=this.el,a=this.distance;if(!0===e||!this.disabled){var o=i(t),c=o+s(t),l=!1;if(t===n)l=t.scrollHeight-c<=a;else{var d=r(n)-r(t)+n.offsetHeight+o;l=c+a>=d}l&&this.expression&&this.expression()}},d={bind:function(t,i,n){t[e]={el:t,vm:n.context,expression:i.value};var a=arguments;t[e].vm.$on("hook:mounted",(function(){t[e].vm.$nextTick((function(){o(t)&&c.call(t[e],a),t[e].bindTryCount=0;var i=function i(){t[e].bindTryCount>10||(t[e].bindTryCount++,o(t)?c.call(t[e],a):setTimeout(i,50))};i()}))}))},unbind:function(t){t&&t[e]&&t[e].scrollEventTarget&&t[e].scrollEventTarget.removeEventListener("scroll",t[e].scrollListener)}},u=function(e){e.directive("InfiniteScroll",d)};return window.Vue&&(window.infiniteScroll=d,Vue.use(u)),d.install=u,d}))},"5bf7":function(e,t,i){},"7f4d":function(e,t,i){"use strict";i("9b56")},"91a0":function(e,t,i){},"9b56":function(e,t,i){},a09c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{staticClass:"preview-modal",attrs:{width:e.screenWidth+"px",height:"100vh",zIndex:1e7,mask:!1,visible:e.prewVisible,fullScreen:!0,closeIcon:e.type="关闭预览",footer:null,title:"方案预览"},on:{cancel:e.cancel}},[i("div",{staticClass:"flex-box",staticStyle:{"justify-content":"center"},style:{height:e.screenHeight/100-.5+"rem",width:"100%"}},[i("img",{directives:[{name:"touchscale",rawName:"v-touchscale"}],staticClass:"preview-img",style:{height:"95%","max-width":"100%"},attrs:{src:e.img},on:{click:e.previewImage}})]),i("div",{staticClass:"design-layout-top-op"},[e.is_inAPP?i("a-icon",{attrs:{type:"mobile",theme:"filled"},on:{click:e.downLoad}}):e._e(),i("a-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isHideLike,expression:"!isHideLike"}],style:{marginLeft:".2rem",color:e.isLiked?"#2593fc":""},attrs:{type:this.canEdit?"star":"heart",theme:"filled"},on:{click:e.Like}}),e.is_inAPP?i("a-icon",{staticStyle:{"margin-left":".2rem"},attrs:{type:"wechat",theme:"filled"},on:{click:e.Share}}):e._e(),i("a-button",{staticStyle:{"font-size":".13rem",width:".6rem"},attrs:{size:"small",type:"primary"},on:{click:e.userOffer}},[e._v("去报价")])],1)])},a=[],s={props:{value:Boolean,img:String,isLiked:Boolean,isHideLike:Boolean},data:function(){return{canEdit:"undefined"!==this.$route.query.canEdit,prewVisible:!1,screenHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,screenWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,is_inAPP:/LT-APP/.test(navigator.userAgent)}},watch:{value:function(e){this.prewVisible=e},prewVisible:function(e){this.$emit("input",e)}},created:function(){},methods:{cancel:function(){this.prewVisible=!1},downLoad:function(){var e=this;jsBridge.ready((function(){jsBridge.saveImageToAlbum(e.img,(function(t){if(t){var i=navigator.userAgent,n=i.indexOf("Android")>-1||i.indexOf("Linux")>-1;n&&(e.$emit("downLoadSuccess"),e.$message.success("保存成功，请到手机相册查看"))}else alert("保存失败：下载失败或没有相册使用权限")}))}))},Like:function(){this.isLiked||this.$emit("Like")},userOffer:function(){console.log("userOffer"),this.$emit("userOffer")},Share:function(e){var t=this;try{jsBridge.ready((function(){jsBridge.shareImage({imgUrl:t.img})}))}catch(e){this.$message.info("亲，正式版用户专享区，期待您的加入！~")}},previewImage:function(){var e=this;try{jsBridge.ready((function(){jsBridge.showImages({screenOrientation:0,save:!0,share:!0,share_text:"德巴克app",items:[{url:e.img,text:""}]})}))}catch(t){this.$message.info("亲，正式版用户专享区，期待您的加入！~")}}}},r=s,o=(i("447a"),i("a98b"),i("2877")),c=Object(o["a"])(r,n,a,!1,null,"3faa6d4d",null);t["a"]=c.exports},a15b:function(e,t,i){"use strict";var n=i("23e7"),a=i("44ad"),s=i("fc6a"),r=i("a640"),o=[].join,c=a!=Object,l=r("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(e){return o.call(s(this),void 0===e?",":e)}})},a98b:function(e,t,i){"use strict";i("1166")},b49e:function(e,t,i){"use strict";i("ce4a")},c5cf:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sub-page-item",class:{active:e.info.selected},on:{click:e.toDesign}},[i("div",{staticClass:"sub-page-info"},[i("span",[e._v(e._s(e.info.name))])]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.info.image+"?x-oss-process=image/resize,m_mfit,h_500",expression:"info.image+'?x-oss-process=image/resize,m_mfit,h_500'"}],staticClass:"sub-page-image",style:e.imgStyle,on:{load:e.imageLoad}})])},a=[],s=i("5530"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sub-page-controller"},[i("button",{on:{click:e.handle_design}},[i("a-icon",{attrs:{theme:"filled",type:"edit"}}),i("label",[e._v("装修")])],1)])},o=[],c={props:{info:{type:Object}},methods:{handle_design:function(){this.$router.push({path:"/design?id=".concat(this.info.id)})},preview_design:function(){this.$router.push({path:"/design?id=".concat(this.info.id)})}}},l=c,d=(i("7f4d"),i("2877")),u=Object(d["a"])(l,r,o,!1,null,"930a0cbe",null),h=u.exports,m={props:{width:String,height:String,info:{type:Object},disabled:{type:Boolean,default:!1}},components:{controller:h},computed:{imgStyle:function(){return this.naturalHeight/this.naturalWidth>2/2.6?{width:"100%"}:{height:"100%"}}},data:function(){return{naturalHeight:"",naturalWidth:""}},methods:{imageLoad:function(e){e.target&&(this.naturalHeight=e.target.naturalHeight,this.naturalWidth=e.target.naturalWidth)},toDesign:function(){if(this.$emit("click",this.info),!this.disabled){var e=Object(s["a"])(Object(s["a"])({},this.info),{},{naturalHeight:this.naturalHeight,naturalWidth:this.naturalWidth});this.$store.commit("SET_ROOM",e),this.$router.push("/design?id="+this.info.id+"&canEdit="+this.info.canEdit)}}}},f=m,g=(i("03e7"),Object(d["a"])(f,n,a,!1,null,"62f434fe",null));t["a"]=g.exports},cd11:function(e,t,i){"use strict";i("5bf7")},ce4a:function(e,t,i){}}]);