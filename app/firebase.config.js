// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU_Wy-0_kihyn-2fxbUf-o8QBI09KQ_H4",
  authDomain: "carthair-fbf79.firebaseapp.com",
  projectId: "carthair-fbf79",
  storageBucket: "carthair-fbf79.appspot.com",
  messagingSenderId: "310987364857",
  appId: "1:310987364857:web:c3898a226e9fe1476f0528",
  measurementId: "G-BMRR8FVEGV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)

export default firebaseApp;