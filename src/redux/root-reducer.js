import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConifig = {
  key: "root",
  storage,
  whitelist: ["cart"], //whitelist contains the name of the reducer we want to store
};

const rootReducer = combineReducers({
  user: userReducer, //there is no reason to persist this, as this is already handled by firebase
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConifig, rootReducer);
