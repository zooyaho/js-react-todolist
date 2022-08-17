import styled from "styled-components";
import { useRef } from "react";
import { v4 } from "uuid";

/* CSS */
const WriteFormSt = styled.form`
  margin-top: 1.5rem;
  width: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 80%;
    padding: 0.7rem 0 0.7rem 1rem;
    border-radius: 10px;
    font-size: 16px;
  }
  textarea {
    border-radius: 10px;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
    width: 80%;
    font-size: 16px;
  }
`;

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
    <WriteFormSt onSubmit={submitHandler}>
      <input ref={titleInputRef} type="text" placeholder="title" />
      <textarea
        ref={contentInputRef}
        cols="50"
        rows="10"
        placeholder="content"
      />
      {props.children}
    </WriteFormSt>
  );
};
export default WriteForm;
