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
  ProposalContainer,
  ImageProposal,
  ProposalBox,
  ContainerButtonsProposal,
  ButtonProposal,
  ButtonLoadindProposal,
  ProposalDate,
  FooterChat,
  FooterInput,
  ButtonSendMessage,
} from './style';
import { theme } from '../../styles/theme';

const socket = io('http://localhost:3333');

const Chat: NextPage = () => {
  const { userApp, userJoinChat, loadUsersJoin, messagesReceiver } = useAuth();
  const [messages, setMessages] = useState([]);
  const messageRef = useRef<HTMLInputElement>();

  useEffect(() => {
    loadUsersJoin();
  }, []);

  useEffect(() => {
    const storagedUsersJoin = JSON.parse(localStorage.getItem('usersJoin'));
    if (storagedUsersJoin.proposal && storagedUsersJoin.proposal !== false) {
      messageRef.current.value = `
        Olá ${storagedUsersJoin.userReceiver?.name}, estou interessado em uma das suas residências (${storagedUsersJoin.house.name}). Encaminhei uma proposta com os dias ${storagedUsersJoin.confirmReservation.checkIn}/${storagedUsersJoin.confirmReservation.checkOut}, gostaria de me hospedar em sua propriedade, está disponível?
      `;

      const paramsMessage = {
        name: storagedUsersJoin.userSender.name,
        text: messageRef.current.value,
        emailSender: storagedUsersJoin.userSender.email,
        emailReceiver: storagedUsersJoin.userReceiver.email,
        userReceiver: storagedUsersJoin.userReceiver,
        proposal: true,
        acceptProposal: false,
      };

      console.log('Chamou send_message');
      socket.emit('send_message', paramsMessage);

      messageRef.current.value = '';
    }

    const params = {
      emailSender: storagedUsersJoin.userSender.email,
      emailReceiver: storagedUsersJoin.userReceiver.email,
      userSender: storagedUsersJoin.userSender,
      userReceiver: storagedUsersJoin.userReceiver,
    };

    socket.emit('list_messages', params, (messagesList) => {
      console.log('Chamou primeiro list_messages');
      setMessages(messagesList);
    });
  }, []);

  useEffect(() => {
    if (userJoinChat) {
      const { userSender, userReceiver } = userJoinChat;

      const params = {
        emailSender: userSender.email,
        emailReceiver: userReceiver.email,
        userSender,
        userReceiver,
      };

      console.log('Chamou update_messages');
      socket.emit('update_messages', params.emailSender);

      socket.emit('list_messages', params, (messagesList) => {
        console.log('Chamou list_messages');
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
      userReceiver: userJoinChat.userReceiver,
      proposal: false,
      acceptProposal: null,
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
              {item.proposal != true ? (
                <MessageUser
                  userLoged={item.emailSender == userJoinChat.userSender.email}
                >
                  <ContainerMessage
                    userLoged={
                      item.emailSender == userJoinChat.userSender.email
                    }
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
              ) : (
                <>
                  <MessageUser userLoged>
                    <ProposalContainer userLoged>
                      <ProposalBox>
                        <MessageBox>{item.message}</MessageBox>
                        <ContainerButtonsProposal>
                          {item.emailSender == userJoinChat.userSender.email ? (
                            <ButtonLoadindProposal
                              bgColor={theme.colors.orange}
                            >
                              Proposta Enviada
                            </ButtonLoadindProposal>
                          ) : (
                            <>
                              <ButtonProposal bgColor={theme.colors.yellow}>
                                Aceitar
                              </ButtonProposal>
                              <ButtonProposal bgColor={theme.colors.red}>
                                Rejeitar
                              </ButtonProposal>
                            </>
                          )}
                        </ContainerButtonsProposal>
                      </ProposalBox>
                      <ProposalDate>
                        <DateMessage>{item.createdAt}</DateMessage>
                      </ProposalDate>
                    </ProposalContainer>
                  </MessageUser>
                </>
              )}
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
