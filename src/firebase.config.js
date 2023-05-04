import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCL1My3aguyIoIS9QsNE6BziCKDL-AM9LI",
  authDomain: "portfolio-da254.firebaseapp.com",
  projectId: "portfolio-da254",
  storageBucket: "portfolio-da254.appspot.com",
  messagingSenderId: "158027855413",
  appId: "1:158027855413:web:74388db43c58005eca237c",
  measurementId: "G-Y25P0EWEHJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);