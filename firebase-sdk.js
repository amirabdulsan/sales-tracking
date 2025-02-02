
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7CY9QxQKob49zNVBFekC8gs17Vqfx5T4",
    authDomain: "sales-tracking-815af.firebaseapp.com",
    projectId: "sales-tracking-815af",
    storageBucket: "sales-tracking-815af.firebasestorage.app",
    messagingSenderId: "587135978784",
    appId: "1:587135978784:web:369e6ce42c537a8e8c9b45",
    measurementId: "G-C9Y014VVH4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
