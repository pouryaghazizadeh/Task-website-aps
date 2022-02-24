import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/edit" element={<EditTodo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
