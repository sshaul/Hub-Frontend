import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

import CreditHistory from './CreditHistory';

import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"


class Credit extends Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0
        }
    }

    componentDidMount() {
        fetch('http://52.41.111.0/scorehistory/1')
        .then(results => {
            return results.json();
        }).then(jsonResult => {
            this.setState({
                currentScore: jsonResult[jsonResult.length - 1].score
            })
        })
    }

    render() {
        console.log("Rendering Credits.js");
        document.body.style.backgroundColor = "#FCD800";
        return (
            <div className="Credit">
                <Link to='/'>
                    <div className="backButton">
                        <img alt="Back" src={backbtn} />
                    </div>
                </Link>
                <div className="page-title">
                    <Animated animationIn="fadeIn" animationInDelay=".2">
                        <h1>Credit Score</h1>
                        <h3>{this.state.currentScore}</h3>
                    </Animated>
                </div>
                <div>
                    {<CreditHistory />}
                </div>
            </div>
        );
    }
}

export default Credit;