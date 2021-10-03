import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const TrendContainer = styled.section`
  width: 100%;
  height: auto;

  > h1 {
    color: ${theme.colors.blue};
  }

  > p {
    margin: 16px 0px;
    font-size: 14px;
  }
`;

export const RoomRow = styled.div`
  width: 100%;
  height: auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -16px;
  }
`;

export const Categories = styled.section`
  width: 100%;
  height: auto;
  background-color: blue;
`;
