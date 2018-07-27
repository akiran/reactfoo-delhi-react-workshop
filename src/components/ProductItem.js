import React from "react";
import AddToCart from "./AddToCart";

export default class Product extends React.Component {
  render() {
    const { product, addCartItem } = this.props;
    return (
      <div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <AddToCart productId={product.id} addCartItem={addCartItem} />
      </div>
    );
  }
}
