import React from "react";
import CartItem from "./CartItem";
import { ListGroup } from "reactstrap";
export default class CartList extends React.Component {
  render() {
    const { cartItems, deleteCartItem, products } = this.props;
    return (
      <div>
        <h1>Cart</h1>
        <ListGroup>
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem
                key={cartItem.id}
                products={products}
                cartItem={cartItem}
                deleteCartItem={deleteCartItem}
              />
            ))
          ) : (
            <div>Cart is empty</div>
          )}
        </ListGroup>
      </div>
    );
  }
}
