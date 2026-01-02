// On install, cache the root page for offline access
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("sgpa-calc-cache").then((cache) => {
            return cache.addAll(["/"]);
        })
    );
});

// On fetch, serve cached content if available, else fetch from network
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
