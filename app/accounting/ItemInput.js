"use client";
import { useState } from "react";

function ItemInput({ value, onItemChange}) {
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
        style={{
          margin: "10px",
          padding: "5px",
          textAlign: "center",
          color: "black",
          fontSize: "20px",
          backgroundColor: "white",
          borderRadius:"10px"
        }}
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
