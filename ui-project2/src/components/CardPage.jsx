import Card from "./Card";

const CardPage = ({mountains}) => {
  return (
    <div className="px-5 h-screen w-screen bg-black">
      <Card mountains={mountains} />
    </div>
  );
};

export default CardPage;
