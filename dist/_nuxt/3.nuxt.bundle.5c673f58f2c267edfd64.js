webpackJsonp([3],{300:function(e,t,n){n(396);var r=n(7)(n(332),n(375),null,null);e.exports=r.exports},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(80),a=n.n(r),s=n(79),o=n.n(s),i=n(51);t.default={asyncData:function(){function e(e){return t.apply(this,arguments)}var t=o()(a.a.mark(function e(t){t.req,t.params,t.query;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return e}(),data:function(){return{con:""}},computed:{session:function(){return this.$store.state.session}},methods:{apply:function(){function e(){return t.apply(this,arguments)}var t=o()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.showLogin()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.i(i.a)().post("site/apply",{con:this.con});case 4:t=e.sent,t.data.status;case 6:case"end":return e.stop()}},e,this)}));return e}()}}},348:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".page-webker{background:#f7f8fa}.page-webker .webker-wrap .banner{text-align:center;padding:50px 0}.page-webker .webker-wrap .outerwap{font-size:1.1rem;margin:0 auto;max-width:650px}.page-webker .webker-wrap .outerwap .inner{background-color:#fff;padding:50px}.page-webker .webker-wrap h4{padding-top:20px;padding-bottom:10px}",""])},375:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"webker-wrap"},[n("div",{staticClass:"outerwap"},[n("div",{staticClass:"inner"},[e._m(0),n("article",[n("p",[e._v("为了保证情报的质量和价值，我们不会对普通用户开放发布情报的功能，而是把这一重要的权限赋给「情报员」")]),n("h4",[e._v("申请条件")]),n("p",[e._v("GitHub 关注数 >= 100 （非硬性规定，在大厂工作或其它特殊原因可无视该条件）")]),n("p",[e._v("不发布垃圾无用的信息")]),n("h4",[e._v("我要申请")]),e.session&&"YES"===e.session.iswebker?[n("div",{staticClass:"alert alert-info"},[e._v("你目前已经是情报员")])]:e._e(),e.session&&"NO"!==e.session.iswebker?e._e():[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.con,expression:"con"}],staticClass:"form-control",attrs:{placeholder:"申请说明（选填）"},domProps:{value:e.con},on:{input:function(t){t.target.composing||(e.con=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-danger",on:{click:e.apply}},[e._v("提交申请")])])]],2)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("h2",[e._v("情报员")])])}]}},396:function(e,t,n){var r=n(348);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("51946f46",r,!0)}});