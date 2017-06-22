'use strict'

const debug = require('debug')('nuxt:render')
debug.color = 4 // force blue color
import Vue from 'vue'

import { stringify } from 'querystring'
import { omit } from 'lodash'
import middleware from './middleware'
import { app, router, store, NuxtError } from './index'
import { applyAsyncData, getMatchedComponents, getContext, promiseSeries, promisify, urlJoin } from './utils'

const isDev = true
const _app = new Vue(app)

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  // Add store to the context
  context.store = store
  // Nuxt object
  context.nuxt = { layout: 'default', data: [], error: null, state: null, serverRendered: true }
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false
  context.next = function (opts) {
    context.redirected = opts
    // if nuxt generate
    if (!context.res) {
      context.nuxt.serverRendered = false
      return
    }
    opts.query = stringify(opts.query)
    opts.path = opts.path + (opts.query ? '?' + opts.query : '')
    opts.path = urlJoin('/', opts.path)
    context.res.writeHead(opts.status, {
      'Location': opts.path
    })
    context.res.end()
  }
  // Add meta infos
  context.meta = _app.$meta()
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app)

  const s = isDev && Date.now()
  let ctx = null
  let componentsLoaded = false
  let Components = []
  let promises = getMatchedComponents(router.match(context.url)).map((Component) => {
    return new Promise((resolve, reject) => {
      const _resolve = (Component) => {
        if (!Component.options) {
          Component = Vue.extend(Component) // fix issue #6
          Component._Ctor = Component
        } else {
          Component._Ctor = Component
          Component.extendOptions = Component.options
        }
        // For debugging purpose
        if (!Component.options.name && Component.options.__file) {
          Component.options.name = Component.options.__file
        }
        resolve(Component)
      }
      Component().then(_resolve).catch(reject)
    })
  })
  return Promise.all(promises)
  .then((_Components) => {
    componentsLoaded = true
    Components = _Components
    // set router's location
    return new Promise((resolve) => {
      router.push(context.url, resolve)
    })
  })
  .then(() => {
    // Add route to the context
    context.route = router.currentRoute
    // Update context
    ctx = getContext(context)
    // nuxtServerInit
    
      let promise = (store._actions && store._actions.nuxtServerInit ? store.dispatch('nuxtServerInit', omit(getContext(context), 'redirect', 'error')) : null)
      if (!promise || (!(promise instanceof Promise) && (typeof promise.then !== 'function'))) promise = Promise.resolve()
    
    return promise
  })
  .then(() => {
    // Sanitize Components
    Components = Components.map((Component) => {
      let promises = []
      if (!Component.options) {
        Component = Vue.extend(Component)
        Component._Ctor = Component
      } else {
        Component._Ctor = Component
        Component.extendOptions = Component.options
      }
      return Component
    })
    // Call global middleware (nuxt.config.js)
    let midd = ["auth","i18n","notification"]
    midd = midd.map((name) => {
      if (typeof middleware[name] !== 'function') {
        context.nuxt.error = context.error({ statusCode: 500, message: 'Unknown middleware ' + name })
      }
      return middleware[name]
    })
    if (context.nuxt.error) return
    return promiseSeries(midd, ctx)
  })
  .then(() => {
    // Set layout
    let layout = Components.length ? Components[0].options.layout : NuxtError.layout
    if (typeof layout === 'function') {
      layout = layout(ctx)
    }
    return _app.loadLayout(layout).then(() => _app.setLayout(layout))
  })
  .then((layout) => {
    // Set layout to __NUXT__
    context.nuxt.layout = _app.layoutName
    // Call middleware (layout + pages)
    let midd = []
    if (layout.middleware) {
      midd = midd.concat(layout.middleware)
    }
    Components.forEach((Component) => {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware)
      }
    })
    midd = midd.map((name) => {
      if (typeof middleware[name] !== 'function') {
        context.nuxt.error = context.error({ statusCode: 500, message: 'Unknown middleware ' + name })
      }
      return middleware[name]
    })
    if (context.nuxt.error) return
    return promiseSeries(midd, ctx)
  })
  .then(() => {
    // Call .validate()
    let isValid = true
    Components.forEach((Component) => {
      if (!isValid) return
      if (typeof Component.options.validate !== 'function') return
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query  || {}, store: ctx.store
      })
    })
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false
      }
      // Call the 404 error by making the Components array empty
      Components = []
      return _app
    }
    // Call asyncData & fetch hooks on components matched by the route.
    return Promise.all(Components.map((Component) => {
      let promises = []
      if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
        let promise = promisify(Component.options.asyncData, ctx)
        // Call asyncData(context)
        promise.then((asyncDataResult) => {
          applyAsyncData(Component, asyncDataResult)
          return asyncDataResult
        })
        promises.push(promise)
      } else {
        promises.push(null)
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx))
      } else {
        promises.push(null)
      }
      return Promise.all(promises)
    }))
  })
  .then((res) => {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.' })
      context.nuxt.state = store.state
      return _app
    }
    
      debug('Data fetching ' + context.url + ': ' + (Date.now() - s) + 'ms')
    
    // datas are the first row of each
    context.nuxt.data = res.map((r) => (r[0] || {}))
    context.nuxt.error = _app.$options._nuxt.err
    // Add the state from the vuex store
    context.nuxt.state = store.state
    // If no error, return main app
    if (!context.nuxt.error) {
      return _app
    }
    // Load layout for error page
    let layout = (typeof NuxtError.layout === 'function' ? NuxtError.layout(ctx) : NuxtError.layout)
    context.nuxt.layout = layout || ''
    return _app.loadLayout(layout)
    .then(() => _app.setLayout(layout))
    .then(() => _app)
  })
  .catch(function (error) {
    if (error instanceof Error || error.constructor.toString().indexOf('Error()') !== -1) {
      return Promise.reject(error)
    }
    if (typeof error === 'string') {
      error = { statusCode: 500, message: error }
    }
    context.nuxt.error = context.error(error)
    context.nuxt.state = store.state
    return _app
  })
}
