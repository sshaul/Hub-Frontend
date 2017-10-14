import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Importing other components
import Home from "./components/Home";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions"
import Credit from "./components/Credit"

// Importing logos



// Importing CSS
import './App.css';

class App extends Component {
  render() {
    document.body.style.backgroundColor = "#00A6CA";
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/credit" component={Credit} />
        </div>
      </Router>
    );
  }
}

export default App;
