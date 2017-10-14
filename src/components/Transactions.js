import React, {Component} from 'react';

import Griddle from 'griddle-react';
import TransactionList from './TransactionList.js'

class Transactions extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";

      return (
          <div className="transactions">
            <div className="backButton">
              <img alt="Back" src={this.props.back} />
            </div>
            <h1>Transactions</h1>
            <div className="transactionTable">
                {<TransactionList />}

            </div>
          </div>
      );
    }
}

export default Transactions;