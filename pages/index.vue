<template lang="pug">
  div.container
    div.toolbar
    news(:newss="newss" flag="news-list")
    div.load-wraper
      button.load-more(@click="loadMoreNews" v-bind:disabled="loading" v-if="hasmore")
        icon(name="loadmore" rotate="180") {{loading ? '加载中...' : '加载更多'}}
      span.nomore(v-else) 没有更多了
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/news.vue'
  let pagesize = 12
  export default {
    name: 'home',
    data () {
      return {
        pagesize: pagesize,
        newss: [],
        pagetotal: 0,
        currentPage: 1,
        loading: false
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      },
      hasmore () {
        return this.pagetotal >= pagesize * this.currentPage
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

      fetchNews: async function () {
        let page = this.currentPage
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
        this.newss = this.newss.concat(newss)
        this.pagetotal = res.data.count
      },

      loadMoreNews: async function () {
        this.loading = true
        this.currentPage ++
        await this.fetchNews()
        this.loading = false
      }
    },
    created () {
      this.fetchNews()
    }
  }
</script>


<style lang="scss" scoped>
  .container {
    max-width: 800px;
  }
  .toolbar {
    height: 30px;
  }

  .load-wraper {
    text-align: center;
    .load-more {
      border: #DDD 1px dashed;
      padding: 15px 30px;
      background-color: #FFF;
      outline: none;
      color: #888888
    }
    .nomore {
      padding: 50px 0;
      color: #9c9c9c;
    }
  }
  
</style>
