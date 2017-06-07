<template lang="pug">
  transition(name="custom-classes-transition" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp")  
    div.pub-news(v-if="isShowPub")
      div.title
        h5 {{myaction === 'new' ? '发布情报' : '编辑情报'}}
        a.close(href="javascript:void(0)" @click="isShowPub = false")
          icon(name="close")
      template(v-if="session")
        template(v-if="session.iswebker === 'YES'")
          div
            editor(flag="news-pub" v-if="!editorLoading"  v-model="newcon" v-bind:setval="setval" placeholder="有关前端库的新闻、感想、观点短评、小知识点")
            Loading(v-else)
          div.btn-wraper
            button.btn.btn-danger(@click="submit")
              icon(name="send" width="16px" v-if="myaction === 'new'") 发布
              span(v-else) 确认更新
        template(v-if="session.iswebker === 'NO'")
          div.alert.alert-warning
            span 为了保证质量，我们目前只针对
            nuxt-link(to="/webker") 情报员
            span 开放发布权限
      template(v-if="!session")
        button.btn.btn-primary(@click="showLogin()") 请登录后发布
</template>

<script>
  import axios from '~plugins/axios'
  import Vue from 'vue'
  import Loading from '~components/loading'
  export default {
    props: ['isshow', 'action', 'editem'],
    data () {
      return {
        isShowPub: false,
        editorLoading: true,
        newcon: '',
        setval: {
          time: 0,
          val: ''
        }
      }
    },
    components: {
      Loading
    },
    watch: {
      '$route': function () {
        this.searchKey = this.$route.query.q
      },
      'isshow': function (val) {
        let initVal = this.myaction === 'edit' ? this.editem.con : null
        this.showPub(initVal)
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      },
      myaction: function () {
        return this.action || 'new'
      }
    },
    methods: {
      setEditVal: function (val) {
        this.setval = {
          time: this.setval.time + 1,
          val: val
        }
      },
      showPub: async function (initVal) {
        this.isShowPub = true
        const editor = await import('~components/editor.vue')
        Vue.component('editor', editor)
        this.editorLoading = false
        let self = this
        if (initVal) {
          setTimeout(() => {
            self.setEditVal(initVal)
          }, 10)
        }
      },

      // 提交
      submit: async function () {
        if (this.showLogin()) {
          return
        }
        if (this.newcon.trim().length < 10) {
          this.$alert('danger', '内容字数不能小于10')
          return
        }

        if (this.myaction === 'new') {
          this.saveAction()
        } else {
          this.updateAction()
        }
      },

      // 新增情报
      saveAction: async function () {
        let res = await axios().post('news', {con: this.newcon})
        this.setEditVal('')
        if (!res.data.status) {
          this.$alert('danger', '发布失败，没有权限')
          return
        }
        this.$alert('success', '发布成功')
        this.isShowPub = false
      },

      // 更新情报
      updateAction: async function () {
        let res = await axios().put(`news/${this.editem.id}`, {con: this.newcon})
        this.setEditVal('')
        if (!res.data.status) {
          this.$alert('danger', '更新失败，没有权限')
          return
        }
        this.$alert('success', '更新成功')
        this.isShowPub = false
        this.editem.con = this.newcon
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pub-news {
    padding: 50px;
    padding-top: 30px;
    background-color: #FFF;
    position: fixed;
    z-index: 80;
    width: 100%;
    max-width: 500px;
    left: 0;
    right: 0;
    margin: auto;
    top: 60px;
    border-bottom: #EEE 1px solid;
    box-shadow: 1px 1px 1px rgba(238, 238, 238, 0.54);
    border-left: #FAFAFA 1px solid;

    .meditor {
      min-height: 100px;
    }
    .btn {
      width: 100%;
    }

    .btn-wraper {
      margin-top: 10px;
    }

    .title {
      text-align: center;
      padding-bottom: 20px;
    }

    .close {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
</style>
