webpackJsonp([1],{290:function(t,e,i){i(400);var a=i(7)(i(322),i(379),"data-v-e9c2f3b8",null);t.exports=a.exports},301:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(80),s=i.n(a),n=i(79),o=i.n(n),r=i(51),c=i(81),d=i.n(c);e.default={props:["flag","typ","idcd"],data:function(){return{coms:[],comcon:"",isSubmiting:!1,editing:null,setval:{time:Date.now(),val:""},subMap:{new:{ready:"提交",ing:"提交中..."},edit:{ready:"更新评论",ing:"更新中..."}}}},computed:{session:function(){return this.$store.state.session}},methods:{setEditVal:function(t){this.setval={time:Date.now(),val:t}},list:function(){var t=this;this.idcd&&this.idcd>0&&i.i(r.a)().get("comment?typ="+this.typ+"&idcd="+this.idcd).then(function(e){var i=e.data.items;t.coms=i})},submit:function(){this.showLogin()||""!==this.comcon.trim()&&(this.isSubmiting=!0,this.editing?this.update():this.save())},save:function(){function t(){return e.apply(this,arguments)}var e=o()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.i(r.a)().post("comment",{typ:this.typ,idcd:this.idcd,con:this.comcon});case 2:e=t.sent,this.$alert("success","发布评论成功！"),this.coms.push(e.data.item),this.setEditVal(""),this.isSubmiting=!1;case 7:case"end":return t.stop()}},t,this)}));return t}(),update:function(){function t(){return e.apply(this,arguments)}var e=o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.i(r.a)().put("comment/"+this.editing.id,{con:this.comcon});case 2:this.$alert("success","更新评论成功！"),this.editing.con=this.comcon,this.setEditVal(""),this.isSubmiting=!1,this.editing=null;case 7:case"end":return t.stop()}},t,this)}));return t}(),destroy:function(t,e){var a=this,s=this;this.$confirm("确认删除该评论？不是手抖吧！","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.i(r.a)().delete("comment/"+t.id).then(function(t){t.data.status&&(a.$alert("success","删除评论成功！"),s.coms.splice(e,1))})}).catch(function(){})},scrollToEditor:function(t){d()("html,body").animate({scrollTop:d()(t.target).closest(".comment-wraper").find(".editor-go").offset().top-100})},edit:function(t,e){this.scrollToEditor(e),this.editing=t,this.setEditVal(t.con)},cancelEditing:function(){this.editing=null,this.setEditVal("")},reply:function(t,e){this.scrollToEditor(e),this.setEditVal(this.comcon+"@"+t.mem.nc+" ")},processAt:function(t){return t.replace(/@([^:：?\s@]+)/g,'<a href="#" class="ata">@$1</a>')},switchFavor:function(t){this.showLogin()||i.i(r.a)().post("oper",{opertyp:"FAVOR",typ:"COMMENT",idcd:t.id}).then(function(e){t.favor=e.data.amount,t.isFavor=e.data.has})}},watch:{idcd:function(){this.list()}},created:function(){this.list()}}},302:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(305),s=i.n(a),n=i(51);e.default={props:["newss","flag"],components:{Comment:s.a},methods:{switchFavor:function(t){this.showLogin()||i.i(n.a)().post("oper",{opertyp:"FAVOR",typ:"NEWS",idcd:t.id}).then(function(e){t.favor=e.data.amount,t.isFavor=e.data.has})}}}},303:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,".repo-news[data-v-27b45b7e]{background-color:#fff}.news-item[data-v-27b45b7e]{background-color:#fff;padding:30px 0;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.news-item .left[data-v-27b45b7e]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:50px;-ms-flex-negative:0;flex-shrink:0}.news-item .middle[data-v-27b45b7e]{-ms-flex-positive:1;flex-grow:1}.news-item .right[data-v-27b45b7e]{width:70px;text-align:right;-ms-flex-negative:0;flex-shrink:0}.news-item .right .tx[data-v-27b45b7e]{width:30px;height:30px;border-radius:100%;margin-right:5px}.news-item[data-v-27b45b7e]:last-child{border:none}.news-item article[data-v-27b45b7e]{font-size:1.2rem;line-height:28px;padding-left:10px}.news-item a.up[data-v-27b45b7e]{background-color:hsla(0,0%,95%,.8);color:#909090;padding:.4rem;width:35px;border-radius:2px;text-align:center}.news-item a.up.has-true[data-v-27b45b7e]{background-color:rgba(240,173,78,.24);color:#ff9b00}.article-w[data-v-27b45b7e]{padding:0 10px}.infos[data-v-27b45b7e]{color:#a9afb9;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding-left:10px}.infos a[data-v-27b45b7e]{color:#a9afb9}.infos>a[data-v-27b45b7e],.infos>span[data-v-27b45b7e]{margin-right:15px}.com-wrap[data-v-27b45b7e]{padding-top:20px;padding-left:20px}",""])},304:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,".citem[data-v-9fb5e5f8]{position:relative;padding-left:35px;margin-bottom:30px}.citem:hover .opers .extra[data-v-9fb5e5f8]{display:inline-block}.citem .time[data-v-9fb5e5f8]{color:#ababab;margin-left:10px}.citem .opers a[data-v-9fb5e5f8]{color:#ddd;display:inline-block;margin-right:10px}.citem .opers a.up[data-v-9fb5e5f8]{background-color:hsla(0,0%,95%,.8);color:#909090;padding:.2rem;padding-right:.5rem;border-radius:2px}.citem .opers a.up.has-true[data-v-9fb5e5f8]{background-color:rgba(240,173,78,.24);color:#ff9b00}.citem .opers svg[data-v-9fb5e5f8]{width:15px;height:15px;float:left;margin-right:3px}.citem .opers .extra[data-v-9fb5e5f8]{display:none}.editor-go[data-v-9fb5e5f8]{margin-bottom:40px;position:relative;padding-right:80px}article[data-v-9fb5e5f8]{margin:10px 0}.sub-btn[data-v-9fb5e5f8]{border:none;color:#fff;background-color:#da552f;padding:10px 20px;cursor:pointer;position:absolute;right:0;top:4px}.cancel-edit[data-v-9fb5e5f8]{margin-left:10px;color:#da552f}.mem-tx[data-v-9fb5e5f8]{width:25px;height:25px;border-radius:100%;display:block;position:absolute;left:0;top:5px}",""])},305:function(t,e,i){i(310);var a=i(7)(i(301),i(308),"data-v-9fb5e5f8",null);t.exports=a.exports},306:function(t,e,i){i(309);var a=i(7)(i(302),i(307),"data-v-27b45b7e",null);t.exports=a.exports},307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"repo-news"},t._l(t.newss,function(e){return i("div",{staticClass:"news-item"},[i("div",{staticClass:"left"},[i("a",{staticClass:"up",class:"has-"+e.isFavor,attrs:{href:"javascript:void(0)"},on:{click:function(i){t.switchFavor(e)}}},[i("icon",{attrs:{name:"arrow-up",width:"18px",alone:"true"}}),i("div",[t._v(t._s(e.favor))])],1)]),i("div",{staticClass:"middle"},[i("article",{domProps:{innerHTML:t._s(t.marked(e.con))}}),i("div",{staticClass:"infos"},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.isShowCom=!e.isShowCom}}},[i("icon",{attrs:{name:"comment",width:"16px"}},[t._v(t._s(e.comment)+" 条评论")])],1),i("span",[t._v(" "+t._s(t.timeago(e.created_at)))])]),e.isShowCom?i("div",{staticClass:"com-wrap"},[i("comment",{attrs:{flag:"news-comment-"+t.flag+"-"+e.id,typ:"NEWS",idcd:e.id}})],1):t._e()]),i("div",{staticClass:"right"},[i("nuxt-link",{attrs:{to:/mem/+e.mem.id}},[i("img",{staticClass:"tx",attrs:{src:t.cdn(e.mem.avatar,"mem")}})])],1)])}))},staticRenderFns:[]}},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-wraper"},[i("div",{staticClass:"editor-go"},[i("button",{staticClass:"sub-btn",attrs:{disabled:t.isSubmiting},on:{click:t.submit}},[t._v(t._s(t.subMap[t.editing?"edit":"new"][t.isSubmiting?"ing":"ready"]))]),i("editor",{attrs:{flag:t.flag,setval:t.setval,placeholder:"我有话说"},model:{value:t.comcon,callback:function(e){t.comcon=e},expression:"comcon"}})],1),t._l(t.coms,function(e,a){return i("div",{staticClass:"citem"},[i("nuxt-link",{attrs:{to:"/mem/"+e.mem.id}},[i("img",{staticClass:"mem-tx",attrs:{src:t.cdn(e.mem.avatar,"mem")}}),i("strong",[t._v(t._s(e.mem.nc))])]),i("span",{staticClass:"time"},[t._v(t._s(t.timeago(e.created_at)))]),i("article",{domProps:{innerHTML:t._s(t.processAt(t.marked(e.con)))}}),i("div",{staticClass:"opers"},[i("a",{staticClass:"up",class:"has-"+e.isFavor,attrs:{href:"javascript:void(0)"},on:{click:function(i){t.switchFavor(e)}}},[i("icon",{attrs:{name:"arrow-up"}},[t._v(t._s(e.favor))])],1),i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){t.reply(e,i)}}},[i("icon",{attrs:{name:"reply"}},[t._v("回复")])],1),t.session&&e.mem.id==t.session.id?i("a",{staticClass:"extra",attrs:{href:"javascript:void(0)"},on:{click:function(i){t.edit(e,i)}}},[i("span",[t._v("编辑")])]):t._e(),t.session&&e.mem.id==t.session.id?i("a",{staticClass:"extra",attrs:{href:"javascript:void(0)"},on:{click:function(i){t.destroy(e,a)}}},[i("span",[t._v("删除  ")])]):t._e()])],1)})],2)},staticRenderFns:[]}},309:function(t,e,i){var a=i(303);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(3)("4e0a44de",a,!0)},310:function(t,e,i){var a=i(304);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(3)("5df6cf7e",a,!0)},322:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(80),s=i.n(a),n=i(79),o=i.n(n),r=i(51),c=i(306),d=i.n(c);e.default={name:"home",data:function(){return{pagesize:10,newss:[],pagetotal:0}},computed:{session:function(){return this.$store.state.session}},head:function(){return{title:"前端情报局",meta:[{hid:"description",name:"description",content:"最新前端资讯和情报"}]}},components:{News:d.a},methods:{list:function(){function t(){return e.apply(this,arguments)}var e=o()(s.a.mark(function t(){var e,a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=1,t.next=3,i.i(r.a)().get("news?mem="+this.$route.params.id,{params:{limit:10,skip:10*(e-1)}});case 3:a=t.sent,n=a.data.items,n.forEach(function(t){t.isShowCom=!1}),this.newss=n,this.pagetotal=a.data.count;case 8:case"end":return t.stop()}},t,this)}));return t}()},created:function(){this.list()}}},352:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,".container[data-v-e9c2f3b8]{max-width:800px}.card[data-v-e9c2f3b8]{display:block;background-color:#fff;padding:30px;overflow:hidden;margin-bottom:20px}.new-bar[data-v-e9c2f3b8]{margin-bottom:10px}.pub-news[data-v-e9c2f3b8]{padding:50px;background-color:#fff;position:fixed;z-index:80;width:100%;max-width:500px;left:0;right:0;margin:auto;top:60px;border-bottom:1px solid #eee;box-shadow:1px 1px 1px hsla(0,0%,93%,.54);border-left:1px solid #fafafa}.pub-news .meditor[data-v-e9c2f3b8]{min-height:100px}.pub-news .btn-wraper[data-v-e9c2f3b8]{margin-top:10px}.pub-news .btn-wraper .btn[data-v-e9c2f3b8]{padding:.7rem 2rem;width:100%}",""])},379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topics-wraper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"news-wraper"},[i("div",{staticClass:"inner"},[i("news",{attrs:{newss:t.newss,flag:"news-list"}})],1)])])])},staticRenderFns:[]}},400:function(t,e,i){var a=i(352);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(3)("4534f711",a,!0)}});