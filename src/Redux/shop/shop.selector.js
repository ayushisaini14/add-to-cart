import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const getShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);
