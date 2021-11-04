import styled from 'styled-components';

interface Resize {
    size?: string;
  }

export const ModalOverlay = styled.div`
  position: fixed;
  transition: all 0.3s;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ModalStyled = styled.div<Resize>`
  border-radius: 20px;
  max-width: ${(props) => props.size};
  height: 50%;
  padding: 15px;
  background: #1c1c1c;
`;
