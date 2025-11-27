/*
  Estrategia: Cache First (Caché primero, luego red).
  Los archivos de esta lista se descargan al instalar la app.
*/

const CACHE_NAME = 'gcs-simulator-cache-v2.1'; // Subimos versión para forzar actualización

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Rutas actualizadas a las nuevas carpetas:
  '/icons/icon-192.png', 
  '/icons/icon-512.png',
  '/icons/ambulance-shortcut.png',
  '/icons/codigo3-shortcut.png'
];
  // NOTA: No incluimos screenshots ni música aquí.
  // - La música se guardará sola cuando el usuario la reproduzca (Runtime Caching).
  // - Los screenshots son para la "tienda", no hace falta que el usuario los descargue.


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Abriendo caché e instalando archivos core...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Estrategia de Runtime Caching:
// Si un archivo (como una canción) no está en la lista de arriba,
// lo intentamos buscar en la red y, si lo encontramos, lo guardamos para la próxima.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 1. Si está en caché, lo devolvemos
        if (response) {
          return response;
        }

        // 2. Si no, lo pedimos a internet
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Si la respuesta no es válida, la devolvemos tal cual
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 3. Si es válida (ej: el usuario desbloqueó la música), la guardamos en caché
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

// Limpieza de cachés antiguas
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