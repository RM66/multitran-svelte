import App from './App.svelte';

export default new App({ target: document.body });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(registration => {
      console.info(`Service Worker registered! Scope: ${registration.scope}`);
    })
    .catch(err => {
      console.info(`Service Worker registration failed: ${err}`);
    });
}
