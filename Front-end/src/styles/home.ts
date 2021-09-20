import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

// HEADER
export const Header = styled.header`
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

// HOST
export const HostBanner = styled.section`
  background-image: url('host-bg.svg');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  width: 100%;
  height: 350px;
  color: ${(props) => props.theme.assets.background};
  border-radius: 10px;
`;

export const BannerFade = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(to left, #1a1a1a 20%, transparent 70%);

  @media screen and (min-width: 1024px) {
    background: linear-gradient(to right, #1a1a1a 20%, transparent 70%);
  }
`;

export const HostContent = styled(Center)`
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 16px;

  > h1 {
    font-size: 26px;
  }

  > p {
    margin: 32px 0 64px 0px;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;

    width: 50%;

    > h1 {
      font-size: 36px;
    }

    > p {
      font-size: 24px;
      margin: 16px 0 32px 0px;
    }
  }
`;
