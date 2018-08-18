import React from "react";
import ProductItem from "./ProductItem";
import { ListGroup } from "reactstrap";
import { ProductsContext, CartItemsContext } from "../context";

export default class ProductList extends React.Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ products }) => (
          <CartItemsContext.Consumer>
            {({ cartItems }) => (
              <div>
                <h1>Products</h1>
                <ListGroup>
                  {products.map(product => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      disabled={
                        !!cartItems.find(c => c.productId === product.id)
                      }
                    />
                  ))}
                </ListGroup>
              </div>
            )}
          </CartItemsContext.Consumer>
        )}
      </ProductsContext.Consumer>
    );
  }
}
