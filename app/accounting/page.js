"use client";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import Link from "next/link";
import UpContainer from "./UpContainer";
import DownContainer from "./DownContainer";
import styles from "./page.module.css";
import { db } from "./firebase";
import {doc, collection, getDocs, deleteDoc } from "firebase/firestore";

const loadData = async () => {
  const querySnapshot = await getDocs(collection(db, "accounting"));
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
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadData()
      .then((dataFromFirebase) => {
        setRecords(dataFromFirebase);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
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
      await deleteDoc(doc(db, "accounting", recordId));
      console.log("Deleted record " + recordId)
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainInfo}>
        <UpContainer onAddRecord={handleAddRecord} />
        <DownContainer records={records} onDeleteRecord={handleDeleteRecord} />
        <Link className={styles.button41} href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
