
const Card = ({image,author}) => {
  return (
    <div >
      <img
        loading="lazy"
        height={200}
        src={image}
        alt={author}
      />
    </div>
  );
};

export default Card;
