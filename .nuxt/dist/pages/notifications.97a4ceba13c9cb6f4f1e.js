webpackJsonp([16],{"+SeA":function(t,a,i){(t.exports=i("UTlt")(!1)).push([t.i,".page-notifications{background:#f7f8fa}.page-notifications .main-area{background-color:#fff;max-width:800px;margin:50px auto;padding:40px;font-size:17.6px;font-size:1.1rem;color:#666}.page-notifications .main-area a:link,.page-notifications .main-area a:visited{color:#666}.page-notifications .main-area a:active,.page-notifications .main-area a:hover{color:#333}.page-notifications .main-area a{font-weight:700}.page-notifications .main-area .toitem{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.page-notifications .main-area .toitem article{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.page-notifications .main-area .toitem .time{color:#bbb}.page-notifications .main-area .toitem .flag{display:inline-block;width:10px;height:10px;background-color:#eee;border-radius:100%;margin-left:20px}.page-notifications .main-area .toitem .flag.UNREAD{background-color:#22e076}.page-notifications .notip{text-align:center;color:#ddd;padding:50px 0}",""])},Aexd:function(t,a,i){"use strict";var e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main-area"},[t._l(t.notifiys,function(a){return i("div",{staticClass:"toitem"},[i("article",{domProps:{innerHTML:t._s(t.processAt(t.marked(a.con)))}}),i("span",{staticClass:"time"},[t._v(t._s(t.timeago(a.created_at)))]),i("span",{staticClass:"flag",class:a.status})])}),t.pagetotal>0?i("pagination",{attrs:{flag:"notifiy-list",total:t.pagetotal,size:t.pagesize}}):i("h4",{staticClass:"notip"},[t._v("暂无消息")])],2)},staticRenderFns:[]};a.a=e},W06d:function(t,a,i){"use strict";var e=i("lC5x"),n=i.n(e),o=i("J0Oq"),s=i.n(o),r=i("YFWx");a.a={data:function(){return{pagesize:15}},asyncData:function(){var t=s()(n.a.mark(function t(a){var i,e,o=a.req,s=(a.params,a.query);return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=s.page||1,t.next=3,Object(r.a)(o).get("notification?domain=news",{params:{limit:15,skip:15*(i-1)}});case 3:return e=t.sent,t.abrupt("return",{notifiys:e.data.items,pagetotal:e.data.count});case 5:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),methods:{processAt:function(t){return t.replace(/@([^:：?\s@]+)/g,'<a href="#" class="ata">@$1</a>')},resetStatus:function(){var t=this.notifiys.filter(function(t){return"UNREAD"===t.status}).map(function(t){return t.id});t.length<1||Object(r.a)().post("notification/reset",{ids:t})}},mounted:function(){setTimeout(this.resetStatus,1e3)}}},nwGV:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("W06d"),n=i("Aexd");var o=function(t){i("q2RM")},s=i("X4nt")(e.a,n.a,!1,o,null,null);a.default=s.exports},q2RM:function(t,a,i){var e=i("+SeA");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("03651054",e,!0,{sourceMap:!1})}});