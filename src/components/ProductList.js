import React from "react";

const products = [
  { id: 1, title: "laptop", price: "$1000", description: "" },
  { id: 2, title: "keyboard", price: "$100", description: "" }
];

export default class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    );
  }
}
