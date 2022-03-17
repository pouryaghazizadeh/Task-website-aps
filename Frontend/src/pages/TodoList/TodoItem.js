import React from "react";
import { Button, List, ListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <List sx={{ width: "100%", maxWidth: 1100 }}>
      <ListItem sx={{ justifyContent: "space-between" }}>
        <span sx={{ alignItems: "center" }}>{title}</span>
        <Button
          variant="outlined"
          size="small"
          type="submit"
          sx={{ fontSize: 12 }}
          onClick={handleDeleteClick}
          color="error"
        >
          Delete
        </Button>
      </ListItem>
    </List>
  );
};

export default TodoItem;
