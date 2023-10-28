"use client";
import { useState } from "react";

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
        style={{
          margin: "10px",
          padding: "5px",
          color: "black",
          fontSize: "20px",
          backgroundColor: "white",
          borderRadius:"10px"
        }}
        id="transactionType"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="+">收入</option>
        <option value="-">支出</option>
      </select>
    </>
  );
}

export default IncomeExpenseInput;
