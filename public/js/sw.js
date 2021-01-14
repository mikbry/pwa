const path = '/';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-store').then((cache) => cache.addAll([
      `${path}`,
      `${path}index.html`,
      `${path}js/index.js`,
      `${path}css/main.css`,
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
