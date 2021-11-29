import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 80%;
  height: 70px;
  border-radius: 15px;
  padding: 0 32px;
  border: 2px solid ${theme.assets.font};

  span {
    margin-left: 16px;
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 60px;
    border: 2px solid ${theme.assets.font};
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      border-radius: 25px;
    }
  }
`;
