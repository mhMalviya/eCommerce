import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  //we are creating this selector as we want to get
  //items of particular id. Hence the above selector has been passed in below.
  //this is the first selector we have written which would need a prop
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
