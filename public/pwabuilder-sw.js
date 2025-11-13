/*
  Esta es una estrategia de service worker "Cache First".

  Cachea cada solicitud tan pronto como se realiza y responde desde la caché
  cuando sea posible. Si no está en la caché, va a la red.
*/

const CACHE_NAME = 'gcs-simulator-cache-v4'; // Incremented version
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/vite.config.ts',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/wallpapercodigo3.gif',
  '/wallpapercodigo3-2.gif',
  '/wallpapercodigo3-3.gif',
  // Core Logic
  '/context/AppContext.tsx',
  '/hooks/useLocalStorage.ts',
  '/services/geminiService.ts',
  '/utils/gcs.ts',
  '/utils/soundUtils.ts',
  // Components
  '/components/ApuntesCarousel.tsx',
  '/components/DilemmasNavigator.tsx',
  '/components/EKGLine.tsx',
  '/components/GCSSelector.tsx',
  '/components/Header.tsx',
  '/components/Icons.tsx',
  '/components/InfoModal.tsx',
  '/components/LoadingSpinner.tsx',
  '/components/ThemeToggle.tsx',
  // Screens
  '/screens/ArchiveScreen.tsx',
  '/screens/CaseScreen.tsx',
  '/screens/GameScreen.tsx',
  '/screens/HomeScreen.tsx',
  '/screens/RegistryScreen.tsx',
  '/screens/ResultScreen.tsx',
  '/screens/StatsScreen.tsx',
  // Constants
  '/constants/dilemmasData.ts',
  '/constants/gameData.ts',
  '/constants/infoContent.tsx',
  '/constants/offlineCases.ts',
  '/constants/quotes.ts',
  '/constants/textStyles.ts',
  '/constants/cases/conciertos.ts',
  '/constants/cases/deportivos.ts',
  '/constants/cases/feria.ts',
  '/constants/cases/hogar.ts',
  '/constants/cases/imv.ts',
  '/constants/cases/incendios.ts',
  '/constants/cases/laboral.ts',
  '/constants/cases/playa.ts',
  '/constants/cases/trafico.ts',
  '/constants/cases/urbano.ts'
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