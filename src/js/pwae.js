
$(function() {

    console.log("version 1.4");


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
    
    $(".js-save").click(function(e) {
        trySave();
    });


    $(".js-one").click(function(e) {
        $(".one").html("<img src='images/photos/bubble.jpg' />");
        $(".two").html("<img src='images/photos/winter.jpg' />");
    });

    $(".js-three").click(function(e) {
        $(".logo").attr("src","images/photos/redtree.jpg");
        $(".one").html("<img src='https://cdn.chenzorama.com/images/tiles/v2.1/3/0/3.png' />");
        $(".two").html("<img src='https://cdn.chenzorama.com/images/tiles/v2.1/7/61/8.png' />");
    });


    
});


function trySave() {

    console.log("trying to save");

    var dataCacheName = 'pwae-0.2';
    //var cacheName = 'pwa';
    
    var filesToCache = [
    //'index.php',
    //'includes/globals.php',
    './css/styles.css',
    './images/pwae_logo.png',
    './js/vendor/jquery-3.3.1.min.js',
    './js/pwae.js',
    './images/photos/bubble.jpg',
    './images/photos/winter.jpg',
    './images/photos/redtree.jpg',
    'https://cdn.chenzorama.com/images/tiles/v2.1/7/61/8.png',
    'https://cdn.chenzorama.com/images/tiles/v2.1/3/0/3.png'
    ];

    caches.open(dataCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log("ERROR!?!!!");
      console.log(err);
    });
}

