import styled from "styled-components";
import ActiveBtnWrap from "../UI/Button/ActiveBtnWrap";
import Modal from "../UI/Modal";
import Button from "../UI/Button/Button";
import ButtonWrap from "../UI/Button/ButtonWrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TodoContext from "../../store/todo-context";

const DeleteConfirm = (props) => {
  /* CSS */
  const ModalWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  `;
  const Content = styled.p`
    text-align: center;
  `;

  const todoCtx = useContext(TodoContext);

  const todoDeleteHandler = () => {
    todoCtx.removeTodo(props.todoId);
  };
  return (
    <Modal>
      <ModalWrap>
        <Title>Delete Todo</Title>
        <Content>Are you sure you want to delete Todo?</Content>
        <ActiveBtnWrap>
          <Button
            modalIsShow={false}
            onModalHide={props.onClose}
            bgColor={"#EB7474"}
            paddingSide={"1.5rem"}
            type={"button"}
          >
            Cancel
          </Button>
          <ButtonWrap
            type={"TODO_DELETE"}
            onTodoDelete={todoDeleteHandler}
            bgColor={"#5780EB"}
            paddingSide={"1.6rem"}
          >
            <Link to="/">Delete</Link>
          </ButtonWrap>
        </ActiveBtnWrap>
      </ModalWrap>
    </Modal>
  );
};

export default DeleteConfirm;
