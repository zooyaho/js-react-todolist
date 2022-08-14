import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const TodoList = styled.main`
    width: 30rem;
    background-color: #ccc;
    margin-top: 2rem;
    ul {
      padding: 0;
      margin: 0;
    }
  `;

  return (
    <TodoList>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </TodoList>
  );
};

export default TodoList;
