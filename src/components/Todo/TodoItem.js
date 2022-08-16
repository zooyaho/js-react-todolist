import styled from "styled-components";
import { Link } from "react-router-dom";
import Date from "../UI/Date";

const TodoItem = ({ title, date }) => {
  console.log(title);
  const TodoItem = styled.li`
    background-color: #fff;
    padding: 1.2rem 1.2rem 1rem 1.2rem;
    margin-top: 1rem;
    list-style: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 18px;
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
    span {
      font-size: 14px;
      color: #828282;
      margin: 0;
    }
  `;
  return (
    <>
      <TodoItem>
        <Link to="/todo/124">{title}</Link>
        <Date date={date} />
      </TodoItem>
    </>
  );
};
export default TodoItem;
