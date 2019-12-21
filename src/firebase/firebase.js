import * as firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDegmhLXnRwxgj6_ayZRPfSIgFNJ3MZ2XQ",
    authDomain: "conforto-animal.firebaseapp.com",
    databaseURL: "https://conforto-animal.firebaseio.com",
    projectId: "conforto-animal",
    storageBucket: "conforto-animal.appspot.com",
    messagingSenderId: "312612332972",
    appId: "1:312612332972:web:4a4986a328128b9c7f0609",
    measurementId: "G-XW6VVYNW52"
  };

firebase.initializeApp(firebaseConfig)
export default firebase