const initialProductsState = [
  { id: 1, title: "laptop", price: "$1000", description: "" },
  { id: 2, title: "keyboard", price: "$100", description: "" }
];

export default function(state = initialProductsState) {
  return state;
}
