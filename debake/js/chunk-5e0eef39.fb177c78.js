(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0eef39"],{"1f60":function(t,e,i){t.exports=i.p+"img/1.94ca6b8c.jpeg"},"3a87":function(t,e,i){t.exports=i.p+"img/2.54139502.jpeg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),r=i("5899"),s="["+r+"]",o=RegExp("^"+s+s+"*"),n=RegExp(s+s+"*$"),c=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(n,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5b79":function(t,e,i){},6237:function(t,e,i){},7156:function(t,e,i){var a=i("861d"),r=i("d2bb");t.exports=function(t,e,i){var s,o;return r&&"function"==typeof(s=e.constructor)&&s!==i&&a(o=s.prototype)&&o!==i.prototype&&r(t,o),t}},"800f":function(t,e,i){"use strict";i("6237")},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),r=i("23cb"),s=i("50c4");t.exports=function(t){var e=a(this),i=s(e.length),o=arguments.length,n=r(o>1?arguments[1]:void 0,i),c=o>2?arguments[2]:void 0,l=void 0===c?i:r(c,i);while(l>n)e[n++]=t;return e}},9122:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-btn",on:{click:t.goBack}},[i("i",{staticClass:"iconfont icon-left-circle-fill"})])},r=[],s={props:{headtype:""},data:function(){return{}},methods:{goBack:function(){"result"==this.headtype?this.$router.push("/colorlist"):(this.headtype,this.$router.push("/home/userinfo"))}}},o=s,n=(i("800f"),i("2877")),c=Object(n["a"])(o,a,r,!1,null,"5a537a2e",null);e["a"]=c.exports},"94e6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"test-result",staticStyle:{background:"rgb(249, 249, 249) none repeat scroll 0% 0%"}},[i("div",{staticClass:"design-layout-top",staticStyle:{background:"rgba(255, 255, 255,1) none repeat scroll 0% 0% !important",position:"fixed","box-shadow":"0px 0px 5px 2px rgba(91, 91, 91, 0.1)"}},[i("h4",[t._v("测评结果")]),i("l-header",{attrs:{headtype:"result"}}),i("div",{staticClass:"design-layout-top-op"},[i("a-icon",{staticStyle:{"margin-right":".15rem"},attrs:{type:"cloud-download"},on:{click:t.downLoad}}),i("a-icon",{staticStyle:{"margin-right":".15rem"},attrs:{type:"share-alt"},on:{click:t.Share}}),i("a-button",{staticStyle:{"font-size":"0.12rem","font-weight":"bold",width:"0.81rem",height:"0.28rem","vertical-align":"middle"},attrs:{type:"primary"},on:{click:t.retest}},[t._v(" 再测一遍 ")])],1)],1),i("img",{staticStyle:{width:"100%",display:"none"},attrs:{src:t.testImage}}),i("div",{attrs:{id:"main1"}},[i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"crown",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 牛顿色相环 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("色彩与情感关系表")]),t._m(0),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"crown",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 经典用色体系 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("符合华人审美")]),t._m(1),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"crown",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 色彩与性格 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("色彩生理与九宫印象坐标")]),t._m(2),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"crown",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 五行与色相环 ")],1),t._m(3),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"crown",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 您喜欢的颜色 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("以下为您最喜欢的10个颜色")]),i("div",{staticStyle:{display:"flex","flex-wrap":"wrap",padding:"0.1rem 0.1rem 0.5rem 0px"}},t._l(t.colorList,(function(t,e){return i("span",{key:e+"1",staticClass:"options-txt",style:{"background-color":t.color_number}})})),0),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"fund",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 色环色调分析 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("从色环色彩分布可以看出喜好趋势")]),i("div",{staticClass:"result-colors flex-box",staticStyle:{background:"#fff",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","margin-bottom":".5rem"}},[i("div",{staticClass:"result-colors-item"},[i("div",{staticClass:"flex-box",staticStyle:{"padding-top":".2rem"}},[i("canvas",{staticStyle:{border:"5px solid rgba(189, 189, 189, 0.1)",padding:".1rem"},attrs:{width:2e3+t.offsetX,height:2e3+t.offsetX,id:"huan"}})]),i("span",{staticStyle:{"font-size":".12rem","padding-bottom":".15rem","font-weight":"bold"}},[t._v("色环")])]),i("div",{staticClass:"result-colors-item"},[i("div",{staticClass:"flex-box",staticStyle:{"padding-top":".2rem"}},[i("canvas",{staticStyle:{border:"5px solid rgba(189, 189, 189, 0.1)",padding:".1rem"},attrs:{width:2e3,height:1228,id:"diao"}})]),i("span",{staticStyle:{"font-size":".12rem","padding-bottom":".15rem","font-weight":"bold"}},[t._v("色调")])])]),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"smile",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 性格分析 ")],1),i("p",{staticClass:"p3",staticStyle:{border:"none"}},[t._v("以下分析仅供娱乐")]),i("div",{staticClass:"personality",domProps:{innerHTML:t._s(t.character.content)}}),i("p",{staticClass:"p1"},[i("a-icon",{staticStyle:{"font-size":"0.25rem","vertical-align":"middle","line-height":".25rem"},attrs:{type:"picture",theme:"twoTone","two-tone-color":"#1890ff"}}),t._v(" 搭配方案推荐 ")],1),i("div",{staticClass:"options-data"}),i("div",{staticClass:"recommend-wrap"},t._l(t.character.matching||[],(function(e,a){return i("div",{key:a,staticClass:"recommend"},[i("p",{staticClass:"p2"},[t._v("#推荐"+t._s(a+1))]),i("img",{attrs:{src:e.img_url}})])})),0)])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-wrap":"wrap",padding:"0.1rem 0.1rem 0.5rem 0px"}},[i("div",{staticStyle:{width:"50%"}},[i("img",{staticStyle:{width:"100%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai/1.jpg"}})]),i("div",{staticStyle:{width:"50%"}},[i("img",{staticStyle:{"margin-left":"1%",width:"95%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai/5.jpg"}}),i("img",{staticStyle:{"margin-top":"1.5%","margin-left":"1%",width:"95%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai/4.jpg"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-wrap":"wrap",padding:"0.1rem 0.1rem 0.5rem 0px"}},[i("div",{staticStyle:{width:"100%"}},[i("img",{staticStyle:{width:"100%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai/7.jpg"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-wrap":"wrap",padding:"0.1rem 0.1rem 0.5rem 0px"}},[i("div",{staticStyle:{width:"50%"}},[i("img",{staticStyle:{width:"100%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai2/2.jpeg"}})]),i("div",{staticStyle:{width:"40%"}},[i("img",{staticStyle:{"margin-left":"10%",width:"95%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai2/3.jpeg"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-wrap":"wrap",padding:"0.1rem 0.1rem 0.5rem 0px"}},[i("div",{staticStyle:{width:"50%"}},[i("img",{staticStyle:{width:"100%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px",height:"96.5%","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai2/1.jpeg"}})]),i("div",{staticStyle:{width:"50%"}},[i("img",{staticStyle:{"margin-left":"1%",width:"95%",border:"1px solid rgb(232, 232, 232)","border-radius":"5px","box-shadow":"1px 1px 20px 3px rgba(1,1,1,0.04)"},attrs:{src:"https://debake.oss-cn-shanghai.aliyuncs.com/za_pic/secai2/4.jpeg"}})])])}],s=i("1da1"),o=(i("96cf"),i("d3b7"),i("3ca3"),i("ddb0"),i("159b"),i("d81d"),i("ac1f"),i("1276"),i("a9e3"),i("cb29"),i("9122")),n=i("c0e9"),c={data:function(){return{character:{},colorList:{},detail:{},offsetX:200,id:this.$route.query.id||0,testImage:""}},components:{lHeader:o["a"]},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,n,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=7;break}return e.next=3,t.$service.getResultDetail({id:t.id});case 3:a=e.sent,t.character=a.character,t.detail=a,t.colorList=a.right_color_block_list;case 7:r=document.getElementById("huan"),s=document.getElementById("diao"),o=r.getContext("2d"),n=s.getContext("2d"),c=i("1f60"),l=i("3a87"),Promise.all([t.loadImage(c),t.loadImage(l)]).then((function(e){o.drawImage(e[0],t.offsetX/2,t.offsetX/2,e[0].width,e[0].height),n.drawImage(e[1],0,0,e[1].width,e[1].height),t.colorList&&t.colorList.length&&t.colorList.forEach((function(e){var i=e.color_ring_position.split(",").map((function(t){return Number(t)})),a=e.color_tone_position.split(",").map((function(t){return Number(t)}));o.beginPath(),o.fillStyle=e.color_number,o.arc(i[0]+t.offsetX/2,i[1]+t.offsetX/2,100,0,2*Math.PI),o.fill(),13==e.color_tone_id?(n.beginPath(),n.fillStyle=e.color_number,n.fillRect(a[0],a[1],315,80),n.fill()):(n.beginPath(),n.fillStyle=e.color_number,n.arc(a[0],a[1],50,0,2*Math.PI),n.fill())}))}));case 14:case"end":return e.stop()}}),e)})))()},methods:{generateImage:function(){return n(document.getElementById("main1"),{useCORS:!0})},downLoad:function(){this.generateImage().then((function(t){var e=t.toDataURL("image/jpeg",.8);console.log(e,"保存图片"),jsBridge.ready((function(){jsBridge.saveImageToAlbum(e,(function(t){if(t){var e=navigator.userAgent,i=e.indexOf("Android")>-1||e.indexOf("Linux")>-1;i&&(This.$emit("downLoadSuccess"),This.$message.success("保存成功"))}else alert("保存失败：下载失败或没有相册使用权限")}))}))}))},Share:function(t){var e=this;this.generateImage().then((function(i){var a=i.toDataURL("image/jpeg",.8);console.log(a,"分享");try{jsBridge.ready((function(){jsBridge.shareImage({imgUrl:a})}))}catch(t){e.$message.info("亲，正式版用户专享区，期待您的加入！~")}}))},retest:function(){var t=this;this.$confirm({title:"确定重新再测吗？",content:"当前测试结果可以在我的——测试结果中查看",okText:"确认",cancelText:"取消",onOk:function(){t.$router.push("/colortest")},onCancel:function(){}})},loadImage:function(t){return new Promise((function(e,i){var a=new Image;a.crossOrigin="Anonymous",a.src=t,a.onload=function(){e(a)}}))}}},l=c,d=(i("ddc8"),i("2877")),p=Object(d["a"])(l,a,r,!1,null,"0cea3a44",null);e["default"]=p.exports},a9e3:function(t,e,i){"use strict";var a=i("83ab"),r=i("da84"),s=i("94ca"),o=i("6eeb"),n=i("5135"),c=i("c6b6"),l=i("7156"),d=i("c04e"),p=i("d039"),f=i("7c73"),g=i("241c").f,h=i("06cf").f,u=i("9bf2").f,m=i("58a8").trim,b="Number",x=r[b],y=x.prototype,v=c(f(y))==b,w=function(t){var e,i,a,r,s,o,n,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(s=l.slice(2),o=s.length,n=0;n<o;n++)if(c=s.charCodeAt(n),c<48||c>r)return NaN;return parseInt(s,a)}return+l};if(s(b,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof S&&(v?p((function(){y.valueOf.call(i)})):c(i)!=b)?l(new x(w(e)),i,S):w(e)},C=a?g(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;C.length>I;I++)n(x,_=C[I])&&!n(S,_)&&u(S,_,h(x,_));S.prototype=y,y.constructor=S,o(r,b,S)}},cb29:function(t,e,i){var a=i("23e7"),r=i("81d5"),s=i("44d2");a({target:"Array",proto:!0},{fill:r}),s("fill")},ddc8:function(t,e,i){"use strict";i("5b79")}}]);