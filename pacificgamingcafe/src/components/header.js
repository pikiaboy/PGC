import React, { Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import {Reservations} from "../Reservations.js";
import {Router, Route} from "react-router";
//import Clock from "./clock";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar fluid={true} fixedTop={true} inverse={true}>
          <Navbar.Header>
            <div className="logo">
              <img
                class="img-responsive"
                margin={100}
                padding="100px"
                width={400}
                src={require("../PGC_logoneww.png")}
              />
            </div>
          </Navbar.Header>
          <Navbar.Header
            style={{ marginBottom: 0, marginTop: 35, marginLeft: 30 }}
          >
            <Navbar.Brand>
              <a href="#home">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav
            style={{ fontSize: 18, marginBottom:0, marginTop: 35 }}
            stacked={false}
          >
            <NavItem eventKey={2} href="/Reservations">
              Reservations
            </NavItem>
            <NavDropdown eventKey={3} title="Info" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Consoles</MenuItem>
              <MenuItem eventKey={3.2}>Games</MenuItem>
              <MenuItem eventKey={3.3}>Computers</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Admin link</MenuItem>
            </NavDropdown>
          </Nav>
          {/*<Clock />*/}
          <Navbar.Header>
          <a href="https://www.yelp.com/biz/pacific-gaming-cafe-santa-cruz" target="_blank">
            <img
            margin={100}
            padding="100px"
            width={150}
                src={require("/Users/alysiatran/Documents/PGC/pacificgamingcafe/src/components/headerComponent/yelp-logo.png")}
              />
            </a>
            </Navbar.Header>
        </Navbar>
      </header>
    );
  }
}

export default Header;
