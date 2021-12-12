import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import TempData from './components/tempData';
import UmiData from './components/umiData';
import './style/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="chartDiv">
      <Chart className="chart" />
    </div>
    <div className='dataDiv'>
      <TempData />
      <UmiData />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
