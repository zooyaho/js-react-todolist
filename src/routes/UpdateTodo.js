import Card from "../components/UI/Card";
import Date from "../components/UI/Date";
import WriteForm from "../components/Layout/Form";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Button from "../components/UI/Button/Button";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UpdateTodo = () => {
  const UpdateTodo = styled.div`
    div div:first-child {
      margin-left: 2rem;
      margin-top: 2.5rem;
    }
  `;
  return (
    <UpdateTodo>
      <Card>
        <ButtonWrap width={"6rem"} bgColor={"#BABABA"} paddingSide={"1.2rem"}>
          <Link to="/todo/123">Back</Link>
        </ButtonWrap>
        <Date date={"22.08.15"}></Date>
        <WriteForm />
        <ActiveBtnWrap>
          <Button bgColor={"#EB7474"} type="button">
            Delete
          </Button>
          <ButtonWrap bgColor={"#6ACE5A"} paddingSide={"1.5rem"}>
            <Link to="/todo/123">Save</Link>
          </ButtonWrap>
        </ActiveBtnWrap>
      </Card>
    </UpdateTodo>
  );
};

export default UpdateTodo;
