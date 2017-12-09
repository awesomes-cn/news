<template lang="pug">
  div.webker-wrap
    div.outerwap
      div.inner-box
        div.banner
          h2 情报员
        article
          p 为了保证情报的质量和价值，我们不会对普通用户开放发布情报的功能，而是把这一重要的权限赋给「情报员」


          h4 申请条件
          ul
            li GitHub 关注数 >= 100 （非硬性规定，在大厂工作或其它特殊原因可无视该条件）
            li 不发布垃圾无用的信息
            li 发布的内容仅限前端和 Node，可以是最新的新闻、前端框架重要版本发布、前端小技能
            li 目前未对字数做限定，但是字数不能过多，近限于短讯

          
          h4 我要申请
          template(v-if="session && session.iswebker === 'YES'")
            div.alert.alert-info 你目前已经是情报员

          template(v-if="!session || session.iswebker === 'NO'")
            div.form-group
              textarea.form-control(placeholder="申请说明（选填）" v-model="con")
            div.form-group
              button.btn.btn-danger(@click="apply") 提交申请
        
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    async asyncData ({ req, params, query }) {
    },
    data () {
      return {
        con: ''
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      apply: async function () {
        if (this.showLogin()) {
          return
        }
        let res = await axios().post('site/apply', {
          con: this.con
        })

        if (res.data.status) {
        }
      }
    }
  }
</script>

<style lang="scss" >
  .page-webker {
    background: #f7f8fa;
    .webker-wrap {
      .banner {
        text-align: center;
        padding: 50px 0;
      }

      .outerwap {
        font-size: 1.1rem;
        margin: 0 auto;
        max-width: 650px;


        .inner-box {
          background-color: #FFF;
          width: 100%;
          padding: 50px;
        }
      }

      h4 {
        padding-top: 20px;
        padding-bottom: 10px;
      }
    }
  }
  
</style>
