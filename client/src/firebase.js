// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAFd2ocBcz7DoVWjZTA4zQ_oL53D9nX-Q",
  authDomain: "henryecommerce-49f3e.firebaseapp.com",
  projectId: "henryecommerce-49f3e",
  storageBucket: "henryecommerce-49f3e.appspot.com",
  messagingSenderId: "1091180055379",
  appId: "1:1091180055379:web:c1385ad170f4fc07646fa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
auth.useDeviceLanguage();
export const googleProvider = new GoogleAuthProvider();
