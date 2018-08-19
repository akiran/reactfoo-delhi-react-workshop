import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Title />
      </div>
    );
  }
}

export default App;
