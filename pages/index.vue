<template lang="pug">
  div.topics-wraper
    div.container
      div.news-wraper
        div.inner
          news(:newss="newss" flag="news-list")
    div.pub-news
      div
        editor(flag="news-pub"  v-model="newcon" v-bind:setval="setval" placeholder="有关前端库的新闻、感想、观点短评")
      div.btn-wraper
        button.btn.btn-danger
          icon(name="send" width="16px") 发布
      
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/news.vue'
  let pagesize = 10
  export default {
    name: 'home',
    data () {
      return {
        newcon: '',
        pagesize: pagesize,
        newss: [],
        pagetotal: 0,
        setval: {
          time: Date.now(),
          val: ''
        },
        best: []
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    head () {
      return {
        title: `前端情报局`,
        meta: [
          { hid: 'description', name: 'description', content: '最新前端资讯和情报' }
        ]
      }
    },
    components: {
      News
    },
    methods: {
      setEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val
        }
      },

      list: async function () {
        let page = 1
        let res = await axios().get('news', {
          params: {
            limit: pagesize,
            skip: pagesize * (page - 1)
          }
        })

        let newss = res.data.items
        newss.forEach(item => {
          item.isShowCom = false
        })
        this.newss = newss
        this.pagetotal = res.data.count
      },

      // 发布情报
      submit: async function () {
        if (this.showLogin()) {
          return
        }
        if (this.newcon.trim().length < 10) {
          this.$alert('danger', '内容字数不能小于10')
          return
        }
        let self = this

        let res = await axios().post('/news', {con: this.newcon})
        self.setEditVal('')
        if (!res.data.status) {
          this.$alert('danger', '发布失败，没有权限')
          return
        }
        this.$alert('success', '发布成功')
        self.newss.unshift(res.data.item)
      },

      // 获取最佳
      fetchBest: function (period) {
        this.period = period
        axios().get('news/best', {
          params: {
            period: period
          }
        }).then(res => {
          if (res.data !== 'nobest') {
            res.data.isShowCom = false
          }
          this.best = [res.data]
        })
      }
    },
    created () {
      // this.fetchBest('week')
      this.list()
    }
  }
</script>


<style lang="scss" scoped>
  .container {
    max-width: 800px;
  }
  .card {
    display: block;
    background-color: #FFF;
    padding: 30px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .new-bar {
    margin-bottom: 10px;
  }

  .pub-news {
    padding: 50px;
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

    .btn-wraper {
      margin-top: 10px;
      .btn {
        padding: 0.7rem 2rem;
        width: 100%;
      }
    }
      
  }
</style>
