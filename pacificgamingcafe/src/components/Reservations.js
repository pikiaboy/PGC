import React, { Component } from "react";
import Footer from "./footer";
import Calendar from "./calendar";
import TimePicker from './timepicker';
//import BackendView from "./components/backendView";

class Reservations extends Component {
  render() {
    return (
      <div className="Reservations">
          <Calendar />
          <TimePicker />
        <Footer />
      </div>
    );
  }
}

export default Reservations;
