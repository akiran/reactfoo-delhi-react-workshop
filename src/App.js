import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AppContent from "./components/AppContent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <AppContent />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
