// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxLP1DnwmjKOOcnRHylGu9Jo7kSttGzRs",
  authDomain: "pravasa-d2fdd.firebaseapp.com",
  projectId: "pravasa-d2fdd",
  storageBucket: "pravasa-d2fdd.firebasestorage.app",
  messagingSenderId: "77473294289",
  appId: "1:77473294289:web:8e48201eed9688017662f0",
  measurementId: "G-84S0T2DCSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);