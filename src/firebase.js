// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM1IZiw_3t3TccIOIVPlHPSkx3ur0ZRsk",
    authDomain: "deckled-edge.firebaseapp.com",
    projectId: "deckled-edge",
    storageBucket: "deckled-edge.appspot.com",
    messagingSenderId: "506107436703",
    appId: "1:506107436703:web:aff3a2f5bb12ccf2cfccaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configure provider - Google
const provider = new GoogleAuthProvider();

//Create referance to our firebase authentiction instance
const auth = getAuth(app);

// Config login/logout workflows
function login() {
    return signInWithPopup(auth, provider);
};

function logout() {
    return signOut(auth);
};

// export functionality for access inside of React
export { login, logout, auth };