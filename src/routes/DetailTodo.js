import styled from "styled-components";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Card from "../components/UI/Card";
import Date from "../components/UI/DateUI";
import Button from "../components/UI/Button/Button";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import DeleteConfirm from "../components/Layout/DeleteConfirm";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import TodoContext from "../store/todo-context";

/* CSS */
const TodoSt = styled.div`
  div div:first-child {
    margin-top: 2.5rem;
  }
  div div:first-child > button {
    align-self: flex-start;
    margin-left: 2rem;
  }
  span {
    align-self: flex-start;
    margin-top: 2rem;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  margin-top: 2rem;
  width: 80%;
`;
const Content = styled.p`
  width: 80%;
`;

const Todo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todoCtx = useContext(TodoContext);
  const todo = todoCtx.todos.find((todo) => todo.id === id);

  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <TodoSt>
      {modalIsShown && <DeleteConfirm onClose={hideModalHandler} todoId={id} />}
      <Card>
        <ContentWrap>
          <Button
            bgColor={"#BABABA"}
            paddingSide={"2rem"}
            mode={"BACK"}
            onBack={() => navigate(-1)}
          >
            Back
          </Button>
          <Date date={todo.date}></Date>
          <Title>{todo.title}</Title>
          <Content>{todo.content}</Content>
          <ActiveBtnWrap>
            <Button
              mode={"MODAL_SHOW"}
              onModalOpen={showModalHandler}
              bgColor={"#EB7474"}
              paddingSide={"1.6rem"}
              type="button"
            >
              Delete
            </Button>
            <ButtonWrap bgColor={"#5780EB"} paddingSide={"1.2rem"}>
              <Link to={`/update/${id}`}>Update</Link>
            </ButtonWrap>
          </ActiveBtnWrap>
        </ContentWrap>
      </Card>
    </TodoSt>
  );
};
export default Todo;
