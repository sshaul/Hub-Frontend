import React, { Component } from 'react';

// Importing other components
import Node from './components/Node'
import Profile from './components/Profile'

// Importing icons
import CreditCard from './icons/CreditCard.png'
import CreditScore from './icons/CreditScore.png'
import Transaction from './icons/Transaction.png'
import Inquery from './icons/Inquery.png'
import DerogatoryMark from './icons/DerogatoryMark.png'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Node icon={CreditCard} />
        <Node icon={CreditScore} />
        <Node icon={Transaction} />
        <Node icon={Inquery} />
        <Node icon={DerogatoryMark} />
        <Profile />
      </div>
    );
  }
}

export default App;
