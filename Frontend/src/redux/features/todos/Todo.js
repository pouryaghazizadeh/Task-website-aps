import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, delItem } from "./todosSlice";
import { useState } from "react";
export default function Todos() {
  // get data of store
  const todo = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [getText, setGetText] = useState("");
  return (
    <ol>
      {todo.map(({ text, id }, index) => (
        <li key={id}>
          {/* text for card-todo  */}
          {text}
          {/* functionality for edit  */}
          <button onClick={() => dispatch(edit({ index, text: getText }))}>
            edit
          </button>
          {/* input for update text  */}
          <input
            type="text"
            onChange={(e) => setGetText(e.target.value)}
          ></input>
          {/* functionality delete item  */}
          <button onClick={() => dispatch(delItem(index))}>delete</button>
        </li>
      ))}
    </ol>
  );
}
