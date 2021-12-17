import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import TempData from './components/tempData';
import UmiData from './components/umiData';
import './style/style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default class App extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <TempData />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <UmiData />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Chart className="chart" />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
