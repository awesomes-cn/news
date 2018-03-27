importScripts('workbox-sw.prod.v1.3.0.js');

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
    "url": "22.b0c46f8ed14bf457ba66.js",
    "revision": "51c1a44bc4abbd2ed62f6c91bf812988"
  },
  {
    "url": "app.0c3d9a96ab179c17e23a.js",
    "revision": "c9b74a7ea9b510698f43f8b4de8a429e"
  },
  {
    "url": "index.spa.html",
    "revision": "3df28270a6440ec798283ca1402d71d3"
  },
  {
    "url": "index.ssr.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "layouts/blank.d880f9de2f360286e7db.js",
    "revision": "34a8f32e9ea47faae5f3fffb027dcb57"
  },
  {
    "url": "layouts/default.d9b45c49c4ef93358819.js",
    "revision": "0c6f56e6ee02d648eb20fb0b2581d965"
  },
  {
    "url": "manifest.0d090c81.json",
    "revision": "f3966fe6dfba9ca89e79a19738c425fc"
  },
  {
    "url": "manifest.458a75b839e826bb8467.js",
    "revision": "f094b5038443c55cd808dfcad9772e0a"
  },
  {
    "url": "pages/develop/icons.bf17974fca30c4dc78cd.js",
    "revision": "964ed52b477d3c236cb7575a0e2aeec5"
  },
  {
    "url": "pages/index.87a2da1456d3436b32cc.js",
    "revision": "0e10ba0ed4926d79f6e74ecb2a47ccd9"
  },
  {
    "url": "pages/mem.c196b38954f7ce84e0ed.js",
    "revision": "6cadf7c46905167e1fa04ff555582b00"
  },
  {
    "url": "pages/mem/_id/index.ccfc256e7db7838d9d46.js",
    "revision": "4a044bfc6205e4f9b790a52346cd0df4"
  },
  {
    "url": "pages/mem/_id/pubs/news.a0be5af3d75a3a26b0e6.js",
    "revision": "65ec632384308f1f1f65b5b340e61b3d"
  },
  {
    "url": "pages/news/_id/index.e126886a7ceb4c2002c6.js",
    "revision": "a9bf1ab0f0dbe75ac148022b3855220c"
  },
  {
    "url": "pages/news/_id/screenshot.5d84cf2cae412ce03772.js",
    "revision": "b2a4edc4114d685156df7b63f7b58a1a"
  },
  {
    "url": "pages/news/_id/share.95bdedc19a9527e42d6b.js",
    "revision": "77556ea830be12a071a5d2b763669e2b"
  },
  {
    "url": "pages/notifications.97a4ceba13c9cb6f4f1e.js",
    "revision": "c5d8ec871a0b1f22a7fafd1895791b7a"
  },
  {
    "url": "pages/pub.c60952ef3c9779b7fc6b.js",
    "revision": "b3b6abb05c7d5066ed167f86b84bbd00"
  },
  {
    "url": "pages/site.3002a68d93782d1666ba.js",
    "revision": "77265dbb699ebfb335a607b50fec6eb5"
  },
  {
    "url": "pages/site/about.f7b33db3ce0da38e36fc.js",
    "revision": "7ff2d3f3b93d37523e96a5d068b06b89"
  },
  {
    "url": "pages/site/capa.cb9690892c58c3688f74.js",
    "revision": "2b5a994c5c3333fc344b2c92ccba0147"
  },
  {
    "url": "pages/site/contact.39858a374cdca7946d4e.js",
    "revision": "21b97015c01707341af2c9ad67e0d4a8"
  },
  {
    "url": "pages/site/history.f09d52dcf7f4aad25d47.js",
    "revision": "dddfee81c7896a7f765abc553522b638"
  },
  {
    "url": "pages/site/link.b064a6aa230a655f2954.js",
    "revision": "cbc2bd903ebd3a38d6c4e6fde8648dc5"
  },
  {
    "url": "pages/test.34fbacde111b0c65e15f.js",
    "revision": "e6c51e0fec80cc0ab702d52cc4b7ef7b"
  },
  {
    "url": "pages/webker.e2add3e64bd8609df109.js",
    "revision": "1245942bebd2a85b66611e261a238059"
  },
  {
    "url": "server-bundle.json",
    "revision": "fac545b161d021a27a1507521eb50ab0"
  },
  {
    "url": "vendor.493a53c088d479016098.js",
    "revision": "53c9ce27a3d9735608b37e7aa8b4f526"
  },
  {
    "url": "vue-ssr-client-manifest.json",
    "revision": "bb08722ef1b24e8c6bc062801b993670"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
