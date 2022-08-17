import Card from "../components/UI/Card";
import Date from "../components/UI/DateUI";
import UpdateForm from "../components/Layout/UpdateForm";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Button from "../components/UI/Button/Button";
import TodoContext from "../store/todo-context";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const UpdateTodo = () => {
  /* CSS */
  const UpdateTodo = styled.div`
    div div:first-child {
      margin-left: 2rem;
      margin-top: 2.5rem;
    }
  `;

  const navigate = useNavigate();
  const todoCtx = useContext(TodoContext);
  const { id } = useParams();
  const todo = todoCtx.todos.find((todo) => todo.id === id);

  const UpdateTodoHandler = (title, content) => {
    const newTodo = { id: id, title: title, content: content, date: todo.date };
    todoCtx.updateTodo(newTodo);
  };

  return (
    <UpdateTodo>
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
              isSave={true}
              onTodoSave={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              bgColor={"#6ACE5A"}
              paddingSide={"2rem"}
              type="submit"
              isSave={true}
              onTodoSave={() => navigate(-1)}
            >
              Save
            </Button>
          </ActiveBtnWrap>
        </UpdateForm>
      </Card>
    </UpdateTodo>
  );
};

export default UpdateTodo;
