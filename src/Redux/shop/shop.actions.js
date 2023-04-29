import { shopActionTypes } from "./shop.types";

export const updateShopCollection = (collectionMap) => ({
  type: shopActionTypes.SET_SHOP_DATA,
  payload: collectionMap,
});
