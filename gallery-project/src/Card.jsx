const Card = ({ image, author }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300">
      <img
        src={image}
        alt={author}
        className="w-full h-60 object-cover"
        loading="lazy"
        onClick={() => window.open(image, "_blank")}
      />

      <p className="text-center font-bold text-xl py-2">{author}</p>
    </div>
  );
};

export default Card;
