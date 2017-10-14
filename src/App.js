import React, { Component } from 'react';

// Importing other components
import Node from './components/Node'
import Profile from './components/Profile'
import Transactions from './components/Transactions'

// Importing icons
import CreditCard from './icons/CreditCard.png'
import CreditScore from './icons/CreditScore.png'
import Transaction from './icons/Transaction.png'
import Inquery from './icons/Inquery.png'
import DerogatoryMark from './icons/DerogatoryMark.png'
import Footer from './icons/logo.png'
import Back from './black-icons/Backward-Black-RGB-20150106.png'

import './App.css';

class App extends Component {
  render() {
    document.body.style.backgroundColor = "#00A6CA";
    return (
      <div className="App">
        <div className="content">
          {/* <Node icon={CreditCard} nodeid="node-1" />
          <Node icon={CreditScore} nodeid="node-2" />
          <Node icon={Transaction} nodeid="node-3" />
          <Node icon={Inquery} nodeid="node-4" />
          <Node icon={DerogatoryMark} nodeid="node-5" />
          <Profile /> */}
          <Transactions back={Back} />
        </div>
        <div className="footer">
          <img alt="Logo" src={Footer} />
        </div>
      </div>
    );
  }
}

export default App;
