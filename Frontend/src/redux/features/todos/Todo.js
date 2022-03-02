import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, delItem } from "./todosSlice";
import { useState } from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

import { Input } from "@mui/material";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  textAlign: "center",

  marginLeft: 50,
};
export default function Todos() {
  // get data of store
  const todo = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [getText, setGetText] = useState("");
  const [editText, setEditText] = useState(false);
  return (
    <List sx={style} component="ul" aria-label="mailbox folders">
      {todo.map(({ text, id }, index) => (
        <ListItem button sx={{ background: "pink" }} key={id}>
          {/* text for card-todo  */}
          <ListItemText primary={text} />
          {/* functionality for edit  */}
          <Button
            onClick={() => {
              dispatch(edit({ index, text: getText }));
              setEditText(!editText);
            }}
          >
            edit
          </Button>

          {editText ? (
            <Input
              type="text"
              onChange={(e) => setGetText(e.target.value)}
            ></Input>
          ) : (
            ""
          )}
          {/* input for update text  */}
          {/* functionality delete item  */}
          <Button onClick={() => dispatch(delItem(index))}>delete</Button>
        </ListItem>
      ))}
    </List>
  );
}
