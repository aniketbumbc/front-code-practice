console.log('Service worker loaded');

if (navigator.serviceWorker) {
  // Register the service worker
  navigator.serviceWorker
    .register('./sw.js')
    .then((registration) => {
      console.log('Service worker registered', registration);
    })
    .catch((error) => {
      console.error('Service worker registration failed', error);
    });
}
