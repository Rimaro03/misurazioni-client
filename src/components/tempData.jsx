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
      <div className="tempDiv">
        <h3>Temperatura</h3>
        <h3>{this.state.data.temperatura}</h3>
      </div>
    );
  }
}
