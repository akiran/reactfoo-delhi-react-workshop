import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductsList";
import CartList from "./CartList";

function Routes(props) {
  switch (props.route) {
    case "Cart":
      return <CartList {...props} />;
    default:
      return <ProductList {...props} />;
  }
}

export default class AppContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Routes {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}
