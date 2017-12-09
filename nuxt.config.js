const Config = require('./config')
let PWAIcons = [16, 120, 144, 152, 192, 384, 512].map(size => {
  return {
    src: `${Config.CDN}icon_${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png'
  }
})

module.exports = {
  /*
  ** Headers of the page
  */
  cache: {
    max: 1000,
    maxAge: 900000
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['auth', 'i18n', 'notification']
  },
  head: {
    title: '前端情报局',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '前端最新新闻，最新框架发布，小知识点最新前端资讯和情报' },
      {hid: 'keywords', name: 'keywords', content: '前端,情报,小知识'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'prismjs/themes/prism.css',
    'animate.css',
    '~/assets/css/main.css'
  ],
  modules: [
    // Simple usage
    '@nuxtjs/workbox',
    '@nuxtjs/manifest'
  ],
  manifest: {
    name: '前端情报局',
    short_name: '前端情报',
    display: 'standalone',
    start_url: 'https://news.awesomes.cn/',
    theme_color: '#da552f',
    background_color: '#FFF',
    lang: 'zh-CN',
    icons: PWAIcons
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#da552f' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n', 'babel-polyfill'],
    publicPath: `${Config.CDN}.nuxt/dist/`,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vue-icon', '~/plugins/icon', '~/plugins/common', { src: '~/plugins/ba.js', ssr: false }, { src: '~/plugins/pagination.js', ssr: false }, { src: '~/plugins/upload', ssr: false }, { src: '~/plugins/i18n.js', injectAs: 'i18n' }]
}
