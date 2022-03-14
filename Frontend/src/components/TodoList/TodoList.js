import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import List from "@mui/material/List";

const TodoList = () => {
  //Get the list
  const todos = useSelector((state) => state.todos);

  return (
    <List sx={{ width: "100%", maxWidth: 1100 }}>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </List>
  );
};

export default TodoList;