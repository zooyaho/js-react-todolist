import Home from "./routes/Home";
import Write from "./routes/WriteTodo";
import Todo from "./routes/DetailTodo";
import UpdateTodo from "./routes/UpdateTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
