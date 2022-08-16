import styled from "styled-components";
import { Link } from "react-router-dom";

const TodoItem = () => {
  const TodoItem = styled.li`
    background-color: #fff;
    padding: 1.2rem 0 1rem 1rem;
    margin-top: 1rem;
    list-style: none;
    border-radius: 10px;
    a {
      font-size: 18px;
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  `;
  return (
    <>
      <TodoItem>
        <Link to="/todo/124">Title...</Link>
      </TodoItem>
    </>
  );
};
export default TodoItem;
