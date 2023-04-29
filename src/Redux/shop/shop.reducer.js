import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.SET_SHOP_DATA:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
