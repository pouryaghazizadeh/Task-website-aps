import { configureStore } from "@reduxjs/toolkit";
import todosSliceRducer from "../features/todos/todosSlice";
import dataSliceRducer from "../features/home/homesSlice";
export const store = configureStore({
  reducer: {
    todos: todosSliceRducer,
    data: dataSliceRducer,
  },
});
