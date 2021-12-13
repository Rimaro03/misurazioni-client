import React from "react";
import getDBdata from "../db.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
require("mysql");

export default class umiChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getDBdata().then((datas) => {
      let data = [];
      datas.forEach((dato) => {
        data.push({
          name:
            new Date(dato.timestamp * 1000).getHours() +
            ": " +
            new Date(dato.timestamp * 1000).getMinutes(),
          temperatura: dato.temperatura,
          umidita: dato.umidita,
        });
      });
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <LineChart
        width={1100}
        height={500}
        data={this.state.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperatura"
          stroke="#f5a742"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="umidita" stroke="#42bcf5" />
      </LineChart>
    );
  }
}
