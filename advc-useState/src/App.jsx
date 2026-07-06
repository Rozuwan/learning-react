import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const change = () => {
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
