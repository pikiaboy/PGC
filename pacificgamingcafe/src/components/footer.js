import React, { Component } from "react";

const whiteText = {
  color: "white"
};

class Footer extends Component {
  render() {
    return (
      <footer /*style={whiteText}*/>
        Contact Info: <br />
        803 Pacific Ave, Santa Cruz, CA 95060 <br />
        Phone: (415) 910-0592 <br />
      </footer>
    );
  }
}

export default Footer;
