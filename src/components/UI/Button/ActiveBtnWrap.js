import styled from "styled-components";

const ActiveBtnWrap = (props) => {
  const ActiveBtnWrap = styled.div`
    margin: 2rem 0rem;
    width: 85%;
    display: flex;
    justify-content: space-between;
    /* margin-left: 2.3rem; */
  `;

  return <ActiveBtnWrap>{props.children}</ActiveBtnWrap>;
};
export default ActiveBtnWrap;
