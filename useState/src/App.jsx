import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function jump() {
    setNum(num + 5);
  }
  function reset() {
    setNum(0);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Deacrease</button>
      <button onClick={jump}>Increase by 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
