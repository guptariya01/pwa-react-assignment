import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDsHKl52GO6m6tyGyHOzSfQ3QzET5bBxM4",
  authDomain: "wpareact.firebaseapp.com",
  projectId: "wpareact",
  storageBucket: "wpareact.firebasestorage.app",
  messagingSenderId: "684375569625",
  appId: "1:684375569625:web:c00256a32839703a573ac8",
  measurementId: "G-W6NHL368F1"
};



const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const token = await getToken(messaging, {
        vapidKey:
          "BFxcdd8HqtMP5ieQTfThq7RF_LkK740PMrrm_eTAaZqVLLrCC2Xrb4I8B0gOmA6z5vObYAZwXwXNpwVa0iN0OLA",
      });
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("Notification permission denied.");
      return null;
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Foreground message received:", payload);
      // Display notification for foreground messages
      const notificationTitle = payload.notification?.title || "New Message";
      const notificationOptions = {
        body: payload.notification?.body || "You have a new message!",
        icon: "/logo192.png",
        data: payload.data,
      };
      // Show notification in the browser
      if (Notification.permission === "granted") {
        new Notification(notificationTitle, notificationOptions);
      }
      resolve(payload);
    });
  });
