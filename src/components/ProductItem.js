import React from "react";
import AddToCart from "./AddToCart";
import { ListGroupItem, Row, Col } from "reactstrap";

export default class Product extends React.Component {
  render() {
    const { product, addCartItem, disabled } = this.props;
    console.log(disabled);
    return (
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
    );
  }
}
