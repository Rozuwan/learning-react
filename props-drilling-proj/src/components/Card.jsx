import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card-container">
      <div className="top">
        <img src={props.brandLogo} alt="" />
        <button>
          Save <Bookmark />
        </button>
      </div>

      <div className="center">
        <h3>{props.company}</h3>
        <h2>{props.post}</h2>
        <div className="center-detail">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2} </h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>{props.pay}</h4>
          <h4>{props.location}</h4>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
