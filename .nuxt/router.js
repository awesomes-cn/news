import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _43e6ef90 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _28a33ed1 = () => import('..\\pages\\site.vue' /* webpackChunkName: "pages\\site" */).then(m => m.default || m)
const _cd5fc2ea = () => import('..\\pages\\site\\link.vue' /* webpackChunkName: "pages\\site\\link" */).then(m => m.default || m)
const _7f10a1c2 = () => import('..\\pages\\site\\contact.vue' /* webpackChunkName: "pages\\site\\contact" */).then(m => m.default || m)
const _b769c468 = () => import('..\\pages\\site\\about.vue' /* webpackChunkName: "pages\\site\\about" */).then(m => m.default || m)
const _4e1076e0 = () => import('..\\pages\\site\\capa.vue' /* webpackChunkName: "pages\\site\\capa" */).then(m => m.default || m)
const _59f9d4da = () => import('..\\pages\\site\\history.vue' /* webpackChunkName: "pages\\site\\history" */).then(m => m.default || m)
const _59f5470e = () => import('..\\pages\\webker.vue' /* webpackChunkName: "pages\\webker" */).then(m => m.default || m)
const _87ebf2c8 = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages\\test" */).then(m => m.default || m)
const _51644b4e = () => import('..\\pages\\notifications.vue' /* webpackChunkName: "pages\\notifications" */).then(m => m.default || m)
const _d95c318a = () => import('..\\pages\\mem.vue' /* webpackChunkName: "pages\\mem" */).then(m => m.default || m)
const _2b926093 = () => import('..\\pages\\mem\\_id\\index.vue' /* webpackChunkName: "pages\\mem\\_id\\index" */).then(m => m.default || m)
const _577f2478 = () => import('..\\pages\\mem\\_id\\pubs\\news.vue' /* webpackChunkName: "pages\\mem\\_id\\pubs\\news" */).then(m => m.default || m)
const _4cb72063 = () => import('..\\pages\\pub.vue' /* webpackChunkName: "pages\\pub" */).then(m => m.default || m)
const _2af164a7 = () => import('..\\pages\\develop\\icons.vue' /* webpackChunkName: "pages\\develop\\icons" */).then(m => m.default || m)
const _dce7ca96 = () => import('..\\pages\\news\\_id\\index.vue' /* webpackChunkName: "pages\\news\\_id\\index" */).then(m => m.default || m)
const _376e9393 = () => import('..\\pages\\news\\_id\\screenshot.vue' /* webpackChunkName: "pages\\news\\_id\\screenshot" */).then(m => m.default || m)
const _6361f342 = () => import('..\\pages\\news\\_id\\share.vue' /* webpackChunkName: "pages\\news\\_id\\share" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
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
			component: _43e6ef90,
			name: "index"
		},
		{
			path: "/site",
			component: _28a33ed1,
			name: "site",
			children: [
				{
					path: "link",
					component: _cd5fc2ea,
					name: "site-link"
				},
				{
					path: "contact",
					component: _7f10a1c2,
					name: "site-contact"
				},
				{
					path: "about",
					component: _b769c468,
					name: "site-about"
				},
				{
					path: "capa",
					component: _4e1076e0,
					name: "site-capa"
				},
				{
					path: "history",
					component: _59f9d4da,
					name: "site-history"
				}
			]
		},
		{
			path: "/webker",
			component: _59f5470e,
			name: "webker"
		},
		{
			path: "/test",
			component: _87ebf2c8,
			name: "test"
		},
		{
			path: "/notifications",
			component: _51644b4e,
			name: "notifications"
		},
		{
			path: "/mem",
			component: _d95c318a,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _2b926093,
					name: "mem-id"
				},
				{
					path: ":id/pubs/news",
					component: _577f2478,
					name: "mem-id-pubs-news"
				}
			]
		},
		{
			path: "/pub",
			component: _4cb72063,
			name: "pub"
		},
		{
			path: "/develop/icons",
			component: _2af164a7,
			name: "develop-icons"
		},
		{
			path: "/news/:id?",
			component: _dce7ca96,
			name: "news-id"
		},
		{
			path: "/news/:id?/screenshot",
			component: _376e9393,
			name: "news-id-screenshot"
		},
		{
			path: "/news/:id?/share",
			component: _6361f342,
			name: "news-id-share"
		}
    ],
    fallback: false
  })
}
