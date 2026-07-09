import  axios  from "axios";
import { useState } from "react";
const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=1&limit=20",
    );
     setUserData(response.data);
  };


  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {userData.map((e,idx)=>{
          return  <img height={200} key={idx} src={e.download_url} alt={e.author}/>
        })}
      </div>
    </div>
  );
};

export default App;
