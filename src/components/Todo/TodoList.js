import { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../../store/todo-context";
import TodoItem from "./TodoItem";

/* CSS */
const TodoListSt = styled.main`
  width: 30rem;
  margin-top: 2rem;
  ul {
    padding: 0;
    margin: 0;
  }
  p {
    padding-top: 4rem;
    font-size: 18px;
    font-weight: bold;
    color: #828282;
    text-align: center;
  }
`;

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  const itemList =
    todoCtx.todos.length === 0 ? (
      <p>Start adding some!</p>
    ) : (
      <ul>
        {todoCtx.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            date={todo.date}
          />
        ))}
      </ul>
    );

  return <TodoListSt>{itemList}</TodoListSt>;
};

export default TodoList;
