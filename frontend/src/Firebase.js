// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXVCEcnTVjDcrsKjgnMMmWaRF9AoXVnYE",
  authDomain: "food-delivery-app-120d1.firebaseapp.com",
  databaseURL: "https://food-delivery-app-120d1-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-120d1",
  storageBucket: "food-delivery-app-120d1.appspot.com",
  messagingSenderId: "177005499634",
  appId: "1:177005499634:web:30477703d7a9166837ec6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth=getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db=getFirestore(app)
//initialise storage 
export const storage=getStorage(app);
