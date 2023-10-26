import { useState } from "react";

import Record from "./Record";
import Total from "./Total";
import styles from "./DownContainer.module.css";

function DownContainer({ records }) {
  let totalAmount = 0;

  const [allRecords, setAllRecords] = useState(records);

  const handleDeleteRecord = (recordId) => {
    const updatedRecords = allRecords.filter((record) =>
      record.id !== recordId);
    setAllRecords(updatedRecords);
  };

  return (
    <div className={styles.downContainer}>
      {/* <Record inAndOut={1000} item="打工" />
      <Record inAndOut={-800} item="逛街" />
      <Record inAndOut={30800} item="十一月薪水" /> */}
      {records.map((record, index) => {
        const amount =
          record.incomeExpense === "+" ? record.amount : record.amount * -1;
        totalAmount += amount;
        return (
          <Record
            key={index}
            inAndOut={amount}
            item={record.item}
            onDeleteClick={() => handleDeleteRecord(records, record.id)}
          />
        );
      })}
      <Total totalAmount={totalAmount} />
    </div>
  );
}
export default DownContainer;
