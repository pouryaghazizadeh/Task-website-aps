import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, delItem } from "./todosSlice";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import InputEdit from "../../../component/InputEdit";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  textAlign: "center",
};
export default function Todos() {
  // get data of store
  const todo = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [getText, setGetText] = useState("");
  return (
    <List sx={style} component="ul" aria-label="mailbox folders">
      {todo.map(({ text, id }, index) => (
        <ListItem button key={id}>
          {/* text for card-todo  */}
          <ListItemText primary={text} />
          {/* functionality for edit  */}
          <button
            onClick={() => {
              dispatch(edit({ index, text: getText }));

              return <InputEdit />;
            }}
          >
            edit
          </button>
          {/* input for update text  */}

          {/* functionality delete item  */}
          <button onClick={() => dispatch(delItem(index))}>delete</button>
        </ListItem>
      ))}
    </List>
  );
}
