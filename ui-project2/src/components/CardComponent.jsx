import { MapPinPen } from "lucide-react";

const CardComponent = (props) => {
  return (
    <div>
      <div className="relative border border-black rounded-3xl overflow-hidden h-155 w-80 mt-10 shrink-0 snap-center cursor-pointer">
        <img className="h-full w-full object-cover" src={props.img} />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-5 text-white">
          <h2 className="text-2xl font-bold">{props.name}</h2>

          <h3 className="flex items-center gap-2 text-sm text-gray-200">
            <MapPinPen size={16} />
            {props.location}
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            {props.desc}
          </p>

          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">{props.dist}</h3>
              <p className="text-xs text-gray-300">Distance</p>
            </div>

            <div className="text-right">
              <h3 className="text-lg font-semibold">{props.elev}</h3>
              <p className="text-xs text-gray-300">Elevation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
