import React from "react";
import ProductItem from "./ProductItem";
import { ListGroup } from "reactstrap";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
    const { products, cartItems } = this.props;
    return (
      <div>
        <h1>Products</h1>
        <ListGroup>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              disabled={!!cartItems.find(c => c.productId === product.id)}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products,
  cartItems: state.cartItems
}))(ProductList);
