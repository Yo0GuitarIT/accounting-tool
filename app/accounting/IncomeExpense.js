"use client"
import { useState } from 'react';

function IncomeExpenseInput({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onOptionChange(selectedValue);
  };

  return (
    <>
      <label htmlFor="transactionType"></label>
      <select
        style={{ margin: "10px", padding: "5px", color: "#00d775"  }}
        id="transactionType"
        onChange={handleOptionChange}
        value={selectedOption}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
}

export default IncomeExpenseInput;
