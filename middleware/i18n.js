// this example is https://github.com/nuxt/nuxt.js/blob/master/examples/i18n/middleware/i18n.js
export default function ({ app, req, store, route, params, error, redirect, isServer }) {
  if (isServer) {
    let locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase() || 'en'
    if (locale === 'zh') {
      locale = 'zh-cn'
    }
    store.commit('SET_LANG', locale)
    app.i18n.locale = store.state.locale
  }
}
