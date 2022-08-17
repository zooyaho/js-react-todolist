import { useRef } from "react";
import Form from "./Form";

const UpdateForm = (props) => {
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onUpdateTodo(
      titleInputRef.current.value,
      contentInputRef.current.value
    );
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        ref={titleInputRef}
        type="text"
        placeholder="title"
        defaultValue={props.title}
      />
      <textarea
        ref={contentInputRef}
        cols="50"
        rows="10"
        placeholder="content"
        defaultValue={props.content}
      />
      {props.children}
    </Form>
  );
};
export default UpdateForm;
