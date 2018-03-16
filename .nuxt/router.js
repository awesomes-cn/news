import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _691bd4e5 = () => import('../pages/webker.vue' /* webpackChunkName: "pages/webker" */).then(m => m.default || m)
const _26581e33 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _25e78c28 = () => import('../pages/pub.vue' /* webpackChunkName: "pages/pub" */).then(m => m.default || m)
const _da1d5330 = () => import('../pages/site.vue' /* webpackChunkName: "pages/site" */).then(m => m.default || m)
const _2df074f1 = () => import('../pages/site/link.vue' /* webpackChunkName: "pages/site/link" */).then(m => m.default || m)
const _e1c4120e = () => import('../pages/site/contact.vue' /* webpackChunkName: "pages/site/contact" */).then(m => m.default || m)
const _b894d7b4 = () => import('../pages/site/about.vue' /* webpackChunkName: "pages/site/about" */).then(m => m.default || m)
const _3a9e6574 = () => import('../pages/site/capa.vue' /* webpackChunkName: "pages/site/capa" */).then(m => m.default || m)
const _bcad4526 = () => import('../pages/site/history.vue' /* webpackChunkName: "pages/site/history" */).then(m => m.default || m)
const _4f51cd97 = () => import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */).then(m => m.default || m)
const _33a700c4 = () => import('../pages/mem.vue' /* webpackChunkName: "pages/mem" */).then(m => m.default || m)
const _3a2883b2 = () => import('../pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem/_id/index" */).then(m => m.default || m)
const _456a260c = () => import('../pages/mem/_id/pubs/news.vue' /* webpackChunkName: "pages/mem/_id/pubs/news" */).then(m => m.default || m)
const _55855597 = () => import('../pages/develop/icons.vue' /* webpackChunkName: "pages/develop/icons" */).then(m => m.default || m)
const _4c03a2e2 = () => import('../pages/news/_id/index.vue' /* webpackChunkName: "pages/news/_id/index" */).then(m => m.default || m)
const _6193c0f4 = () => import('../pages/news/_id/screenshot.vue' /* webpackChunkName: "pages/news/_id/screenshot" */).then(m => m.default || m)
const _1dd97b6f = () => import('../pages/news/_id/share.vue' /* webpackChunkName: "pages/news/_id/share" */).then(m => m.default || m)
const _84fd38fe = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/webker",
			component: _691bd4e5,
			name: "webker"
		},
		{
			path: "/test",
			component: _26581e33,
			name: "test"
		},
		{
			path: "/pub",
			component: _25e78c28,
			name: "pub"
		},
		{
			path: "/site",
			component: _da1d5330,
			name: "site",
			children: [
				{
					path: "link",
					component: _2df074f1,
					name: "site-link"
				},
				{
					path: "contact",
					component: _e1c4120e,
					name: "site-contact"
				},
				{
					path: "about",
					component: _b894d7b4,
					name: "site-about"
				},
				{
					path: "capa",
					component: _3a9e6574,
					name: "site-capa"
				},
				{
					path: "history",
					component: _bcad4526,
					name: "site-history"
				}
			]
		},
		{
			path: "/notifications",
			component: _4f51cd97,
			name: "notifications"
		},
		{
			path: "/mem",
			component: _33a700c4,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _3a2883b2,
					name: "mem-id"
				},
				{
					path: ":id/pubs/news",
					component: _456a260c,
					name: "mem-id-pubs-news"
				}
			]
		},
		{
			path: "/develop/icons",
			component: _55855597,
			name: "develop-icons"
		},
		{
			path: "/news/:id?",
			component: _4c03a2e2,
			name: "news-id"
		},
		{
			path: "/news/:id?/screenshot",
			component: _6193c0f4,
			name: "news-id-screenshot"
		},
		{
			path: "/news/:id?/share",
			component: _1dd97b6f,
			name: "news-id-share"
		},
		{
			path: "/",
			component: _84fd38fe,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
