import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/layout/Navbar";
// import Home from "./components/pages/Home";
import Login from "./components/login/Login";
import NotFound from "./components/pages/NotFound";
import AddTodoForm from "./components/TodoList/AddTodoForm";
// import TodoList from "./components/TodoList/TodoList";
// import "./App.css";
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todoList" element={<AddTodoForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;