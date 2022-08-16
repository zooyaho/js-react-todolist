import styled from "styled-components";
import ActiveBtnWrap from "../UI/Button/ActiveBtnWrap";
import ButtonWrap from "../UI/Button/ButtonWrap";
import { Link } from "react-router-dom";

const WiteForm = () => {
  const WriteForm = styled.form`
    margin-top: 1.5rem;
    width: 100%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 80%;
      padding: 0.7rem 0 0.7rem 1rem;
      border-radius: 10px;
      font-size: 16px;
    }
    textarea {
      border-radius: 10px;
      margin-top: 1rem;
      padding-top: 1rem;
      padding-left: 1rem;
      width: 80%;
      font-size: 16px;
    }
  `;
  return (
    <WriteForm>
      <input type="text" placeholder="title" />
      <textarea cols="50" rows="10" placeholder="content" />
      <ActiveBtnWrap>
        <ButtonWrap bgColor={"#BABABA"} paddingSide={"2rem"}>
          <Link to="/">Back</Link>
        </ButtonWrap>
        <ButtonWrap bgColor={"#6ACE5A"} paddingSide={"2rem"}>
          <Link to="/">Save</Link>
        </ButtonWrap>
      </ActiveBtnWrap>
    </WriteForm>
  );
};
export default WiteForm;
