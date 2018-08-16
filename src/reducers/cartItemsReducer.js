export default function(state = [], action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return state.concat(action.payload);
    case "DELETE_CART_ITEM":
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    default:
      return state;
  }
}
