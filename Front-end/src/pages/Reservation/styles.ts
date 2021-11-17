import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  align-items: center;

  h1 {
    color: ${theme.colors.red};
    font-size: 26px;
  }
`;

export const IconArrow = styled.div`
  width: 5%;
  height: 50px;

  display: flex;
  align-items: center;

  > svg {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`;

export const Informations = styled.div`
  width: 100%;
  margin-top: 30px;

  h1 {
    color: ${theme.colors.blue};
    font-size: 24px;
  }
`;

export const Date = styled.div`
  width: 100%;

  margin-top: 30px;
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

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
`;
