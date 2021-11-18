import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  > h1 {
    text-align: center;
    color: ${theme.assets.font};
  }

  > button {
    margin: 32px 0px 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 64px;

    > h1 {
      display: none;
    }

    > button {
      margin: 16px 0px;
    }
  }
`;

export const Content = styled.div`
  border: 2px solid ${theme.assets.font};
  border-radius: 10px;
  margin-top: 32px;

  > img {
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
