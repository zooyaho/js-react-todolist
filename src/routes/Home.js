import Header from "../components/Home/Header";
import TodoList from "../components/Todo/TodoList";
import AddBtn from "../components/Home/AddBtn";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
      <TodoList />
      <Link to="/write">
        <AddBtn />
      </Link>
    </>
  );
};

export default Home;
