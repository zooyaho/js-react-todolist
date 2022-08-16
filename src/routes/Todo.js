import styled from "styled-components";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Card from "../components/UI/Card";
import Date from "../components/UI/Date";
import Button from "../components/UI/Button/Button";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import { Link } from "react-router-dom";

const Todo = () => {
  const Todo = styled.div`
    div div:first-child {
      margin-left: 2rem;
      margin-top: 2.5rem;
    }
    p:first-child {
      align-self: flex-start;
      margin-top: 1rem;
    }
  `;
  const ContentWrap = styled.p`
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

  return (
    <Todo>
      <Card>
        <ButtonWrap width={"6rem"} bgColor={"#BABABA"} paddingSide={"1.2rem"}>
          <Link to="/">Back</Link>
        </ButtonWrap>
        <ContentWrap>
          <Date date={"22.08.15"}></Date>
          <Title>What is Lorem Ipsum?</Title>
          <Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,{" "}
          </Content>
        </ContentWrap>
        <ActiveBtnWrap>
          <Button bgColor={"#EB7474"} type="button">
            Delete
          </Button>
          <ButtonWrap bgColor={"#5780EB"} paddingSide={"1.2rem"}>
            <Link to="/update/123">Update</Link>
          </ButtonWrap>
        </ActiveBtnWrap>
      </Card>
    </Todo>
  );
};
export default Todo;
