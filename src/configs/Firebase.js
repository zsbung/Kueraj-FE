// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaK0CE5wIvDqXaaabGuST7vYzset-1dUM",
  authDomain: "bungabusanaa-7e56d.firebaseapp.com",
  projectId: "bungabusanaa-7e56d",
  storageBucket: "bungabusanaa-7e56d.appspot.com",
  messagingSenderId: "474227221449",
  appId: "1:474227221449:web:92906d904ba09ed6223e18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
