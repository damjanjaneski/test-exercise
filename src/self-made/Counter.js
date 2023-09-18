import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((number) => number + 1);
  };

  const decrease = () => {
    setNumber((number) => number - 1);
  };

  return (
    <div
      style={{
        width: "700px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <button onClick={increase}>Increase</button>
      <span style={{ fontSize: "100px" }}>{number}</span>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
