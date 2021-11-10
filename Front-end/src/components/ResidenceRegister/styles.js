import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  height: auto;
  width: auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    margin: 0 -64px;
  }
`;

export const BannerContainer = styled.aside`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.gradients.red};
  padding: 64px;

  width: 50vw;
  height: 100vh;
  color: ${theme.assets.background};

  > h1 {
    font-size: 36px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: 80px;
  background-color: ${theme.assets.background};
  border-radius: 10px;

  > img {
    width: 80px;
  }

  > h1 {
    margin: 0 16px;
    color: ${theme.assets.font};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50vw;
    height: 100vh;
  }
`;
