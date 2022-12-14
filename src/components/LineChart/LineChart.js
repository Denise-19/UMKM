import React from "react";
import { Line } from 'react-chartjs-2';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  
const data = {
  labels: MONTHS,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


const LineChart = () => {
    return (
        <div>
           <Line data={
            {labels: MONTHS,
            }
           }/>
        </div>
    )
}

export default LineChart;