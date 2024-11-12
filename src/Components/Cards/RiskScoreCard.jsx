import '../../Pages/Dashbord/Dashborad';

import RootCard from './RootCard';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const riskData = {
  labels: ['Critical', 'High', 'Medium'],
  datasets: [
    {
      label: 'Risk Score',
      data: [7, 8, 10],
      backgroundColor: ['#fa0037', '#e5611a', '#f4ad28'],
      hoverBackgroundColor: ['#fa0037', '#e5611a', '#f4ad28'],
      borderWidth: 0,
      borderRadius: 20,
    },
  ],
};
const RiskScoreCard = () => {

  // Data for the Doughnut chart

  // Options for the Doughnut chart
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '95%',
    spacing: '5'
  };

  return (
    <RootCard title="Risk Score"
    link="View all risks"
      children={
        <div className='risk-content'>
          <div className='graph-wrapper'> {/* Adjust width and height here */}
            <Doughnut data={riskData} options={options} />
            <div className="risk-score">
              <h3 className='text-center mt-3'>F</h3>
              <p className='text-center'>Very high risk</p>
            </div>
          </div>
          <div className='risk-details'>
            <div className="critical">
              <label>Critical</label>
              <span>{riskData.datasets[0].data[0]}</span>
              <small className='color' style={{ backgroundColor: riskData.datasets[0].backgroundColor[0] }}></small>
            </div>
            <div className="high">
              <label>High</label>
              <span>{riskData.datasets[0].data[1]}</span>
              <small className='color' style={{ backgroundColor: riskData.datasets[0].backgroundColor[1] }}></small>
            </div>
            <div className="medium">
              <label>Medium</label>
              <span>{riskData.datasets[0].data[2]}</span>
              <small className='color' style={{ backgroundColor: riskData.datasets[0].backgroundColor[2] }}></small>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default RiskScoreCard;