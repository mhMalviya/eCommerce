import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger"; //imported the middleware

import rootReducer from "./root-reducer";

const middlewares = [logger]; //array of middlewares

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //Creates a new persisted version of our store

export default { store, persistor };
