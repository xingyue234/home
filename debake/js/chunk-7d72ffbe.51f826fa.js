(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d72ffbe"],{1574:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{minHeight:e.screenHeight+"px",background:"#F0F2F5"}},[i("div",{staticClass:"nav-header flex-box"},[i("div",{staticClass:"back-btn",on:{click:e.goBack}},[i("i",{staticClass:"iconfont icon-left-circle-fill"})]),i("h4",[e._v("提交找样")])]),i("div",{staticClass:"scontent"},[i("h3",[e._v("上传图片")]),i("div",{staticClass:"clearfix"},[i("a-upload",{attrs:{action:"https://app.debarco.cn/file/upload/image","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileList.length<8?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"})],1):e._e()]),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1),i("h3",[e._v("请选择产品类别")]),i("div",{staticClass:"clearfix",staticStyle:{margin:"10px 0px 24px 0"}},[i("a-select",{staticStyle:{width:"220px",float:"left"},attrs:{"default-value":"墙纸墙布"},model:{value:e.catvalue,callback:function(t){e.catvalue=t},expression:"catvalue"}},[i("a-icon",{attrs:{slot:"suffixIcon",type:"smile"},slot:"suffixIcon"}),i("a-select-option",{attrs:{value:"墙纸墙布"}},[e._v(" 墙纸墙布 ")]),i("a-select-option",{attrs:{value:"窗帘"}},[e._v(" 窗帘 ")]),i("a-select-option",{attrs:{value:"其他"}},[e._v(" 其他 ")])],1)],1),i("h3",[e._v("说明（限200字)")]),i("div",{staticStyle:{margin:"12px 0"}}),i("a-textarea",{attrs:{placeholder:"请输入找样说明","auto-size":{minRows:3,maxRows:5}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e.fileList.length>0?i("a-button",{staticStyle:{"margin-right":"0.1rem"},on:{click:function(t){return e.remove()}}},[e._v("移除图片")]):e._e(),i("a-button",{staticStyle:{"margin-bottom":"0.1rem"},attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.btnclick()}}},[e._v(" 提交找样 ")])],1)},s=[],n=i("1da1"),c=(i("96cf"),i("d3b7"),i("c152"));function o(e){return new Promise((function(t,i){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return i(e)}}))}var l={components:{layoutHeader:c["a"]},data:function(){return{screenHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,previewVisible:!1,previewImage:"",info:{},id:0,fileList:[],value:"",catvalue:"墙纸墙布",loading:!1}},created:function(){},methods:{remove:function(){var e=this.fileList;this.$delete(e,0)},btnclick:function(){var e=this;if(this.fileList.length<1)this.$message.info("请上传图片");else if(this.value.length<10)this.$message.info("请至少输入10个字的找样说明！～");else{this.loading=!0;for(var t=[],i=0;i<this.fileList.length;i++)t.push(this.fileList[i]["response"]["data"]["url"]);this.$service.findPost({remarks:this.value,category_name:this.catvalue,image_list:t}).then((function(t){if(t.success=!0){var i=e;e.$message.success("上传成功",1,(function(){i.$router.push("./findlist")}))}else e.$message.info("上传失败")}))}},goBack:function(){this.$router.back()},handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.url||e.preview){i.next=4;break}return i.next=3,o(e.originFileObj);case 3:e.preview=i.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleChange:function(e){var t=e.fileList;this.fileList=t}}},r=l,u=(i("d5d8"),i("2877")),h=Object(u["a"])(r,a,s,!1,null,"dd023ca8",null);t["default"]=h.exports},"27c7":function(e,t,i){"use strict";i("d7a5")},"3bf0":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"guide-header",style:{"background-color":e.backgroundColor}},[i("nav-right",{ref:"navRight"}),e.showBack?i("div",{staticClass:"camera",on:{click:e.goBack}},[i("svg",{staticClass:"icon",attrs:{t:"1633662213895",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1902",width:"200",height:"200"}},[i("path",{attrs:{d:"M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m-324.693333 373.013334l174.464-174.485334a21.141333 21.141333 0 0 0-0.192-29.973333 21.141333 21.141333 0 0 0-29.973334-0.192l-208.256 208.256a20.821333 20.821333 0 0 0-6.122666 14.976c0.042667 5.418667 2.133333 10.837333 6.314666 14.997333l211.178667 211.2a21.141333 21.141333 0 0 0 29.973333 0.213334 21.141333 21.141333 0 0 0-0.213333-29.973334l-172.629333-172.629333 374.997333 2.602667a20.693333 20.693333 0 0 0 21.034667-21.034667 21.482667 21.482667 0 0 0-21.333334-21.333333l-379.242666-2.624z",fill:"#666666","p-id":"1903"}})])]):e._e(),e.showcamera?i("div",{staticClass:"camera"},[i("file-upload"),i("svg",{staticClass:"icon",attrs:{t:"1632898002695",viewBox:"0 0 1070 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2708",width:"200",height:"200"}},[i("path",{attrs:{d:"M845.803922 898.509804H224.627451c-87.843137 0-158.117647-71.529412-158.117647-158.117647V358.901961c0-87.843137 71.529412-158.117647 158.117647-158.117647h66.509804c10.039216 0 18.823529 8.784314 18.823529 18.823529s-7.529412 18.823529-18.823529 18.82353h-66.509804c-66.509804 0-120.470588 53.960784-120.470588 120.470588V740.392157c0 66.509804 53.960784 120.470588 120.470588 120.470588h621.176471c66.509804 0 120.470588-53.960784 120.470588-120.470588V358.901961c0-66.509804-53.960784-120.470588-120.470588-120.470588H803.137255c-10.039216 0-18.823529-8.784314-18.82353-18.82353S791.843137 200.784314 803.137255 200.784314h43.921569c87.843137 0 158.117647 71.529412 158.117647 158.117647V740.392157c0 87.843137-71.529412 158.117647-159.372549 158.117647z","p-id":"2709",fill:"#666666"}}),i("path",{attrs:{d:"M803.137255 234.666667c-10.039216 0-18.823529-8.784314-18.82353-18.82353 0-114.196078-99.137255-117.960784-110.431372-119.215686h-301.176471c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h301.176471c51.45098 0 148.078431 32.627451 148.078431 156.862745 0 10.039216-8.784314 18.823529-18.823529 18.82353zM535.843137 751.686275c-97.882353 0-181.960784-70.27451-199.529412-165.647059-1.254902-10.039216 5.019608-20.078431 15.058824-21.333334 10.039216-1.254902 20.078431 5.019608 21.333333 15.058824 13.803922 77.803922 82.823529 134.27451 161.882353 134.27451 90.352941 0 164.392157-74.039216 164.392157-164.392157s-74.039216-164.392157-164.392157-164.392157c-61.490196 0-117.960784 33.882353-145.568627 89.098039-5.019608 8.784314-16.313725 12.54902-25.098039 7.529412s-12.54902-16.313725-7.529412-25.098039c35.137255-66.509804 104.156863-109.176471 179.45098-109.176471 111.686275 0 202.039216 90.352941 202.039216 202.039216s-90.352941 202.039216-202.039216 202.039216z",fill:"#666666","p-id":"2710"}}),i("path",{attrs:{d:"M845.803922 353.882353m-43.921569 0a43.921569 43.921569 0 1 0 87.843137 0 43.921569 43.921569 0 1 0-87.843137 0Z",fill:"#666666","p-id":"2711"}})])],1):e._e(),i("div",{staticClass:"more",on:{click:e.showNav}},[i("svg",{staticClass:"icon",attrs:{t:"1632898177147",viewBox:"0 0 1028 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1234",width:"200",height:"200"}},[i("path",{attrs:{d:"M514.554 62c-248.709 0-450.284 200.379-450.284 447.598s201.586 447.594 450.283 447.594c248.674 0 450.261-200.375 450.261-447.594 0.001-247.211-201.587-447.598-450.261-447.598zM514.479 899.037c-214.814 0-388.955-174.142-388.955-388.955 0-214.814 174.142-388.955 388.955-388.955 214.813 0 388.955 174.142 388.955 388.955 0 214.814-174.142 388.955-388.955 388.955zM280.224 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM470.086 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM641.49 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z","p-id":"1235",fill:"#666666"}})])])],1)},s=[],n=(i("ac1f"),i("5319"),i("cd34")),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{placement:"right",closable:!1,visible:e.visible,width:"1.6rem","after-visible-change":e.afterVisibleChange},on:{close:e.onClose}},e._l(e.list,(function(t){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],key:t.name,staticClass:"layout-left-item flex-box",class:{selected:e.$route.path.includes(t.path)},on:{click:function(i){return e.navClick(t)}}},[["个人中心"===t.name?i("a-icon",{attrs:{type:"crown",theme:e.$route.path.includes(t.path)?"twoTone":"outlined"}}):"我的设计"===t.name?i("a-icon",{attrs:{type:"copy",theme:e.$route.path.includes(t.path)?"twoTone":"outlined"}}):"退出登录"===t.name?i("a-icon",{style:{color:"#d2d2d2"},attrs:{type:"arrow-right"}}):i("i",{class:"iconfont "+t.icon}),"退出登录"===t.name?i("span",{class:"span2"},[e._v(e._s(t.name))]):i("span",[e._v(e._s(t.name))])]],2)})),0)},o=[],l=(i("b0c0"),{data:function(){return{visible:!1,list:[{name:"云设计",path:"/home/design-list",icon:"icon-dicengjiagou",isIos:!0,show:!0},{name:"我的设计",path:"/my-design",icon:"icon-sheji",isIos:!0,show:!0},{name:"色彩测试",path:"/colortest",isIos:!1,icon:"icon-tupian",show:!0},{name:"在线课堂",path:"/home/course-list",isIos:!1,icon:"icon-shujujianguan",show:!0},{name:"资料下载",path:"/download-list",icon:"icon-cunchu",isIos:!1,show:!0},{name:"经营管理",path:"/home/management",icon:"icon-renminbi",isIos:!1,show:!0},{name:"在线订货",path:"/online-inventory",icon:"icon-wuliu",isIos:!1,show:!0},{name:"个人中心",path:"/home/userinfo",icon:"icon-wode",isIos:!1,show:!0},{name:"退出登录",path:"/login",icon:"",isIos:!1,show:!0}]}},computed:{},watch:{},methods:{navClick:function(e){var t=this;this.visible=!1,"no"!==e.path?(this.visible=!1,"退出登录"!==e.name?"/"!==e.path&&this.$route.path!==e.path&&this.$router.push(e.path):this.$service.logout({}).then((function(e){if(e.success=!0){var i=t;t.$message.success("退出成功",1,(function(){i.$router.replace("/login")}))}}))):this.$message.info("亲，功能正在开发，敬请期待！~")},afterVisibleChange:function(e){console.log("visible",e)},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),r=l,u=(i("e891"),i("2877")),h=Object(u["a"])(r,c,o,!1,null,"25e72ceb",null),d=h.exports,f={props:{backgroundColor:{type:String,default:"rgba(255, 255, 255, 0.8)"},showBack:{type:Boolean,default:!0},showcamera:{type:Boolean,default:!0},backUrl:String},data:function(){return{}},components:{navRight:d,fileUpload:n["a"]},methods:{goBack:function(){this.backUrl?his.$router.replace(this.backUrl):"/home/design-list"!==this.$route.path?this.$router.replace("/home/design-list"):this.$router.replace("/home")},showNav:function(){this.$refs.navRight.visible=!0}}},p=f,v=(i("27c7"),Object(u["a"])(p,a,s,!1,null,"e4a2072c",null));t["a"]=v.exports},8866:function(e,t,i){},c152:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"geshop-head-5"},[i("nav-header",{attrs:{backgroundColor:"rgba(255, 255, 255, 0.8)"}}),i("div",{staticClass:"geshop-head-tab flex-box"},[e._l(e.list,(function(t,a){return i("div",{key:a,staticClass:"geshop-head-tab-item",class:{selected:e.selectedId==t.id},on:{click:function(i){return e.tabClick(t)}}},[i("span",[e._v(e._s(t.name))])])})),e._t("default")],2)],1)},s=[],n=(i("a9e3"),i("3bf0")),c={name:"siteHeader",components:{navHeader:n["a"]},props:{selectedId:Number,list:{type:Array}},data:function(){return{}},computed:{},methods:{tabClick:function(e){this.$emit("tabClick",e)}},filters:{}},o=c,l=(i("d222"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=r.exports},d222:function(e,t,i){"use strict";i("8866")},d5d8:function(e,t,i){"use strict";i("ffff9")},d7a5:function(e,t,i){},e891:function(e,t,i){"use strict";i("f9aa")},f9aa:function(e,t,i){},ffff9:function(e,t,i){}}]);