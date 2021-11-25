import styled from 'styled-components';
import { theme } from '../../styles/theme';

import { ArrowLeft } from 'react-feather';

export const InformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 0px 40px;
  width: 70%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    height: auto;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;

  height: 100vh;
  margin: 0px -32px;

  @media screen and (min-width: 1024px) {
    margin: 0px -64px;
  }
`;

export const ImageRegister = styled.img`
  width: 30%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ContainerInitial = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const HeaderBox = styled.div`
  padding: 10px 0px 4px 0px;
  border-bottom: 1px solid ${theme.assets.borderDark};

  @media screen and (max-width: 1024px) {
    padding: 14px 0px 0px 0px;
  }
`;

export const IconBack = styled(ArrowLeft)`
  margin-bottom: 10px;
  margin-top: 20px;
  color: #e74c3c;
  cursor: pointer;
`;

export const TitleHeader = styled.p`
  color: #e74c3c;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 7px;
  }
`;

export const TextHeader = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 70vh;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 60vh;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  width: 250px;
  height: 150px;
  padding: 20px;

  font-size: 25px;
  font-weight: 600;
  color: white;
  background: #e74c3c;

  border-radius: 5px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 100px;
    font-size: 17px;
  }
`;
