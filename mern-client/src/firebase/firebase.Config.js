// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu69GGCek-_-lzLgwRKfu11BAlc_owUtw",
  authDomain: "mern-book-inventory-b04b1.firebaseapp.com",
  projectId: "mern-book-inventory-b04b1",
  storageBucket: "mern-book-inventory-b04b1.appspot.com",
  messagingSenderId: "473675669224",
  appId: "1:473675669224:web:b84ffde9dcc0c66176f35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;