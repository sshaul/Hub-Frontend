import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

// Importing other components
import Card from './Card';

// Import logo
import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            usage: 0,
            cards: []
        }
    }

    componentDidMount() {
        var usage = 0;
        var cards = [];
        fetch('http://52.41.111.0/simplecards/1')
        .then(results => {
            return results.json();
        }).then(jsonResult => {
            usage = jsonResult.overall_usage;
            cards = jsonResult.cards
            this.setState({usage: usage})
            this.setState({cards: cards});         
        });
    }

    render() {
        const animations = ["bounceInLeft", "bounceInRight", "bounceInLeft", "bounceInRight", "bounceInLeft", "bounceInRight"]
        document.body.style.backgroundColor = "#FCD800";
        return (
            <div className="Cards">
                <Link to='/'>
                    <div className="backButton">
                        <img alt="Back" src={backbtn} />
                    </div>
                </Link>
                <div class="page-title">
                    <Animated animationIn="fadeIn" animationInDelay=".2">
                        <h1>Cards</h1>
                    </Animated>
                    <Animated animationIn="fadeIn" animationInDelay=".4">
                        <h3>Overall Usage: {this.state.usage}%</h3>
                    </Animated>
                </div>
                {this.state.cards.map((card, i) => 
                    <Card title={card.card_name} type={card.type} 
                     balance={card.balance} limit={card.credit_limit} animation={animations[i]}/>
                )}
            </div>
        );
    }
}

export default Cards;