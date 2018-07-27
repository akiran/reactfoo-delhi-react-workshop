import React from "react";
import AddToCart from "./AddToCart";
import { ListGroupItem, Row, Col } from "reactstrap";

export default class Product extends React.Component {
  render() {
    const { product, addCartItem } = this.props;
    return (
      <ListGroupItem>
        <Row>
          <Col>{product.title}</Col>
          <Col>{product.description}</Col>
          <Col>{product.price}</Col>
          <Col>
            <AddToCart productId={product.id} addCartItem={addCartItem} />
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
