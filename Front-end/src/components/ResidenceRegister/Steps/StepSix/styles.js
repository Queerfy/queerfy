import styled from 'styled-components';

import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  > h1 {
    font-size: 28px;
    text-align: center;
    margin: 32px 0;
  }

  > h2 {
    font-size: 26px;
    color: ${theme.colors.red};
    align-self: flex-start;
    margin-bottom: 8px;
  }

  input {
    height: 50px;
    padding: 16px;
  }

  textarea {
    min-height: 100px;
    padding: 16px;
  }

  input,
  textarea {
    border: 1px solid ${theme.assets.borderDark};
    border-radius: 10px;
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 64px;
  }

  > button {
    margin-bottom: 32px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    padding: 0 64px;

    > h1 {
      display: none;
    }
  }
`;
