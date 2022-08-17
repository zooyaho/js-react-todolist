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
    p {
      padding-top: 4rem;
      font-size: 18px;
      font-weight: bold;
      color: #828282;
      text-align: center;
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

  return <TodoList>{itemList}</TodoList>;
};

export default TodoList;
