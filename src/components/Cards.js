import React, {Component} from 'react';

// Importing other components
import Card from './Card';

class Cards extends Component {
    render() {
        return (
            <div className="Cards">
                <h1>Cards</h1>
                {<Card title="Chase Freedom" type="Credit" balance="$44.52" limit="$3000" usage="1.48%" />}
            </div>
        );
    }
}

export default Cards;