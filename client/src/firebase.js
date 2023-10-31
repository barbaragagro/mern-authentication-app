// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-155bf.firebaseapp.com",
  projectId: "mern-auth-155bf",
  storageBucket: "mern-auth-155bf.appspot.com",
  messagingSenderId: "806263566291",
  appId: "1:806263566291:web:e5266729ac20e2ea9b8926"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);