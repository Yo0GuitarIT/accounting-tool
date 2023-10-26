"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";


import IncomeExpenseInput from "./IncomeExpense";
import AmountInput from "./AmountInput";
import ItemInput from "./ItemInput";
import AddButton from "./AddButton";

import styles from "./UpContainer.module.css";

function upContainer({ onAddRecord }) {
  const [formData, setFormData] = useState({
    incomeExpense: "+",
    amount: "",
    item: "",
  });

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAddRecord = () => {
    const recordData = {
      id: uuid(),
      incomeExpense: formData.incomeExpense,
      amount: parseInt(formData.amount),
      item: formData.item,
    };

    onAddRecord(recordData);

    setFormData({
      incomeExpense: formData.incomeExpense,
      amount: "",
      item: "",
    });
  };

  return (
    <div className={styles.upContainer}>
      <IncomeExpenseInput
        onOptionChange={(selectedOption) =>
          handleFieldChange("incomeExpense", selectedOption)
        }
      />

      <AmountInput
        value={formData.amount}
        onAmountChange={(inputAmount) =>
          handleFieldChange("amount", inputAmount)
        }
      />

      <ItemInput
        value={formData.item}
        onItemChange={(inputItem) => handleFieldChange("item", inputItem)}
      />

      <AddButton onAddClick={handleAddRecord} />
    </div>
  );
}
export default upContainer;
