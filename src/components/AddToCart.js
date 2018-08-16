import React from "react";
import uuid from "uuid";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addCartItem } from "../actions";

class AddToCart extends React.Component {
  addToCart = () => {
    const { productId, addCartItem } = this.props;
    addCartItem({
      id: uuid.v4(),
      productId
    });
  };
  render() {
    return (
      <Button
        color="primary"
        onClick={this.addToCart}
        disabled={this.props.disabled}
      >
        Add to cart
      </Button>
    );
  }
}

export default connect(
  null,
  { addCartItem }
)(AddToCart);
