import styled from 'styled-components';

import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  h1 {
    text-align: center;
    color: ${theme.assets.font};
  }

  button {
    margin: 32px 0px 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 64px;

    h1 {
      display: none;
    }

    button {
      margin: 16px 0px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid ${theme.assets.font};
  border-radius: 10px;
  margin-top: 32px;

  img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  h1,
  p {
    margin: 8px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 8px;
  }
`;

export const Divider = styled.div`
  align-self: center;

  width: 95%;
  height: 1px;
  background-color: ${theme.assets.borderLight};
  margin: 8px 0;
`;

export const Espefications = styled.div`
  width: 100%;
  height: auto;

  padding: 0 8px;

  strong {
    text-decoration: underline;
  }

  p {
    display: flex;
    align-self: center;

    strong {
      margin-right: 8px;
    }
  }

  img,
  svg {
    width: 20px;
    margin-right: 8px;
  }
`;
