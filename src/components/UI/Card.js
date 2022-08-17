import styled from "styled-components";

const CardSt = styled.div`
  width: 30rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

const Card = (props) => {
  return <CardSt>{props.children}</CardSt>;
};

export default Card;
