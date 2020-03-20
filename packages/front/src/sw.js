/*
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
workbox.precaching.precacheAndRoute([]);
workbox.routing.registerRoute('', new workbox.strategies.());
*/

const CACHE_NAME = 'static-cache-v1';

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/build/bundle.css',
  '/build/bundle.js',
  '/logo.png',
  '/logo_hi.png'
];

self.addEventListener('install', evt => {
  self.skipWaiting();
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(fetch(evt.request).catch(() => caches.match(evt.request)));
});
