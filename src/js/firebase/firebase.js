import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkxhZgfH2ZnOLEEy5hIeZmslkxakGeCtU",
  authDomain: "nuts-febc7.firebaseapp.com",
  projectId: "nuts-febc7",
  storageBucket: "nuts-febc7.firebasestorage.app",
  messagingSenderId: "321865179065",
  appId: "1:321865179065:web:60dc00e7e8d7182160a068",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
