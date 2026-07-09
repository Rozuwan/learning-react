import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=1&limit=40",
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className="h-screen bg-black text-white p-4 overflow-auto">
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
                  onClick={() => window.open(e.download_url, "_blank")}
                />
                <p className="text-center">{e.author}</p>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default App;
