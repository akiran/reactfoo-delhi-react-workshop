import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  render() {
    const { products, addCartItem } = this.props;
    return (
      <div>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            addCartItem={addCartItem}
          />
        ))}
      </div>
    );
  }
}
