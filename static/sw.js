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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/0.nuxt.bundle.1252fdabb16d2da34024.js",
    "revision": "397a0f52e9b7582d828ab1b643217749"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/1.nuxt.bundle.213820b4c5ced5ab2d3a.js",
    "revision": "fb38a0719ae60d25b1701d80dab55c6d"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/2.nuxt.bundle.328ab9bde6f9606af200.js",
    "revision": "9cada644792f7f78054317a13ea8a15e"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/4.nuxt.bundle.6a3557e56de61f52657c.js",
    "revision": "16deb0b4f8699e0e44999574dc112b21"
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
    "revision": "25cfc55eb2e96a55992162ac673567d2"
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
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/manifest.b29a0f2b1753f878777c.js",
    "revision": "18549f430881e3e16c46293fb0bc563a"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/nuxt.bundle.65fa9d0f40721550bf3a.js",
    "revision": "5be3f0547c325f6f1c6fc882d465edcc"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/server-bundle.json",
    "revision": "bcd8c56440015ea0b5a734a25e76eb22"
  },
  {
    "url": "https://ofm2qnhj5.qnssl.com/.nuxt/dist/vendor.bundle.803a3c0cc787e5885135.js",
    "revision": "6d99f252f34edbdad9b2beb7adece0e8"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
