const CACHE_NAME = 'mis-guardias-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación: Guardamos los archivos básicos en la caché del móvil
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones: Estrategia "Network First" (Primero internet, luego caché)
// Si tienes internet, coge la última versión. Si estás offline, carga la app desde la caché.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});