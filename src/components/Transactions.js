import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TransactionList from './TransactionList.js'

import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"


class Transactions extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";

      return (
          <div className="transactions">
            <Link to="/">
              <div className="backButton">
                <img alt="Back" src={backbtn} />
              </div>
            </Link>
            <h1>Transactions</h1>
            <div className="transactionTable">
                {<TransactionList />}

            </div>
          </div>
      );
    }
}

export default Transactions;