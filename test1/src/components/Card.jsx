import React from "react";
import image from "../assets/img.png";
const Card = () => {
  return (
    <>
      <div className="card-container mx-auto p-5 w-full max-w-96 ">
        <div className="card-wrapper flex items-center gap-4 border rounded-[20px] p-4  ">
          <div className="image">
            <img src={image} alt="image" className="w-16 h-16 rounded-full" />
          </div>
          <div className="description">
            <h1>Roxuwan</h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
