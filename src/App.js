import { useState } from 'react';

import BarChart from './components/BarChart';
import {UserData} from './Data'
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {

  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Gains",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "#50b478",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 1.5,
      

    }]
  })

  return (
    <div className="App">
      
       <div style={{ width: 700 }}>
      <BarChart chartData={userData}/>
      </div> 
      <div style={{ width: 700 }}>
      <LineChart chartData={userData}/>
      </div> 
      <div style={{ width: 700 }}>
      <PieChart chartData={userData}/>
      </div> 
    </div>
  );
}

export default App;
