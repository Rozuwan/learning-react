import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      const getData = async () => {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=20`,
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
          if (index > 1) {
            setIndex(index - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Next
      </button>
      <div>
        {user.map(function (e) {
          return <Card key={e.id} image={e.download_url} author={e.author} />;
        })}
      </div>
    </div>
  );
};

export default App;
