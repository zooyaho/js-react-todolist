import styled from "styled-components";

/* CSS */
const ActiveBtnWrapSt = styled.div`
  margin: 2rem 0rem;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

const ActiveBtnWrap = (props) => {
  return <ActiveBtnWrapSt>{props.children}</ActiveBtnWrapSt>;
};
export default ActiveBtnWrap;
