import React from "react";
import Product from "./ProductItem";
import { ListGroup, ListGroupItem } from "reactstrap";
import withBackground from "../utils/commonBackground";

class ProductList extends React.Component {
  render() {
    const { products, addCartItem, cartItems } = this.props;
    return (
      <div>
        <h1>Products</h1>
        <ListGroup>
          {products.map(product => (
            <Product
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

const ProductListWithBackground = withBackground("yellow")(ProductList);

export default ProductListWithBackground;
