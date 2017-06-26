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
          article(v-html="marked(news.con)")
        div.quote-right
          icon(name="quote" width="25px;" class="quote" rotate="180")  
        div.extra
          
        div.text-center
          up(:item="news")
      div.item-box
        comment(flag="news-detail" typ="NEWS" v-bind:idcd="news.id")  
    div.right
      a(href="javascript:void(0)" class="navto" @click="goto('next')"  title="下一条")
        icon(name="next" width="70px")
</template>

<script>
  import axios from '~plugins/axios'
  import Comment from '~components/comment.vue'
  import Up from '~components/up.vue'
  export default {
    async asyncData ({ req, params, query }) {
      console.log('===', params.id)
      let res = await axios().get(`news/${params.id}`)
      return {
        news: res.data
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
      width: 650px;

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
      }
      article {
        font-size: 1.2rem;
        line-height: 30px;
        padding: 40px;
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
    }
    .right {
      flex-grow: 1;
      flex-shrink: 100;
      text-align: center;
    }
    .navto {
      color: #DDD;
      position: fixed;
      margin-top: 50px;
    }
  }
</style>
