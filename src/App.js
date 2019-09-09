import React, {Component} from 'react';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card/";
import Wrapper from "./components/Wrapper";
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
