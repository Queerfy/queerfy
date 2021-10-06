import styled from 'styled-components';

import { theme } from '../../styles/theme';

interface IContainerBanner {
  imageSrc: string;
}

export const Container = styled.div`
  display: flex;

  height: 100vh;

  @media screen and (min-width: 1024px) {
    margin: 0px -64px;
  }
`;

export const BannerContainer = styled.div<IContainerBanner>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45%;
  background: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 190px;
  height: 190px;
  background-color: ${theme.assets.background};
  border-radius: 25px;

  > img {
    width: 120px;
    height: 120px;
  }

  span {
    font-size: 24px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 55%;
  height: 100%;

  div#login_back {
    width: 100%;
    height: 50px;
    margin-top: 32px;

    > svg {
      color: ${theme.colors.red};
      cursor: pointer;
    }
  }

  img#login_logo {
    width: 120px;
    margin-bottom: 20px;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 95%;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 70%;

  background: linear-gradient(
    to right,
    rgba(241, 83, 86, 1) 0%,
    rgba(240, 191, 90, 1) 17%,
    rgba(253, 233, 128, 1) 34%,
    rgba(133, 219, 107, 1) 50%,
    rgba(67, 158, 250, 1) 68%,
    rgba(169, 147, 245, 1) 84%,
    rgba(242, 107, 156, 1) 100%
  );
  border-radius: 15px;

  @media screen and (max-width: 1024px) {
    width: 350px;
    height: 750px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border: none;
  width: 99%;
  height: 99%;
  background-color: white;
  border-radius: 15px;

  h1 {
    padding: 10px;
    font-weight: 700;
    color: ${theme.colors.red};
  }

  div#firstElement {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    padding: 12px;

    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #bdc3c7;
    cursor: pointer;

    > svg {
      margin-right: 8px;
      color: ${theme.colors.red};
    }

    > p {
      font-size: 14px;

      > span {
        font-weight: 700;
        color: ${theme.colors.red};
      }
    }
  }

  p#container_textLogin {
    padding: 12px;

    color: #bdc3c7;
    font-size: 12px;
    font-weight: 500;
  }

  div#container_button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    width: 95%;
    border-radius: 5px;
    background: ${theme.colors.red};
    margin-bottom: 15px;
    cursor: pointer;

    > p {
      color: white;
      font-weight: 300;
      font-size: 12px;
    }

    > svg {
      color: white;
      margin-right: 10px;
    }
  }

  p#container_forgoutPassword {
    font-size: 13px;
    color: ${theme.colors.red};
    text-decoration: underline ${theme.colors.red};
    cursor: pointer;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  height: 70px;
  margin-bottom: 5px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.red};
  }

  input {
    color: ${theme.assets.borderLight};
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${theme.assets.borderDark};
    outline: none;
  }
`;
