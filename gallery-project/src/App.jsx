import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=20`
        );

        setUserData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <button
            disabled
            className=" text-white px-8 py-3  font-semibold animate-pulse cursor-not-allowed"
          >
            Loading...
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {userData.map((e, idx) => (
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

                <p className="text-center font-bold text-xl py-2">
                  {e.author}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 pb-5">
            <button
              onClick={() => {
                if (index > 1) {
                  setIndex((prev) => prev - 1);
                }
              }}
              className="bg-amber-50 text-black px-6 py-2 text-sm cursor-pointer active:scale-95 font-semibold rounded-2xl"
            >
              Prev
            </button>

            <span className="text-xl font-bold">{index}</span>

            <button
              onClick={() => {
                setIndex((prev) => prev + 1);
              }}
              className="bg-amber-50 text-black px-6 py-2 text-sm cursor-pointer active:scale-95 font-semibold rounded-2xl"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;