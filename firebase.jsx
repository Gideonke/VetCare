// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBRYXTfsE31SgyoAzcBF_yukiZOZENr-eI",
  authDomain: "vetcarplus.firebaseapp.com",
  projectId: "vetcarplus",
  storageBucket: "vetcarplus.appspot.com",
  messagingSenderId: "1094510095463",
  appId: "1:1094510095463:web:cec2cb2a28c1012486b8c2",
  measurementId: "G-PZ1Q3HE1F4"
};
// V1SkABbmztgk0c51OPEjM4IndFc2

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;
