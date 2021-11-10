import styled from "styled-components";
import { theme } from "../../styles/theme";

interface Resize {
  size?: string;
}

export const ModalStyled = styled.div<Resize>`
  border-radius: 20px;
  max-width: ${(props) => props.size};
  height: 100%;
  padding: 15px;
  background: ${theme.assets.font};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  transition: all 0.3s;
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
`;

export const ContainerModal = styled.div`
 width: 100%; 
 height: 100%; 
 display: flex; 
 flex-direction: column;
`;