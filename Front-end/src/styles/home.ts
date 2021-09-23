import styled from 'styled-components';

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

// SLIDE
export const SlideContainer = styled.section`
  overflow: hidden;
  width: 100%;
  height: 500px;
  margin-top: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.assets.font};
`;

export const Slide = styled.div`
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const SlideItem = styled.div`
  flex: none;
  width: 100%;
  height: 500px;
  scroll-snap-align: start;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    object-fit: cover;
  }
`;

// CATEGORIES
export const Categories = styled.section`
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
  height: 350px;
  color: ${(props) => props.theme.assets.background};
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
    color: ${(props) => props.theme.colors.purple};
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
    color: ${(props) => props.theme.colors.orange};
  }

  @media screen and (min-width: 1024px) {
    > h1 {
      font-size: 36px;
    }
  }
`;
