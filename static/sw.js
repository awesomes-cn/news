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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/2.nuxt.bundle.f7c75293c6fe75739543.js",
    "revision": "41f45af33b91b38024fcbbc3a4d12814"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/22.nuxt.bundle.c0c57e886afd77f4de99.js",
    "revision": "ad5327c4dce7edb23b123210d73720e4"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/3.nuxt.bundle.bccf0cfc43d51f1830e8.js",
    "revision": "278a78ade5ba7f72ad7bfc3887c9aa60"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/4.nuxt.bundle.aa661ce038dd116c325f.js",
    "revision": "aa3224e071d5c37522eaaf76290b7ec3"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/7.nuxt.bundle.5283b8cd32c032cb8b40.js",
    "revision": "3bffb00e09893a083c3f70af7a8cb85a"
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
    "revision": "3ab6ab9fb863280069019fd0991257ef"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.bddc00d13a23a21d0238.js",
    "revision": "4c7f3343293a8f6d11bccd59fdc5cd4e"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/nuxt.bundle.674155e135419e9561f5.js",
    "revision": "3f04e87aa885c995a50cf65301cd74f8"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/server-bundle.json",
    "revision": "62a0e1d070eb12ab5998e073d43ada33"
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
