importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/0.nuxt.bundle.4b15eaf75b346ced3aa7.js",
    "revision": "23e36503b0f61984cc9516d991e95e41"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/1.nuxt.bundle.821a02507303fa502cd5.js",
    "revision": "c218c4bcd369c7bc318ce4fcf4be0b6c"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/10.nuxt.bundle.e0c62377fea000c5874f.js",
    "revision": "7a5c608d92a2231bdd46000ba9edccb8"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/11.nuxt.bundle.08e51f4122354f19c081.js",
    "revision": "c74c7ec0fd167565059da0d8e3f8ea43"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/12.nuxt.bundle.d1f65a46a366930b609b.js",
    "revision": "26992a122ec47e529757871d2ec49e89"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/13.nuxt.bundle.5131042a71e36bb28e10.js",
    "revision": "c56482a11194e108f5471721acbcc107"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/14.nuxt.bundle.9f568dbcf165a9a289a7.js",
    "revision": "194a1997a9176b2e80aea4d7da1920ee"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/15.nuxt.bundle.fa15173c91d60c292a89.js",
    "revision": "a927d3c18dcf8993a142cdbfb4dd0aae"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/16.nuxt.bundle.3b1df8171a281e6508e0.js",
    "revision": "f7262dd0b7635b90431d9dc7c1dc4428"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/17.nuxt.bundle.e6e782e09b850b903716.js",
    "revision": "78cdc569fd454100979e7e1427cccfb1"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/18.nuxt.bundle.5ec940aa4c598db23bbb.js",
    "revision": "3f249e29af6201d7dd15e6a11bc79ba1"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/19.nuxt.bundle.2bce71d7aedaf85955d2.js",
    "revision": "85ace927e3346549fe6e8238fff19496"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/2.nuxt.bundle.f1b74e647dd3288bb9c5.js",
    "revision": "a26aa4bf2dbf20e42c8c2277821dc130"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/22.nuxt.bundle.c0c57e886afd77f4de99.js",
    "revision": "ad5327c4dce7edb23b123210d73720e4"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/3.nuxt.bundle.8e773c864dfacdc9977e.js",
    "revision": "c0213cc3b5c6ffbdbc33b4765004b9d6"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/4.nuxt.bundle.095754d702e8067d64f4.js",
    "revision": "30e814c8731587f687b9f8f3506aba79"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/5.nuxt.bundle.a5b7bda5f9184bbd9f1f.js",
    "revision": "4a92601886b30298a28327c8a430dc5c"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/6.nuxt.bundle.b5a15507b0ee13411683.js",
    "revision": "05297d38a6b6be008e9f8c9d9368ec70"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/7.nuxt.bundle.53b13f72da410ed92c33.js",
    "revision": "ca78b646b7158475bdabe1e1d5aa3fd4"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/8.nuxt.bundle.ee9642ff95b86042203d.js",
    "revision": "4752e6ce28ba9a183c62c0d413a790e9"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/9.nuxt.bundle.b839064abf0c18d86856.js",
    "revision": "5f2fe020fe7c8860596abfea3da3a633"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/client-manifest.json",
    "revision": "7788b251a6e5afe0a2699d31b96cd30e"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.0d090c81.json",
    "revision": "f3966fe6dfba9ca89e79a19738c425fc"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.4e703d4f707b9f88a1e9.js",
    "revision": "a3448416d2518be1dfbd5a83ded90cce"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/nuxt.bundle.674155e135419e9561f5.js",
    "revision": "3f04e87aa885c995a50cf65301cd74f8"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/server-bundle.json",
    "revision": "a49bb95cd8b4575db4d9cd91338d779f"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/vendor.bundle.384c3f533c36abd6f138.js",
    "revision": "d22112a31c4d7ee08e790c59fa8f4dd5"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
