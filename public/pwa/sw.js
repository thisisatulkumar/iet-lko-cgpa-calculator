const CACHE_NAME = "sgpa-calc-v2.1.0";      // Increment this while deploying updates

// On install, cache essential assets (root page and SGPA formula image) for offline use
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                "/",
            ]);
        })
    );

    self.skipWaiting();     // Activate new SW immediately
});

// On activation, remove old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())      // Take control of all clients immediately
    );
});

// On fetch, serve from network first, fallback to cache if offline; update cache in background
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const responseClone = response.clone();         // Cache the updated response

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseClone);    // Save to cache
                });

                return response;                                // Return the original to browser
            })
            .catch(() => caches.match(event.request)) // Fallback to cache if offline
    );
});
