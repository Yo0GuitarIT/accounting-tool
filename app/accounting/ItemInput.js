"use client";

import { useState } from 'react';

function ItemInput({ value, onItemChange }) {
  const [item, setItem] = useState(value);

  const handleItemChange = (event) => {
    const enteredItem = event.target.value;
    setItem(enteredItem);
    onItemChange(enteredItem);
  };

  return (
    <div>
      <label htmlFor="item"></label>
      <input
        type="text"
        id="item"
        placeholder="Item"
        value={value}
        onChange={handleItemChange}
      />
    </div>
  );
}

export default ItemInput;
