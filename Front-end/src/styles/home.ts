import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  section {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    section {
      margin-bottom: 64px;
    }
  }
`;

// HEADER MOBILE
export const HeaderMobile = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10vh;
  border-bottom: 1px solid ${(props) => props.theme.assets.borderLight};
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

// CATEGORIES
export const Categories = styled.section`
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.colors.green};
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
  width: 100%;
  height: 350px;
  color: ${(props) => props.theme.assets.background};
  border-radius: 10px;
`;

export const PinkBunners = styled.section`
  width: 100%;
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
    }
  }
`;
