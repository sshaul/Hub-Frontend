import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Animated} from "react-animated-css";

// Importing other components
import Home from "./components/Home";
import Cards from "./components/Cards";


// Importing CSS
import './App.css';
import FooterLogo from './icons/logo.png'

class App extends Component {
  render() {
    document.body.style.backgroundColor = "#00A6CA";
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" component={Cards} />
          </div>
          <div className="footer">
            <Animated animationIn="fadeIn" animationInDelay="2">
              <img alt="Logo" src={FooterLogo} />
            </Animated>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
