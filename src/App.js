import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import ProductList from "./components/ProductsList";
import CartList from "./components/CartList";
import Header from "./components/Header";
import withData from "./utils/getData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  addCartItem = cartItem => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.concat(cartItem),
    }));
  };
  deleteCartItem = id => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(cartItem => cartItem.id !== id),
    }));
  };
  render() {
    const { cartItems } = this.state;
    const { products } = this.props;

    return (
      <div className="App">
        <Header
          cartItems={cartItems}
          products={products}
          addCartItem={this.addCartItem}
          deleteCartItem={this.deleteCartItem}
        />
        <Container>
          <Row>
            <Col>
              <ProductList
                products={products}
                addCartItem={this.addCartItem}
                cartItems={cartItems}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const AppWithData = withData("products")(App);
