import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stockShoes: 20,
};

const shoes = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    buyShoes: (state) => {
      state.stockShoes--;
    },
    addStock: (state, action) => {
      state.stockShoes = state.stockShoes + action.payload;
    },
  },
});

export const { buyShoes, addStock } = shoes.actions;
export default shoes.reducer;
