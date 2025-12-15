const CACHE_NAME = 'vocamaster-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './grammar/index.html',
    './grammar/grammar-style.css',
    './grammar/grammar-data.js',
    './grammar/grammar.js',
    './reading/index.html',
    './reading/reading-style.css',
    './reading/reading-data.js',
    './reading/reading.js',
    './vocabulary/index.html',
    './vocabulary/vocab-style.css',
    './vocabulary/words-database.js',
    './practice-test/index.html',
    './practice-test/practice-test-style.css',
    // Add icons if they exist
    './icons/icon-192.png',
    './icons/icon-512.png'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Activate Event (Cleanup old caches)
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
