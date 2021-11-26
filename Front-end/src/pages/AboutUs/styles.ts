import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    color: ${theme.colors.yellow};
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
    max-width: 90%;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 30%;
    }

    p {
      width: 65%;
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

  span {
    margin-top: 20px;
    text-align: justify;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 50%;
    }

    span {
      width: 60%;
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
    max-width: 100%;
    text-align: justify;
    margin-top: 10px;
  }

  @media screen and (min-width: 1024px) {
    p {
      width: 50%;
    }
  }
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: unset;
  }
`;

export const Developers = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 22px;
  }

  p {
    width: 100%;
    text-align: justify;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;

    p {
      width: 70%;
    }
  }
`;

export const Business = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 22px;
  }

  p {
    width: 100%;
    text-align: justify;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;

    p {
      width: 70%;
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
