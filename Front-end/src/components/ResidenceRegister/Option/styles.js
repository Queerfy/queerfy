import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: ${theme.gradients.rainbow};

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 120px;
  }
`;

export const InsideContainer = styled.div`
  display: flex;
  align-items: center;

  width: 98%;
  height: 94%;
  background-color: ${theme.assets.background};
  border-radius: 10px;
  padding: 16px 32px;

  > img {
    width: 85px;
    max-height: 75px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1024px) {
    cursor: pointer;

    > span {
      font-size: 20px;
    }
  }
`;
