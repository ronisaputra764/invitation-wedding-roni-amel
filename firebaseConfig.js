import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBt4dke988KkYHuEl87y60TMo86_sn4JeM",
    authDomain: "wedding-invitation-4ba26.firebaseapp.com",
    projectId: "wedding-invitation-4ba26",
    storageBucket: "wedding-invitation-4ba26.firebasestorage.app",
    messagingSenderId: "139359073876",
    appId: "1:139359073876:web:19e5b3a780f4da0ddd5fc1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
