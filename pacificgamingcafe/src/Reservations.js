import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Calendar from "./components/calendar";
import TimePicker from './components/timepicker';

import { Grid, Row, Col} from "react-bootstrap";
//import BackendView from "./components/backendView";

class Reservations extends Component {
  render() {
    return (
      <div className="Reservations">
        <Header />
        <Grid>
          <Row>
            hello
          </Row>
          <Row>
            <Col xs={9} md={6}>
              <Calendar />
            </Col>
            <Col xs={9} md={6}>
              <TimePicker />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Reservations;
