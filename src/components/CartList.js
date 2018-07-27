import React from "react";
import CartItem from "./CartItem";

export default class CartList extends React.Component {
  render() {
    const { cartItems, addCartItem, products } = this.props;
    return (
      <div>
        {cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            products={products}
            cartItem={cartItem}
            addCartItem={addCartItem}
          />
        ))}
      </div>
    );
  }
}
