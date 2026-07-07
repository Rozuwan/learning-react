import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, details });
    setTask(copytask);
    setTitle("");
    setDetails("");
    console.log(copytask);
  };

  return (
    <div className="h-screen bg-black lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
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

        <button className="bg-white color-black border outline-none rounded-full active:bg-black active:text-white">
          Add Notes
        </button>
      </form>

      <div className=" bg-black p-5 lg:w-1/2">
        <h1 className="font-bold text-2xl text-white">Your notes :</h1>
        <div className="flex flex-wrap h-full overflow-auto gap-5 mt-5">
          {task.map((e, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-35 rounded-2xl bg-amber-50  p-5"
              >
                <h2 className="text-xl font-bold">{e.title}</h2>
                <p className="mt-2 font-medium text-gray-500">{e.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
