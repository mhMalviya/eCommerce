import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger"; //imported the middleware
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk]; //array of middlewares

if (process.env.NODE_ENV === "development") {
  //only want to push the logger into the array when we are in dev mode
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //Creates a new persisted version of our store

export default { store, persistor };
