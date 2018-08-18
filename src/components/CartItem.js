import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";
import deleteIcon from "../img/trash-o.svg";
import { ProductsContext, CartItemsContext } from "../context";

export default class CartItem extends React.Component {
  render() {
    const { cartItem } = this.props;
    return (
      <ProductsContext.Consumer>
        {({ products }) => {
          const product = products.find(p => p.id === cartItem.productId);
          return (
            <CartItemsContext.Consumer>
              {({ deleteCartItem }) => (
                <ListGroupItem>
                  <Row>
                    <Col sm={10}>{product.title}</Col>
                    <Col sm={2}>
                      <img
                        onClick={() => deleteCartItem(cartItem.id)}
                        src={deleteIcon}
                        alt="delete"
                      />
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
            </CartItemsContext.Consumer>
          );
        }}
      </ProductsContext.Consumer>
    );
  }
}
