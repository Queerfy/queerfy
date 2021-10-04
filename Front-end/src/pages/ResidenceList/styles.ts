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
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100%;
  height: auto;
`;

export const CategorieItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

  height: 100px;
  width: 40%;
  max-width: 190px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: ${theme.assets.background};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 16px;

  > img {
    height: 35px;
  }
`;
