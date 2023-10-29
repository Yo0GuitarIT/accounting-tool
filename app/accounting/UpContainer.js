"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import IncomeExpenseInput from "./IncomeExpense";
import AmountInput from "./AmountInput";
import ItemInput from "./ItemInput";
import AddButton from "./AddButton";
import styles from "./UpContainer.module.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

async function writeDataToFirebase(recordData) {
  try {
    const docRef = await addDoc(collection(db, "accounting"), {
      id: recordData.id,
      incomeExpense: recordData.incomeExpense,
      amount: recordData.amount,
      item: recordData.item
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function UpContainer({ onAddRecord }) {
  const [formData, setFormData] = useState({
    incomeExpense: "+",
    amount: "",
    item: "",
  });

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddRecord = (e) => {
    e.preventDefault();

    if (formData.amount.trim() === "") {
      alert("Please Enter Number");
      return;
    }

    if (formData.item.trim() === "") {
      alert("Please enter Item");
      return;
    }

    const recordData = {
      id: uuid(),
      incomeExpense: formData.incomeExpense,
      amount: parseInt(formData.amount),
      item: formData.item,
    };

    onAddRecord(recordData);
    writeDataToFirebase(recordData);

    setFormData({
      incomeExpense: formData.incomeExpense,
      amount: "",
      item: "",
    });
  };

  return (
    <form className={styles.upContainer} onSubmit={handleAddRecord}>
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
    </form>
  );
}
export default UpContainer;
