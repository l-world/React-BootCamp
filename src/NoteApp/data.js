// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3NN5DCXwZiMPyfHjoQ7zJQ0MfL5FTOXE",
    authDomain: "note-app-91116.firebaseapp.com",
    projectId: "note-app-91116",
    storageBucket: "note-app-91116.appspot.com",
    messagingSenderId: "806356420369",
    appId: "1:806356420369:web:03fbf80311709af13baeb0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'notes');

// get collection data
getDocs(colRef)
    .then(snapshot => {
        // console.log(snapshot.docs)
        let notes = []
        snapshot.docs.forEach(doc => {
            notes.push({ ...doc.data(), id: doc.id })
        })
        console.log(notes)
    })
    .catch(err => {
        console.log(err.message)
    })

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    })
        .then(() => {
            addBookForm.reset()
        })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset()
        })
})