import { NextPage } from 'next';
import io from 'socket.io-client';

import {
  BodyContainer,
  Main,
  ChatContainer,
  ContainerChat,
  MessageUserLoged,
  MessageContainer,
} from './style';

const Chat: NextPage = () => {
  return (
    <BodyContainer>
      <Main>
        <ChatContainer>
          <ContainerChat>
            <MessageUserLoged>
              <MessageContainer></MessageContainer>
            </MessageUserLoged>
          </ContainerChat>
        </ChatContainer>
      </Main>
    </BodyContainer>
  );
};

export default Chat;
