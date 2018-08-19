import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "laptop", price: "$1000", description: "" },
        { id: 2, title: "keyboard", price: "$100", description: "" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <ListGroup>
          {this.state.products.map(product => (
            <ListGroupItem key={product.id}>{product.title}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
