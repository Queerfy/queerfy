import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

export const BannerFade = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(to right, #1a1a1a 20%, transparent 70%);
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 16px;

  > h1 {
    font-size: 26px;
  }

  > p {
    color: ${(props) => props.theme.assets.background};
  }

  @media screen and (min-width: 1024px) {
    width: 70%;

    > h1 {
      font-size: 36px;
    }

    > p {
      font-size: 24px;
    }
  }
`;
