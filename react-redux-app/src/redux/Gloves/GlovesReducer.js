import React from "react";
import { BUY_GLOVES } from "./GlovesType";

const initialGloves = {
  stockGloves: 50,
};

const glovesReducer = (state = initialGloves, action) => {
  switch (action.type) {
    case BUY_GLOVES:
      return {
        stockGloves: state.stockGloves - 1,
      };
    default:
      return state;
  }
};

export default glovesReducer;
