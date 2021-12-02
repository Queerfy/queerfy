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
  ContainerChat,
  MessageUser,
  ContainerMessage,
  UsernameLoged,
  MessageBox,
  ProposalContainer,
  ProposalBox,
  ContainerButtonsProposal,
  ProposalDate,
  FooterChat,
  FooterInput,
  ButtonSendMessage,
} from './style';
import { MessageSquare, Send } from 'react-feather';
import { GeneralButton } from '../../components/GeneralButton';
import { api } from '../../services/api';
import moment from 'moment';
import { theme } from '../../styles/theme';

const socket = io('http://localhost:3333');

const Chat: NextPage = () => {
  const {
    userApp,
    userJoinChat,
    loadUsersJoin,
    messagesReceiver,
    handleUsersChatJoin,
  } = useAuth();
  const [messages, setMessages] = useState([]);
  const [statusProposal, setStatusProposal] = useState(false);
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
        Olá ${storagedUsersJoin.userReceiver?.name}, tenho interesse em me hospedar na sua propriedade, a ${storagedUsersJoin.house.name}. Gostaria de me alocar na data: ${checkIn} / ${checkOut}.
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

      const userSender = storagedUsersJoin.userSender;
      const userReceiver = storagedUsersJoin.userReceiver;

      const usersJoined = {
        userSender,
        userReceiver,
      };

      handleUsersChatJoin(usersJoined);
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

      socket.emit('update_messages', {
        emailSender: userReceiver.email,
        emailReceiver: userSender.email,
      });

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

  const submitProposal = async (item, type) => {
    const params = {
      emailSender: userJoinChat.userReceiver.email,
      emailReceiver: userJoinChat.userSender.email,
      acceptProposal: type == 'accept' ? true : false,
      idMessage: item.id,
    };

    //Post de reserva da pagina
    socket.emit('handle_proposal', params);

    if (params.acceptProposal) {
      const data = {
        idProperty: item.idHouse,
        idUser: item.idOwer,
        checkIn: moment(item.checkIn).format('YYYY-MM-DD'),
        checkOut: moment(item.checkOut).format('YYYY-MM-DD'),
        totalValue: item.total,
      };

      await api.post('leases', data);
    }
    return toast.success('Resposta enviada com sucesso!');
  };

  return (
    <>
      <Head>
        <title>Queerfy | Chat</title>
      </Head>

      <Main>
        <MainContainer>
          <h1>
            <MessageSquare /> Queerfy Chat
          </h1>
          <ContainerChat>
            {messages.map((item, _) => (
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
                        {item.emailSender == userJoinChat.userSender.email
                          ? 'Você'
                          : item.nameUserSender}
                      </UsernameLoged>
                      <MessageBox>{item.message}</MessageBox>
                      <ProposalDate>
                        <span>{item.createdAt}</span>
                      </ProposalDate>
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
                              <GeneralButton
                                bgColor={theme.colors.green}
                                text="Proposta enviada"
                              />
                            ) : (
                              <>
                                <GeneralButton
                                  bgColor={theme.colors.red}
                                  onClick={() => submitProposal(item, 'reject')}
                                  text="Rejeitar"
                                />
                                <GeneralButton
                                  bgColor={theme.colors.green}
                                  onClick={() => submitProposal(item, 'accept')}
                                  text="Aceitar"
                                />
                              </>
                            )}
                          </ContainerButtonsProposal>
                        </ProposalBox>
                        <ProposalDate>
                          <span>{item.createdAt}</span>
                        </ProposalDate>
                      </ProposalContainer>
                    </MessageUser>
                  </>
                )}
              </>
            ))}
          </ContainerChat>
          <FooterChat>
            <FooterInput placeholder="Digite aqui..." ref={messageRef} />
            <ButtonSendMessage onClick={handleMessage}>
              <Send size={30} />
            </ButtonSendMessage>
          </FooterChat>
        </MainContainer>
      </Main>
    </>
  );
};

export default Chat;
