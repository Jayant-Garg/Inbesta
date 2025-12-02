import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwCQX2Qpcs3A_RjKZGjmg-XBieRiMxO4",
  authDomain: "inbesta-caddd.firebaseapp.com",
  projectId: "inbesta-caddd",
  storageBucket: "inbesta-caddd.firebasestorage.app",
  messagingSenderId: "773219069856",
  appId: "1:773219069856:web:4013cdcbfd824496cd3ec5",
  measurementId: "G-HNS351TTJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
