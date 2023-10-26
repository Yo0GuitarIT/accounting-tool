"use client"

import { useState } from 'react';

function AmountInput({ value, onAmountChange }) {
  const [amount, setAmount] = useState(value);

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
        value={value}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default AmountInput;
