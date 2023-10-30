"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./accounting/firebase.js";

// createUserWithEmailAndPassword(auth, email, password)
//   .then((result) => {
//     const userDocRef = doc(db, 'users', result.user.uid);
//     setDoc(userDocRef, { username }, { merge: true });

//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

export default function Page() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const {
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        console.log("User logged in:", result.user);
      })
      .catch((error) => {
        console.log("Login failed:", error.message);
      });
  };

  const signupSubmit = (data) => {
    console.log(data);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, data.regEmail, data.regPassword)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={styles.main}>
      <h1 style={{ marginBottom: "revert" }}>Accounting Tool</h1>
      <Link className={styles.button85} href="/accounting/">
        {"Let's start"}
      </Link>
      {showLogin && (
        <Login
          onLogin={loginSubmit}
          onToggleForm={toggleForm}
          errors={errors}
        />
      )}
      {showSignup && (
        <Signup
          onSignup={signupSubmit}
          onToggleForm={toggleForm}
          errors={errors}
        />
      )}
    </div>
  );
}
