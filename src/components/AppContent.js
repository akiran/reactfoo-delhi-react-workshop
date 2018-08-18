import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductsList";
import CartList from "./CartList";
import Profile from "./Profile";

function Routes({ route }) {
  switch (route) {
    case "Cart":
      return <CartList />;
    case "Profile":
      return <Profile />;
    default:
      return <ProductList />;
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
