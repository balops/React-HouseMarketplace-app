import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6PV1h32fRAt_4OEs1U4LPAVAQZdjI6k",
  authDomain: "house-marketplace-app-88de3.firebaseapp.com",
  projectId: "house-marketplace-app-88de3",
  storageBucket: "house-marketplace-app-88de3.appspot.com",
  messagingSenderId: "1035175830832",
  appId: "1:1035175830832:web:56072f584e4449bc6a14f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()