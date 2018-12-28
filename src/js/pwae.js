
$(function() {

    console.log("booop!");


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
    

    $(".js-save").click(function(e) {
        console.log("try to save");
        trySave();
    });


    $(".js-one").click(function(e) {
        $(".one").html("<img src='images/photos/bubble.jpg' />");
        $(".two").html("<img src='images/photos/bubble.jpg' />");
    });


    
});


function trySave() {

    console.log("trying to save");

    var dataCacheName = 'pwae-0.2';
    var cacheName = 'pwa';
    
    var filesToCache = [
    //'index.php',
    //'includes/globals.php',
    './css/styles.css',
    './images/pwae_logo.png',
    './js/vendor/jquery-3.3.1.min.js',
    './js/pwae.js',
    './images/photos/bubble.jpg',
    './images/photos/winter.jpg'
    ];

    caches.open(dataCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log("ERROR!?!!!");
      console.log(err);
    })
}

