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

  useEffect(() => {
    if (userJoinChat) {
      const { userSender, userReceiver } = userJoinChat;

      if (userJoinChat.proposal) {
        const { proposal, house, confirmReservation } = userJoinChat;
        messageRef.current.value = `Olá ${userReceiver.name}, estou interessado em uma das suas residências (${house.name}). Encaminhei uma proposta com os dias ${confirmReservation.checkIn}/${confirmReservation.checkOut}, gostaria de me hospedar em sua propriedade, está disponível?`;

        const params = {
          name: userApp.name,
          text: messageRef.current.value,
          emailSender: userApp.email,
          emailReceiver: userJoinChat.userReceiver.email,
        };

        socket.emit('send_message', params);

        const newMessageSend = {
          nameUserSender: userJoinChat.userSender.name,
          emailSender: userJoinChat.userSender.email,
          message: messageRef.current.value,
          createdAt: dayjs().format('DD/MM/YY HH:mm:ss'),
        };

        setMessages([...messages, newMessageSend]);

        messageRef.current.value = '';
      }

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
