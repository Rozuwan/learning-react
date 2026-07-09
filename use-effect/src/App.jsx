import { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("use effect is running");
  },[a]);

  return (
    <div>
      <h1>value of a is {a}</h1>
      <h1>value of b is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
