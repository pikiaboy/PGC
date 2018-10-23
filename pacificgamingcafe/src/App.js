import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/pagesComponent/homePage";
import Header from "./components/headerComponent/header";
import Homepage from "./components/pagesComponent/homePage";
import Footer from "./components/footerComponent/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
