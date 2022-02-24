import { createSlice } from "@reduxjs/toolkit";

const data = {
  todos: [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet.",
      resolved: false,
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet.ipsum dolor sit amet.",
      resolved: false,
    },
    {
      id: 3,
      description:
        "Lorem ipsum doloripsum doloripsum doloripsum dolor sit amet.",
      resolved: false,
    },
  ],
  cards: [],
};

let lastId = 0;
const slice = createSlice({
  name: "todo",
  initialState: data,
  reducers: {
    dataAdded: (data, action) => {
      return { ...data, cards: [...action.payload] };
    },
    todoAdded: ({ todos }, action) => {
      console.log(action);
      todos.push({
        id: lastId++,
        description: action.payload,
        resolved: false,
      });
    },
    todoDeleted: (data, action) => {
      const newTodos = data.todos.filter((todo) => todo.id !== action.payload);
      return { ...data, todos: [...newTodos] };
    },
    todoResolved: (data, action) => {
      const todoIndex = data.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      data.todos[todoIndex].resolved = !data.todos[todoIndex].resolved;
    },
    todoEdited: (data, action) => {
      const todoIndex = data.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      data.todos[todoIndex].description = action.payload.description;
    },
  },
});

export const { todoAdded, dataAdded, todoDeleted, todoResolved, todoEdited } =
  slice.actions;

export default slice.reducer;
