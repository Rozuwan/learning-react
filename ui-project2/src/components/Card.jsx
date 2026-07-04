import CardComponent from "./CardComponent";
const Card = ({mountains}) => {
  return (
    <div className="pt-5">
      <div className="relative h-185 w-full bg-white px-8 py-8">
        <h1 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1 rounded-2xl text-2xl font-mono">
          Mountains
        </h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {mountains.map(function (mountain) {
              return (
                <CardComponent
                  key={mountain.id}
                  img={mountain.image}
                  name={mountain.name}
                  location={mountain.location}
                  desc={mountain.description}
                  dist={mountain.distance}
                  elev={mountain.elevation}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
