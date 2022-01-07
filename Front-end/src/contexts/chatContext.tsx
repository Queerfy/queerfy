import { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

import { toast } from 'react-toastify';

import { IConfirmReservation } from '../interfaces';

const socket = io('http://localhost:3333');

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [userJoinChat, setJoinChat] = useState(null);
  const [messagesNotification, setMessagesNotification] = useState([]);
  const [messagesReceiver, setMessageReceiver] = useState();
  const [confirmReservation, setConfirmReservation] =
    useState<IConfirmReservation>();

  const loadUsersJoin = (): Promise<object> => {
    return new Promise<object>((resolve, reject) => {
      const storagedUsersJoin = localStorage.getItem('usersJoin');

      if (!storagedUsersJoin) {
        reject(null);
      }
      setJoinChat(JSON.parse(storagedUsersJoin));
      resolve(JSON.parse(storagedUsersJoin));
    });
  };

  const handleUsersChatJoin = (usersJoins) => {
    localStorage.setItem('usersJoin', JSON.stringify(usersJoins));
    setJoinChat(usersJoins);
  };

  const handleConfirmReservation = (reservationDate: IConfirmReservation) => {
    setConfirmReservation(reservationDate);
  };

  useEffect(() => {
    toast.info('Chamado UseEffect do messagesNotification!');
    /* socket.on('user_receiver_message', (message) => {
      const { text, name, userSender, userReceiver } = message;
      setMessageReceiver(message);
      const pathName = router.pathname;
      if (pathName != '/Chat') {
        return toast.info(`${name} te mandou uma mensagem.`, {
          onClick: () => {
            const newUserSender = userReceiver.user; //Trocando pra quem recebeu para quem vai mandar a mensagem agora
            const newUserReceiver = userSender.user; //Trocando para quem mandou para quem vai recebcer a mensagem agora
            const params = {
              userSender: newUserSender,
              userReceiver: newUserReceiver,
            };
            localStorage.setItem('usersJoin', JSON.stringify(params));
            setJoinChat(params);
            router.push('/Chat');
          },
        });
      }
    });

    //Implementar a notificação de proposta corretamente
    socket.on('response_proposal', (params) => {
      const { acceptProposal } = params;

      return toast.info(
        `Sua foi proposta foi ${acceptProposal ? 'aceita' : 'recusada'}.`
      );
    }); */
  }, [messagesNotification]);

  return (
    <ChatContext.Provider
      value={{
        userJoinChat,
        messagesNotification,
        messagesReceiver,
        confirmReservation,
        loadUsersJoin,
        handleUsersChatJoin,
        handleConfirmReservation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
