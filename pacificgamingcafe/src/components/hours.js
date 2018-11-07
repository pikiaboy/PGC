import React, { Component } from "react";
import { Table } from "react-bootstrap";

// const whiteText = {
//   color: "white"
// };

class Hours extends Component {
  render() {
    return (
      <div>
        <h1 /*style={whiteText}*/>Hours</h1>
        <Table responsive>
          <tbody /*style={whiteText}*/>
            <tr>
              <td>Monday</td>
              <td>2:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>5:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>2:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>4:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>2:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>2:00 pm - 11:00 pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>2:00 pm - 11:00 pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Hours;
