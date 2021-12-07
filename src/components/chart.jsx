import React from "react";
import getData from "../db.js";
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

const data = [];
getData().then((datas) => {
  console.log(datas);
  datas.forEach((dato) => {
    data.push({
      name: dato.timestamp,
      temperatura: dato.temperatura,
      umidita: dato.umidita,
    });
  });
});
console.log(data);

export default class App extends React.Component {
  render() {
    return (
      <LineChart
        width={1800}
        height={300}
        data={data}
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
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="temperatura" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
