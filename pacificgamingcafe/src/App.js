import React, { Component } from "react";
import "./App.css";
import MainCarousel from "./components/mainCarousel";
import Header from "./components/header";
import Footer from "./components/footer";
import Prices from "./components/prices";
import Hours from "./components/hours";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { colorStyle } from "./components/style";
import ThemeButton from "./components/themeButton";

//import BackendView from "./components/backendView";

class App extends Component {
  render() {
    return (
      <div className="App" style={colorStyle}>
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
            <Col xs={9} md={6}>
              <Prices />
            </Col>
            <Col xs={9} md={6}>
              <Hours />
            </Col>
          </Row>
        </Grid>
        {/*<BackendView />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
