import React, {Component} from 'react';
import {Animated} from "react-animated-css";

class Node extends Component {
    render() {
      return (
        <div className="node" id={this.props.nodeid}>
          <Animated animationIn="fadeIn" animationInDelay={this.props.loadwait}>
            <a href="#">
              <img alt="Node Image" src={this.props.icon} />
            </a>
          </Animated>
        </div>
      );
    }
}

export default Node;