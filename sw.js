const CACHE_NAME = 'milan-day2-offline-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg'
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});