import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD6REcnXhNCIMsPubTgbkDyLfKPahw24xE",
  authDomain: "olx-diksha.firebaseapp.com",
  projectId: "olx-diksha",
  storageBucket: "olx-diksha.appspot.com",
  messagingSenderId: "1034381124571",
  appId: "1:1034381124571:web:99aeb8edc2c62cc0cebdfe",
  measurementId: "G-687J271DB3"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export

  