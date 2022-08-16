import Card from "../components/UI/Card";
import Date from "../components/UI/Date";
import WriteForm from "../components/UI/Form";
import ActiveBtnWrap from "../components/UI/Button/ActiveBtnWrap";
import Button from "../components/UI/Button/Button";
import ButtonWrap from "../components/UI/Button/ButtonWrap";
import { Link } from "react-router-dom";

const UpdateTodo = () => {
  return (
    <Card>
      <Date date={"22.08.15"}></Date>
      <WriteForm />
      <ActiveBtnWrap>
        <Button bgColor={"#EB7474"} type="button">
          Delete
        </Button>
        <ButtonWrap bgColor={"#5780EB"} paddingSide={"1.2rem"}>
          <Link to="/update/123">Update</Link>
        </ButtonWrap>
      </ActiveBtnWrap>
    </Card>
  );
};

export default UpdateTodo;
