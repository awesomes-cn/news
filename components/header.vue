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

          a.pub-btn(href="javascript:void(0)" @click="ishowPub++")
            icon(name="plus"  width="20px") 发布情报
    
    // 发布情报
    pub(:isshow="ishowPub")
    // 登录框
    login   

</template>

<script>
  import Cookie from 'js-cookie'
  import Login from './login'
  import Loading from '~components/loading'
  import Pub from '~components/pub'
  export default {
    data () {
      return {
        isHideMenu: true,
        showmemeus: false,
        searchKey: '',
        ishowPub: 1
      }
    },
    components: {
      Login,
      Pub,
      Loading
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
        Cookie.set('awlogin', null, {domain: window.location.hostname.replace(/^\w+/, '')})
        this.$store.commit('setUser', null)
        this.$alert('success', '注销成功！')
      },
      // 搜索
      searchGo: function () {
        if (this.searchKey.trim() === '') {
          return
        }
        this.$router.push({path: '/search', query: {q: this.searchKey}})
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
    color: #449d44;
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

</style>
