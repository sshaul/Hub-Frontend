import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InqueriesList from './InqueriesList.js'

import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"


class Inqueries extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";

      return (
          <div className="inqueries">
            <Link to="/">
              <div className="backButton">
                <img alt="Back" src={backbtn} />
              </div>
            </Link>
            <h1>Inqueries</h1>
            <div className="list-table">
                {<InqueriesList />}

            </div>
          </div>
      );
    }
}

export default Inqueries;