import styled from 'styled-components';

import { theme } from './theme';

export const Header = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    color: ${theme.colors.purple};
  }

  img {
    width: 60%;
    margin-top: 20px;
    border-radius: 10px;
  }

  h2 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 30%;
    }

    p {
      width: 55%;
    }
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  margin-top: 80px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleContent = styled.h1`
  font-size: 28px;

  color: ${theme.colors.red};
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 50%;
    }

    p {
      width: 55%;
    }
  }
`;

export const BoxTeam = styled.div`
  width: 100%;
  margin-top: 80px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    color: ${theme.colors.blue};
  }

  p {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    p {
      width: 41%;
    }
  }
`;

export const BoxContact = styled.div`
  width: 100%;
  margin-top: 80px;

  display: flex;
  justify-content: center;

  border-top: 2px solid ${theme.assets.borderDark};
`;

export const ButtonContact = styled.button`
  padding: 10px 60px;
  margin-top: 30px;

  color: ${theme.assets.background};
  background-color: ${theme.colors.orange};

  border: none;
  border-radius: 8px;

  font-size: 20px;
  font-weight: bold;
`;
