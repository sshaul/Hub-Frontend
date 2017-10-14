import React, {Component} from 'react';

class Node extends Component {
    render() {
      return (
        <div className="node" id={this.props.nodeid}>
          <img alt="Node Image" src={this.props.icon} />
        </div>
      );
    }
}

export default Node;