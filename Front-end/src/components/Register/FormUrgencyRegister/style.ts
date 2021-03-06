import styled from 'styled-components';

import { theme } from '../../../styles/theme';

import { ButtonSubmit } from '../FormRegister/style';

export const TextHeader = styled.p`
  font-size: 18px;
  font-weight: 500;

  span {
    color: ${theme.colors.red};
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 25px 0;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin: 15px 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const ButtonContinue = styled(ButtonSubmit)`
  padding: 15px;
  width: 200px;

  font-size: 14px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    padding: 12px;
    width: 150px;
  }
`;
