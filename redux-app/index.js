const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// Action
const BUY_SHOES = "BUY_SHOES";
const BUY_GLOVES = "BUY_GLOVES";

// State
const initialShoes = {
  stockShoes: 50,
};
const initialGloves = {
  stockGloves: 50,
};

// Reducer
const shoesReducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return {
        ...state,
        stockShoes: state.stockShoes - 2,
      };
    default:
      return state;
  }
};
const glovesReducer = (state = initialGloves, action) => {
  switch (action.type) {
    case BUY_GLOVES:
      return {
        ...state,
        stockGloves: state.stockGloves - 2,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  shoes: shoesReducer,
  gloves: glovesReducer,
});
const store = createStore(rootReducer);

store.subscribe(() => console.log("Subscribe dijalankan"));

store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_GLOVES });
console.log(store.getState());
