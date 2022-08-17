import styled from "styled-components";

/* CSS */
const ButtonWrapSt = styled.div`
  width: ${(props) => props.width};
  font-size: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    padding: 0.7rem ${(props) => props.paddingSide};
    color: white;
    text-decoration: none;
  }
`;

const ButtonWrap = (props) => {
  const clickHandler = () => {
    if (props.mode === "TODO_DELETE") {
      props.onTodoDelete();
    }
  };

  return (
    <ButtonWrapSt
      onClick={clickHandler}
      width={props.width}
      bgColor={props.bgColor}
      paddingSide={props.paddingSide}
    >
      {props.children}
    </ButtonWrapSt>
  );
};
export default ButtonWrap;
