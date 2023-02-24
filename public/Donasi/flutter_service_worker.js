'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1c98f8f903e8d79f461d2c5a40bf89e",
"index.html": "6f9b717abc58ee2f012fa78fa986f024",
"/": "6f9b717abc58ee2f012fa78fa986f024",
"main.dart.js": "752adff6ec659bb854b82989b0460d73",
"favicon.png": "22f347997df00585ac2c835a0fa3afa4",
"icons/Icon-192.png": "22f347997df00585ac2c835a0fa3afa4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f4a82460294a8bb0afa2b576e264282",
"assets/AssetManifest.json": "3f8b209d68f35bc6b442d52c7b1138a2",
"assets/NOTICES": "944185e46064ef372b3f32ce09eb17ac",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/img/favicon.ico": "556f31acd686989b1afcf382c05846aa",
"assets/assets/img/logobyi-white.jpeg": "22f347997df00585ac2c835a0fa3afa4",
"assets/assets/img/bank/BNI.webp": "2c048b0f25a76e2dfad413cf9ff1a325",
"assets/assets/img/bank/gopay.png": "0990883c4bbdd11cccfa57511b2bc8b1",
"assets/assets/img/bank/dana.png": "4232b2f2d70bfd7cc7562a7c48356ffb",
"assets/assets/img/bank/BSM.png": "34351dc32f01594b88090969af894c41",
"assets/assets/img/bank/ovo.png": "0d80cdeb60fe20fc233a7d1aa52763b8",
"assets/assets/img/bank/BNI-logo.png": "b8397be1bff2dd041e49f2ccac3795d9",
"assets/assets/img/bank/Mandiri.webp": "8cee425a56f29501bc7a0e61800db42d",
"assets/assets/img/program/lahan.jpeg": "a77c8769cebd95243a6b8704535fe45f",
"assets/assets/img/program/rLomba.jpeg": "ef0e871e0e2a5f00b4e20d383e5e5e3e",
"assets/assets/img/program/qurban_beli.jpg": "49d83412bf31fcd436523d27ff6e77d8",
"assets/assets/img/program/zakatEmas.jpeg": "09137bbd9591f0c6d60c9af4dc447658",
"assets/assets/img/program/zFidyah.jpeg": "827b4150219dbae6d2d66268567fdbfb",
"assets/assets/img/program/rDhuafaTHR.jpeg": "3524bfaa241b046c045092cb755f10e3",
"assets/assets/img/program/rTahfidz.jpeg": "c70070c1402e55dfca57dbec5a0278cc",
"assets/assets/img/program/qurban.jpg": "d96d817eb5ae31152c22c217ce857cd5",
"assets/assets/img/program/zakatFitrah.jpeg": "3ef2fb56616522c352fca7c8d9bff1b3",
"assets/assets/img/program/profesi.jpeg": "39d8ed4a0524463e5c711526142d30ee",
"assets/assets/img/program/tanah.jpg": "8514ada6ec6aa5e9c75f729ff7c27d31",
"assets/assets/img/program/rYatimTajil.jpeg": "72699df980907bbf0e80bf1c77551104",
"assets/assets/img/program/rYatimTHR.jpeg": "1592a4cb7e9f4a5740a28c7af8bf3711",
"assets/assets/img/program/rDuat.jpeg": "2921dcbc0ff108c1b62588067d2e73ab",
"assets/assets/img/program/zakat.jpg": "67a1527194cc776f78cf4912eda4cbc8",
"app.js": "1e575782399dce4a147bb6543c2b77f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
