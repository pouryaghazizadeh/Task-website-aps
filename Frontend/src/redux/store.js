import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import homeRaducer from "./homeSlice"

export default configureStore({
  reducer: {
    todos: todoReducer,
    home: homeRaducer,
  },
});
