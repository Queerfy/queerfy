import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Header = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;

  h1 {
    color: ${theme.colors.red};
    font-size: 26px;
    margin-left: 16px;
  }
`;

export const ContentPanel = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 64px;

  @media screen and (min-width: 1023px) {
    display: flex;
  }
`;

export const BoxHouse = styled.div`
  width: 100%;

  @media screen and (min-width: 1023px) {
    width: 50%;
  }
`;

export const BorderHouse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-height: 300px;
  border-radius: 10px;
  background: ${theme.assets.background};
  padding: 8px;

  > img {
    border-radius: 10px;
    width: 90%;
  }

  @media screen and (min-width: 1023px) {
    max-height: 500px;
  }
`;

export const InformationsHouse = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;

  @media screen and (min-width: 1023px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const IconArrow = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  svg {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`;

export const InformationsReservation = styled.div`
  width: 100%;
  margin-top: 20px;

  h1 {
    color: ${theme.colors.orange};
    font-size: 24px;
  }

  @media screen and (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    width: 50%;
    padding: 8px;
    margin-top: 0;

    h2 {
      font-size: 20px;
      margin-top: 16px;
    }
  }
`;

export const Date = styled.div`
  width: 100%;

  @media screen and (max-width: 1023px) {
    margin-top: 16px;
  }
`;

export const BoxPrice = styled.div`
  width: 100%;

  @media screen and (max-width: 1023px) {
    margin-top: 16px;
  }
`;

export const DailyValue = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const AdditionalValues = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const TotalValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-top: 2px solid ${theme.assets.borderLight};

  span {
    font-weight: 400;
    font-size: 18px;
  }

  button {
    margin-top: 16px;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 32px;
  }
`;

export const Payments = styled.div`
  margin-top: 32px;
  width: 100%;

  h1 {
    color: ${theme.colors.pink};
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1023px) {
    width: 50%;
    padding-left: 32px;
    margin-top: 8px;
  }
`;

export const TitleCard = styled.div`
  display: flex;

  svg {
    color: ${theme.colors.pink};
  }

  p {
    margin-left: 8px;
  }
`;

export const BoxInputs = styled.div`
  width: 100%;

  padding: 5px 0px;
`;

export const BigInput = styled.div`
  width: 100%;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 10px;

  border-radius: 5px;
  border: 1px solid ${theme.assets.borderDark};
`;

export const AdditionalBox = styled.div`
  width: 100%;

  display: flex;
`;

export const OwnerData = styled.div`
  width: 100%;

  h1 {
    color: ${theme.colors.purple};
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1023px) {
    padding-right: 32px;
    width: 50%;
  }
`;

export const LabelInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
  }
`;

export const BoxConfirm = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 8px;
  background: ${theme.colors.blue};
  color: ${theme.assets.background};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;
