"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./accounting/firebase.js";

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("使用者已登出");
    })
    .catch((error) => {
      console.error("登出時發生錯誤", error);
    });
};

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginState, setLoginstate] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("使用者已登入", user);

        setLoginstate(true);
        setShowLogin(false);
      } else {
        console.log("使用者已登出~~~!");
        setLoginstate(false);
        setShowLogin(true);
      }
    })
    return () => unsubscribe();
  }, []);

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const {
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        console.log("User logged in:", result.user);
        setLoginstate(true);
      })
      .catch((error) => {
        console.log("Login failed:", error.message);
        setLoginstate(false);
        alert("登入失敗，帳號或密碼不正確");
      });
  };

  const signupSubmit = (data) => {
    console.log(data);
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
      {loginState && (<Link className={styles.button85} href="/accounting/">
        {"Let's start"}
      </Link>)}
      {showLogin && !loginState && (
        <Login
          onLogin={loginSubmit}
          onToggleForm={toggleForm}
          errors={errors}
        />
      )}
      {showSignup && !loginState && (
        <Signup
          onSignup={signupSubmit}
          onToggleForm={toggleForm}
          errors={errors}
        />
      )}
      {loginState && (
        <button
          style={{ marginTop: "30px" }}
          className={styles.button85}
          onClick={logout}>
          登出
        </button>
      )}
    </div>
  );
}
