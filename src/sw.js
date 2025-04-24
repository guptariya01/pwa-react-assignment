self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("todo-pwa-v1").then((cache) => {
      return cache.addAll(["/", "/index.html", "/logo192.png"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
