import React from "react";
import CartItem from "./CartItem";
import { DropdownMenu } from "reactstrap";

export default class CartList extends React.Component {
  render() {
    const { cartItems, addCartItem, products } = this.props;
    return (
      <DropdownMenu>
        {cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            products={products}
            cartItem={cartItem}
            addCartItem={addCartItem}
          />
        ))}
      </DropdownMenu>
    );
  }
}
