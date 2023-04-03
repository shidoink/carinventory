// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPT5U_hcXBda331g7IxhPheP4My6m1S0",
  authDomain: "carinventory-2edfb.firebaseapp.com",
  projectId: "carinventory-2edfb",
  storageBucket: "carinventory-2edfb.appspot.com",
  messagingSenderId: "167694615831",
  appId: "1:167694615831:web:3bdb0a87c6c904d5ae2352",
  measurementId: "G-2NC1JHF2M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Firebase= initializeApp(firebaseConfig)
export const auth= getAuth();
export const Providers= {google: new GoogleAuthProvider()}