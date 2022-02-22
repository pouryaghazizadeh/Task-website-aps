import { configureStore } from "@reduxjs/toolkit";
import todossliceRducer from "../features/todos/todosSlice";
export const store = configureStore({
  reducer: {
    todos: todossliceRducer,
  },
});
