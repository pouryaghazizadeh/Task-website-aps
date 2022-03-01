import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "../../redux/features/todos/Todo.js";
import { add, delAll } from "../../redux/features/todos/todosSlice";
export default function Todos() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <main>
          <div className="header">
            <h2>Add Todo :</h2>
          </div>
          <form>
            <label> what to do?</label>
            <input
              type="text"
              name="task"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                //  date for id becuse unic
                dispatch(add({ text: todoText, id: Date.now().toString() }));
                setTodoText("");
              }}
            >
              Add Todo
            </button>
          </form>
        </main>
        <div className="todos">
          <div className="todo">
            <Todo />
          </div>
          <button onClick={() => dispatch(delAll())}>DeleteAll</button>
        </div>
      </div>
    </div>
  );
}
