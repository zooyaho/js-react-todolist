import styled from "styled-components";

const DateUI = ({ date }) => {
  const Date = styled.span`
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin: 2rem 0 0 2.5rem;
    display: flex;
    align-items: center;
  `;
  return <Date>{date}</Date>;
};
export default DateUI;
