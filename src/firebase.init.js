// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMpZXOdYeupIzcKU-ObjQe3lsqPfHrJD8",
    authDomain: "independent-service-prov-7d2d8.firebaseapp.com",
    projectId: "independent-service-prov-7d2d8",
    storageBucket: "independent-service-prov-7d2d8.appspot.com",
    messagingSenderId: "786993856199",
    appId: "1:786993856199:web:973aee4b61c1177050c8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;