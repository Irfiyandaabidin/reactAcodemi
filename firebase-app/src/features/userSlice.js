import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const user = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = user.actions;
export default user.reducer;
