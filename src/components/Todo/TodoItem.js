import styled from "styled-components";
import { Link } from "react-router-dom";
import Date from "../UI/DateUI";

/* CSS */
const TodoItemSt = styled.li`
  background-color: #fff;
  margin-top: 1rem;
  list-style: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  a {
    padding: 1.2rem 0 1.2rem 1.2rem;
    width: 100%;
    font-size: 18px;
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  span {
    padding-right: 1.2rem;
    font-size: 14px;
    color: #828282;
    margin: 0;
  }
`;

const TodoItem = ({ id, title, date }) => {
  return (
    <>
      <TodoItemSt>
        <Link to={`/todo/${id}`}>{title}</Link>
        <Date date={date} />
      </TodoItemSt>
    </>
  );
};
export default TodoItem;
