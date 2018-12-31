<?php 
include "includes/globals.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title><?= $title; ?></title>
        <meta name="robots" content="INDEX,FOLLOW,NOODP" />
        <link rel="canonical" href="https://www.chenzorama.com/pwae" />
        <meta name="description" content="<?= $descr; ?>" />
        <meta name="keywords" content="<?= $keywords; ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="manifest" href="manifest.json">

        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="SoT Map">
        <meta name="apple-mobile-web-app-title" content="SoT Map">
        <meta name="theme-color" content="#222222">
        <meta name="msapplication-navbutton-color" content="#222222">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="msapplication-starturl" content="/">
        

        <link rel="apple-touch-icon" href="images/pwae_logo-192.png">
        <link rel="apple-touch-icon" sizes="192x192" href="images/pwae_logo-192.png">
        <link rel="apple-touch-icon" sizes="512x512" href="images/pwae_logo-512.png">


        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">

        <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#222222">        
        

        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

        <link rel="stylesheet" href="css/styles.css?v=<?= CACHE_BUSTER ?>"" />

    </head>
    <body class="home">

        <main role="main">
            
            <div class="output">

            </div>

            <img class="logo" src="images/pwae_logo-512.png" />
            <p>Testing PWAs - v 0.8</p>

            <div>
            <button class="js-save">SAVE FILES</button>
            <button class="js-one">make IMage</button>

            <button class="js-three">make Red Tree</button>
            </div>


            <div class="one">img</div><div class="two">two</div>
        </main>

        <script src="js/vendor/jquery-3.3.1.min.js"></script>
        <script src="js/pwae.js?v=<?= CACHE_BUSTER ?>""></script>

        <script></script>

    </body>
</html>