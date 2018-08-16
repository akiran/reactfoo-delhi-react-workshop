import React from "react";
import { ListGroupItem } from "reactstrap";

export default class CartItem extends React.Component {
  render() {
    const { cartItem, products } = this.props;
    const product = products.find(p => p.id === cartItem.productId);
    return <ListGroupItem>{product.title}</ListGroupItem>;
  }
}
