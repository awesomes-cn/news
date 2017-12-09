<template lang="pug">
  div.main
    div.left
      a(href="javascript:void(0)" class="navto" @click="goto('prev')" title="上一条")
        icon(name="prev" width="70px")
    div.middle
      div.news-main.item-box
        div.tx-box
          nuxt-link(:to="/mem/ + news.mem.id" class="tx-wrap")
            img.tx(:src="cdn(news.mem.avatar, 'mem')")
        div.quote-left
          icon(name="quote" width="25px;" class="quote")
          span.fumo {{timeago(news.created_at)}}
        div.inn
          article.news-con(v-html="marked(news.con)")
          img.img-con(:src="cdn(news.picture, 'news')" v-if="news.picture" @click="zoomBig(cdn(news.picture, 'news'))")
        div.quote-right
          icon(name="quote" width="25px;" class="quote" rotate="180")  
        div.extra
          
        div.oper-box
          up(:item="news")
          nuxt-link(:to="'/news/' + news.id + '/share'" class="share-btn" title="分享")
            icon(name="share"  width="25px")  
      div.item-box(v-if="isShowCom")
        comment(flag="news-detail" typ="NEWS" v-bind:idcd="news.id")  
    div.right
      a(href="javascript:void(0)" class="navto" @click="goto('next')"  title="下一条")
        icon(name="next" width="70px")
</template>

<script>
  import axios from '~/plugins/axios'
  import Comment from '~/components/comment.vue'
  import Up from '~/components/up.vue'
  export default {
    async asyncData ({ req, params, query }) {
      let res = await axios().get(`news/${params.id}`)
      return {
        news: res.data
      }
    },
    data () {
      return {
        isShowCom: false
      }
    },
    components: {
      Comment,
      Up
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
    },
    mounted () {
      this.isShowCom = true
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    width: 100%;
    padding-top: 30px;
    background-color: rgba(244, 245, 245, 0.63);
    padding-bottom: 50px;

    .middle {
      max-width: 650px;
      flex-grow: 1;
      word-wrap: break-word;
      overflow: auto;

      .item-box {
        background-color: #FFF;
        padding: 50px;
        margin-top: 20px;
        position: relative;
        box-shadow: 0px 0px 3px rgba(221, 221, 221, 0.48);

        @media (max-width: 576px) {
          padding: 50px 20px;
        }
      }
      .news-main {
        border-radius: 2px;
      }
      .tx-box {
        text-align: center;
        margin-bottom: 20px;
      }
      .tx {
        width: 60px;
        height: 60px;
        border-radius: 100%;
      }
      .inn {
        padding: 2px;
        .img-con {
          max-width: 80%;
          margin-bottom: 20px;
          cursor: zoom-in;
        }
      }
      article.news-con {
        font-size: 1.2rem;
        line-height: 30px;
        padding: 40px;

        @media (max-width: 576px) {
          padding: 20px 10px;
        }
        


        a {
          color: #025aa5;
          border-bottom: #025aa5 1px dashed;
        }
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
    .left {
      flex-grow: 1;
      flex-shrink: 100;
      text-align: center;

      @media (max-width: 576px) {
        display: none;
      }
    }
    .right {
      flex-grow: 1;
      flex-shrink: 100;
      text-align: center;

      @media (max-width: 576px) {
        display: none;
      }
    }
    .navto {
      color: #DDD;
      position: fixed;
      margin-top: 50px;
    }

    .oper-box {
      display: flex;
      align-items: center;
      justify-content: center;

      .share-btn {
        color: #b0bec7;
        margin-left: 20px;
      }
    }
  }
</style>
