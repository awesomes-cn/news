'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _84fd38fe = () => import('/home/hxh/share/news/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _da1d5330 = () => import('/home/hxh/share/news/pages/site.vue' /* webpackChunkName: "pages/site" */)

const _2df074f1 = () => import('/home/hxh/share/news/pages/site/link.vue' /* webpackChunkName: "pages/site-link" */)

const _e1c4120e = () => import('/home/hxh/share/news/pages/site/contact.vue' /* webpackChunkName: "pages/site-contact" */)

const _b894d7b4 = () => import('/home/hxh/share/news/pages/site/about.vue' /* webpackChunkName: "pages/site-about" */)

const _3a9e6574 = () => import('/home/hxh/share/news/pages/site/capa.vue' /* webpackChunkName: "pages/site-capa" */)

const _bcad4526 = () => import('/home/hxh/share/news/pages/site/history.vue' /* webpackChunkName: "pages/site-history" */)

const _691bd4e5 = () => import('/home/hxh/share/news/pages/webker.vue' /* webpackChunkName: "pages/webker" */)

const _26581e33 = () => import('/home/hxh/share/news/pages/test.vue' /* webpackChunkName: "pages/test" */)

const _4f51cd97 = () => import('/home/hxh/share/news/pages/notifications.vue' /* webpackChunkName: "pages/notifications" */)

const _33a700c4 = () => import('/home/hxh/share/news/pages/mem.vue' /* webpackChunkName: "pages/mem" */)

const _3a2883b2 = () => import('/home/hxh/share/news/pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem-id" */)

const _456a260c = () => import('/home/hxh/share/news/pages/mem/_id/pubs/news.vue' /* webpackChunkName: "pages/mem-id-pubs-news" */)

const _25e78c28 = () => import('/home/hxh/share/news/pages/pub.vue' /* webpackChunkName: "pages/pub" */)

const _55855597 = () => import('/home/hxh/share/news/pages/develop/icons.vue' /* webpackChunkName: "pages/develop-icons" */)

const _4c03a2e2 = () => import('/home/hxh/share/news/pages/news/_id/index.vue' /* webpackChunkName: "pages/news-id" */)

const _6193c0f4 = () => import('/home/hxh/share/news/pages/news/_id/screenshot.vue' /* webpackChunkName: "pages/news-id-screenshot" */)

const _1dd97b6f = () => import('/home/hxh/share/news/pages/news/_id/share.vue' /* webpackChunkName: "pages/news-id-share" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _84fd38fe,
			name: "index"
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
			path: "/pub",
			component: _25e78c28,
			name: "pub"
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
		}
    ]
  })
}
