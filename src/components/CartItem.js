import React from "react";
import { DropdownItem } from "reactstrap";

export default class CartItem extends React.Component {
  render() {
    const { cartItem, products } = this.props;
    const product = products.find(p => p.id === cartItem.productId);
    return <DropdownItem>{product.title}</DropdownItem>;
  }
}
