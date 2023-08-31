import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA24u3jGZrWNv39i2x97oqFOWxAJkINJhQ",
  authDomain: "recipeapp-fa140.firebaseapp.com",
  projectId: "recipeapp-fa140",
  storageBucket: "recipeapp-fa140.appspot.com",
  messagingSenderId: "417536099954",
  appId: "1:417536099954:web:210d5b2e6085dc030424eb",
  measurementId: "G-6BJBGD609M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


