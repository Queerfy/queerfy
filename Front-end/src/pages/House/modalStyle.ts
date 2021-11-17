import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  transition: all 0.3s;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ModalStyled = styled.div`
  border-radius: 20px;
  max-width: 20%;
  height: 50%;
  padding: 15px;
  background: #1c1c1c;
`;

export const ImgClose = styled.img`
  height: 60%;
  cursor: pointer;
`;
