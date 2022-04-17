import styled from 'styled-components';

import { theme } from './theme';

interface Colors {
  title?: string;
  subtitle?: string;
  text?: string;
}

export const ContainerMyReservations = styled.div<Colors>`
  display: flex;
  flex-direction: column;

  width: 85%;
  height: 100%;

  margin-top: 32px;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    margin-top: 64px;
  }
`;

export const Container = styled.div<Colors>`
  display: flex;

  width: 100%;
  height: auto;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const ContainerReservation = styled.div<Colors>`
  display: flex;

  width: 1250px;
  height: 250px;

  margin-bottom: 64px;
  border-radius: 25px;
  padding: 16px;

  background-color: ${theme.assets.background};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  img {
    width: 500px;
    height: 100%;
    border-radius: 25px;
  }

  @media screen and (min-width: 1023px) {
    display: flex;
  }
`;

export const ReservationInformation = styled.div<Colors>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
