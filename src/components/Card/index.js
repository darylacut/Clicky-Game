import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card bg-dark text-white">
        <img className="card-img" src={props.image} alt={props.name}/>
        <div className="card-img-overlay">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.country}</p>
        </div>
    </div>
  );
}

export default Card;


