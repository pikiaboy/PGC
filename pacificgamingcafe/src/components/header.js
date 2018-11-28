import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Button
} from "react-bootstrap";
import ThemeButton from "./themeButton";

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
                padding={100}
                src={require("../PGC_logonew.png")}
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
            style={{ fontSize: 18, marginBottom: 0, marginTop: 35 }}
            stacked={false}
          >
            <NavItem eventKey={1} href="#">
              Info
            </NavItem>
            <NavItem eventKey={2} href="#">
              Reservation
            </NavItem>
            <NavDropdown eventKey={3} title="More Info" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Consoles</MenuItem>
              <MenuItem eventKey={3.2}>Games</MenuItem>
              <MenuItem eventKey={3.3}>Computers</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <ThemeButton />
        </Navbar>
      </header>
    );
  }
}

export default Header;
