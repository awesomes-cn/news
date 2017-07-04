<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

import 'bootstrap/dist/css/bootstrap.css'

import 'prismjs/themes/prism.css'

import 'animate.css'

import '~assets/css/main.css'


let layouts = {

  "_blank": () => import('/home/hxh/share/news/layouts/blank.vue'  /* webpackChunkName: "layouts/blank" */),

  "_default": () => import('/home/hxh/share/news/layouts/default.vue'  /* webpackChunkName: "layouts/default" */)

}

export default {
  head: {"title":"前端情报局","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"前端最新新闻，最新框架发布，小知识点最新前端资讯和情报"},{"hid":"keywords","name":"keywords","content":"前端,情报,小知识"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"manifest","href":"/_nuxt/manifest.81976de2.json"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

