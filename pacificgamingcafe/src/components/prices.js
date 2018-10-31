import React, { Component } from "react";
import { Panel } from "react-bootstrap";

const priceStyle = {
  color: "white"
};

var bgColors = {
  Default: "#FFFFFF",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42"
};

class Prices extends Component {
  render() {
    return (
      <div>
        <h1 /*style={priceStyle}*/>Prices</h1>
        <Panel>
          <Panel.Heading /*style={{ backgroundColor: bgColors.Yellow }}*/>
            <Panel.Title componentClass="h3">Members</Panel.Title>
          </Panel.Heading>
          <Panel.Body>$5.00 / Hour</Panel.Body>
          <Panel.Body>$12.00 / 3 Hours</Panel.Body>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Non-Members</Panel.Title>
          </Panel.Heading>
          <Panel.Body>$8.00 / Hour</Panel.Body>
          <Panel.Body>$20.00 / 3 Hours</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Prices;
