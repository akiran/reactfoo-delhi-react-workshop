import React from "react";
import uuid from "uuid";

export default class AddToCart extends React.Component {
  addToCart = () => {
    const { productId, addCartItem } = this.props;
    addCartItem({
      id: uuid.v4(),
      productId
    });
  };
  render() {
    return <button onClick={this.addToCart}>Add to cart</button>;
  }
}
