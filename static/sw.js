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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/0.nuxt.bundle.5573438dff5cb5f100ad.js",
    "revision": "b210d4494889e9fba463331847d7e344"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/1.nuxt.bundle.afacd55f19cd3000e81f.js",
    "revision": "af782dfa0ab6c34f8b838ffd88267aec"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/10.nuxt.bundle.662f94b081b9c7f901a3.js",
    "revision": "940eb2b2135aa306936816daa0e2440a"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/11.nuxt.bundle.397ac38f3855c519b048.js",
    "revision": "7ef4199df948c523caddf5e9c42af7d6"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/12.nuxt.bundle.72aa9b7db8a2c452caed.js",
    "revision": "6591f324ee657b99a3a195e514488d08"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/13.nuxt.bundle.663295235c1b6c8555bb.js",
    "revision": "a082c97bc2c1848020f4cac3040ba526"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/14.nuxt.bundle.c3749ced3a4f150d7349.js",
    "revision": "dee149195bf6a2bc6bf8c972869046a4"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/15.nuxt.bundle.8e425ea889d247eea96c.js",
    "revision": "0da03247d44c64a04462ebdcd0b3fc52"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/16.nuxt.bundle.d6489eb56eb0b037854f.js",
    "revision": "188dc92dd44e615c344e3f8a32bfe056"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/17.nuxt.bundle.191f88f9b618cb5c0c67.js",
    "revision": "d4064e215d10914963d7af1fd091a8cf"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/18.nuxt.bundle.04de159afe09de0e07c7.js",
    "revision": "e0d0ff30481d9ceee74663f6c13f431b"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/19.nuxt.bundle.71987b92364ad09d1a74.js",
    "revision": "e25bbd1d8049347860cae602a808e2d0"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/2.nuxt.bundle.14e29d8cbc79cd0f9fdc.js",
    "revision": "073e927834bb7a6b664c0fc8b9c07c2d"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/22.nuxt.bundle.ead6540ee48dc4276d34.js",
    "revision": "a34585be3bd39d74b1597e61349e7f3e"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/3.nuxt.bundle.a0e45f1498f8a48ece83.js",
    "revision": "2f3e50d69adcdca48b001280d9419d70"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/4.nuxt.bundle.da854ce16005232c2c7a.js",
    "revision": "e08d545ae516a8bf9e33cb995be619bc"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/5.nuxt.bundle.db6001d9918ccd1c30ee.js",
    "revision": "8ec84f8384ed761b591edfa5bca26381"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/6.nuxt.bundle.5cf420f7773d7c386027.js",
    "revision": "cd1cb47b96bed8284eceb3bd75bb720f"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/7.nuxt.bundle.207d9f68865729cf5ae9.js",
    "revision": "60d2c80d5a708490d78b486c772f3dc2"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/8.nuxt.bundle.f6bf748b4ee61a608a18.js",
    "revision": "bdc7316a6ede51c14b27706982142956"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/9.nuxt.bundle.008fd52cfa157a46deb0.js",
    "revision": "f146c81db3531a1292f421cf0b238e0b"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/client-manifest.json",
    "revision": "fbe1bd4851279451338501bb420dbefb"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.f4fa6dfb1a4f2ab3a195.js",
    "revision": "39b09e308585465c2939e4c46a1f3c5f"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/nuxt.bundle.15ea6e3c7bd5d81611bb.js",
    "revision": "fa91223589dd2fee6e11f8cf48ffc8e9"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/server-bundle.json",
    "revision": "c9adb7a4274c3b38a25f050963d0dc5d"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/vendor.bundle.25fee610ed6e69d27023.js",
    "revision": "a82ea0e112c63c3e2d4ce955894245c3"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
