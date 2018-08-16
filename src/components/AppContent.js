import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductsList";
import CartList from "./CartList";
import Profile from "./Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes({
  route,
  products,
  cartItems,
  user,
  addCartItem,
  deleteCartItem,
  setUser
}) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <ProductList
            {...props}
            cartItems={cartItems}
            products={products}
            addCartItem={addCartItem}
          />
        )}
      />
      <Route
        path="/cart"
        render={props => (
          <CartList
            {...props}
            cartItems={cartItems}
            products={products}
            deleteCartItem={deleteCartItem}
          />
        )}
      />
      <Route
        path="/profile"
        render={props => <Profile {...props} user={user} setUser={setUser} />}
      />
    </Switch>
  );
}

export default class AppContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Routes {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}
