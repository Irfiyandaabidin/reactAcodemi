import { createStore, combineReducers } from "redux";
import glovesReducer from "./Gloves/GlovesReducer";
import shoesReducer from "./Shoes/ShoesReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

// combine
const rootReducer = combineReducers({
  shoes: shoesReducer,
  gloves: glovesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;

// 1 reducer
// export const store = createStore(shoesReducer);
