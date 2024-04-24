// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAS4YeH9hhTGJZpavr0ShzzLfNji-AP3p0",
  authDomain: "vetcareplus-f5b7c.firebaseapp.com",
  projectId: "vetcareplus-f5b7c",
  storageBucket: "vetcareplus-f5b7c.appspot.com",
  messagingSenderId: "889560474468",
  appId: "1:889560474468:web:cc170aa54798050cefd071",
  measurementId: "G-K9JVMGNQJD"
};
// V1SkABbmztgk0c51OPEjM4IndFc2

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);

// const analytics = getAnalytics(app);
export default app;
