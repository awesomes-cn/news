<template lang="pug">
  div.screen-box
    div.slogn
      img.logo(src="../../../assets/img/logo-50.png")
      h4(style="margin-top: 10px;") Front End News
    div.news-main
      div.item-box
        article(v-html="marked(news.con)")
        img.img-con(:src="cdn(news.picture, 'news')" v-if="news.picture")
      div.extra-info
        div 每天刷一刷，跟上前端快步伐  
        div https://news.awesomes.cn
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    layout: 'blank',
    async asyncData ({ req, params, query }) {
      let res = await axios().get(`news/${params.id}`)
      return {
        news: res.data
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
      background-color: #f4f5f5;
      padding: 20px;
      font-family: 'PingFang SC';
      color: #000;
      .slogn {
        text-align: center;
        padding: 30px 0;
        background-image: linear-gradient( 135deg, #ec971f 0%, #d83b3b 100%);
        color: #ffffff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: 1px -1px 20px #d3d3d3;
      }

      .logo {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 100%;
        padding: 2px;
      }
      .item-box {
        background-color: #FFF;
        position: relative;
        padding: 40px;
        // box-shadow: 1px -1px 20px #d3d3d3;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;

        img {
          max-width: 100%
        }

        @media (max-width: 576px) {
          padding: 50px 20px;
        }
      }
      .news-main {
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

    .extra-info {
      text-align: center;
      padding: 20px;
      color: #b6b2b2
    }
  }
</style>
