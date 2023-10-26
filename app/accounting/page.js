"use client"
import { useState } from 'react';

import Link from "next/link";

import UpContainer from "./UpContainer";
import DownContainer from "./DownContainer";

import styles from "./page.module.css";

export default function Page() {
  const [records, setRecord] = useState([]);

  const handleAddRecord = (recordData) => {
    setRecord([...records, recordData]);
}

  return (
    <div className={styles.mainContainer} >
      <UpContainer onAddRecord={handleAddRecord} />
      <DownContainer records={records} />
      <Link href="/">Home</Link>
    </div>
  );
}
