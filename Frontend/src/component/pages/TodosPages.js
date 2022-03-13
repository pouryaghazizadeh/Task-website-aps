import {
  TextField,
  Container,
  Typography,
  Paper,
  FormGroup,
  FormLabel,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "../../redux/features/todos/Todo.js";
import { add, delAll } from "../../redux/features/todos/todosSlice";
export default function Todos() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  return (
    <Container component="section" sx={{ textAlign: "center" }}>
      <Box
        component="main"
        marginTop={20}
        sx={{ textAlign: "center", width: "100%" }}
      >
        <Box component="header">
          <Typography variant="h6" component="h2">
            Add Todo :
          </Typography>
        </Box>

        <FormGroup
          component="form"
          height="auto"
          sx={{
            textAlign: "center",
            width: 400,
            padding: 10,
            marginLeft: 35,
          }}
        >
          <FormLabel value="what to do?">what to do?</FormLabel>

          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            type="text"
            sx={{ width: 400 }}
            name="task"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ width: 400 }}
            onClick={(e) => {
              e.preventDefault();

              // if (setTodoText.toString() !== "") {
              if (todoText !== "") {
                dispatch(add({ text: todoText, id: Date.now().toString() }));
                setTodoText("");
              } else {
                console.log("it is empty");
              }

              //  date for id becuse unic

              //
              // setTodoText &&
              //   dispatch(add({ text: todoText, id: Date.now().toString() }));
              // setTodoText("");
            }}
          >
            Add Todo
          </Button>
        </FormGroup>
      </Box>
      <Box>
        <Box sx={{ width: 500 }}>
          <Todo />
        </Box>
        <Button onClick={() => dispatch(delAll())}>DeleteAll</Button>
      </Box>
    </Container>
  );
}
