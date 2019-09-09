import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">TRAVELOG</h1>
            <p className="lead">Click on a pic to travel to it, but don't travel to the same place more than once. There's lots more to see!</p>
        </div>
    </div>
  );
}

export default Jumbotron;


