import WriteForm from "../components/Layout/WriteForm";
import Card from "../components/UI/Card";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import Button from "../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import TodoContext from "../store/todo-context";
import DateUI from "../components/UI/DateUI";

const WriteTodo = () => {
  const todoCtx = useContext(TodoContext);
  const navigate = useNavigate();

  const nowTime = new Date();
  const year = nowTime.getFullYear();
  const month = nowTime.getMonth() + 1;
  const date = nowTime.getDate();
  const todayDate = `${year}.${month}.${date}`;

  const addTodoHandler = (id, titleInputRef, contentInputRef) => {
    const addItem = {
      id: id,
      title: titleInputRef,
      content: contentInputRef,
      date: todayDate,
    };
    todoCtx.addTodo(addItem);
  };

  return (
    <Card>
      <DateUI date={todayDate}></DateUI>
      <WriteForm onAddTodo={addTodoHandler}>
        <ActiveBtnWrap>
          {/* <ButtonWrap bgColor={"#BABABA"} paddingSide={"2rem"}>
            <Link to="/">Back</Link>
          </ButtonWrap> */}
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
      </WriteForm>
    </Card>
  );
};

export default WriteTodo;
