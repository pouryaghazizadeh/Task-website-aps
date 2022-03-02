import "./App.css";
import Home from "./component/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import TodosPages from "./component/pages/TodosPages";

import NotFound from "./component/pages/NotFound";
import NavBar from "./component/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodosPages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
