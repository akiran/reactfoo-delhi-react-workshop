import React from "react";

export default class ProductList extends React.Component {
  state = {
    products: [
      { id: 1, title: "laptop", price: "$1000", description: "" },
      { id: 2, title: "keyboard", price: "$100", description: "" }
    ]
  };

  render() {
    return this.props.render(this.state.products);
  }
}
