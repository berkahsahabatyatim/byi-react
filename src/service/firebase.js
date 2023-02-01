// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: "cms-byi.firebaseapp.com",
    projectId: "cms-byi",
    storageBucket: "cms-byi.appspot.com",
    messagingSenderId: "749447455698",
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: "G-J74RBP3VJF"
};

const app = initializeApp(firebaseConfig);
let analytics; let db; let auth; let storage;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app)
    db = getFirestore(app)
    auth = getAuth(app)
    storage = getStorage(app)
}

export { analytics, db, auth, app, storage }

export const articleDb = 'article'
export const kajianDB = 'kajian'