<template lang="pug">
  div.screen-box
    div.slogn
      // p 每天刷一刷，跟上前端快步伐
      img.logo(src="../../../assets/img/logo-50.png")
      h4(style="margin-top: 10px;") 前端情报局
      
    div.news-main
      div.item-box
        article(v-html="marked(news.con)")
        img.img-con(:src="cdn(news.picture, 'news')" v-if="news.picture")
</template>

<script>
  import axios from '~plugins/axios'
  export default {
    layout: 'blank',
    async asyncData ({ req, params, query }) {
      let res = await axios().get(`news/${params.id}`)
      return {
        news: res.data
      }
    },
    methods: {
      // 跳转
      goto: async function (direction) {
        let res = await axios().get(`news/${this.news.id}/prevnext`, {
          params: {
            direction: direction
          }
        })
        let distID = res.data.dist
        if (distID === 0) {
          this.$alert('warning', '已经到头了')
          return
        }
        this.$router.push(`/news/${distID}`)
      }
    }
  }
</script>

<style lang="scss">
  .page-news-id-screenshot {
    .body {
      padding: 0;
      background-color: #e3e7e8;
    }
    .screen-box {
      width: 500px;
      position: relative;
      .slogn {
        text-align: center;
        padding-top: 30px;
        background-image: linear-gradient( 135deg, #ec971f 0%, #d83b3b 100%);
        color: #ffffff;
        height: 250px;
      }

      .logo {
        background-color: #FFF;
        border-radius: 100%;
        padding: 5px;
      }
      .item-box {
        background-color: #FFF;
        margin-top: 10px;
        position: relative;
        padding: 40px;

        @media (max-width: 576px) {
          padding: 50px 20px;
        }
      }
      .news-main {
        padding: 30px;
        margin-top: -150px;
      }
      article {
        font-size: 1.2rem;
        line-height: 30px;

        table {
          border: 1px solid #eceeef;
          width: 100%;
          max-width: 100%;
          margin-bottom: 1rem;
          border-collapse: collapse;
          th, td {
            vertical-align: bottom;
            border-bottom-width: 2px;
            border: 1px solid #eceeef;
            padding: .75rem;
          }
          th {
            border-bottom: 2px solid #eceeef;
          }
          tbody tr:nth-of-type(odd) {
          }
        }
      }

      .extra {
        padding-top: 20px;
        color: #AAA;
      }

      .quote {
        color: #888
      }
      .quote-right {
        text-align: right
      }
      .quote-left {
        display: flex;
        align-items: center
      }

      .fumo {
        color: #a9a8a8;
        margin-left: 10px;
      }
    }
  }
</style>
