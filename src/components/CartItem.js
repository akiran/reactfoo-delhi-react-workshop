import React from "react";

export default class CartItem extends React.Component {
  render() {
    const { cartItem, products } = this.props;
    const product = products.find(p => p.id === cartItem.productId);
    return <div>{product.title}</div>;
  }
}
