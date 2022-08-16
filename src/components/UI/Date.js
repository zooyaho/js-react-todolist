import styled from "styled-components";

const Date = (props) => {
  const Date = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin: 2rem 0 0 2.5rem;
  `;
  return <Date>{props.date}</Date>;
};
export default Date;
