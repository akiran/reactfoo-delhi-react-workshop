import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AppContent from "./components/AppContent";
import { ProductsContext, CartItemsContext, UserContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      products: [
        { id: 1, title: "laptop", price: "$1000", description: "" },
        { id: 2, title: "keyboard", price: "$100", description: "" }
      ],
      cartItems: [],
      user: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  }
  setRoute = route => {
    this.setState({ route });
  };
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
  setUser = user => {
    this.setState({ user });
  };
  render() {
    const { route } = this.state;
    return (
      <ProductsContext.Provider value={{ products: this.state.products }}>
        <CartItemsContext.Provider
          value={{
            cartItems: this.state.cartItems,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem
          }}
        >
          <UserContext.Provider
            value={{ user: this.state.user, setUser: this.setUser }}
          >
            <div className="App">
              <Header setRoute={this.setRoute} />
              <AppContent route={route} />
            </div>
          </UserContext.Provider>
        </CartItemsContext.Provider>
      </ProductsContext.Provider>
    );
  }
}

export default App;
