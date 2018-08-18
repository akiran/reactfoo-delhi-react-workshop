import React from "react";
import AddToCart from "./AddToCart";
import { ListGroupItem, Row, Col } from "reactstrap";
import { CartItemsContext } from "../context";

export default class Product extends React.Component {
  render() {
    const { product, disabled } = this.props;
    return (
      <CartItemsContext.Consumer>
        {({ addCartItem }) => (
          <ListGroupItem>
            <Row>
              <Col>{product.title}</Col>
              <Col>{product.description}</Col>
              <Col>{product.price}</Col>
              <Col>
                <AddToCart
                  productId={product.id}
                  addCartItem={addCartItem}
                  disabled={disabled}
                />
              </Col>
            </Row>
          </ListGroupItem>
        )}
      </CartItemsContext.Consumer>
    );
  }
}
