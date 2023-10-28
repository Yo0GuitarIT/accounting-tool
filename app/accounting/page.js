"use client";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Link from "next/link";
import UpContainer from "./UpContainer";
import DownContainer from "./DownContainer";
import styles from "./page.module.css";

const defaultData = [
  {
    id: uuid(),
    incomeExpense: "+",
    amount: 5000,
    item: "Scholarship",
  },
  {
    id: uuid(),
    incomeExpense: "-",
    amount: 200,
    item: "Dinner",
  },
];

export default function Page() {
  const [records, setRecords] = useState(defaultData);

  const handleAddRecord = (recordData) => {
    setRecords([...records, recordData]);
  };

  const handleDeleteRecord = (recordId) => {
    const updatedRecords = records.filter((record) => record.id !== recordId);
    setRecords(updatedRecords);
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
