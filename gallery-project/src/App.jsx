import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      const getData = async () => {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=20`,
        );
        setUserData(response.data);
      };
      getData();
    },
    [index],
  );

  return (
    <div className="h-screen bg-black text-white p-4 overflow-auto">
      <h1>{index}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        {userData.length > 0 ? (
          userData.map((e, idx) => {
            return (
              <div
                className="rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300"
                key={idx}
              >
                <img
                  src={e.download_url}
                  alt="images"
                  className="w-full h-60 object-cover"
                  loading="lazy"
                  onClick={() => window.open(e.download_url, "_blank")}
                />
                <p className="text-center font-bold text-xl">{e.author}</p>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-amber-50 text-black px-6  py-2  text-sm  cursor-pointer active:scale-95 font-semibold rounded-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-50 text-black px-6  py-2  text-sm  cursor-pointer active:scale-95 font-semibold rounded-2xl"
        >
          Nxt
        </button>
      </div>
    </div>
  );
};

export default App;
