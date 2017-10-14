import React, {Component} from 'react';


import TransactionList from './TransactionList.js'

class Transactions extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";
      
      var data = [
        {
          "Date": "10/3/2017",
          "Amount": "$5.99",
          "Merchant": "Target",
          "Card": "Chase Freedom"
        }
      ];

      return (
          <div className="transactions">
            <div className="backButton">
              <img alt="Back" src={this.props.back} />
            </div>
            <h1>Transactions</h1>
            <div className="transactionTable">
              <TransactionList />
            </div>
          </div>
      );
    }
}

export default Transactions;