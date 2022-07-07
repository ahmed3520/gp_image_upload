// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnR2KYud3YIFXhJ63oIkEI4KCrSO-tKu8",

  authDomain: "parkinson-demo.firebaseapp.com",

  projectId: "parkinson-demo",

  storageBucket: "parkinson-demo.appspot.com",

  messagingSenderId: "453871934145",

  appId: "1:453871934145:web:b14de15a8e0f1e35961240"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };