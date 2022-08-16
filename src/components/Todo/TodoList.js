import styled from "styled-components";
import TodoItem from "./TodoItem";
const DUMMY_TODO = [
  {
    id: 1,
    title: "오늘 할일",
    content: "아침: X, 점심: 시리얼, 저녁: 치즈김밥",
    date: "22.08.12",
  },
  {
    id: 2,
    title: "송리단길 가보자고~",
    content: "피자네버슬립스가서 피맥해야지~~ 제발 웨이팅 없어라🙏",
    date: "22.08.13",
  },
  {
    id: 3,
    title: "영화보고싶다....",
    content: "외계인 보고 싶어...혼영 하고싶어...언제 보지....😥",
    date: "22.08.14",
  },
];
const TodoList = () => {
  const TodoList = styled.main`
    width: 30rem;
    margin-top: 2rem;
    ul {
      padding: 0;
      margin: 0;
    }
  `;

  /*
      key={todo.id}
      id={todo.id}
      title={todo.title}
      content={todo.content}
      date={todo.date}
  */

  const itemList = DUMMY_TODO.map((todo) => (
    <TodoItem key={todo.id} title={todo.title} date={todo.date} />
  ));

  return (
    <TodoList>
      <ul>{itemList}</ul>
    </TodoList>
  );
};

export default TodoList;
