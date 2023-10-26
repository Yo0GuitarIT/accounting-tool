import React, { useState, useEffect } from "react";

function Total({ totalAmount }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalAmount);
  }, [totalAmount]);

  return <p>Total: {total}</p>;
}

export default Total;
