// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: "cms-byi.firebaseapp.com",
    projectId: "cms-byi",
    storageBucket: "cms-byi.appspot.com",
    messagingSenderId: "749447455698",
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: "G-J74RBP3VJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics; let db; let auth;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app)
    db = getFirestore(app)
    auth = getAuth(app)
}

export { analytics, db, auth, app }

export const articleDb = 'article'
export const constkajianDB = 'kajian'