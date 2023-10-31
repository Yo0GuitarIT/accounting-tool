"use client";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import Link from "next/link";
import UpContainer from "./UpContainer";
import DownContainer from "./DownContainer";
import styles from "./page.module.css";
import { db } from "./firebase";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

const loadData = async (id) => {
  console.log("id: " + id);
  const querySnapshot = await getDocs(collection(db, id));
  const dataFromFirebase = [];

  querySnapshot.forEach((doc) => {
    dataFromFirebase.push({
      id: doc.id,
      incomeExpense: doc.data().incomeExpense,
      amount: doc.data().amount,
      item: doc.data().item,
    });
  });

  return dataFromFirebase
}

export default function Page() {
  const [loginState, setLoginstate] = useState(false);
  const [userId, setUserId] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("使用者:", user.uid);
        setLoginstate(true);

        setUserId(user.uid);

        loadData(user.uid)
          .then((dataFromFirebase) => {
            setRecords(dataFromFirebase);
          })
          .catch((error) => {
            console.error("Error loading data:", error);
          });
      } else {
        console.log("使用者已登出~~~!");
        window.location.href = '/'
      }
    })
    return () => unsubscribe();
  }, []);


  const handleAddRecord = (recordData) => {
    setRecords([...records, recordData]);
  };

  const handleDeleteRecord = (recordId) => {
    const updatedRecords = records.filter((record) => record.id !== recordId);
    setRecords(updatedRecords);
    firebaseDeleteData(recordId);
  };

  const firebaseDeleteData = async (recordId) => {
    try {
      await deleteDoc(doc(db, userId, recordId));
      console.log("Deleted record " + recordId)
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  return (
    loginState && (
      <div className={styles.mainContainer}>
        <div className={styles.mainInfo}>
          <UpContainer onAddRecord={handleAddRecord} userId={userId} />
          <DownContainer records={records} onDeleteRecord={handleDeleteRecord} />
          <Link className={styles.button41} href="/">
            Home
          </Link>
        </div>
      </div>
    )
  );
}
