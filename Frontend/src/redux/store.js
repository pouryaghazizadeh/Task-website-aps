import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import homeRaducer from "./homeSlice";
import userReducer from "./userSlice"

export default configureStore({
  reducer: {
    todos: todoReducer,
    home: homeRaducer,
    user: userReducer,
  },
});
