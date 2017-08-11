'use strict'

import Vue from 'vue'
import { stringify } from 'querystring'
import { omit } from 'lodash'
import middleware from './middleware'
import { createApp, NuxtError } from './index'
import { applyAsyncData, sanitizeComponent, getMatchedComponents, getContext, middlewareSeries, promisify, urlJoin } from './utils'
const debug = require('debug')('nuxt:render')
debug.color = 4 // force blue color

const isDev = false

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default async (context) => {
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
    if (opts.path.indexOf('http') !== 0 && ('/' !== '/' && opts.path.indexOf('/') !== 0)) {
      opts.path = urlJoin('/', opts.path)
    }
    context.res.writeHead(opts.status, {
      'Location': opts.path
    })
    context.res.end()
  }
  const { app, router, store } = await createApp(context)
  const _app = new Vue(app)
  const _noopApp = new Vue({ render: (h) => h('div') })
  // Add store to the context
  context.store = store
  // Add route to the context
  context.route = router.currentRoute
  // Nuxt object
  context.nuxt = { layout: 'default', data: [], error: null, state: null, serverRendered: true }
  // Add meta infos
  context.meta = _app.$meta()
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app)

  
  let ctx = getContext(context, app)
  let Components = []
  let promises = getMatchedComponents(router.match(context.url)).map((Component) => {
    return new Promise((resolve, reject) => {
      if (typeof Component !== 'function' || Component.super === Vue) return resolve(sanitizeComponent(Component))
      const _resolve = (Component) => resolve(sanitizeComponent(Component))
      Component().then(_resolve).catch(reject)
    })
  })
  try {
    Components = await Promise.all(promises)
  } catch (err) {
    // Throw back error to renderRoute()
    throw err
  }
  // nuxtServerInit
  
    let promise = (store._actions && store._actions.nuxtServerInit ? store.dispatch('nuxtServerInit', omit(getContext(context, app), 'redirect', 'error')) : null)
    if (!promise || (!(promise instanceof Promise) && (typeof promise.then !== 'function'))) promise = Promise.resolve()
  
  await promise
  // Call global middleware (nuxt.config.js)
  let midd = ["auth","i18n","notification"]
  midd = midd.map((name) => {
    if (typeof middleware[name] !== 'function') {
      context.nuxt.error = context.error({ statusCode: 500, message: 'Unknown middleware ' + name })
    }
    return middleware[name]
  })
  if (!context.nuxt.error) {
    await middlewareSeries(midd, ctx)
  }
  if (context.redirected) return _noopApp
  // Set layout
  let layout = Components.length ? Components[0].options.layout : NuxtError.layout
  if (typeof layout === 'function') layout = layout(ctx)
  await _app.loadLayout(layout)
  layout = _app.setLayout(layout)
  // Set layout to __NUXT__
  context.nuxt.layout = _app.layoutName
  // Call middleware (layout + pages)
  midd = []
  if (layout.middleware) midd = midd.concat(layout.middleware)
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
  if (!context.nuxt.error) {
    await middlewareSeries(midd, ctx)
  }
  if (context.redirected) return _noopApp
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
  // If .validate() returned false
  if (!isValid) {
    // Don't server-render the page in generate mode
    if (context._generate) {
      context.nuxt.serverRendered = false
    }
    // Call the 404 error by making the Components array empty
    Components = []
  }
  // Call asyncData & fetch hooks on components matched by the route.
  let asyncDatas = await Promise.all(Components.map((Component) => {
    let promises = []
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      let promise = promisify(Component.options.asyncData, ctx)
      // Call asyncData(context)
      promise.then((asyncDataResult) => {
        applyAsyncData(Component, asyncDataResult)
        return asyncDataResult
      })
      promises.push(promise)
    } else promises.push(null)
    // call fetch(context)
    if (Component.options.fetch) promises.push(Component.options.fetch(ctx))
    else promises.push(null)
    return Promise.all(promises)
  }))
  // If no Components found, returns 404
  if (!Components.length) {
    context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.' })
  }
  
  // datas are the first row of each
  context.nuxt.data = asyncDatas.map((r) => (r[0] || {}))
  // If an error occured in the execution
  if (_app.$options._nuxt.err) {
    context.nuxt.error = _app.$options._nuxt.err
  }
  // Add the state from the vuex store
  context.nuxt.state = store.state
  // If no error, return main app
  if (!context.nuxt.error) {
    return _app
  }
  // Load layout for error page
  layout = (typeof NuxtError.layout === 'function' ? NuxtError.layout(ctx) : NuxtError.layout)
  context.nuxt.layout = layout || ''
  await _app.loadLayout(layout)
  _app.setLayout(layout)
  return _app
    // if (typeof error === 'string') {
    //   error = { statusCode: 500, message: error }
    // }
    // context.nuxt.error = context.error(error)
    // context.nuxt.state = store.state
    // return _app
}
