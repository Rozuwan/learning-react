import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    setdata(jsonData);
  };

  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {data.map(function (e, index) {
          return <h1 key={index}>{e.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default App;
