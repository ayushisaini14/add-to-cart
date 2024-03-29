import { cartActionType } from "./cart.types";

export const setCartAction = () => ({
  type: cartActionType.TOGGLE_CART_BUTTON,
});

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
