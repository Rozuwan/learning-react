import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    setData(response.data);
    
  };
  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {data.map(function (e,idx) {
          return <h3 >Hello {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
