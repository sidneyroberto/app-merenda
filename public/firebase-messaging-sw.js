/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
)

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyAg2n8QFKttyo8esYje_oSGyUSrQa3nt4I',
  authDomain: 'imagens-merenda-ifms.firebaseapp.com',
  projectId: 'imagens-merenda-ifms',
  storageBucket: 'imagens-merenda-ifms.appspot.com',
  messagingSenderId: '600466379702',
  appId: '1:600466379702:web:77660f25c45cdf8e746717',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions)
})
