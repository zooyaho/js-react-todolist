import WriteForm from "../components/Layout/Form";
import Date from "../components/UI/Date";
import Card from "../components/UI/Card";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import { Link } from "react-router-dom";

const Write = () => {
  return (
    <Card>
      <Date date={"22.08.15"}></Date>
      <WriteForm />
      <ActiveBtnWrap>
        <ButtonWrap bgColor={"#BABABA"} paddingSide={"2rem"}>
          <Link to="/">Back</Link>
        </ButtonWrap>
        <ButtonWrap bgColor={"#6ACE5A"} paddingSide={"2rem"}>
          <Link to="/">Save</Link>
        </ButtonWrap>
      </ActiveBtnWrap>
    </Card>
  );
};

export default Write;
