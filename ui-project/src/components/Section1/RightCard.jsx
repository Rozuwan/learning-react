import { MoveRight } from "lucide-react";
const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 rounded-4xl overflow-hidden relative ">
      <img className="h-full w-full object-cover " src={props.img} alt="img1" />
      <div className="absolute top-0 h-full w-full p-8 flex justify-between flex-col">
        <h2 className="rounded-full bg-white h-10 w-10 flex justify-center items-center text-xl shadow">
          {props.id + 1}
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black/5 backdrop-blur-xs flex flex-col justify-end p-8">
          <p className="text-shadow-lg text-white">{props.intro}</p>
          <div className=" flex justify-between mt-5">
            <button className="bg-blue-500 p-2 rounded-3xl text-white">
              {props.tag}
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
