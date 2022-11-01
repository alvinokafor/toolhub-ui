import React from 'react'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


export default function Charts() {

    const data = {
        labels: ['Found', 'Not Found'],
        datasets: [{
            data: [12, 5]
        }]
    }

  return (
    <div><Doughnut data={data}/>  </div>
  )
}
