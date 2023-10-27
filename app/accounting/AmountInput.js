"use client";
import { useState } from "react";

function AmountInput({ value, onAmountChange }) {
  const [amount, setAmount] = useState(value);

  const handleAmountChange = (event) => {
    const enteredAmount = event.target.value;

    if (!/^\d+$/.test(enteredAmount) || enteredAmount === "0") {
      return;
    }

    setAmount(enteredAmount);
    onAmountChange(enteredAmount);
  };

  return (
    <div>
      <label htmlFor="amount"></label>
      <input
        style={{
          margin: "10px",
          padding: "5px",
          textAlign: "center",
          color: "#00d775",
          fontSize: "20px",
        }}
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
