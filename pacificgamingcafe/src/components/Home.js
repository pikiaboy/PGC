import React, { Component } from "react";
import MainCarousel from "./mainCarousel";
//import Header from "./header";
import Footer from "./footer";
import Prices from "./prices";
import Hours from "./hours";
import Calendar from "./calendar";
import TimePicker from './timepicker';
import { Grid, Row, Col } from "react-bootstrap";
//import BackendView from "./components/backendView";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Grid>
          <Row>
            <Col xs={14} md={12} mdOffset={0}>
              <MainCarousel />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={9} md={6}>
              <Prices />
            </Col>
            <Col xs={9} md={6}>
              <Hours />
            </Col>
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

export default Home;