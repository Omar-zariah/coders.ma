// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration (replace with your own Firebase settings)
const firebaseConfig = {
    apiKey: "AIzaSyB10TjHAp8RL9AnQq-VlkNyOolKOWOXm4Y",
    authDomain: "coders-421d3.firebaseapp.com",
    projectId: "coders-421d3",
    storageBucket: "coders-421d3.appspot.com",
    messagingSenderId: "942960829238",
    appId: "1:942960829238:web:f10689522522efc5160997",
    measurementId: "G-MVLN556LSX"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
