import React from "react";
import ProductItem from "./ProductItem";
import { ListGroup } from "reactstrap";

export default class ProductList extends React.Component {
  render() {
    const { products, addCartItem, cartItems } = this.props;
    return (
      <div>
        <h1>Products</h1>
        <ListGroup>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              addCartItem={addCartItem}
              disabled={!!cartItems.find(c => c.productId === product.id)}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}
