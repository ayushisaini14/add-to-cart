import { createSelector } from "reselect";

const selectCard = (state) => state.card;

export const getitemDetails = createSelector(
  [selectCard],
  (card) => card.itemDetails
);
