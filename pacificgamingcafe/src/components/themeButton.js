import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { setDarkStyle, setLightStyle, colorStyle } from "./style";

class ThemeButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      color: "#000000",
      backgroundColor: "#FFFFFF",
      text: "Light Theme",
      isLight: true
    };
    this.setState = this.setState.bind(this);
    this.changeToDark = this.changeToDark.bind(this);
    this.changeToLight = this.changeToLight.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeToDark() {
    this.setState({
      color: "#FFFFFF",
      backgroundColor: "#000000",
      text: "Dark Theme",
      isLight: false
    });
    setDarkStyle();
  }

  changeToLight() {
    this.setState({
      color: "#000000",
      backgroundColor: "#FFFFFF",
      text: "Light Theme",
      isLight: true
    });
    setLightStyle();
  }

  changeState() {
    if (this.state.isLight) {
      this.changeToDark();
    } else {
      this.changeToLight();
    }
  }

  render() {
    return (
      <Button style={colorStyle} onClick={this.changeState}>
        {this.state.text}
      </Button>
    );
  }
}

export default ThemeButton;
