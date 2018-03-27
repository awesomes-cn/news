<template lang="pug">
  div.pub-news
    div.title
      h5 {{myaction === 'new' ? '发布情报' : '编辑情报'}}
    template(v-if="session")
      template(v-if="session.iswebker === 'YES'")
        div.editor-center
          template(v-if="!editorLoading")
            editor(flag="news-pub"  v-model="editem.con" v-bind:setval="setval" placeholder="有关前端库的新闻、感想、观点短评、小知识点")
            div.upload-outer
              icon(name="plus" width="17px") 上传图片
              upload(folder="news" v-model="editem.picture" v-bind:changeat="changeat" v-on:submit="submit")
            button.btn.btn-warning.btn-sm(v-if="editem.picture" @click="editem.picture = ''" style="margin-top: 5px;")
              icon(name="trash" width="13px") 删除图片
            img.preview(:src="cdn(editem.picture, 'news')" v-show="editem.picture")
            

            div.btn-wraper
              button.btn.btn-danger(@click="submit" v-bind:disabled="submiting")
                template(v-if="!submiting")
                  icon(name="send" width="16px" v-if="myaction === 'new'") 发布
                  span(v-else) 确认更新
                template(v-else)
                  span 提交中 ，请稍后....
                
          Loading(v-else)
      template(v-if="session.iswebker === 'NO'")
        div.alert.alert-warning
          span 为了保证质量，我们目前只针对
          nuxt-link(to="/webker") 情报员
          span 开放发布权限
    template(v-if="!session")
      button.btn.btn-primary(@click="showLogin()") 请登录后发布
</template>

<script>
  import axios from '~/plugins/axios'
  // import Vue from 'vue'
  import Loading from '~/components/loading'
  export default {
    data () {
      return {
        editorLoading: true,
        changeat: 1,
        submiting: false,
        setval: {
          time: 0,
          val: ''
        },
        editem: {
          con: '',
          picture: ''
        }
      }
    },
    components: {
      Loading,
      editor: () => import('~/components/editor.vue')
    },
    computed: {
      session () {
        return this.$store.state.session
      },
      myaction: function () {
        return this.editem.id > 0 ? 'edit' : 'new'
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
      },

      // 提交
      submit: async function () {
        if (this.showLogin()) {
          return
        }
        if (this.editem.con.trim().length < 10) {
          this.$alert('danger', '内容字数不能小于10')
          return
        }
        this.submiting = true

        if (/^blob:/.test(this.editem.picture)) {
          this.changeat += 1
        } else {
          this.submitGo()
        }
      },

      submitGo: async function () {
        if (this.myaction === 'new') {
          await this.saveAction()
        } else {
          await this.updateAction()
        }
        this.$router.push('/')
      },

      // 新增情报
      saveAction: async function () {
        let res = await axios().post('news', this.editem)
        this.setEditVal('')
        this.submiting = false
        if (!res.data.status) {
          this.$alert('danger', '发布失败，没有权限')
          return
        }
        this.$alert('success', '发布成功')
      },

      // 更新情报
      updateAction: async function () {
        let res = await axios().put(`news/${this.editem.id}`, this.editem)
        this.submiting = false
        if (!res.data.status) {
          this.$alert('danger', '更新失败，没有权限')
          return
        }
        this.$alert('success', '更新成功')
      }
    },
    async created () {
      if (this.$route.query.id > 0) {
        let res = await axios().get(`news/${this.$route.query.id}`)
        this.editem = res.data
        this.setEditVal(res.data.con)
      }
    },
    async mounted () {
      this.editorLoading = false
    }
  }
</script>

<style lang="scss" scoped>
  .pub-news {
    padding: 40px;
    padding-top: 30px;
    background-color: #FFF;
    width: 100%;
    max-width: 700px;
    margin: auto;

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

  .upload-outer {
    position: relative;
    // background-color: #e6f0f3;
    border: #DDD 1px dashed;
    color: #bfbfbf;
    background-color: rgba(187, 187, 187, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 10px 0;
    margin-top: 20px;
  }

  .preview {
    max-width: 100%;
    margin: 20px 0;
  }
</style>
