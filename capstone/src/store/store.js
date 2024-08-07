import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type: " + action.type);
//   console.log("payload: " + action.payload);
//   console.log("currentState: " + store.getState());
//   next(action);
//   console.log("next state: " + store.getState());
// };

// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
//   Boolean
// );
const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persister = persistStore(store);

