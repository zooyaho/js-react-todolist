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

  if (action.type === "UPDATE") {
    let count = 0;
    state.forEach((prevTodo) => {
      if (prevTodo.id === action.todo.id) {
        return (state[count] = action.todo);
      }
      count++;
    });
    return state;
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
  const updateTodoHandler = (todo) => {
    dispatchTodoAction({ type: "UPDATE", todo: todo });
  };

  const todoContext = {
    todos: todoState,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
