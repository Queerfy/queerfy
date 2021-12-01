import styled from 'styled-components';

import { theme } from '../../styles/theme';

interface Colors {
  color?: string;
  title?: string;
  subtitle?: string;
  text?: string;
}

export const ContainerButtonAds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;

  @media screen and (min-width: 1023px) {
    font-size: 18px;
  }
`;

export const ButtonAds = styled.button<Colors>`
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

export const AdsInformation = styled.div<Colors>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 800px;
  height: auto;

  padding: 16px;

  h1 {
    font-size: 20px;
    color: ${(props) => props.title};

    @media screen and (min-width: 1023px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 18px;
    color: ${(props) => props.subtitle};

    @media screen and (min-width: 1023px) {
      font-size: 22px;
    }
  }

  h3 {
    font-size: 16px;
    color: ${(props) => props.subtitle};

    @media screen and (min-width: 1023px) {
      font-size: 18px;
    }
  }
`;

export const ContainerAds = styled.div<Colors>`
  display: flex;

  width: 1250px;
  height: 250px;

  margin-bottom: 64px;
  border-radius: 25px;
  padding: 16px;

  background-color: ${theme.assets.background};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.3s;

  img {
    width: 500px;
    height: 100%;
    border-radius: 25px;
  }

  @media screen and (min-width: 1023px) {
    display: flex;
  }
`;

export const HeaderAds = styled.div`
  display: flex;
  flex-direction: column;

  width: 1090px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  height: 0px;

  margin-right: 10px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;

  width: 40px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 100px;
    font-size: 17px;
  }
`;

export const InformationText = styled.span`
  text-transform: capitalize;
`;
