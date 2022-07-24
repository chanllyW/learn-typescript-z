/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ad24bad6394d74b575e7104c794f0561"
  },
  {
    "url": "assets/css/0.styles.e7f9ef9f.css",
    "revision": "4565a01f8ca5074cbbf0c1299f35aa71"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.afc5be73.js",
    "revision": "7e9668eb92698bd10e43005db4fc0eb5"
  },
  {
    "url": "assets/js/10.7fb9581a.js",
    "revision": "dbf01505d03b835e2e60c2bc189c22e2"
  },
  {
    "url": "assets/js/11.2061d569.js",
    "revision": "0cb3e91d30dca71963c9864a69eaaade"
  },
  {
    "url": "assets/js/12.eebc413f.js",
    "revision": "a2796e14ec6cdd72bf80c898e4e015e7"
  },
  {
    "url": "assets/js/13.837da854.js",
    "revision": "052acb662531af932fb007374dd3ce43"
  },
  {
    "url": "assets/js/14.516def21.js",
    "revision": "1e3138ae9e43309eea3f00671d8e8c04"
  },
  {
    "url": "assets/js/15.cbe8bc4a.js",
    "revision": "7108b67145e4a8b428b5cf4e12e2bc40"
  },
  {
    "url": "assets/js/3.4aa214d1.js",
    "revision": "150066af58ead38bf758178ecbf8ed6d"
  },
  {
    "url": "assets/js/4.04a65b1b.js",
    "revision": "9f8ea73a26ab3b30aeb9c3ada11d604d"
  },
  {
    "url": "assets/js/5.eb14f53f.js",
    "revision": "7d4313ba1b17eba71086c2880fd5d274"
  },
  {
    "url": "assets/js/6.79cff2a0.js",
    "revision": "f52db7cab08dfe15d6bdbae30df97b44"
  },
  {
    "url": "assets/js/7.02f38e76.js",
    "revision": "44b35c50174ee2e7796ccdd61a354244"
  },
  {
    "url": "assets/js/8.16ba307d.js",
    "revision": "8de646d857e3d1bc2c0ff59f6a6038a8"
  },
  {
    "url": "assets/js/9.dd5f2ad6.js",
    "revision": "0e7d80d5985285bd1e13a2bc61101cca"
  },
  {
    "url": "assets/js/app.f5f53e80.js",
    "revision": "4600caf25adb38786a9908570e407fe1"
  },
  {
    "url": "categories/index.html",
    "revision": "62e190dd625a0f4bfcd3be7463610ac7"
  },
  {
    "url": "handbook/ConditionalTypes.html",
    "revision": "09d042aad5fac09b5ca147f2634fe586"
  },
  {
    "url": "handbook/Generics.html",
    "revision": "89ec4515e537d6482991fea21487520b"
  },
  {
    "url": "index.html",
    "revision": "b713cb372ced9b16c9ce6867777f2e84"
  },
  {
    "url": "tag/index.html",
    "revision": "5420a7c82497bdc55dbf330275c543a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "99ca9707d32d650ad48d2b39ff8b3ae3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
