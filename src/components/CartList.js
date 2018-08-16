import React from "react";
import CartItem from "./CartItem";
import { ListGroup } from "reactstrap";
import { connect } from "react-redux";

class CartList extends React.Component {
  render() {
    const { cartItems, products } = this.props;
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

export default connect(state => ({
  products: state.products,
  cartItems: state.cartItems
}))(CartList);
