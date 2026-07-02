import { MoveRight } from "lucide-react";
const RightCard = () => {
  return (
    <div className="h-full w-80 bg-amber-500 rounded-4xl overflow-hidden relative ">
      <img
        className="h-full w-full object-cover "
        src="https://plus.unsplash.com/premium_photo-1675731938231-a7c5705836f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img1"
      />
      <div className="absolute top-0 h-full w-full p-8 flex justify-between flex-col">
        <h2 className="rounded-full bg-white h-10 w-10 flex justify-center items-center text-xl shadow">
          1
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black/5 backdrop-blur-xs flex flex-col justify-end p-8">
          <p className="text-shadow-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            vitae!
          </p>
          <div className=" flex justify-between mt-5">
            <button className="bg-blue-500 p-2 rounded-3xl text-white">
              Satisfied
            </button>
            <button className="bg-blue-300 p-2 rounded-full">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
