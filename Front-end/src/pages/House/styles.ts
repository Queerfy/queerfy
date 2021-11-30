import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  max-width: 1920px;
`;

export const Header = styled.header`
  width: 100%;

  h1 {
    color: ${theme.colors.blue};
    margin-top: 25px;
  }
`;

export const Subtitle = styled.div`
  margin: 8px 0px;

  display: flex;
  justify-content: space-between;
`;

export const Local = styled.div`
  display: flex;

  span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const Favorite = styled.div`
  color: ${theme.colors.red};

  display: flex;

  span {
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const BoxContents = styled.div`
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BoxInformations = styled.div`
  min-width: 50%;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Informations = styled.div`
  width: 100%;
  padding: 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: ${theme.colors.red};
    padding-bottom: 20px;
  }
`;

export const AlignInformations = styled.div`
  width: 100%;
  height: 100%;

  > div {
    margin-top: 8px;
  }
`;

export const Rules = styled.div`
  width: 100%;
  padding: 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: ${theme.colors.green};
    padding-bottom: 20px;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 0px 0px 12px 0px;

  display: flex;
  flex-direction: column;

  text-align: justify;

  h2 {
    color: ${theme.colors.orange};
    padding-bottom: 20px;
  }
`;

export const ChangeBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 40%;
    max-width: 650px;
  }
`;

export const BoxReservation = styled.div`
  width: 100%;
  padding: 8px 0px 45px 0px;
`;

export const BorderRainbow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 220px;
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
`;

export const Reservation = styled.div`
  width: 99%;
  height: 98%;
  padding: 10px;

  border-radius: 10px;

  color: ${theme.assets.font};
  background: ${theme.assets.background};
`;

export const HeaderReservation = styled.div`
  width: 100%;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 10px;
  }

  span {
    color: ${theme.colors.red};
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const ChooseDate = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const CheckDate = styled.div`
  width: 50%;
  height: 20%;
  padding: 0px 10px 0px 10px;

  display: flex;
  flex-direction: column;

  span {
    color: ${theme.colors.red};
  }

  input {
    border: 1px solid ${theme.assets.borderDark};
    border-radius: 10px;
    height: 40px;
    padding-left: 8px;

    &::placeholder {
      color: ${theme.assets.borderLight};
    }
  }
`;

export const InputDate = styled.input`
  padding: 6px 6px;
  font-size: 11px;
  border-radius: 10px;
  border: 2px solid ${theme.assets.borderLight};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const BoxInteraction = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonInteraction = styled.button`
  padding: 6px 40px;

  background: ${theme.colors.blue};

  border-radius: 10px;
  border: none;

  color: ${theme.assets.background};

  font-size: 16px;
`;

export const BoxTotalValue = styled.div`
  width: 100%;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 100%;

  border-top: 2px ${theme.assets.borderDark} solid;
`;

export const TotalValue = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 22px;
  }

  span {
    font-size: 18px;
  }
`;

export const BoxHost = styled.div`
  width: 100%;
  height: 240px;
  padding: 8px 0px 8px 0px;

  @media screen and (min-width: 1024px) {
    height: 200px;
  }
`;

export const BorderHost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
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
`;

export const Host = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 99%;
  height: 98%;
  padding: 10px;
  border-radius: 10px;

  background: ${theme.assets.background};
`;

export const ProfileHost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  img {
    width: 65px;
  }

  h1 {
    margin-left: 20px;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 14px;
    margin-left: 6px;
    text-align: center;
  }
`;
