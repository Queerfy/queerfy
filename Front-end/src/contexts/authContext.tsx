import { createContext, useState, useEffect } from 'react';
import * as Yup from 'yup';
import io from 'socket.io-client';

import { useRouter } from 'next/router';

import { api } from '../services/api';

import { ToastContainer, toast } from 'react-toastify';

export const AuthContext = createContext(null);

import 'react-toastify/dist/ReactToastify.css';

import { IConfirmReservation } from '../interfaces';
interface IUserAuthData {
  email: string;
  password: string;
}

const socket = io('http://localhost:3333');

export const AuthProvider = ({ children }) => {
  const [userApp, setUserApp] = useState(null);
  const [userJoinChat, setJoinChat] = useState(null);
  const [messagesNotification, setMessagesNotification] = useState([]);
  const [messagesReceiver, setMessageReceiver] = useState();
  const [confirmReservation, setConfirmReservation] =
    useState<IConfirmReservation>();
  const [proposals, setProposals] = useState();
  const [search, setSearch] = useState();

  const router = useRouter();

  const loadStorageData = () => {
    const storagedUser = localStorage.getItem('user');

    if (storagedUser) {
      const userStoraged = JSON.parse(storagedUser);
      if (!userStoraged.editResidence) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...userStoraged,
            editResidence: { idHouse: null, editing: false },
          })
        );
        setUserApp({
          ...userStoraged,
          editResidence: { idHouse: null, editing: false },
        });
      } else {
        localStorage.setItem('user', JSON.stringify(userStoraged));
        setUserApp(userStoraged);
      }
    }
  };

  const handleLogin = (data: IUserAuthData) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido.')
        .required('Coloque o e-mail para prosseguir.'),
      password: Yup.string().required('Digite a senha para prosseguir.'),
    });

    schema
      .validate(data, { abortEarly: false })
      .then((res) => {
        api
          .post('/users/autenticate', data)
          .then((res) => {
            setUserApp(res.data);
            localStorage.setItem(
              'user',
              JSON.stringify({
                ...res.data,
                editResidence: { idHouse: null, editing: false },
              })
            );

            toast.success('Logado com sucesso!');

            setTimeout(() => {
              router.push('/');
            }, 2000);
          })
          .catch((err) => {
            return toast.error('E-mail ou senha incorretos.');
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
    setConfirmReservation(null);
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

  const handleConfirmReservation = (reservationDate: IConfirmReservation) => {
    setConfirmReservation(reservationDate);
  };

  const handleSearch = (objectSearch) => {
    localStorage.setItem('lastSearch', JSON.stringify(objectSearch));
    setSearch(objectSearch);
  };

  const handleFavorites = async (dataUser) => {
    const { data } = await api.get(`/users/${dataUser.userId}`);

    localStorage.setItem('user', JSON.stringify(data));
    setUserApp(data);
  };

  const getLastSearch = () => {
    const storagedSearch = localStorage.getItem('lastSearch');

    if (storagedSearch) {
      setSearch(JSON.parse(storagedSearch));
    }
  };

  const handleResidenceEdit = (edit, idHouse) => {
    const storagedUser = localStorage.getItem('user');
    const userStoraged = JSON.parse(storagedUser);
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...userStoraged,
        editResidence: { idHouse, editing: edit },
      })
    );
    setUserApp({ ...userStoraged, editResidence: { idHouse, editing: edit } });
  };

  const handleUserApp = async (id, userData) => {
    api.put(`/users/update/${id}`, userData).then(res => {
      api.get(`/users/${id}`).then(response => {
        localStorage.setItem('user', JSON.stringify(response.data))
        setUserApp(response.data);
        return toast.success('Atualizado com sucesso!');
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  useEffect(() => {
    if (userApp) {
      const userSender = {
        name: userApp.name,
        email: userApp.email,
        rg: userApp.rg,
        cpf: userApp.cpf,
        password: userApp.password,
        perfilImg: userApp.perfilImg,
        descUser: userApp.descUser,
        genre: userApp.genre,
        likes: userApp.likes,
        birthDate: userApp.birthDate,
        admin: userApp.admin,
      };
      socket.emit('entry_sistem', userSender);
      const pathName = router.pathname;
      if (pathName != '/Chat') {
        setTimeout(() => {
          socket.emit('check_messages', userSender, (messagesList) => {
            if (messagesList.length > 0) {
              return toast.success(
                `Você tem ${messagesList.length} mensagens não lidas.`
              );
            }
          });
        }, 2000);
      }
    }
  }, [userApp]);

  useEffect(() => {
    socket.on('user_receiver_message', (message) => {
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
    });
  }, [messagesNotification]);

  useEffect(() => {
    if (userApp) {
      const userReceiver = {
        name: userApp.name,
        email: userApp.email,
        rg: userApp.rg,
        cpf: userApp.cpf,
        password: userApp.password,
        perfilImg: userApp.perfilImg,
        descUser: userApp.descUser,
        genre: userApp.genre,
        likes: userApp.likes,
        birthDate: userApp.birthDate,
        admin: userApp.admin,
      };
      socket.emit('list_proposals', userReceiver, (messagesProposals) => {
        if (messagesProposals.length > 0) {
          messagesProposals.map((item) => {
            toast.info(`Você recebeu uma nova proposta.`, {
              onClick: () => {
                const newUserSender = item.user_receiver; //Trocando pra quem recebeu para quem vai mandar a mensagem agora
                const newUserReceiver = item.user_sender; //Trocando para quem mandou para quem vai recebcer a mensagem agora
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
          });
        }
      });
    }
  }, [userApp]);

  return (
    <AuthContext.Provider
      value={{
        signed: !!userApp,
        userApp,
        userJoinChat,
        messagesReceiver,
        confirmReservation,
        search,
        handleLogin,
        handleLogout,
        handleUsersChatJoin,
        loadUsersJoin,
        handleConfirmReservation,
        handleSearch,
        getLastSearch,
        handleFavorites,
        handleResidenceEdit,
        handleUserApp,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
