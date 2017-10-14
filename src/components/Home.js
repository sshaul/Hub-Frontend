import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

// Importing other components
import Node from './Node'
import Profile from './Profile'

// Importing icons
import CreditCard from '../icons/CreditCard.png'
import CreditScore from '../icons/CreditScore.png'
import Transaction from '../icons/Transaction.png'
import Inquery from '../icons/Inquery.png'
import DerogatoryMark from '../icons/DerogatoryMark.png'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Link to="/cards"><Node icon={CreditCard} nodeid="node-1" loadwait="1" /></Link>
                <Node icon={CreditScore} nodeid="node-2" loadwait="1.8" />
                <Node icon={Transaction} nodeid="node-3" loadwait="1.2" />
                <Node icon={Inquery} nodeid="node-4" loadwait="1.6" />
                <Node icon={DerogatoryMark} nodeid="node-5" loadwait="1.4" />
                <Profile />
            </div>
        )
    }
}

export default Home;