const Card = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="top">
          <img
            src={props.image}
            alt="image"
          />
        </div>

        <div className="center">
          <h2>{props.name}</h2>
          <p>
            {props.description}
          </p>
          <div className="details">
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
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
