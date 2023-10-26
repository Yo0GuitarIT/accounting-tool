"use client"
import { useState } from 'react';

function AmountInput({ onAmountChange }) {
  const [amount, setAmount] = useState("");
  const handleAmountChange = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);
    onAmountChange(enteredAmount);
  };


  return (
    <div>
      <label htmlFor="amount"></label>
      <input
        type="number"
        id="amount"
        placeholder="$$$"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default AmountInput;
