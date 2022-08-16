import Home from "./routes/Home";
import Write from "./routes/WriteTodo";
import Todo from "./routes/DetailTodo";
import UpdateTodo from "./routes/UpdateTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/todo/:id" element={<Todo />} />
        <Route exact path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
