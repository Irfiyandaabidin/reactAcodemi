import { BUY_SHOES } from "./ShoesType";

const initialShoes = {
  stockShoes: 20,
};

const shoesReducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return {
        stockShoes: state.stockShoes - 1,
      };
    default:
      return state;
  }
};

export default shoesReducer;
