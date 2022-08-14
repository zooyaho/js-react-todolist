import styled from "styled-components";
import { Link } from "react-router-dom";

const ActiveButton = () => {
  const ActiveButton = styled.div`
    margin: 2rem 0rem;
    width: 85%;
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      font-size: 16px;
      width: 70px;
      height: 40px;
      border-radius: 10px;
      background-color: #bababa;
      color: white;
      font-weight: bold;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      width: 70px;
      height: 40px;
      border-radius: 10px;
      background-color: #8874eb;
      color: white;
      font-size: 16px;
      font-weight: bold;
    }
  `;

  return (
    <ActiveButton>
      <Link to="/">Back</Link>
      <button type="submit">Add</button>
      {/* state관리해서 submit핸들러 함수에서 home으로 이동시키기 */}
    </ActiveButton>
  );
};
export default ActiveButton;
