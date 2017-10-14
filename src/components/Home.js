import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";
  

// Importing other components
import Node from './Node'
import Profile from './Profile'

// Importing icons
import CreditCard from '../icons/CreditCard.png'
import CreditScore from '../icons/CreditScore.png'
import Transaction from '../icons/Transaction.png'
import Inquery from '../icons/Inquery.png'
import DerogatoryMark from '../icons/DerogatoryMark.png'
import FooterLogo from '../icons/logo.png'

class Home extends Component {
    render() {
        document.body.style.backgroundColor = "#00A6CA";        

        return (
            <div className="Home">
                <div className="content">
                    <Link to="/cards"><Node icon={CreditCard} nodeid="node-1" loadwait="1" /></Link>
                    <Node icon={CreditScore} nodeid="node-2" loadwait="1.8" />
                    <Link to="transactions"><Node icon={Transaction} nodeid="node-3" loadwait="1.2" /></Link>
                    <Link to="inqueries"><Node icon={Inquery} nodeid="node-4" loadwait="1.6" /></Link>
                    <Link to="derogatorymarks"><Node icon={DerogatoryMark} nodeid="node-5" loadwait="1.4" /></Link>
                    <Profile />
                </div>
                <div className="footer">
                    <Animated animationIn="fadeIn" animationInDelay="2">
                        <img alt="Logo" src={FooterLogo} />
                    </Animated>
                </div>
            </div>
            
        )
    }
}

export default Home;