import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DerogatoryMarksList from './DerogatoryMarksList.js'

import backbtn from "../black-icons/Backward-Black-RGB-20150106.png"


class DerogatoryMarks extends Component {
    render() {
      document.body.style.backgroundColor = "#FCD800";

      return (
          <div className="derogatorymarks">
            <Link to="/">
              <div className="backButton">
                <img alt="Back" src={backbtn} />
              </div>
            </Link>
            <h1>Derogatory Marks</h1>
            <div className="list-table">
                {<DerogatoryMarksList />}

            </div>
          </div>
      );
    }
}

export default DerogatoryMarks;