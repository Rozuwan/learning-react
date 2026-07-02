import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full flex flex-nowrap overflow-x-auto rounded-4xl gap-10 p-4 w-3/4">
      {props.users.map(function (e,index) {
        return <RightCard key={index} id={index} img={e.img} intro={e.intro} tag={e.tag} />;
      })}
    </div>
  );
};

export default RightContent;
