import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="deck">
      <div className="card bg-dark text-white" onClick={() => props.handleIncrement(props.count)}>
          <img className="card-img" src={props.image} alt={props.name}/>
          <div className="card-img-overlay">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.country}</p>
              <p className="card-text">{props.count}</p>
          </div>
      </div>
    </div>

  );
}

export default Card;


