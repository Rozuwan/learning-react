import { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
        {data.map(function (e, index) {
          return <h1 key={index}>{e.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default App;
