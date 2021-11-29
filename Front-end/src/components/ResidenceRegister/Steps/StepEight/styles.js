import styled from 'styled-components';

import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  p {
    text-align: center;
    margin: 32px 0;
    line-height: 32px;

    strong {
      color: ${theme.colors.pink};
    }
  }

  button {
    margin: 32px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    padding: 0 64px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: auto;

  input {
    height: 150px;
    background-color: transparent;
    border: 2px solid ${theme.assets.borderDark};
    border-radius: 10px;
    text-align: center;
    font-size: 36px;
    max-width: 80%;
    padding: 0 16px;
    font-weight: bold;
    color: ${theme.assets.font};
    margin-top: 32px;

    &::placeholder {
      color: ${theme.assets.borderLight};
      font-weight: bold;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media screen and (min-width: 1024px) {
    input {
      margin-top: 0;
    }
  }
`;
