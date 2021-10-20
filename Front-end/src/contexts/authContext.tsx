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
        router.push('/Login');
      }
    }
  };

  const handleLogin = (data: IUserData) => {

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
      })
  };

  const handleLogout = () => {
    setUserApp(null);
    localStorage.clear();
    router.push('/Login');
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
