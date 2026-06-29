import React from 'react'

const Cards = (props) => {
    
  return (
    <>
      <div className="card-container">
        <div className="card-wrapper">
            <img src="https://i.pinimg.com/webp87/736x/5d/36/be/5d36be32f592980f9b25ead5f34e1061.webp" alt="image" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View more</button>
        </div>
      </div>
    </>
  )
}

export default Cards
