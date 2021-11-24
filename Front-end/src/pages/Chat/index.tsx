import { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import dayjs from 'dayjs';
import io from 'socket.io-client';

import { useAuth } from '../../hooks/useAuth';

import { toast } from 'react-toastify';

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
      const { idHouse, idOwer, total, totalDays, checkIn, checkOut } =
        storagedUsersJoin.confirmReservation;

      messageRef.current.value = `
        Olá ${storagedUsersJoin.userReceiver?.name}, estou interessado em uma das suas residências (${storagedUsersJoin.house.name}). Encaminhei uma proposta com os dias ${checkIn}/${checkOut}, gostaria de me hospedar em sua propriedade, está disponível?
      `;

      const paramsMessage = {
        name: storagedUsersJoin.userSender.name,
        text: messageRef.current.value,
        emailSender: storagedUsersJoin.userSender.email,
        emailReceiver: storagedUsersJoin.userReceiver.email,
        userReceiver: storagedUsersJoin.userReceiver,
        proposal: true,
        acceptProposal: false,
        idHouse,
        idOwer,
        total,
        totalDays,
        checkIn,
        checkOut,
      };

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

      /* socket.emit('update_messages', params.emailSender); */

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
      userReceiver: userJoinChat.userReceiver,
      proposal: false,
      acceptProposal: null,
      idHouse: null,
      idOwer: null,
      total: null,
      totalDays: null,
      checkIn: null,
      checkOut: null,
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

  const submitProposal = (idMessage, type) => {
    const params = {
      emailSender: userJoinChat.userReceiver.email,
      emailReceiver: userJoinChat.userSender.email,
      acceptProposal: type == 'accept' ? true : false,
      idMessage,
    };
    //Post de reserva da pagina
    socket.emit('handle_proposal', params);
    return toast.success('Resposta Enviada com Sucesso!');
  };

  return (
    <>
      <Head>
        <title>Queerfy | Chat</title>
      </Head>

      <Main>
        <MainContainer>
          <TitleChat>Mensagens</TitleChat>
          <ContainerChat>
            {messages.map((item, index) => (
              <>
                {item.proposal != true && !item.acceptProposal ? (
                  <MessageUser
                    userLoged={
                      item.emailSender == userJoinChat.userSender.email
                    }
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
                    <MessageUser
                      userLoged={
                        item.emailSender == userJoinChat.userSender.email
                      }
                    >
                      <ProposalContainer
                        userLoged={
                          item.emailSender == userJoinChat.userSender.email
                        }
                      >
                        <ProposalBox>
                          <MessageBox>{item.message}</MessageBox>
                          <ContainerButtonsProposal>
                            {item.emailSender ==
                            userJoinChat.userSender.email ? (
                              <ButtonLoadindProposal
                                bgColor={theme.colors.orange}
                              >
                                Proposta Enviada
                              </ButtonLoadindProposal>
                            ) : (
                              <>
                                <ButtonProposal
                                  bgColor={theme.colors.yellow}
                                  onClick={() =>
                                    submitProposal(item.id, 'accept')
                                  }
                                >
                                  Aceitar
                                </ButtonProposal>
                                <ButtonProposal
                                  bgColor={theme.colors.red}
                                  onClick={() =>
                                    submitProposal(item.id, 'reject')
                                  }
                                >
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
    </>
  );
};

export default Chat;
