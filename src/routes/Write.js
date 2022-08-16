import WriteForm from "../components/Write/WriteForm";
import Date from "../components/UI/Date";
import Card from "../components/UI/Card";

const Write = () => {
  return (
    <Card>
      <Date date={"22.08.15"}></Date>
      <WriteForm />
    </Card>
  );
};

export default Write;
