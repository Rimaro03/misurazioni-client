import React from 'react';
import ReactDOM from 'react-dom';
import TempChart from './components/tempChart';
import UmiCHart from './components/umiChart';
import TempData from './components/tempData';
import './style/style.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="tempDiv">
      <TempChart className="tempChart" />
      <TempData />
    </div>

    <div className="umiDiv">
      <UmiCHart className="umiChart" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
