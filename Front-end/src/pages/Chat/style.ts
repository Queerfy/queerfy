import styled from 'styled-components';

import { theme } from '../../styles/theme';

interface UserLogedMessage {
  userLoged?: boolean;
}

interface IButtonProposal {
  bgColor: string;
}

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  overflow-y: hidden;

  margin: 0 -32px;
  background: ${theme.assets.borderLight};

  @media (min-width: 1024px) {
    margin: 0 -64px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 90%;

  padding: 0 32px;
  background: ${theme.assets.background};
  border-radius: 20px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 25px;
    font-weight: 500;
    padding: 16px;
    color: ${theme.assets.font};
    border-bottom: 1px solid ${theme.assets.borderDark};

    svg {
      margin-right: 16px;
    }
  }
`;

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 75%;

  overflow-y: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MessageUser = styled.div<UserLogedMessage>`
  display: flex;
  justify-content: ${(props) => (props.userLoged ? 'flex-end' : 'flex-start')};
`;

export const ContainerMessage = styled.div<UserLogedMessage>`
  display: flex;
  flex-direction: column;

  width: 300px;

  background: ${(props) =>
    props.userLoged ? theme.colors.pink : theme.colors.purple};

  margin-top: 1%;
  margin-bottom: 3px;
  margin-right: 3%;

  padding: 10px;
  margin: 10px;

  border-radius: ${(props) =>
    props.userLoged ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
`;

export const UsernameLoged = styled.span<UserLogedMessage>`
  display: flex;
  justify-content: ${(props) => (props.userLoged ? 'end' : 'start')};

  color: ${theme.assets.font};
  font-size: 12px;

  font-weight: bold;
  margin-bottom: 8px;
`;

export const MessageBox = styled.span`
  color: ${theme.assets.background};
`;

export const DateMessage = styled.span`
  display: flex;
  justify-content: flex-end;

  color: ${theme.assets.background};

  font-size: 10px;
  margin-top: 3px;
`;

export const FooterChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 20%;
  padding: 0 8px;
  border-top: 1px solid ${theme.assets.borderDark};

  div,
  input {
    max-height: 75px;
    height: 70px;
  }
`;

export const FooterInput = styled.input`
  font-size: 16px;
  background: ${theme.assets.borderDark};

  border: none;
  outline: none;
  width: 80%;

  color: ${theme.assets.font};
  border-radius: 10px;
  padding: 0px 16px;

  &::placeholder {
    font-style: italic;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;

export const ButtonSendMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;
  max-width: 100px;
  min-width: 65px;

  border-radius: 10px;
  background: ${theme.colors.pink};

  transition: background-color 0.3s;
  cursor: pointer;

  svg {
    color: ${theme.assets.background};
  }

  &:hover {
    opacity: 0.9;
  }
`;
