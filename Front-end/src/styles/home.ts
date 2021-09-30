import styled from 'styled-components';

import { theme } from './theme';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    section {
      margin-bottom: 64px;
    }
  }
`;

// CATEGORIES
export const Categories = styled.section`
  height: auto;
  color: ${theme.colors.green};
`;

export const CategorieTypes = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;

    > :nth-child(2) {
      margin-right: 20px;
      margin-left: 20px;
    }

    > div img {
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1.01);
      }
    }
  }
`;

// BANNERS
export const HostBanner = styled.section`
  height: 350px;
  color: ${theme.assets.background};
  border-radius: 10px;
`;

export const PinkBunners = styled.section`
  height: auto;

  > div {
    height: 350px;
  }

  > :first-child {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    margin-bottom: 0px;

    > :first-child {
      margin-right: 20px;
      margin-bottom: 0px;
    }
  }
`;

// NEARBY PLACES
export const Nearby = styled.section`
  height: auto;

  > h1 {
    color: ${theme.colors.purple};
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    > h1 {
      font-size: 36px;
    }
  }
`;

export const NearbyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    > div {
      margin: 0px;
    }
  }
`;

// NEWSLETTER
export const NewslletterContainer = styled.section`
  height: 350px;

  > h1 {
    color: ${theme.colors.orange};
  }

  @media screen and (min-width: 1024px) {
    > h1 {
      font-size: 36px;
    }
  }
`;
