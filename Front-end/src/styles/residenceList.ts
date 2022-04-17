import styled from 'styled-components';

import { theme } from './theme';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1366px;

  h1 {
    color: ${theme.colors.blue};
  }

  p {
    margin: 16px 0px;
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 36px;
      margin: 16px 0px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const RoomRow = styled.div`
  width: 100%;
  height: auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 16px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  img {
    height: 35px;
  }
`;
