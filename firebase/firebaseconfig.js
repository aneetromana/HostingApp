// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC-nsEtafVK9Mahfu4onxHrKbIti8cFnU",
  authDomain: "hostingapp-66c88.firebaseapp.com",
  projectId: "hostingapp-66c88",
  storageBucket: "hostingapp-66c88.appspot.com",
  messagingSenderId: "736171016416",
  appId: "1:736171016416:web:80dc9da10108ac692e5085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);