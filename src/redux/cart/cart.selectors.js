import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //Input selector which gets the whole state and returns only a slice
//of that state. One step deep usually

export const selectCartItems = createSelector(
  //Since createSelector is being used, this is memoized selector
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (
  cartItems //gives the total of cart
) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  )
);
