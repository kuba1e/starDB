import { React, Component } from "react";
import "./row.css";


export default class Row extends Component {
  render() {
    const { left, right } = this.props;

    return (
      <div className="container d-flex justify-content-between">
        <div className="left">{left}</div>
        <div className="right">{right}</div>

      </div>
    );
  }
}
