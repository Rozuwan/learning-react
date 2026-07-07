import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
            
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
