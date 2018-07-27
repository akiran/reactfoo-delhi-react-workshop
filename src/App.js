import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductsList";
import CartList from "./components/CartList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "laptop", price: "$1000", description: "" },
        { id: 2, title: "keyboard", price: "$100", description: "" }
      ],
      cartItems: []
    };
  }
  addCartItem = cartItem => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.concat(cartItem)
    }));
  };
  deleteCartItem = id => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(cartItem => cartItem.id !== id)
    }));
  };
  render() {
    const { products, cartItems } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ProductList products={products} addCartItem={this.addCartItem} />
        <CartList
          cartItems={cartItems}
          deleteCartItem={this.deleteCartItem}
          products={products}
        />
      </div>
    );
  }
}

export default App;
