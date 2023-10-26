"use client"
import { useState } from 'react';

import IncomeExpenseInput from "./IncomeExpense";
import AmountInput from "./AmountInput";
import ItemInput from "./ItemInput";
import AddButton from "./AddButton";

import styles from "./UpContainer.module.css";

function upContainer() {
  const [formData, setFormData] = useState({
    incomeExpense: "",
    amount: ""
  });

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  console.log(formData);

  return (
    <div className={styles.upContainer}>
      <IncomeExpenseInput onOptionChange={(selectedOption) =>
        handleFieldChange("incomeExpense", selectedOption)} />
      <AmountInput onAmountChange={(inputAmount) =>
        handleFieldChange("amount", inputAmount)} />
      <ItemInput />
      <AddButton />
    </div>

  );
}
export default upContainer
