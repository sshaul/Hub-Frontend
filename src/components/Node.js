import React, {Component} from 'react';

class Node extends Component {
    render() {
      return (
        <div className="node">
          <img src={this.props.icon} />
        </div>
      );
    }
}

export default Node;