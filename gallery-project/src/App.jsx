import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=1&limit=40",
    );
    setUserData(response.data);
  };

  return (
    <div className="h-screen bg-black text-white p-4 overflow-auto">
      <button
        onClick={getData}
        className="bg-green-600 text-white px-5 py-2 rounded active:scale-95"
      >
        get data
      </button>
      <div className="">
        {userData.length > 0 ? (
          userData.map((e, idx) => {
            return (
              <div key={idx}>
                <img src={e.download_url} alt="images" />
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
