webpackJsonp([5],{297:function(e,t,n){n(398);var a=n(7)(n(329),n(377),"data-v-da9b25ee",null);e.exports=a.exports},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(51);t.default={data:function(){return{friends:[]}},created:function(){var e=this;n.i(a.a)().get("site/friendlinks").then(function(t){e.friends=t.data})}}},350:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".links a[data-v-da9b25ee]{padding:5px 10px;border:1px dashed #eee;margin-top:10px;margin-right:10px;display:inline-block}",""])},377:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("p",[e._v("请提供给我们链接名和链接地址（以下排名不分先后）")]),n("div",{staticClass:"links"},e._l(e.friends,function(t){return n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t.name))])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",[e._v("Awesomes.cn 欢迎高质量的站点和我们交换链接，我们提供首页和内页的双重链接。请前往我们的 ")]),n("a",{attrs:{href:"http://weibo.com/awesomescn"}},[e._v("新浪微博 ")]),n("span",[e._v("私信我们。")])])}]}},398:function(e,t,n){var a=n(350);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(3)("3b522047",a,!0)}});