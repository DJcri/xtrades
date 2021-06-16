import styled from "styled-components";
import close from "../../img/close.svg";

const Modal = () => {
  return (
    <Box>
      <div className="close-btn">
        <img src={close} alt="close" />
      </div>
      <div className="modal"></div>
    </Box>
  );
};

export default Modal;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .close-btn {
    position: relative;
    left: 29%;
    width: 32px;
    height: 32px;
    background: darkgray;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .modal {
    background: white;
    width: 60%;
    min-height: 816px;
    z-index: 6;
    border-radius: 15px;
  }
`;
