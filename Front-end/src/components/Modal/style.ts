import styled from "styled-components";
import { theme } from "../../styles/theme";

interface Resize {
  size?: string;
}

interface Colors {
  color?: string;
  title?: string;
  subtitle?: string;
  text?: string;
}

export const InputContainer = styled.div<Colors>`
  margin-bottom: 32px;
  
  svg {
    width: 50px;
    height: 50px;

    &:hover {
      cursor: pointer;
    }

    @media screen and (min-width: 1023px) {
      width: 80px;
      height: 80px;
    }
  }

  h2 {
    font-size: 28px;
    color: ${(props) => props.subtitle};
    transform: scale(1);
    transition: 0.3s;
  }
  h3 {
    font-size: 18px;
    color: ${(props) => props.text};
  }

  @media screen and (min-width: 1023px) {
    width: 400px;
    height: 200px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;

  width: 100px;

  @media screen and (max-width: 1024px) {
    width: 50px;
    margin-top: 5%;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  span {
    color: #e74c3c;
    font-weight: bold;
    font-size: 16px;

    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
  }

  input[type='text'],
  input[type='password'] {
    padding: 15px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;

    @media screen and (max-width: 1024px) {
      padding: 7px;
    }
  }

  input[type='date'] {
    padding: 13px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;

    @media screen and (max-width: 1024px) {
      padding: 5px;
    }
  }

  select {
    height: 100%;
    padding: 5px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;
  }
`;

export const ModalStyled = styled.div<Resize>`
  border-radius: 20px;
  max-width: ${(props) => props.size};
  height: 100%;
  padding: 15px;
  background: ${theme.assets.borderLight};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  transition: all 0.3s;
  top: 10%;
  left: 15%;
  right: 15%;
  bottom: 10%;
`;

export const ContainerModal = styled.div`
 width: 100%; 
 height: 100%; 
 display: flex; 
 flex-direction: column;
`;

export const ContainerButton = styled.button<Colors>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${(props) => props.color};
  color: white;
  font-weight: 900;

  height: 60px;
  width: 250px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;