import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");


  const submitHandler = (e) => {
    
    e.preventDefault();
    setTitle("");
    setDetails("");
    console.log(title, details);
  };

  return (
    <div className="h-screen bg-black lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="flex flex-col  gap-4  p-10 lg:w-1/2"
      >
        <h1 className="font-bold text-2xl text-white">ADD notes :</h1>

        {/* adding input */}
        <input
          className="p-2 border border-white text-white outline-none rounded-lg "
          type="text"
          placeholder="Enter Notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* details */}
        <textarea
          className="p-2 border border-white text-white outline-none"
          type="text"
          placeholder="Enter notes here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white color-black border outline-none rounded-full">
          Add Notes
        </button>
      </form>

      <div className=" bg-black p-5 lg:w-1/2">
        <h1 className="font-bold text-2xl text-white">Your notes :</h1>
        <div className="flex flex-wrap h-full overflow-auto gap-5 mt-5">
          <div className="h-52 w-35 rounded-2xl bg-amber-50"></div>
          <div className="h-52 w-40 rounded-2xl bg-amber-50"></div>
          <div className="h-52 w-40 rounded-2xl bg-amber-50"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
