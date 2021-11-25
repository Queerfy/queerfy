import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    color: ${theme.colors.yellow};
  }

  img {
    margin-top: 20px;
    border-radius: 10px;
  }

  h2 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    max-width: 65%;
    text-align: center;
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
  justify-content: center;

  span {
    text-align: justify;
    margin-right: 30px;
  }

  img {
    border-radius: 10px;
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
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    color: ${theme.colors.blue};
  }

  p {
    max-width: 70%;
    text-align: center;
    margin-top: 10px;
  }
`;

export const TeamMember = styled.div`
  width: 100%;

  display: flex;
`;

export const Developers = styled.div`
  width: 80%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 22px;
  }

  p {
    width: 80%;
    text-align: center;
  }
`;

export const Business = styled.div`
  width: 80%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 22px;
  }

  p {
    width: 80%;
    text-align: center;
  }
`;

export const BoxContact = styled.div`
  width: 100%;
  margin-top: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 2px solid ${theme.assets.borderDark};
`;

export const ButtonContact = styled.button`
  width: 20%;
  padding: 10px;
  margin-top: 30px;

  color: ${theme.assets.background};
  background-color: ${theme.colors.orange};

  border: none;
  border-radius: 8px;

  font-size: 20px;
  font-weight: bold;
`;
