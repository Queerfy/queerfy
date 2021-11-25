import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: ${theme.colors.red};
    font-size: 26px;
    margin-left: 16px;
  }
`;

export const BoxHouse = styled.div`
  width: 100%;
  height: auto;

  margin-top: 20px;
  padding: 8px 0px 8px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 50%;
  }
`;

export const BorderHouse = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: linear-gradient(
    to right,
    rgba(241, 83, 86, 1) 0%,
    rgba(240, 191, 90, 1) 17%,
    rgba(253, 233, 128, 1) 34%,
    rgba(133, 219, 107, 1) 50%,
    rgba(67, 158, 250, 1) 68%,
    rgba(169, 147, 245, 1) 84%,
    rgba(242, 107, 156, 1) 100%
  );

  @media screen and (min-width: 1024px) {
    min-height: 300px;
  }
`;

export const HeaderInformations = styled.div`
  display: flex;

  width: 100%;
  height: auto;
`;

export const House = styled.div`
  display: flex;

  width: 99%;
  height: 97%;
  padding: 10px;
  border-radius: 10px;
  background: ${theme.assets.background};

  img {
    width: 35vw;
    border-radius: 10px;
  }

  h3 {
    margin-top: 16px;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const BoxImageHouse = styled.div`
  width: 50%;
`;

export const IconArrow = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  > svg {
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
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const Date = styled.div`
  width: 100%;
`;

export const BoxPrice = styled.div`
  width: 100%;

  margin-top: 10px;

  border-bottom: 2px solid ${theme.assets.borderDark};
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
  width: 100%;

  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Payments = styled.div`
  width: 100%;

  margin-top: 30px;

  h1 {
    color: ${theme.colors.pink};
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const TitleCard = styled.div`
  width: 100%;

  display: flex;

  p {
    margin-left: 10px;
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
  justify-content: space-between;

  > :first-child {
    margin-right: 2%;
  }
`;

export const OwnerData = styled.div`
  width: 100%;

  margin-top: 30px;

  h1 {
    color: ${theme.colors.purple};
    font-size: 24px;
    margin-bottom: 10px;
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
