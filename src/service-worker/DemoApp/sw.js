const CACHE_NAME = 'demoapp-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        './index.html',
        './style.css',
        './main.js',
        './Gemini_Generated_Image_brhh44brhh44brhh.png',
      ]);
    }),
  );
});

self.addEventListener('activate', (event) => {
  // remove any old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});

self.addEventListener('fetch', (event) => {
  // fetch the resource from the network then cache it if not newtwork  then return the cached resource
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        // update the cache with the new response
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        console.log('Network request successful, Network response returned');
        return response;
      })
      .catch(() => {
        console.log('Network request failed, returning cached response');
        return caches.match(event.request).then((file) => file);
      }),
  );
});
