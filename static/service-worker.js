self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching...', event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
}); 