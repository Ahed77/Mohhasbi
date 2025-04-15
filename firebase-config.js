// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPWOpMD7BkwCAju6SkKAO2YTO_Y5n4M7E",
  authDomain: "almhasb-a4dc3.firebaseapp.com",
  projectId: "almhasb-a4dc3",
  storageBucket: "almhasb-a4dc3.appspot.com", // تم التصحيح هنا
  messagingSenderId: "1051629416692",
  appId: "1:1051629416692:web:120580771945426e736ea1",
  measurementId: "G-XMKWBCE79L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
