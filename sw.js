self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("kasse-cache").then((cache) => {
      return cache.addAll([
        "/Rechenhilfe-VIP/",
        "/Rechenhilfe-VIP/index.html",
        "/Rechenhilfe-VIP/manifest.json",
        "/Rechenhilfe-VIP/admin/",
        "/Rechenhilfe-VIP/admin/index.html"
      ]);
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
