const cacheName = 'v1';

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) return caches.delete(cache);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(result => {
                const resClone = result.clone();
                caches.open(cacheName)
                    .then(cache => cache.put(event.request, resClone));
                return result;
            })
            .catch(err => caches.match(event.request)
            .then(result => result))
    );
});
