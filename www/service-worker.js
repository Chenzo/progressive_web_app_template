

var dataCacheName = 'pwae-0.6';
var cacheName = 'pwa';

var filesToCache = [
//'index.php',
//'includes/globals.php',
'./css/styles.css',
'./images/pwae_logo.png',
'./images/pwae_logo-512.png',
'./js/vendor/jquery-3.3.1.min.js',
'./js/pwae.js',
'./images/photos/bubble.jpg',
'./images/photos/winter.jpg'
];



self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets - 4');
  event.waitUntil(
    caches.open(dataCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log("ERROR!?");
      console.log(err);
    })
  );
});


var addOutput = function(wds) {
  var opt = document.querySelectorAll(".output")[0];
  opt.appendChild("<p>" + wds + "</p>");
  //$(".output").append("<p>" + wds + "</p>");
};

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        //addOutput('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request);

      // TODO 4 - Add fetched files to the cache

    }).catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});


self.addEventListener('activate', event => {
  console.log('Clearing Cashe if required');

  const cacheWhitelist = [dataCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
