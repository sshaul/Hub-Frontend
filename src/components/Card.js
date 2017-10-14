import React, {Component} from 'react';
import {Animated} from "react-animated-css";

class Card extends Component {
    render() {
        document.body.style.backgroundColor = "#FCD800";
        return (
            <Animated animationIn={this.props.animation}>
                <div className="Card">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.type}</p>
                    <p>${this.props.balance} of ${this.props.limit}</p>
                </div>
            </Animated>
        );
    }
}

export default Card;