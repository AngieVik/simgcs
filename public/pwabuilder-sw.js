/*
  Esta es una estrategia de service worker "Cache First".

  Cachea cada solicitud tan pronto como se realiza y responde desde la caché
  cuando sea posible. Si no está en la caché, va a la red.
*/

const CACHE_NAME = 'gcs-simulator-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/services/geminiService.ts',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/wallpapercodigo3.gif',
  '/wallpapercodigo3-2.gif',
  '/wallpapercodigo3-3.gif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});