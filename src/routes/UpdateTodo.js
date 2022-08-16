import Card from "../components/UI/Card";
import Date from "../components/UI/Date";
import WriteForm from "../components/Write/WriteForm";

const UpdateTodo = () => {
  return (
    <Card>
      <Date date={"22.08.15"}></Date>
      <WriteForm />
    </Card>
  );
};

export default UpdateTodo;
