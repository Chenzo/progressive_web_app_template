

var dataCacheName = 'pwae-0.1';
var cacheName = 'pwa';


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      //return cache.addAll(filesToCache);

      return cache.addAll(filesToCache.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, { mode: 'no-cors' });
      })).then(function() {
        console.log('All resources have been fetched and cached.');
      }).catch(function(err) {
        console.log("error 1");
        console.log(err);
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  return self.clients.claim();
});



self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'something specific';
  if (e.request.url.indexOf(dataUrl) > -1) {
    //if something specific, request something
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request, {'mode': 'no-cors'}).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {

/*     if (navigator.onLine) {
      console.log('online');
    } else {
      console.log('offline');
    } */
    
    //Cache first, network second...
    /* e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    ); */

    //network first, cache second...
    e.respondWith(
      fetch(e.request, {'mode': 'no-cors'}).catch(function() {
        return caches.match(e.request);
      })
    );
  }
});





var filesToCache = [
'index.php',
'includes/globals.php',
'css/styles.css',
'images/pwae_logo.png',
'js/vendor/jquery-3.3.1.min.js',
'js/pwae.js'
];