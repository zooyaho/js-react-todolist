import styled from "styled-components";

const AddBtn = () => {
  const AddBtn = styled.button`
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
      border-radius: 2.5rem;
    }
  `;
  return <AddBtn>+</AddBtn>;
};
export default AddBtn;
