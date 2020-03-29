import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div className="home">
      <div className="card-container">
        <div className="card">
          <div className="side">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/jimmy.jpg"
              alt="Jimmy Eat World"
            ></img>
          </div>
          <div className="side back">Jimmy Eat World</div>
        </div>
        <button onClick={props.myFunc}>Add to Cart</button>
        <p id="price">£9.99</p>
        <p>
          Bleed American is the fourth studio album by American rock band Jimmy
          Eat World, released on July 24, 2001, by DreamWorks Records.
        </p>
        
      </div>
      
    </div>
  );
};

export default Home;
