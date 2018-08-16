export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user
  };
}

export function addCartItem(cartItem) {
  return {
    type: "ADD_CART_ITEM",
    payload: cartItem
  };
}

export function deleteCartItem(id) {
  return {
    type: "DELETE_CART_ITEM",
    payload: {
      id
    }
  };
}
