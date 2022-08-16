import { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../../store/todo-context";
import TodoItem from "./TodoItem";
const TodoList = () => {
  /* CSS */
  const TodoList = styled.main`
    width: 30rem;
    margin-top: 2rem;
    ul {
      padding: 0;
      margin: 0;
    }
  `;

  const todoCtx = useContext(TodoContext);
  /*
      key={todo.id}
      id={todo.id}
      title={todo.title}
      content={todo.content}
      date={todo.date}
  */

  const itemList = (
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

  return <TodoList>{itemList}</TodoList>;
};

export default TodoList;
