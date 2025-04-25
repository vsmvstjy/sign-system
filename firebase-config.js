export const firebaseConfig = {
  apiKey: "AIzaSyDrkWBu5k-2nBHhZEHwgrBrPkWSKpro6po",
  authDomain: "sign-system-a8921.firebaseapp.com",
  projectId: "sign-system-a8921",
  storageBucket: "sign-system-a8921.appspot.com",
  messagingSenderId: "356422555230",
  appId: "1:356422555230:web:5522aefcfc133d096286cf"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
