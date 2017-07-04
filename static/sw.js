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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/0.nuxt.bundle.26e79cd99b8bfabdf9e1.js",
    "revision": "3a712f277f6f03b71bc08e15283242a0"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/1.nuxt.bundle.c536868db4bbe12e02b4.js",
    "revision": "4523d3d1d69ad0cef697ec5c6ebb9cff"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/10.nuxt.bundle.cd647ad5b285daa60f8e.js",
    "revision": "dec8fe499ec0efd67efa8aebd5cd2936"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/11.nuxt.bundle.4209f73727a343317cb3.js",
    "revision": "8376f457e4c76a68db91940e690428c5"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/12.nuxt.bundle.f4c2ac70512c70a17adf.js",
    "revision": "2a161934274000a89c6915f3545a0d74"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/13.nuxt.bundle.a6c26ec6a498d6eee1da.js",
    "revision": "fb6b78ccf6a4178ae6725fe5737b0ddc"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/14.nuxt.bundle.0c6777c5a2f0f3c04478.js",
    "revision": "496ce3f75160da796b54aaa79cf19319"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/15.nuxt.bundle.dfccbddfd7cc7206f34a.js",
    "revision": "fc7c44b6feec3d752d92049e6d52ec54"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/16.nuxt.bundle.c46bc3c3653ac5d86188.js",
    "revision": "5c9e19a8f5f07f8d46b2beaed10d1a0b"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/17.nuxt.bundle.c9950c16f69191b56f7b.js",
    "revision": "43e2a0b6b04075c2fab2dfa947b1848c"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/18.nuxt.bundle.059c67990a46e8e04f85.js",
    "revision": "bd977dd86b4c727a61ce8078b48cf908"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/19.nuxt.bundle.eb73510c075fd97b6945.js",
    "revision": "a67988f58bdef7a75582c6936e78e295"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/2.nuxt.bundle.dd919ba4ee648cd63679.js",
    "revision": "0467aba3f9c460ed0cf4866841bd17a9"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/22.nuxt.bundle.759e57b8084df1a17e0a.js",
    "revision": "1fb81cbdcb872e054729d793f33eabb9"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/3.nuxt.bundle.50e63a4d275b4744b464.js",
    "revision": "7290a995cfdb42c546e8fa645555e48a"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/4.nuxt.bundle.13f16233af8c0620224e.js",
    "revision": "9d89e1ff39d46dd61dd1cdbd078d7f50"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/5.nuxt.bundle.ec739deb7dad92d9a0bc.js",
    "revision": "12025fd01b8377b58386a2237806a553"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/6.nuxt.bundle.e34c36c8a0fe1432e97b.js",
    "revision": "bd2dfebc55b924d6e786c1aedb53bcf5"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/7.nuxt.bundle.9bd01674ff676dd99489.js",
    "revision": "47426667d7db6ff0e5ae29229c5f2a81"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/8.nuxt.bundle.a21876a8f3859fa9f955.js",
    "revision": "0425aec4292ea9ecb281fc6995970c44"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/9.nuxt.bundle.df9487f11e5779c7f9ef.js",
    "revision": "a94545e1bc2ab05038dcf5763d4bb88b"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/client-manifest.json",
    "revision": "fad8d40ad46d661576bfa0f47a6807de"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.4947a2c8237cac71fdce.js",
    "revision": "b23f19b1c262db1c356c5438ec446b42"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/nuxt.bundle.8db407a87a84a4cb617c.js",
    "revision": "78148900263ac4bcb9dcf07fc9f532bb"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/server-bundle.json",
    "revision": "9d82350b335700db55b7bf8fff9971ad"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/vendor.bundle.2bfbdd0fcfa352d424a3.js",
    "revision": "139093059aa01655e6ac2fbf163fd2c0"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
