import axios from "axios";

const App = () => {
  const getData = async()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   
   console.log(response);
   
  }
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
};

export default App;
