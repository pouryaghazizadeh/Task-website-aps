import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Todo from "./Todo";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";

import { todoAdded, todoDeleted, todoResolved } from "./store/reducer";
import EditTodo from "./EditTodo";
import { useLocation, useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = e.target.todo.value;
    dispatch({ type: todoAdded.type, payload: newTodo });
  };

  return (
    <>
      <Container>
        <Box
          onSubmit={(e) => handleSubmit(e)}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              name="todo"
              label="Required"
              placeholder="enter todo"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
            },
          }}
        >
          <Box>
            {todos.map(({ description, id, resolved }) => {
              return (
                <Grid container key={id} id={id}>
                  <Grid item xs={9} md={10} lg={11}>
                    <Typography
                      variant="h5"
                      component="p"
                      fontWeight="bold"
                      sx={{
                        textDecorationLine: resolved ? " " : "line-through",
                      }}
                      onClick={() =>
                        dispatch({ type: todoResolved.type, payload: id })
                      }
                    >
                      {description}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center" md={2} lg={1}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <EditIcon
                          sx={{ cursor: "pointer" }}
                          color="primary"
                          fontSize="large"
                          onClick={() => navigate("/edit", { state: id })}
                        />
                      </Grid>
                      <Grid item>
                        <DeleteIcon
                          sx={{ cursor: "pointer" }}
                          color="error"
                          fontSize="large"
                          onClick={() =>
                            dispatch({
                              type: todoDeleted.type,
                              payload: id,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TodoList;
