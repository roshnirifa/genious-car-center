// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbmaa2MwVlgwWBJJIbiYsdZw4CxtcFO_4",
    authDomain: "genious-car-center.firebaseapp.com",
    projectId: "genious-car-center",
    storageBucket: "genious-car-center.appspot.com",
    messagingSenderId: "230440771570",
    appId: "1:230440771570:web:73e78e7af0a18871a2956b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;