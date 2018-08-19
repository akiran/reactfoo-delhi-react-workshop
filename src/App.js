import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default App;
