import { useRef } from "react";
import { v4 } from "uuid";
import Form from "./Form";

const WriteForm = (props) => {
  const id = v4();
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(
      id,
      titleInputRef.current.value,
      contentInputRef.current.value
    );
  };

  return (
    <Form onSubmit={submitHandler}>
      <input ref={titleInputRef} type="text" placeholder="title" />
      <textarea
        ref={contentInputRef}
        cols="50"
        rows="10"
        placeholder="content"
      />
      {props.children}
    </Form>
  );
};
export default WriteForm;
