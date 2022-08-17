import styled from "styled-components";

/* CSS */
const Date = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin: 2rem 0 0 2.5rem;
  display: flex;
  align-items: center;
`;

const DateUI = ({ date }) => {
  return <Date>{date}</Date>;
};
export default DateUI;
