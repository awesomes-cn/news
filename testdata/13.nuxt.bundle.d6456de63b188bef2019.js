webpackJsonp([13],{249:function(t,a,e){e(322);var n=e(7)(e(346),e(301),"data-v-222a2a48",null);t.exports=n.exports},276:function(t,a,e){a=t.exports=e(2)(void 0),a.push([t.i,".mem-menus[data-v-222a2a48]{font-size:14px;font-weight:700;margin-bottom:10px;background-color:#e8ece6}.mem-menus a.router-link-exact-active[data-v-222a2a48]{color:#ee3910}.mem-menus a[data-v-222a2a48]{padding:15px 10px;display:inline-block}.mem-banner[data-v-222a2a48]{text-align:center;padding:50px;background:#f7f8fa;margin-bottom:20px;padding-bottom:150px}.mem-banner .tx-link[data-v-222a2a48]{display:inline-block;border-radius:100%;background-color:hsla(0,0%,100%,.25);padding:10px;height:120px}.mem-banner .tx[data-v-222a2a48]{width:100px;height:100px;border-radius:100%;margin-bottom:10px;padding:10px;background:hsla(0,0%,100%,.39)}.mem-banner .info[data-v-222a2a48]{line-height:20px;margin-top:20px}.mem-banner .info>a[data-v-222a2a48],.mem-banner .info>span[data-v-222a2a48]{display:inline-block;padding:0 10px;color:#9e9e9e}.mem-banner .info svg[data-v-222a2a48]{float:left;margin-right:3px}.mem-area[data-v-222a2a48]{background-color:rgba(247,248,250,.4)}.conarea[data-v-222a2a48]{max-width:800px;background-color:#fff;margin-top:-72px;padding:0}.mem-navs[data-v-222a2a48]{text-align:right;display:block;border-left:0;border-right:0;padding:5px}.mem-navs a[data-v-222a2a48]{padding:0 20px;font-weight:700}",""])},301:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mem-area"},[e("div",{staticClass:"mem-banner"},[e("nuxt-link",{staticClass:"tx-link",attrs:{to:"/mem"}},[e("img",{staticClass:"tx",attrs:{src:t.cdn(t.mem.avatar,"mem")}})]),e("h4",[t._v(t._s(t.mem.nc))]),e("div",{staticClass:"info"},[e("span",{attrs:{title:"坐标"}},[e("icon",{attrs:{name:"location"}},[t._v(t._s(t.mem.mem_info.location||"坐标"))])],1),e("span",{attrs:{title:"公司"}},[e("icon",{attrs:{name:"company"}},[t._v(t._s(t.mem.mem_info.company||"公司"))])],1),t.isExsit(t.mem.mem_info.blog)?e("a",{attrs:{href:t.mem.mem_info.blog,target:"_blank"}},[e("icon",{attrs:{name:"home"}},[t._v("主页")])],1):t._e(),t.isExsit(t.mem.mem_info.weibo_url)?e("a",{attrs:{href:"http://weibo.com/"+t.mem.mem_info.weibo_url,target:"_blank"}},[e("icon",{attrs:{name:"weibo"}})],1):t._e(),t.isExsit(t.mem.mem_info.twitter)?e("a",{attrs:{href:"https://twitter.com/"+t.mem.mem_info.twitter,target:"_blank"}},[e("icon",{attrs:{name:"twitter"}})],1):t._e(),t.isExsit(t.mem.mem_info.github)?e("a",{attrs:{href:"https://github.com/"+t.mem.mem_info.github,target:"_blank"}},[e("icon",{attrs:{name:"github"}})],1):t._e()])],1),e("div",{staticClass:"container conarea"},[e("div",{staticClass:"mem-menus"},[e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/pubs/news"}},[t._v(t._s(t.who)+"发布的")]),e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/zan"}},[t._v(t._s(t.who)+"点赞的")])],1),e("nuxt-child")],1)])},staticRenderFns:[]}},322:function(t,a,e){var n=e(276);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(3)("9d13589c",n,!0)},346:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(80),i=e.n(n),r=e(79),m=e.n(r),o=e(51);a.default={asyncData:function(){function t(t){return a.apply(this,arguments)}var a=m()(i.a.mark(function t(a){var n,r=(a.req,a.params);a.query;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.i(o.a)().get("mem/"+r.id);case 2:return n=t.sent,t.abrupt("return",{mem:n.data});case 4:case"end":return t.stop()}},t,this)}));return t}(),watch:{"$router.params.id":function(t){var a=this;e.i(o.a)().get("mem/"+t).then(function(t){a.mem=t.data})}},computed:{session:function(){return this.$store.state.session||{}},who:function(){return this.session.id===parseInt(this.$route.params.id)?"我":"TA"},routeKey:function(){return this.$route.name.split("-")[2]||""}},methods:{isExsit:function(t){return t&&""!==t.trim()},getPageName:function(){return{"":this.who+"在用",marks:this.who+"收藏的",pubs:this.who+"发布的"}[this.routeKey]}},created:function(){}}}});