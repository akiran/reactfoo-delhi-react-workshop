import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ListGroupItem, Row, Col, Alert } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductList
          render={data => {
            <ListGroupItem>
              {data.map(item => {
                return (
                  <Row>
                    <Col>
                      {" "}
                      <Alert color="info">{item.title}</Alert>
                    </Col>
                    <Col>
                      {" "}
                      <Alert color="info">{item.price}</Alert>
                    </Col>
                  </Row>
                );
              })}
            </ListGroupItem>;
          }}
        />
      </div>
    );
  }
}

export default App;
