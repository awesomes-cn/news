<template lang="pug">
  div
    div.screen-box
      h3.title 分享情报
      template(v-if="screenshot")
        div.share-btns
          a(href="javascript:void(0)" @click="shareWeibo" title="分享到微博")
            icon(name="weibo" width="50px")
          a(href="javascript:void(0)"  title="下载图片到本地" @click="download")
            icon(name="download" width="40px")  
        img(:src="cdn(screenshot, 'news/screenshot')")
      template(v-else)
        loading
        p.text-center 截图渲染中...
</template>
<script>
  import axios from '~/plugins/axios'
  import Loading from '~/components/loading'
  export default {
    data () {
      return {
        screenshot: null
      }
    },
    methods: {
      fetchScreenshot: async function () {
        let res = await axios().get(`news/${this.$route.params.id}/screenshot`)
        this.screenshot = res.data
      },
      shareWeibo: function () {
        let shareUrl = `https://news.awesomes.cn/news/${this.$route.params.id}`
        let url = `http://service.weibo.com/share/share.php?url=${shareUrl}&type=button&language=zh_cn&appkey=3977462330&title=「前端情报局」&pic=${this.cdn(this.screenshot, 'news/screenshot')}&searchPic=true&style=simple`
        window.open(url, 'newwindow', 'width=500,height=500')
      },
      download: function () {
        var link = document.createElement('a')
        link.href = this.cdn(this.screenshot, 'news/screenshot')
        link.download = 'Download.jpg'
        document.body.appendChild(link)
        link.click()
      }
    },
    components: {
      Loading
    },
    created () {
      this.fetchScreenshot()
    }
  }
</script>

<style lang="scss" scoped>
  .screen-box {
    max-width: 500px;
    margin: 100px auto;
    margin-top: 50px;

    .title {
      text-align: center;
      padding: 20px 0;
    }
    img {
      width: 100%;
      box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.05), 0px 6px 18px 0px rgba(0, 0, 0, 0.11);
    }

    .share-btns {
      padding-bottom: 20px;
      text-align: center;

      a {
        margin: 0 10px;
        color: #95b0bd;
      }
    }
  }
</style>
