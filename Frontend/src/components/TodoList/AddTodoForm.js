import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    //Send action
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <Box component="div" sx={{ display: "flex", marginTop: "100px" }}>
      <form onSubmit={onSubmit}>
        <TextField
          type="text"
          label="Add ToDo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          variant="outlined"
          size="small"
          type="submit"
          sx={{ fontSize: 20, ml: 5, mt: 1 }}
        >
          +
        </Button>
      </form>
      <TodoList />
    </Box>
  );
};

export default AddTodoForm;
