import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      const getData = async () => {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=20`,
        );
        console.log(response.data);
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
        {user.map(function (e, idx) {
          return (
            <img loading="lazy" height={200} key={idx} src={e.download_url} alt={e.author} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
