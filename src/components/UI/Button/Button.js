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
    if (props.mode === "MODAL_SHOW") {
      props.onModalOpen();
    }
    if (props.mode === "MODAL_HIDE") {
      props.onModalHide();
    }
    if (props.mode === "BACK") {
      props.onBack();
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
