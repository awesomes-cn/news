<template lang="pug">
  div.container
    div.toolbar
    news(:newss="newss" flag="news-list")
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/news.vue'
  let pagesize = 10
  export default {
    name: 'home',
    data () {
      return {
        pagesize: pagesize,
        newss: [],
        pagetotal: 0
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
  .toolbar {
    height: 30px;
  }
</style>
