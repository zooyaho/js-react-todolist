import AddBtn from "./AddBtn";
import Header from "./Header";
import TodoList from "./Todo/TodoList";
import { useState } from "react";

function App() {
  const [] = useState(true);
  const AddTodoHandler = () => {};
  return (
    <>
      <Header />
      <TodoList />
      <AddBtn onClick={AddTodoHandler} />
    </>
  );
}

export default App;
