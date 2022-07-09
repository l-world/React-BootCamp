import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3NN5DCXwZiMPyfHjoQ7zJQ0MfL5FTOXE",
    authDomain: "note-app-91116.firebaseapp.com",
    projectId: "note-app-91116",
    storageBucket: "note-app-91116.appspot.com",
    messagingSenderId: "806356420369",
    appId: "1:806356420369:web:03fbf80311709af13baeb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);