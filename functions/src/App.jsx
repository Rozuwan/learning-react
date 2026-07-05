import React from "react";

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("button is clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
