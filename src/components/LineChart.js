import React from 'react';
import { Line } from 'react-chartjs-2'
import  {Chart as ChartJS, LineElement} from 'chart.js/auto'

ChartJS.register(
  LineElement
)

function LineChart({chartData}) {
  return <Line data={chartData}  />
}

export default LineChart