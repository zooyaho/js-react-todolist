import styled from "styled-components";
const Header = () => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 20rem;
      margin-top: 5rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      border: 1px solid black;
    }
    h1 {
      font-size: 20px;
      margin: 1rem 0;
      cursor: default;
    }
  `;

  return (
    <Header>
      <div>
        <h1>TODO LIST ✍️</h1>
      </div>
    </Header>
  );
};
export default Header;
