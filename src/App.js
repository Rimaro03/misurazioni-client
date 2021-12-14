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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default class App extends React.Component {
    render() {
        return (
            /*<div className="App">
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
            </div>*/
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        )
    }
}
