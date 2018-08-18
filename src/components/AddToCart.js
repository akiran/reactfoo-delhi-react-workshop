import React from "react";
import uuid from "uuid";
import { Button } from "reactstrap";
import { CartItemsContext } from "../context";

export default class AddToCart extends React.Component {
  render() {
    return (
      <CartItemsContext.Consumer>
        {({ addCartItem }) => (
          <Button
            color="primary"
            onClick={() =>
              addCartItem({
                id: uuid.v4(),
                productId: this.props.productId
              })
            }
            disabled={this.props.disabled}
          >
            Add to cart
          </Button>
        )}
      </CartItemsContext.Consumer>
    );
  }
}
