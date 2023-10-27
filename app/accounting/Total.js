import React, { useState, useEffect } from "react";

function Total({ totalAmount }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalAmount);
  }, [totalAmount]);

  return (
    <p
      style={{
        height: "30px",
        display: "flex",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      Total: {total}
    </p>
  );
}

export default Total;
