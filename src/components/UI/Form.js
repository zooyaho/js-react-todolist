import styled from "styled-components";

/* CSS */
const FormSt = styled.form`
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

const Form = (props) => {
  return <FormSt onSubmit={props.onSubmit}>{props.children}</FormSt>;
};
export default Form;
