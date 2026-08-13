// Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBJacrTbuM7Vfi83xKVA04-zoGXnwi_McU",
  authDomain: "sign-457723.firebaseapp.com",
  projectId: "sign-457723",
  storageBucket: "sign-457723.firebasestorage.app",
  messagingSenderId: "972595541590",
  appId: "1:972595541590:web:3701e82ad02a1db3b52df7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
