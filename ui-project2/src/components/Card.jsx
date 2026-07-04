import CardComponent from "./CardComponent";
const Card = (props) => {
  console.log(props.mountains);
  return (
    <div className="pt-5">
      <div className="relative h-185 w-full bg-white px-8 py-8">
        <h1 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1 rounded-2xl text-2xl font-mono">
          Mountains
        </h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {props.mountains.map(function (e, indx) {
              return (
                <CardComponent
                  key={indx}
                  name={e.name}
                  location={e.location}
                  desc={e.description}
                  dist={e.distance}
                  elev={e.elevation}
                  img={e.image}
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
