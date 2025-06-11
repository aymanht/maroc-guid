self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('maroc-guid-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/globals.css',
        '/placeholder-logo.png',
        '/placeholder-logo.svg',
        '/community',
        '/learning',
        '/location-alerts',
        '/profile',
        '/translation'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
