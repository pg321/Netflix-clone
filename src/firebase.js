import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA422mT2N6osxajnqxAvr8EprEimvmAMew",
  authDomain: "netflix-clone-app-a75d1.firebaseapp.com",
  projectId: "netflix-clone-app-a75d1",
  storageBucket: "netflix-clone-app-a75d1.appspot.com",
  messagingSenderId: "560269220554",
  appId: "1:560269220554:web:8b9940e71041fb6cf33233",
  measurementId: "G-6KKG416R6Z"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;