const Card = () => {
  return (
    <div>
      <div className="card-container">
        <div className="top">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/0c/57/f9/lodge.jpg?w=500&h=-1&s=1"
            alt=""
          />
        </div>

        <div className="center">
          <h2>Swiss villa</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facere
            quia totam optio? Minus fuga delectus similique vero voluptate
            harum.
          </p>
          <div className="details">
            <h3>Guest favourite</h3>
            <h3>3 night stay</h3>
          </div>
        </div>

        <div className="bottom">
          <button>Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
