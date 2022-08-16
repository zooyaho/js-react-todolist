import TodoContext from "./todo-context";

const TodoProvider = (props) => {
  const addTodoHandler = (todo) => {};
  const removeTodoHandler = (id) => {};

  const todoContext = {
    todos: [],
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
