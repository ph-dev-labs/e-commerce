import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBKY0Q7Xvn9YFm1Nv3l-y29d6BK1mgKDQw",
    authDomain: "testedtype.firebaseapp.com",
    projectId: "testedtype",
    storageBucket: "testedtype.appspot.com",
    messagingSenderId: "103676427501",
    appId: "1:103676427501:web:12f15c7db365b40fa9e0e4",
    measurementId: "G-2V40VMJELP"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth();
const provider = new auth.GoogleAuthProvider()


export {auth, provider}