import styled from "styled-components";

const TodoItem = () => {
  const TodoItem = styled.li`
    background-color: #fff;
    padding: 1.2rem 0 1rem 1rem;
    margin-top: 1rem;
    list-style: none;
    border-radius: 10px;
  `;
  return (
    <>
      <TodoItem>Title...</TodoItem>
    </>
  );
};
export default TodoItem;
