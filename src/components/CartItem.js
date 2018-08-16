import React from "react";
import { ListGroupItem } from "reactstrap";
import deleteIcon from "../img/trash-o.svg";

export default class CartItem extends React.Component {
  render() {
    const { cartItem, products, deleteCartItem } = this.props;
    const product = products.find(p => p.id === cartItem.productId);
    return (
      <ListGroupItem>
        {product.title}{" "}
        <img
          onClick={() => deleteCartItem(cartItem.id)}
          src={deleteIcon}
          alt="delete"
        />
      </ListGroupItem>
    );
  }
}
