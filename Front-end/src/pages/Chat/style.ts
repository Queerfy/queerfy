import styled from 'styled-components';

interface UserLogedMessage {
  userLoged?: true;
}

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  overflow-y: hidden;

  margin: 0 -64px;

  background: #353b48;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 90%;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const TitleChat = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 500;

  padding: 15px;

  color: white;
  border-bottom: 1px solid #636e72;
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

  background: #3c096c;

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
  justify-content: end;

  color: ${(props) => (props.userLoged ? '#240046' : 'purple')};
  font-size: 10px;

  font-weight: bold;
  margin-bottom: 8px;
`;

export const MessageBox = styled.span`
  color: white;
  font-size: 10px;
`;

export const DateMessage = styled.span`
  display: flex;
  justify-content: flex-end;

  color: white;

  font-size: 10px;
  margin-top: 3px;
`;

export const FooterChat = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 20%;
`;

export const FooterInput = styled.input`
  height: 55%;
  width: 80%;

  font-size: 15px;
  background: rgba(73, 80, 87, 0.5);

  border: none;
  outline: none;

  color: #636e72;
  border-radius: 10px;
  padding: 0px 8px;
`;

export const ButtonSendMessage = styled.div`
  height: 55%;
  width: 8%;

  border-radius: 10px;
  background: #5f27cd;

  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #341f97;
  }
`;
