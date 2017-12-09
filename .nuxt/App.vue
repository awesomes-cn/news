<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import 'C:\\Users\\HXH\\Desktop\\news\\node_modules\\.4.0.0-beta.2@bootstrap\\dist\\css\\bootstrap.css'

import 'C:\\Users\\HXH\\Desktop\\news\\node_modules\\.1.9.0@prismjs\\themes\\prism.css'

import 'C:\\Users\\HXH\\Desktop\\news\\node_modules\\.3.5.2@animate.css\\animate.css'

import '..\\assets\\css\\main.css'


let layouts = {

  "_blank": () => import('..\\layouts\\blank.vue'  /* webpackChunkName: "layouts\\blank" */).then(m => m.default || m),

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts\\default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"前端情报局","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"前端最新新闻，最新框架发布，小知识点最新前端资讯和情报"},{"hid":"keywords","name":"keywords","content":"前端,情报,小知识"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"manifest","href":"/_nuxt/manifest.0d090c81.json"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

