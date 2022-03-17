import React, { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
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
    <Container
      component="div"
      sx={{ display: "flex", marginTop: "100px", maxWidth: 1100 }}
    >
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          sx={{ mr: 3 }}
          type="text"
          label="Add ToDo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          variant="outlined"
          size="small"
          type="submit"
          sx={{ fontSize: 20, m: 1 }}
        >
          +
        </Button>
      </Box>
      <TodoList />
    </Container>
  );
};

export default AddTodoForm;
