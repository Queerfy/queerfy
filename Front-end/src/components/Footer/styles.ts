import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.footer`
  margin-top: 64px;
  margin-bottom: 32px;
  width: 100%;
  height: 200px;
`;

export const UpContent = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: space-between;

    height: 50%;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-bottom: 16px;

  > svg {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const Address = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 8px;
  border-top: 1px solid ${theme.assets.borderDark};
  border-bottom: 1px solid ${theme.assets.borderDark};

  p {
    margin-top: 5px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0px;
    width: 40%;
    text-align: right;
    border: none;

    p {
      margin-top: 0px;
    }
  }
`;

export const DownContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;

  span {
    margin-top: 32px;
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    span {
      font-size: 14px;
    }
  }
`;
