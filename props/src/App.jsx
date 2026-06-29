import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <div className="parent">
        <Cards user="Ram Bahadur" age={20}/>
        <Cards user="Shyam Bahadur" age={29}/>
        <Cards user="Hari Bahadur" age={30}/>
      </div>
    </>
  );
};

export default App;
