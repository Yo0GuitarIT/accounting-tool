import { useEffect } from "react";
import Record from "./Record";
import Total from "./Total";
import styles from "./DownContainer.module.css";

function DownContainer({ records, onDeleteRecord }) {
  let totalAmount = 0;

  useEffect(() => {
  }, [records]);

  return (
    <div className={styles.downContainer}>
      {records.map((record, index) => {
        const amount =
          record.incomeExpense === "+" ? record.amount : record.amount * -1;
        totalAmount += amount;
        return (
          <Record
            key={index}
            inAndOut={amount}
            item={record.item}
            onDeleteClick={() => onDeleteRecord(record.id)}
          />
        );
      })}
      <Total
        totalAmount={totalAmount} />
    </div>
  );
}

export default DownContainer;
