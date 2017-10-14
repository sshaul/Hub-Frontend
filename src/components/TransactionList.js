import React, { Component } from 'react';

import {Animated} from "react-animated-css";

class TransactionList extends Component {

  constructor() {
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {

  fetch('http://52.41.111.0/transactions/1')
    .then(results =>{
      return results.json();
    }).then(data => {
      var val;
      for (val in data) {
        var newDate = new Date(Date.parse(data[val].timestamp));
        data[val].amount = "$" + data[val].amount;
        data[val].timestamp = newDate.getUTCMonth() + 1 + "-" + (newDate.getUTCDate() - 1) + "-" + newDate.getUTCFullYear();
        console.log(data[val].timestamp);
      }
      console.log("state", this.state.transactions);
      this.setState({transactions: data});
    })
  }

  render() {
    return(
      <Animated animateIn="fadeInUp" animationInDelay="0">
        <table>
        <tr className="table-headers">
          <th>Date</th>
          <th>Amount</th>
          <th>Merchant</th>
          <th>Card</th>
        </tr>
        {this.state.transactions.map(transaction =>
          <tr className="table-entries">
            <td>{transaction.timestamp}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.merchant}</td>
            <td>{transaction.card_name}</td>
          </tr>
        )}
        </table>
      </Animated>
    )
  }
}

export default TransactionList;