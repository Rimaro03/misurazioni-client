import React from "react";
import getData from "../getData";

export default class TempData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getData().then((datas) => {
      this.setState({ data: datas });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Temperatura</h1>
        <p>{this.state.data.temperatura}</p>
        <br />
        <h1>Umidita</h1>
        <p>{this.state.data.umidita}</p>
      </div>
    );
  }
}
