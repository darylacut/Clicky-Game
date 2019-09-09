import React, {Component} from 'react';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card/";
import Wrapper from "./components/Wrapper";
import places from "./places.json";
import './App.css';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    places,
    count: 0,
    score: 0,
    clickedCards: []
  };


   // handleIncrement increments this.state.count by 1
   handleIncrement = () => {
    // use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };


  // Map this state of places and render a Card component for each object
  render() {
    return (
    <div>
      <Jumbotron/>
      <Wrapper>
         {this.state.places.map(place => (
          <Card
            id={place.id}
            name={place.name}
            image={place.image}
            country={place.country}
            count={place.count}
          />
         
        ))}
      </Wrapper>
    </div>
  );
}
}

export default App;
