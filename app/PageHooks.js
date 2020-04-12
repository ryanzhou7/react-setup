import React from "react";

export default function PageHooks() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
    </>
  );
}
