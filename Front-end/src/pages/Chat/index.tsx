import { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import dayjs from 'dayjs';
import io from 'socket.io-client';
import { Slide } from 'react-slideshow-image';

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
  const { userApp, userJoinChat, loadUsersJoin, messagesReceiver } = useAuth();
  const [messages, setMessages] = useState([]);
  const messageRef = useRef<HTMLInputElement>();

  useEffect(() => {
    loadUsersJoin();
  }, []);

  //[] Quando for o dono que clicar na icone de mensagem passar o objeto de mensagem não lida, para a função userJoinChat
  // Exemplo: user_receiver => userReceiver
  //Exemplo: user_sender => userSender
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

  //[X] Quando for clicar na notificação de nova mensagem, pegar o objeto que foi enviado e fazer o get com as informações que foram recebidas
  //Exemplo emailSender e emailReceiver
  useEffect(() => {
    if (userJoinChat) {
      const { userSender, userReceiver } = userJoinChat;

      const params = {
        emailSender: userSender.email,
        emailReceiver: userReceiver.email,
      };

      socket.emit('update_messages', params.emailSender);

      socket.emit('list_messages', params, (messagesList) => {
        setMessages(messagesList);
      });
    }
  }, [messagesReceiver]);

  const handleMessage = () => {
    const message = messageRef.current.value;

    const params = {
      name: userApp.name,
      text: message,
      emailSender: userApp.email,
      emailReceiver: userJoinChat.userReceiver.email,
    };

    socket.emit('send_message', params);

    const newMessageSend = {
      nameUserSender: userJoinChat.userSender.name,
      emailSender: userJoinChat.userSender.email,
      message,
      createdAt: dayjs().format('DD/MM/YY HH:mm:ss'),
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
