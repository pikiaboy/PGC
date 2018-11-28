import React, { Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
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
                width={300}
                src={require("./images/pgclogo1.png")}/>
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
          <div style={{ marginBottom: 0, marginTop: 20, marginLeft: 300 }}>
          <a href="https://www.yelp.com/biz/pacific-gaming-cafe-santa-cruz" target="_blank">
            <img
            class="img-responsive center-block" width={100} align = "right" 
            src={require("./images/yelp-logo.png")}/>
            </a>
            </div>
        </Navbar>
      </header>
    );
  }
}

export default Header;
