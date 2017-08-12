<template lang="pug">
  div.home-box
    div.home-container
      div.alert.alert-info(v-if="isSearch")
        span 共搜索到 
        strong {{pagetotal}} 
        span 条关于 
        strong {{$route.query.q}} 
        span 的情报
        span.powerby
          span power by 
          a(href="https://www.algolia.com/" target="_blank") algolia 
      div.slogn 每天刷一刷，跟上前端快步伐
      div.list-inner
        news(:newss="newss" flag="news-list")
        div.load-wraper
          button.load-more(@click="loadMoreNews" v-bind:disabled="loading" v-if="hasmore")
            icon(name="loadmore" rotate="180") {{loading ? '加载中...' : '加载更多'}}
          span.nomore(v-else) 没有更多了
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/news.vue'
  let pagesize = 15

  let fetchData = async (page, req, query) => {
    let res = await axios(req).get('news', {
      params: {
        limit: pagesize,
        skip: pagesize * (page - 1),
        search: query.q
      }
    })

    let newss = res.data.items
    newss.forEach(item => {
      item.isShowCom = false
    })
    return {
      newss: newss,
      pagetotal: res.data.count
    }
  }
  
  export default {
    name: 'home',
    async asyncData ({ req, params, query }) {
      let data = await fetchData(1, req, query)
      return {
        newss: data.newss,
        pagetotal: data.pagetotal
      }
    },
    data () {
      return {
        pagesize: pagesize,
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
      },
      isSearch () {
        return (this.$route.query.q && this.$route.query.q.trim() !== '')
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
        let data = await fetchData(this.currentPage, null, this.$route.query)
        this.newss = this.newss.concat(data.newss)
        this.pagetotal = data.pagetotal
      },

      loadMoreNews: async function () {
        this.loading = true
        this.currentPage ++
        await this.fetchNews()
        this.loading = false
      }
    },
    created () {
    }
  }
</script>


<style lang="scss" scoped>
  .home-box {
    background-color: rgba(244, 245, 245, 0.63);
    padding: 30px 0;
    @media (max-width: 576px) {
      padding: 0;
    }
  }
  .home-container {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 40px;
  }

  .powerby {
    float: right;
    color: #999
  }

  .slogn {
    text-align: center;
    padding: 20px;
    background-image: linear-gradient( 135deg, #ec971f 0%, #d83b3b 100%);
    color: #ffffff;
    // border-bottom: #a02e2e 6px solid;
  }

  .list-inner {
    background-color: #FFF;
    padding-bottom: 40px;
  }
  .toolbar {
    height: 30px;
    display: flex;
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
