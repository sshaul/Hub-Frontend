import React, { Component } from 'react';

class InqueriesList extends Component {

  constructor() {
    super();
    this.state = {
      inqueries: []
    }
  }

  componentDidMount() {

  fetch('http://54.148.219.23/inqueries/1')
    .then(results =>{
      return results.json();
    }).then(data => {
      var val;
      for (val in data) {
        console.log(data[val].date);
        var newDate = new Date(Date.parse(data[val].date));
        console.log(newDate);
        data[val] = {
          "date": (newDate.getUTCMonth() + 1) + "-" + (newDate.getUTCDate() - 1) + "-" + newDate.getUTCFullYear(),
          "inquirer": data[val].text,
          "type": (data[val].type).charAt(0).toUpperCase() + (data[val].type).substring(1, (data[val].type).length)
        }
      }
      console.log("state", this.state.inqueries);
      this.setState({inqueries: data});
    })
  }

  render() {
    return(
      <table>
      <tr className="table-headers">
        <th>Date</th>
        <th>Inquirer</th>
        <th>Type</th>
      </tr>
      {this.state.inqueries.map(inquery =>
        <tr className="table-entries">
          <td>{inquery.date}</td>
          <td>{inquery.inquirer}</td>
          <td>{inquery.type}</td>
        </tr>
       )}
       </table>
    )
  }
}

export default InqueriesList;