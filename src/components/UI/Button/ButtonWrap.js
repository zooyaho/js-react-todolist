import styled from "styled-components";

const ButtonWrap = (props) => {
  const ButtonWrap = styled.div`
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
  return (
    <ButtonWrap
      width={props.width}
      bgColor={props.bgColor}
      paddingSide={props.paddingSide}
    >
      {props.children}
    </ButtonWrap>
  );
};
export default ButtonWrap;
