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
          name: dato.timestamp,
          umidita: dato.umidita,
        });
      });
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <LineChart
        width={1000}
        height={300}
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
          dataKey="umidita"
          stroke="#42bcf5"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
