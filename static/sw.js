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
    "url": "23.6fb7dc539b42472de449.js",
    "revision": "af30b342c34101b3e588f58c93a464d8"
  },
  {
    "url": "app.4d6dcd71ecc424d97e83.js",
    "revision": "156d958f28fe27c7db0fb0d17d9ef5e1"
  },
  {
    "url": "index.spa.html",
    "revision": "f13dd14e7343e76e6b84a785f1fdb66c"
  },
  {
    "url": "index.ssr.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "layouts/blank.bfba5d485fa18d372f53.js",
    "revision": "ba2d071bcd4169665daa42d13fcfe718"
  },
  {
    "url": "layouts/default.3cc6dc7d15078b1560c6.js",
    "revision": "5119ef183315c25cfa3cde0e82601842"
  },
  {
    "url": "manifest.0d090c81.json",
    "revision": "f3966fe6dfba9ca89e79a19738c425fc"
  },
  {
    "url": "manifest.1bab0aadf3cc19e9392a.js",
    "revision": "1e6af3127a6ae17cead1605117b3edf8"
  },
  {
    "url": "pages/develop/icons.0850d75c0e5ef8dce5d7.js",
    "revision": "88229b34a77f9ec26f7ef7f79c3ddd16"
  },
  {
    "url": "pages/index.17524fe8fd9f000558fd.js",
    "revision": "29c3e1c96dc225c1c63131acf8594946"
  },
  {
    "url": "pages/mem.a2bb63228bc0bf3c4394.js",
    "revision": "d5ec45c04e8d1131262b5f22ca24a959"
  },
  {
    "url": "pages/mem/_id/collects/news.8d0c8875544e4aea6d81.js",
    "revision": "bd852da249f081a07b7d4e6832eedde9"
  },
  {
    "url": "pages/mem/_id/index.373c8f067fc6118453c4.js",
    "revision": "26542b23ef402a547686a9d526e847c2"
  },
  {
    "url": "pages/mem/_id/pubs/news.88fa94ed22792382f44f.js",
    "revision": "793ad08093921a7e665a9896b90867ad"
  },
  {
    "url": "pages/news/_id/index.411e629c5ea345a7f3fc.js",
    "revision": "755d020c2cfae510ed532b50f3428be7"
  },
  {
    "url": "pages/news/_id/screenshot.d57b40114398a4218a57.js",
    "revision": "3ec67061ae09c92156e222f3681bcbb3"
  },
  {
    "url": "pages/news/_id/share.3a83602e61703b93798f.js",
    "revision": "6e9cf098bab9e5cad04183b96e79081e"
  },
  {
    "url": "pages/notifications.c8ffc9bc67e77a186f36.js",
    "revision": "b26e96a5d6f9cf0a0e2e3367c344f44c"
  },
  {
    "url": "pages/pub.784e35e20afc54c258dc.js",
    "revision": "e90f33ebbeecc6d1dbf63d2a14214c47"
  },
  {
    "url": "pages/site.d54b03b922e816378827.js",
    "revision": "2e56b825a64250d3527d0e4dd572e744"
  },
  {
    "url": "pages/site/about.317e6d4a0b03583e0317.js",
    "revision": "6d2b7a28cee635fe1f4395673615a934"
  },
  {
    "url": "pages/site/capa.9a8556dfd401714cec93.js",
    "revision": "36dda38f849d00266e1cbbcdad39a1f9"
  },
  {
    "url": "pages/site/contact.a99db2fc3d2c735bbc24.js",
    "revision": "dc165dc544ba3c01f1cd2faca807ae86"
  },
  {
    "url": "pages/site/history.5b8a1543048b964c232e.js",
    "revision": "35536c762a69e42cccd60d36b33294d1"
  },
  {
    "url": "pages/site/link.b17dd75227f77ddd7ebd.js",
    "revision": "aaa2138f740e266ca242c39f0864f96b"
  },
  {
    "url": "pages/test.b646d67a2592ab69f306.js",
    "revision": "eab0c104369227d23b25eea13292a10f"
  },
  {
    "url": "pages/webker.05b836f9e2f99be8c98a.js",
    "revision": "1748a5c24a6ee786662765d15427c123"
  },
  {
    "url": "server-bundle.json",
    "revision": "4f167ff18a4c9dedbb2bad3ff6a434b5"
  },
  {
    "url": "vendor.25770aac78d553b2b9dc.js",
    "revision": "2cfc4a81492ae6d0b36dd95625a3f4f6"
  },
  {
    "url": "vue-ssr-client-manifest.json",
    "revision": "2764726f2992cb308eec9a2fc4057b97"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "new-awesomes_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/https:\/\/ofm2qnhj5.qnssl.com\/.nuxt\/dist\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
