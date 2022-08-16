import styled from "styled-components";

const Card = (props) => {
  const Card = styled.div`
    width: 30rem;
    background-color: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  `;
  return <Card>{props.children}</Card>;
};

export default Card;
