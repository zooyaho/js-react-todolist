import styled from "styled-components";

const Button = (props) => {
  const Button = styled.button`
    height: 2.7rem;
    padding: 0rem 1.6rem;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
    color: white;
    font-size: 16px;
    font-weight: bold;
  `;
  return (
    <Button bgColor={props.bgColor} type={props.type}>
      {props.children}
    </Button>
  );
};

export default Button;
