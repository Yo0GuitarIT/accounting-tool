import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvGKb27sYVcpzS1tYi6LSsQiQUfRG0pLA",
  authDomain: "my-accounting-tool.firebaseapp.com",
  projectId: "my-accounting-tool",
  storageBucket: "my-accounting-tool.appspot.com",
  messagingSenderId: "898210110351",
  appId: "1:898210110351:web:fddf273dbac9a414dc09fa",
  measurementId: "G-RNMC01K4SE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
