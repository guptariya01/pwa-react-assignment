importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDsHKl52GO6m6tyGyHOzSfQ3QzET5bBxM4",
  authDomain: "wpareact.firebaseapp.com",
  projectId: "wpareact",
  storageBucket: "wpareact.firebasestorage.app",
  messagingSenderId: "684375569625",
  appId: "1:684375569625:web:c00256a32839703a573ac8",
  measurementId: "G-W6NHL368F1"

};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification?.title || "Background Message";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new message!",
    icon: "/logo192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
