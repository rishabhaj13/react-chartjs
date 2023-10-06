import React from 'react';
import { Pie } from 'react-chartjs-2'
import  {ArcElement, Chart as ChartJS} from 'chart.js/auto'

ChartJS.register(
  ArcElement
)

function PieChart({chartData}) {
  return <Pie data={chartData}  />
}

export default PieChart