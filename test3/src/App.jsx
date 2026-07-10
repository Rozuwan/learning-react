import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      const getData = async () => {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=10`,
        );
        setUser(response.data);
      };

      getData();
    },
    [index],
  );

  return (
    <div>
      <h1>{index}</h1>
      <button
        onClick={() => {
          if (index>1) {
            setIndex(index - 1);
          }
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        nxt
      </button>
      <div>
        {user.map((e) => {
          return <Card
           key={e.id} 
           image={e.download_url} 
           author={e.author} 
           />;
        })}
      </div>
    </div>
  );
};

export default App;
