import React, {Component} from 'react';

import {Line} from 'react-chartjs-2';

class CreditHistory extends Component {
    render() {
        console.log("Rendering CreditHistory");
        var data = {
            labels: ['May', 'June', 'July', 'August', 'September'],
            datasets: [
                {
                    data: [620, 650, 640, 690, 675],
                    label: "Scores",
                    backgroundColor: 'rgb(0, 166, 202)',
                    borderColor: 'rgb(0, 166, 202)',
                    borderWidth: 2,
                    fill: false,
                    pointBorderWidth: 5,
                    pointHoverRadius: 8
                }
            ]
        }

        return (
            <div className="chart">
                <Line data={data}/>
            </div>
        );
    }
}

export default CreditHistory;