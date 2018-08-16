import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductsList";
import CartList from "./CartList";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";

export default class AppContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/cart" component={CartList} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
