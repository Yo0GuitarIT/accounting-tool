"use client"
import { useState } from 'react';

function IncomeExpenseInput({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onOptionChange(selectedValue);
  };

  return (
    <>
      <label htmlFor="transactionType"></label>
      <select
        id="transactionType"
        onChange={handleOptionChange}
        value={selectedOption}>
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
    </>
  );
}

export default IncomeExpenseInput;
