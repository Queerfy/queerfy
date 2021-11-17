import { createContext, useState, useEffect } from 'react';
import * as Yup from 'yup';
import io from 'socket.io-client';

import { useRouter } from 'next/router';

import { api } from '../services/api';

import { ToastContainer, toast } from 'react-toastify';

export const AuthContext = createContext(null);

import 'react-toastify/dist/ReactToastify.css';

interface IUserData {
  email: string;
  password: string;
}

const socket = io('http://localhost:3333');

export const AuthProvider = ({ children }) => {
  const [userApp, setUserApp] = useState(null);
  const [userJoinChat, setJoinChat] = useState(null);
  const [messagesNotification, setMessagesNotification] = useState([]);
  const [messagesReceiver, setMessageReceiver] = useState();

  const router = useRouter();

  const loadStorageData = () => {
    const storagedUser = localStorage.getItem('user');

    const pathName = router.pathname;

    const paths = ['/', '/Login', '/Register'];

    if (!paths.includes(pathName)) {
      if (storagedUser) {
        setUserApp(JSON.parse(storagedUser));
      } else {
        router.push('/Login');
      }
    }
  };

  const handleLogin = (data: IUserData) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um email valido')
        .required('Coloque o email para prosseguir!'),
      password: Yup.string().required('Digite a senha para prosseguir!'),
    });

    schema
      .validate(data, { abortEarly: false })
      .then((res) => {
        api
          .post('/users/autenticate', data)
          .then((res) => {
            setUserApp(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));

            toast.success('Logado com sucesso!');

            setTimeout(() => {
              router.push('/ResidenceList');
            }, 2000);
          })
          .catch((err) => {
            return toast.error('Email/Senha incorreto!');
          });
      })
      .catch((error) => {
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach((erro) => {
            toast.error(erro.message);
          });
        }
      });
  };

  const handleLogout = () => {
    socket.emit('logout_sistem', { email: userApp.email });
    setUserApp(null);
    setJoinChat(null);
    setMessagesNotification(null);
    setMessageReceiver(null);
    localStorage.clear();
    router.push('/Login');
  };

  const loadUsersJoin = () => {
    const storagedUsersJoin = localStorage.getItem('usersJoin');

    if (storagedUsersJoin) {
      setJoinChat(JSON.parse(storagedUsersJoin));
    }
  };

  const handleUsersChatJoin = (usersJoins) => {
    localStorage.setItem('usersJoin', JSON.stringify(usersJoins));
    setJoinChat(usersJoins);
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  useEffect(() => {
    if (userApp) {
      socket.emit('entry_sistem', userApp);
      setTimeout(() => {
        socket.emit('check_messages', userApp, (messagesList) => {
          if (messagesList.length > 0) {
            return toast.success(
              `Você tem ${messagesList.length} mensagem não lidas`
            );
          }
        });
      }, 2000);
    }
  }, [userApp]);

  useEffect(() => {
    socket.on('user_receiver_message', (message) => {
      const { text, name, userSender, userReceiver } = message;
      setMessageReceiver(message);
      const pathName = router.pathname;
      if (pathName !== '/Chat') {
        return toast.success(`${name} te mandou uma mensagem`, {
          onClick: () => {
            const newUserSender = userReceiver.user; //Trocando pra quem recebeu para quem vai mandar a mensagem agora
            const newUserReceiver = userSender.user; //Trocando para quem mandou para quem vai recebcer a mensagem agora
            const params = {
              userSender: newUserSender,
              userReceiver: newUserReceiver,
            };
            localStorage.setItem('usersJoin', JSON.stringify(params));
            setJoinChat(params);
            setTimeout(() => {
              router.push('/Chat');
            }, 1000);
          },
        });
      }
    });
  }, [messagesNotification]);

  return (
    <AuthContext.Provider
      value={{
        signed: !!userApp,
        userApp,
        userJoinChat,
        messagesReceiver,
        handleLogin,
        handleLogout,
        handleUsersChatJoin,
        loadUsersJoin,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
