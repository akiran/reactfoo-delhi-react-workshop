import React from "react";
import uuid from "uuid";
import { Button } from "reactstrap";

export default class AddToCart extends React.Component {
  addToCart = () => {
    const { productId, addCartItem } = this.props;
    addCartItem({
      id: uuid.v4(),
      productId
    });
  };
  render() {
    return <Button onClick={this.addToCart}>Add to cart</Button>;
  }
}
