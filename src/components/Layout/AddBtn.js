import styled from "styled-components";

/* CSS */
const AddBtnSt = styled.button`
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: #8874eb;
  font-size: 40px;
  color: white;
  box-shadow: 2px 2px 5px #828282;
  &:hover {
    width: 5rem;
    height: 5rem;
    font-size: 50px;
    border-radius: 2.5rem;
  }
`;

const AddBtn = () => {
  return <AddBtnSt>+</AddBtnSt>;
};
export default AddBtn;
