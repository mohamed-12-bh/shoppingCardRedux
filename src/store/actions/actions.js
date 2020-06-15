import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const addToCart = (productInfo, quantity) => {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity,
  };
};

export const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    index,
  };
};

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
