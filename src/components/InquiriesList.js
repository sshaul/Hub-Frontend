import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Animated} from "react-animated-css";

class InquiriesList extends Component {

  constructor() {
    super();
    this.state = {
      inquiries: []
    }
  }

  componentDidMount() {

  fetch('http://52.41.111.0/inquiries/1')
    .then(results =>{
      return results.json();
    }).then(data => {
      var val;
      var resultInquiries = []
      var inqs = data.inquiries;
      for (val in inqs) {
        console.log(inqs[val].date);
        var inq = inqs[val];
        var newDate = new Date(Date.parse(inq.date));
        console.log(inq.text);
        resultInquiries.push({
          "date": (newDate.getUTCMonth() + 1) + "-" + (newDate.getUTCDate() - 1) + "-" + newDate.getUTCFullYear(),
          "inquirer": inq.text,
          "type": (inq.type).charAt(0).toUpperCase() + 
           (inq.type).substring(1, (inq.type).length)
        });
      };
      
      this.setState({hard_inqs: data.hard_inqs, 
                     soft_inqs: data.soft_inqs, 
                     inquiries: resultInquiries});
      
      console.log("state", this.state.inquiries);
      console.log("hard", this.state.hard_inqs);
      console.log("soft", this.state.soft_inqs);
      
    })
  }

  render() {

    const data = {
      labels: [
        'Hard',
        'Soft'
      ],
      datasets: [{
        data: [this.state.hard_inqs, this.state.soft_inqs],
        backgroundColor: [
        '#494949',
        '#00A6CA'
        ],
        hoverBackgroundColor: [
        '#494949',
        '#00A6CA',
        ]
      }]
    };

    return(
      <div>
        <div className="doughnutClass">
          <Doughnut class="doughnutClass" data={data}/>
        </div>
        <Animated animateIn="fadeInUp" animationInDelay="1">
        <table className="list-table">
          <tr className="table-headers">
            <th><Animated animateIn="fadeInUp" animationInDelay="1">Date</Animated></th>
            <th><Animated animateIn="fadeInUp" animationInDelay="1">Inquirer</Animated></th>
            <th><Animated animateIn="fadeInUp" animationInDelay="1">Type</Animated></th>
          </tr>
        {this.state.inquiries.map(inquiry =>
          <tr className="table-entries">
            <td><Animated animateIn="fadeInUp" animationInDelay="1.5">{inquiry.date}</Animated></td>
            <td><Animated animateIn="fadeInUp" animationInDelay="1.5">{inquiry.inquirer}</Animated></td>
            <td><Animated animateIn="fadeInUp" animationInDelay="1.5">{inquiry.type}</Animated></td>
          </tr>
        )}
        </table>
        </Animated>
       </div>
    )
  }
}

export default InquiriesList;