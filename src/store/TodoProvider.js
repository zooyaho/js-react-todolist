import TodoContext from "./todo-context";
import { useReducer } from "react";

const defaultTodoList = [];

const todoReducer = (state, action) => {
  if (action.type === "ADD") {
    return state.concat(action.todo);
  }

  if (action.type === "REMOVE") {
    return state.filter((todo) => todo.id !== action.id);
  }

  return defaultTodoList;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoList
  );

  const addTodoHandler = (todo) => {
    dispatchTodoAction({ type: "ADD", todo: todo });
  };
  const removeTodoHandler = (id) => {
    dispatchTodoAction({ type: "REMOVE", id: id });
  };

  const todoContext = {
    todos: todoState,
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
