<template lang="pug">
  div
    header
      div.container
        div.left
          nuxt-link(to="/")
            img.logo(src="../assets/img/logo-50.png")
            span.logo-txt.hide-small 前端情报局
        div.middle
          div.inner(:style="isHideMenu ? 'height: 60px' : ''")
            // nuxt-link(to="/weuse" ) 大牛在用
            // nuxt-link(to="/subjects" ) 专题  

        div.right
          a.hide-small(href="" v-show="session" @mouseover="showmemeus = true" @mouseleave="showmemeus = false")
            icon(name="more" width="20px")

          div.memeus(v-show="showmemeus" @mouseover="showmemeus = true" @mouseleave="showmemeus = false")
            nuxt-link(to="/about") 个人资料
            a(href="javascript:void(0)" @click="logout()") 注 销

          a(href="javascript:void(0)" @click="showLogin()" v-show="!session") 登录

          nuxt-link(:to="'/mem/' + (session || {}).id" v-show="session") 
            img.tx(:src="cdn((session || {}).avatar, 'mem')")
            

          nuxt-link.hide-small.notifiys(to="/notifications" v-show="session" v-bind:class="$store.state.unreadNotifiy > 0 ? 'active' : ''")
            icon(name="bell"  width="22px")
            span.num(v-show="$store.state.unreadNotifiy > 0") {{$store.state.unreadNotifiy}}

          button.pub-btn(@click="isShowPub = true")
            icon(name="plus"  width="20px") 发布情报
    
    // 发布情报
    transition(name="custom-classes-transition" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp")  
      div.pub-news(v-show="isShowPub")
        div.title
          h5 发布情报
          a.close(href="javascript:void(0)" @click="isShowPub = false")
            icon(name="close")
        template(v-if="session")
          template(v-if="session.iswebker === 'YES'")
            div
              editor(flag="news-pub"  v-model="newcon" v-bind:setval="setval" placeholder="有关前端库的新闻、感想、观点短评")
            div.btn-wraper
              button.btn.btn-danger(@click="submitNews")
                icon(name="send" width="16px") 发布
          template(v-if="session.iswebker === 'NO'")
            div.alert.alert-warning
              span 为了保证质量，我们目前只针对
              nuxt-link(to="/webker") 情报员
              span 开放发布权限
        template(v-if="!session")
          button.btn.btn-primary(@click="showLogin()") 请登录后发布
    // 登录框
    login   

</template>

<script>
  import axios from '~plugins/axios'
  import Cookie from 'js-cookie'
  import Login from './login'
  export default {
    data () {
      return {
        isHideMenu: true,
        showmemeus: false,
        searchKey: '',
        isShowPub: false,
        newcon: '',
        setval: {
          time: Date.now(),
          val: ''
        }
      }
    },
    components: {
      Login
    },
    watch: {
      '$route': function () {
        this.searchKey = this.$route.query.q
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      // 注销
      logout: function () {
        Cookie.set('awlogin', null)
        this.$store.commit('setUser', null)
        this.$alert('success', '注销成功！')
      },
      // 搜索
      searchGo: function () {
        if (this.searchKey.trim() === '') {
          return
        }
        this.$router.push({path: '/search', query: {q: this.searchKey}})
      },

      setEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val
        }
      },
      // 发布情报
      submitNews: async function () {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    border-radius: 0;
    z-index: 2000;
    box-shadow: 1px 1px 1px rgba(238, 238, 238, 0.54);
    margin-bottom: 0;
    position: fixed;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: rgba(254, 254, 254, 0.97);

    a {
      text-decoration: none;
      height: 60px;
      color: #7b7676;
      padding: 0 20px;
      display: flex;
      align-items: center;
      &:hover {
        color: #da552f
      }
    }


    a.nuxt-link-active {
      color: #da552f;
    }

    .container {
      display: flex;
      align-items: flex-start;
    }
  }

  .notifiys {
    &.active {
      color: #da552f
    }
  }
  .left, .middle .inner, .right {
    display: flex;
  }
  

  .middle {
  }

  .middle .inner{
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 576px) {
      display: block;
    }

  }

  .swiper-container {
      width: 100%;
      height: 50px;
  }

  .right {
    flex-grow: 1;
    flex-direction: row-reverse;
    position: relative;
    align-items: center
  }

  .logo {
    width: 25px;
    height: 25px;
  }

  .logo-txt {
    color: #da552f;
    padding-left: 8px;
    font-size: 1.3rem
  }

  .memeus {
    width: 150px;
    background-color: #FFF;
    position: absolute;
    top: 60px;
    right: 0;
    border: #DDD 1px solid;
    border-top: 0;
    text-align: center;
    // display: none;

    a {
      display: block;
      border-top: #EEE 1px solid;
      height: auto;
      padding: 15px 0;
    }
  }
  

  

  .right > a {
    padding: 0 15px;
  }

  .left a, .right a {
    @media (max-width: 576px) {
      padding: 0 10px;
    }
  }

  .tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }

  .pub-btn {
    background-color: #FFF;
    border: #8a6d3b 1px solid;
    color: #8a6d3b
  }

  .show-small {
    display: none;
  }

  @media (max-width: 1000px) {
    .hide-small {
      display: none;
    }
    .show-small {
      display: block;
    }
  }

  .pub-news {
    padding: 50px;
    padding-top: 30px;
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
    .btn {
      width: 100%;
    }

    .btn-wraper {
      margin-top: 10px;
    }

    .title {
      text-align: center;
      padding-bottom: 20px;
    }

    .close {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }

</style>
