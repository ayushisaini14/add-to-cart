import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const getShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [getShopCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (params) =>
  createSelector([getShopCollection], (collections) => collections[params]);
