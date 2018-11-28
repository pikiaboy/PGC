import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { colorStyle } from "./style";

class Prices extends Component {
  render() {
    return (
      <div>
        <h1 style={colorStyle}>Prices</h1>
        <Panel style={colorStyle}>
          <Panel.Heading style={colorStyle}>
            <Panel.Title componentClass="h3">Members</Panel.Title>
          </Panel.Heading>
          <Panel.Body>$5.00 / Hour</Panel.Body>
          <Panel.Body>$12.00 / 3 Hours</Panel.Body>
        </Panel>
        <Panel style={colorStyle}>
          <Panel.Heading style={colorStyle}>
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
