import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCzPctKMBxMm2Ba-XKMFo3WT9EPGmZ6avk",
  authDomain: "clothing-store-locator.firebaseapp.com",
  projectId: "clothing-store-locator",
  storageBucket: "clothing-store-locator.firebasestorage.app",
  messagingSenderId: "1093980379842",
  appId: "1:1093980379842:web:c42f0c59937715647bf95b",
  measurementId: "G-SGQ6VW0NWY"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);