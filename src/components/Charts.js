import React from 'react'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


export default function Charts() {

    const data = {
        labels: ['Complete', 'Missing'],
        datasets: [{
            data: [34, 56],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ]
        }]
    }

  return (
    <div><Doughnut data={data}/>  </div>
  )
}
