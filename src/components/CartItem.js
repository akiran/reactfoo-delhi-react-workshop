import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";
import deleteIcon from "../img/trash-o.svg";
import { connect } from "react-redux";
import { deleteCartItem } from "../actions";

class CartItem extends React.Component {
  render() {
    const { cartItem, products, deleteCartItem } = this.props;
    const product = products.find(p => p.id === cartItem.productId);
    return (
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
    );
  }
}

export default connect(
  null,
  { deleteCartItem }
)(CartItem);
