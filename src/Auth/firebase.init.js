// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAMYFG1diY_rW67I0qgwIapm-qYe_N9Ds",
    authDomain: "independent-service-prov-79180.firebaseapp.com",
    projectId: "independent-service-prov-79180",
    storageBucket: "independent-service-prov-79180.appspot.com",
    messagingSenderId: "279989523839",
    appId: "1:279989523839:web:a82f104962df2f5c0e764a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;