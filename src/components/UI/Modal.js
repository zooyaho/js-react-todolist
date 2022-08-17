import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const BackDrop = (props) => {
  /* CSS */
  const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  `;
  return <BackDrop />;
};

const ModalOverlay = (props) => {
  /* CSS */
  const slideDown = keyframes`
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const ModalOverlay = styled.div`
    position: fixed;
    top: 30vh;
    left: 8%;
    width: 80%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: ${slideDown} 300ms ease-out forwards;

    @media (min-width: 768px) {
      width: 25rem;
      left: calc(50% - 13.5rem);
    }
  `;

  return <ModalOverlay>{props.children}</ModalOverlay>;
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};
export default Modal;
