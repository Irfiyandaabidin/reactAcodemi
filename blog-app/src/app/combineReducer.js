import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import usersReducer from "./users/userSlice";

const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
});

export default rootReducer;
