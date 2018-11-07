import React, { Component } from 'react';
import {Navbar, Grid, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header >

<Navbar fluid={true} fixedTop={true} inverse ={true}>
<div className="logo" >
            <img class="img-responsive" margin={100} padding="100px" width ={400} padding = {100} src= {require("/Users/alysiatran/Documents/PGC/pacificgamingcafe/src/components/headerComponent/PGC logonew.png")}></img> 
          </div>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Home</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
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
</Navbar>;
      </header>
    );
  }
}

export default Header;