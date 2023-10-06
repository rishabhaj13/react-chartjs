import React from 'react';
import { Bar } from 'react-chartjs-2'
import  {BarElement, Chart as ChartJS} from 'chart.js/auto'

ChartJS.register(
  BarElement
)

function BarChart({chartData}) {
  return <Bar data={chartData}  />
}

export default BarChart