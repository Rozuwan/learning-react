import { MoveUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between">
      <div>
        <h3 className=" mb-5 text-6xl font-bold">
          Prospective <br /> Customer
          <br /> Segmentation
        </h3>
        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente alias in vero dolorem veritatis aspernatur? Rerum magnam ratione possimus.</p>
      </div>
      <div>
        <MoveUpRight size={70} />
      </div>
    </div>
  );
};

export default LeftContent;
