import React from 'react';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import places from "./places.json";
import './App.css';

function App() {
  return (
    <div className="container">
       
        <Jumbotron/>
        <Card/>
       
    </div>
  );
}

export default App;
