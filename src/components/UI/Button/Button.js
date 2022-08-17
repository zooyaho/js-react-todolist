import styled from "styled-components";

const Button = (props) => {
  /* CSS */
  const Button = styled.button`
    height: 2.7rem;
    padding: 0rem ${(props) => props.paddingSide};
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
    color: white;
    font-size: 16px;
    font-weight: bold;
  `;

  const clickHandler = () => {
    if (props.modalIsShow) {
      props.onModalOpen();
    } else {
      props.onModalHide();
    }
  };

  return (
    <Button
      onClick={clickHandler}
      bgColor={props.bgColor}
      paddingSide={props.paddingSide}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default Button;
