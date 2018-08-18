import React from "react";
import CartItem from "./CartItem";
import { ListGroup } from "reactstrap";
import { CartItemsContext } from "../context";

export default class CartList extends React.Component {
  render() {
    return (
      <CartItemsContext.Consumer>
        {({ cartItems }) => (
          <div>
            <h1>Cart</h1>
            <ListGroup>
              {cartItems.length ? (
                cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
              ) : (
                <div>Cart is empty</div>
              )}
            </ListGroup>
          </div>
        )}
      </CartItemsContext.Consumer>
    );
  }
}
