import styled from "styled-components";
import WriteForm from "../components/Wite/WriteForm";

const Write = () => {
  const Write = styled.div`
    width: 30rem;
    background-color: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    p {
      font-weight: bold;
      font-size: 18px;
      margin: 2rem 0 0 2.5rem;
    }
  `;
  return (
    <Write>
      <p>22.08.15</p>
      <WriteForm />
    </Write>
  );
};

export default Write;
