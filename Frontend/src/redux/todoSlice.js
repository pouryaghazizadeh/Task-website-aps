import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      //Create the current status of the action based on payload
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    //Performance control and acceptance of current status
    toggleComplere: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // Update action based on paylod
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplere, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;