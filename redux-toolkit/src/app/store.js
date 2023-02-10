import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/shoes/shoesSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    shoes: reducer,
    user: userReducer,
  },
});

export default store;
