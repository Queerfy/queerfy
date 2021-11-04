import styled from "styled-components";

export const ModalStyled = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: #1c1c1c;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  transition: all 0.3s;
  top: 100px;
  left: 300px;
  bottom: 100px;
  right: 300px;
`;