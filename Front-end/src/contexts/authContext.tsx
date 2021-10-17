import { createContext, useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { api } from '../services/api';

import { ToastContainer, toast } from 'react-toastify';

export const AuthContext = createContext(null);

import 'react-toastify/dist/ReactToastify.css';

interface IUserData {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }) => {
  const [userApp, setUserApp] = useState(null);

  const router = useRouter();

  const loadStorageData = () => {
    const storagedUser = localStorage.getItem('user');

    const pathName = router.pathname;

    const paths = ['/', '/Login', '/Register'];

    if (!paths.includes(pathName)) {
      if (storagedUser) {
        setUserApp(JSON.parse(storagedUser));
      } else {
        router.push('/');
      }
    }
  };

  const handleLogin = (data: IUserData) => {
    const { email, password } = data;

    const user = {
      id: 1,
      name: 'Igor Silva',
      birthDate: null,
      rg: '123.123.334-X',
      cpf: '334.887.998-09',
      email: 'igor@gmail.com',
      password: '123',
      perfilImg: null,
      descUser: null,
      genre: 'Masculino',
      likes: 'Musica, Programação, Livros, Esportes',
      admin: false,
      adresses: [
        {
          id: 1,
          place: 'Rua Haddock Lobo',
          number: '595',
          cep: '08042-150',
          district: 'São Paulo',
          city: 'São Paulo',
        },
      ],
    };

    if (email === user.email && password === user.password) {
      setUserApp(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Logado com sucesso!');
      setTimeout(() => {
        router.push('/ResidenceList');
      }, 2000);
    } else {
      return toast.error('Email ou Senha invalidos!');
    }
  };

  const handleLogout = () => {
    setUserApp(null);
    localStorage.clear();
    router.push('/');
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!userApp,
        handleLogin,
        handleLogout,
        userApp,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
