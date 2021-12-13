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

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>DASHBOARD</h1>
                </div>
                <div className='dataDiv'>
                    <TempData />
                    <UmiData />
                </div>
                <div className="chartDiv">
                    <Chart className="chart" />
                </div>
            </div>
        )
    }
}
