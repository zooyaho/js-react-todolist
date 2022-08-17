import Card from "../components/UI/Card";
import Date from "../components/UI/DateUI";
import UpdateForm from "../components/Layout/UpdateForm";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Button from "../components/UI/Button/Button";
import TodoContext from "../store/todo-context";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

/* CSS */
const UpdateTodoSt = styled.div`
  div div:first-child {
    margin-left: 2rem;
    margin-top: 2.5rem;
  }
`;

const UpdateTodo = () => {
  const navigate = useNavigate();
  const todoCtx = useContext(TodoContext);
  const { id } = useParams();
  const todo = todoCtx.todos.find((todo) => todo.id === id);

  const UpdateTodoHandler = (title, content) => {
    const newTodo = { id: id, title: title, content: content, date: todo.date };
    todoCtx.updateTodo(newTodo);
  };

  return (
    <UpdateTodoSt>
      <Card>
        <Date date={todo.date}></Date>
        <UpdateForm
          onUpdateTodo={UpdateTodoHandler}
          title={todo.title}
          content={todo.content}
        >
          <ActiveBtnWrap>
            <Button
              bgColor={"#BABABA"}
              paddingSide={"2rem"}
              type="button"
              mode={"BACK"}
              onBack={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              bgColor={"#6ACE5A"}
              paddingSide={"2rem"}
              type="submit"
              mode={"BACK"}
              onBack={() => navigate(-1)}
            >
              Save
            </Button>
          </ActiveBtnWrap>
        </UpdateForm>
      </Card>
    </UpdateTodoSt>
  );
};

export default UpdateTodo;
