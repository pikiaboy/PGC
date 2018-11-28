import React, { Component } from "react";
import "./App.css";
import MainCarousel from "./components/mainCarousel";
import Header from "./components/header";
import Footer from "./components/footer";
import Prices from "./components/prices";
import Hours from "./components/hours";
import Calendar from "./components/calendar";
import TimePicker from './components/timepicker';
import { Grid, Row, Col } from "react-bootstrap";
//import BackendView from "./components/backendView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={14} md={12} mdOffset={0}>
              <MainCarousel />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={14} md={12} mdOffset={0}>
            <h1>About Us</h1>
            <font size = "4">Pacific Gaming Cafe is a gaming cafe located in Downtown Santa Cruz. 
            With snacks and sodas, as well as a large selection of games, Pacific Gaming Cafe is a great place for anyone to game with friends. 
            Pacific Gaming Cafe also hosts Super Smash Bros tournaments. 
            There are special student discounts too!</font>
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
          <h1>Reservations</h1>
            <Col xs={12} md={6}>
            <div><strong>Date:</strong> <Calendar /></div>
            </Col>
            <Col xs={12} md={6}>
            <div><strong>Time:</strong> <TimePicker /></div>
            </Col>
          </Row>
        </Grid>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
