import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <p>{this.props.title}</p>
                <p>{this.props.type}</p>
                <p>{this.props.balance} of {this.props.limit}</p>
                <p>{this.props.usage}</p>

            </div>
        );
    }
}

export default Card;