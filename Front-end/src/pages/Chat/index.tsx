import { NextPage } from 'next';

import {
  Main,
  MainContainer,
  TitleChat,
  ContainerChat,
  MessageUser,
  ContainerMessage,
  UsernameLoged,
  MessageBox,
  DateMessage,
  FooterChat,
  FooterInput,
  ButtonSendMessage,
} from './style';

const Chat: NextPage = () => {
  return (
    <Main>
      <MainContainer>
        <TitleChat>Mensagens</TitleChat>
        <ContainerChat>
          <MessageUser userLoged>
            <ContainerMessage userLoged>
              <UsernameLoged userLoged>Igor</UsernameLoged>
              <MessageBox>Oi, tudo bem?</MessageBox>
              <DateMessage>10/11/2021</DateMessage>
            </ContainerMessage>
          </MessageUser>
          <MessageUser>
            <ContainerMessage>
              <UsernameLoged>Lemos</UsernameLoged>
              <MessageBox>Oi, tudo sim e com você?</MessageBox>
              <DateMessage>10/11/2021</DateMessage>
            </ContainerMessage>
          </MessageUser>
        </ContainerChat>
        <FooterChat>
          <FooterInput></FooterInput>
          <ButtonSendMessage></ButtonSendMessage>
        </FooterChat>
      </MainContainer>
    </Main>
  );
};

export default Chat;
