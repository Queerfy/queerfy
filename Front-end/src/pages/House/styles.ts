import styled from 'styled-components';
import { theme } from '../../styles/theme';

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

  p {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const Favorite = styled.div`
  color: ${theme.colors.red};

  display: flex;

  p {
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
  }
`;

export const BoxInformations = styled.div`
  width: 100%;
`;

export const Informations = styled.div`
  width: 100%;
  padding: 12px 0px 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const AlignInformations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 0px 0px 12px 0px;

  display: flex;
  flex-direction: column;

  text-align: justify;

  h2 {
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const BackgroundReservation = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0px 8px 0px;

  @media screen and (min-width: 1024px) {
    width: 50%;
    padding: 50px 0px;
  }
`;

export const BorderRainbow = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 98%;
  height: 98%;

  border-radius: 10px;

  color: ${theme.assets.font};
  background-color: ${theme.assets.background};
`;

export const HeaderReservation = styled.div`
  width: 100%;
  padding: 20px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountComments = styled.div`
  display: flex;
  align-items: center;
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

  p {
    color: ${theme.colors.red};
  }
`;

export const InputDate = styled.input`
  padding: 6px 6px;

  border-radius: 10px;
  border: 2px solid ${theme.assets.borderLight};
`;

export const Email = styled.div`
  width: 100%;
  padding-top: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    padding-left: 6px;
  }
`;

export const Proposal = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonProposal = styled.button`
  width: 30%;
  height: 50%;

  background: ${theme.colors.blue};

  border-radius: 10px;
  border: none;

  color: ${theme.assets.background};

  font-size: 14px;
`;

export const Comments = styled.div`
  width: 100%;

  padding: 30px 0px;

  border: none;

  @media screen and (min-width: 1240px) {
    border-top: 2px ${theme.assets.borderDark} solid;
  }
`;

export const BoxAdditionalComments = styled.div`
  width: 100%;

  @media screen and (min-width: 1240px) {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`;