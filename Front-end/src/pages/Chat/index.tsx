import { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import dayjs from 'dayjs';
import io from 'socket.io-client';

import { useAuth } from '../../hooks/useAuth';

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

const socket = io('http://localhost:3333');

const Chat: NextPage = () => {
  const { userJoinChat, loadUsersJoin } = useAuth();
  const [messages, setMessages] = useState([]);
  const messageRef = useRef<HTMLInputElement>();

  useEffect(() => {
    loadUsersJoin();
  }, []);

  useEffect(() => {
    if (userJoinChat) {
      const { userSender, userReceiver } = userJoinChat;

      const params = {
        emailSender: userSender.email,
        emailReceiver: userReceiver.email,
      };

      socket.emit('list_messages', params, (messagesList) => {
        setMessages(messagesList);
      });
    }
  }, [userJoinChat]);

  const handleMessage = () => {
    const message = messageRef.current.value;

    const params = {
      name: userJoinChat.userSender.name,
      text: message,
      emailSender: userJoinChat.userSender.email,
      emailReceiver: userJoinChat.userReceiver.email,
    };

    socket.emit('send_message', params);

    const newMessageSend = {
      nameUserSender: userJoinChat.userSender.name,
      emailSender: userJoinChat.userSender.email,
      message,
      createdAt: dayjs().format('DD/MM/YY HH:mm:ss'),
      statusMessage: true,
    };
    setMessages([...messages, newMessageSend]);

    messageRef.current.value = '';
  };

  return (
    <Main>
      <MainContainer>
        <TitleChat>Mensagens</TitleChat>
        <ContainerChat>
          {messages.map((item, index) => (
            <>
              <MessageUser
                userLoged={item.emailSender == userJoinChat.userSender.email}
              >
                <ContainerMessage
                  userLoged={item.emailSender == userJoinChat.userSender.email}
                >
                  <UsernameLoged
                    userLoged={
                      item.emailSender == userJoinChat.userSender.email
                    }
                  >
                    {item.nameUserSender}
                  </UsernameLoged>
                  <MessageBox>{item.message}</MessageBox>
                  <DateMessage>{item.createdAt}</DateMessage>
                </ContainerMessage>
              </MessageUser>
            </>
          ))}
        </ContainerChat>
        <FooterChat>
          <FooterInput ref={messageRef} />
          <ButtonSendMessage onClick={handleMessage}></ButtonSendMessage>
        </FooterChat>
      </MainContainer>
    </Main>
  );
};

export default Chat;
