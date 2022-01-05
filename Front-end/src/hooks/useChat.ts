import { useContext } from 'react';

import { ChatContext } from '../contexts/chatContext';

export const useChat = () => {
  const context = useContext(ChatContext);

  const {
    userJoinChat,
    messagesNotification,
    messagesReceiver,
    confirmReservation,
    loadUsersJoin,
    handleUsersChatJoin,
    handleConfirmReservation,
  } = context;

  return {
    userJoinChat,
    messagesNotification,
    messagesReceiver,
    confirmReservation,
    loadUsersJoin,
    handleUsersChatJoin,
    handleConfirmReservation,
  };
};
