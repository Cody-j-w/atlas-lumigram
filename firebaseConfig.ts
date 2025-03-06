// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBjR0PYwq4jZTS0Rqxm95GCgvi8MZBx7t8",

    authDomain: "atlas-lumigram-5c7fe.firebaseapp.com",

    projectId: "atlas-lumigram-5c7fe",

    storageBucket: "atlas-lumigram-5c7fe.firebasestorage.app",

    messagingSenderId: "224386912215",

    appId: "1:224386912215:web:309cc891a357f4cccbc592"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app);
export const db = getFirestore(app);