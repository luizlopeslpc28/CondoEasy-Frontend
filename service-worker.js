var cacheName = 'pwaCondoEasy';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

       // './assets/css/bootstrap.min.css',

      //  './assets/js/bootstrap.min.js',

      //  './assets/js/jquery.min.js',

      //  './assets/js/popper.min.js',

      //  './assets/img/background.png',
      //  './assets/img/favicon.png',
      //  './assets/img/logo.png',
        './AppImages/ios/128.png',
        './AppImages/ios/144.png',
        './AppImages/ios/152.png',
        './AppImages/ios/167.png',
        './AppImages/ios/180.png',
        './AppImages/ios/192.png',
        './AppImages/ios/256.png',
        './AppImages/ios/512.png',
       // './assets/img/formulas.JPG',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});