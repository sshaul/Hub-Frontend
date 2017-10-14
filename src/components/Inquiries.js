import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InquiriesList from './InquiriesList.js';

import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"

class Inquiries extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";

      return (
          <div className="inquiries">
            <Link to="/">
              <div className="backButton">
                <img alt="Back" src={backbtn} />
              </div>
            </Link>
            <h1>Inquiries</h1>
            {<InquiriesList />}
          </div>
      );
    }
}

export default Inquiries;