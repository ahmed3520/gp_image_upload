// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB87_k14Yeq5nLKEIYxWINagM4NpnAEDq4",
  authDomain: "elearning-1368a.firebaseapp.com",
  projectId: "elearning-1368a",
  storageBucket: "elearning-1368a.appspot.com",
  messagingSenderId: "77861376796",
  appId: "1:77861376796:web:b2169efffe48e15db560d9",
  measurementId: "G-CG8JPTMHC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };