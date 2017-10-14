import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Importing other components
import Home from "./components/Home";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions"
import Inqueries from "./components/Inqueries"
import DerogatoryMarks from "./components/DerogatoryMarks"


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
          <Route exact path="/inqueries" component={Inqueries} />
          <Route exact path="/derogatorymarks" component={DerogatoryMarks} />
        </div>
      </Router>
    );
  }
}

export default App;
