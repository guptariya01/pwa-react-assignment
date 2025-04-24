import { useState, useEffect } from "react";
import { requestForToken, onMessageListener } from "./firebase";
import "./App.css";
import UserList from "./components/UserList.jsx";

function App() {
  

  useEffect(() => {
   

    // Request notification permission
    requestForToken();

    // Listen for foreground notifications
    onMessageListener()
      .then((payload) => {
        alert(
          `Notification: ${payload.notification.title}\n${payload.notification.body}`
        );
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  
 
  return (
    <div className="container">
      <h1>User Data PWA</h1>
     
      <UserList/>
    </div>
  );
}

export default App;
