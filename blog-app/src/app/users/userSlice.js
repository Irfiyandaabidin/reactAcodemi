import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    user: "Penulis 1",
  },
  {
    id: 2,
    user: "Penulis 2",
  },
];

const users = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default users.reducer;
