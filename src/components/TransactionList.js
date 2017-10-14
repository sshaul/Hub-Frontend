import React, { Component } from 'react';

import Griddle from 'griddle-react';

class TransactionList extends Component {

  constructor() {
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {

    fetch('http://54.148.219.23/transactions/1')
    .then(results =>{
      return results.json();
    }).then(data => {
      let transactions = data.map((transaction) => {
        var date = new Date(Date.parse(transaction.timestamp));
        return {
          "Date": date.getUTCMonth() + 1 + "-" + date.getUTCDate() + "-" + date.getUTCFullYear(),
          "Amount": "$" + transaction.amount,
          "Merchant": transaction.merchant,
          "Card": transaction.card_name
        }
      })
      this.setState({transactions: transactions});
      console.log("state", this.state.transactions);
    })
  }

  render() {
    return(
      <Griddle
      data={this.state.transactions}
      components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
        <div>
          <Table />
        </div>
      )}}
    />)
  }

}

export default TransactionList;