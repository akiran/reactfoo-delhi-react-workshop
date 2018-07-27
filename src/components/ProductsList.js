import React from "react";
import ProductItem from "./ProductItem";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class ProductList extends React.Component {
  render() {
    const { products, addCartItem } = this.props;
    return (
      <div>
        <h1>Products</h1>
        <ListGroup>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              addCartItem={addCartItem}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}
