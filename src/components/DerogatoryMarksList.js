import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class DerogatoryMarksList extends Component {

  constructor() {
    super();
    this.state = {
      marks: []
    }
  }

  componentDidMount() {

  fetch('http://52.41.111.0/marks/1')
    .then(results =>{
      return results.json();
    }).then(data => {
      var val;
      for (val in data) {
        var newDateReceived = new Date(Date.parse(data[val].date_received));
        var newDateExpires = new Date(Date.parse(data[val].date_expires));

        console.log(newDateExpires);

        data[val] = {
          "date_received": (newDateReceived.getUTCMonth() + 1) + "-" + (newDateReceived.getUTCDate() - 1) + "-" + newDateReceived.getUTCFullYear(),
          "date_expires": (newDateExpires.getUTCMonth() + 1) + "-" + (newDateExpires.getUTCDate() - 1) + "-" + newDateExpires.getUTCFullYear(),
          "description": data[val].description
        }
      
      }
      
      this.setState({marks: data});
      console.log("state", this.state.marks);
    })
  }

  render() {
    return(
      <Animated animateIn="fadeInUp" animationInDelay="0">
        <table>
        <tr className="table-headers">
          <th>Date Received</th>
          <th>Date Expires</th>
          <th>Description</th>
        </tr>
        {this.state.marks.map(mark =>
          <tr className="table-entries">
            <td>{mark.date_received}</td>
            <td>{mark.date_expires}</td>
            <td>{mark.description}</td>
          </tr>
        )}
        </table>
      </Animated>
    )
  }
}

export default DerogatoryMarksList;