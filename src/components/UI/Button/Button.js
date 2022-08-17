import styled from "styled-components";

/* CSS */
const ButtonSt = styled.button`
  height: 2.7rem;
  padding: 0rem ${(props) => props.paddingSide};
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Button = (props) => {
  const clickHandler = () => {
    if (props.modalIsShow) {
      props.onModalOpen();
    }
    if (props.modalIsShow === false) {
      props.onModalHide();
    }
    if (props.isSave) {
      props.onTodoSave();
    }
  };

  return (
    <ButtonSt
      onClick={clickHandler}
      bgColor={props.bgColor}
      paddingSide={props.paddingSide}
      type={props.type}
    >
      {props.children}
    </ButtonSt>
  );
};

export default Button;
