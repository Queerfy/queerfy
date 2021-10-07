import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Head from 'next/head';

import Link from 'next/link';

import { api } from '../../services/api';

import { UserPlus, LogIn, ArrowLeft } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';

import {
  Container,
  BannerContainer,
  LoginContainer,
  ContainerBox,
  ItemContainer,
  InputsBox,
  LogoBox,
} from './style';

import 'react-toastify/dist/ReactToastify.css';

const Login: NextPage = () => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email === '') {
      return toast.error('Preencha o e-mail para prosseguir!');
    }

    if (password === '') {
      return toast.error('Preeencha a senha para prosseguir!');
    }

    if (password.length < 3) {
      return toast.error('Senha inválida!');
    }

    const credentials = {
      email,
      password,
    };

    api
      .post('/users/authenticate', credentials)
      .then((res) => {
        const user = {
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
          perfilImg: res.data.data.perfilImg,
        };

        localStorage.setItem('user', JSON.stringify(user));

        toast.success('Logado com sucesso!');

        setTimeout(() => {
          router.push('/');
        }, 2000);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log('Message Error:', err.response.data.message);
          console.log('Status Error:', err.response.data.status);
          return toast.error('Email/Senha incorreto!');
        }
      });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Container>
        <BannerContainer imageSrc={'login-image.svg'}>
          <LogoBox>
            <img src="logo.svg" alt="queerfy" />
            <span>Queerfy</span>
          </LogoBox>
        </BannerContainer>

        <LoginContainer>
          <Link href="/">
            <div id="login_back">
              <ArrowLeft size={30} />
            </div>
          </Link>

          <img id="login_logo" src="./logo.svg" alt="Logo" />

          <ContainerBox>
            <ItemContainer>
              <h1>Bem-vinde</h1>

              <Link href="/Register">
                <div id="firstElement">
                  <UserPlus size={25} />
                  <p>
                    Crie sua conta na <span>Queerfy</span>
                  </p>
                </div>
              </Link>

              <p id="container_textLogin">ou entre em sua conta</p>

              <InputsBox>
                <span>E-mail</span>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="contato@purple.com.br"
                />
              </InputsBox>

              <InputsBox>
                <span>Senha</span>
                <input type="password" ref={passwordRef} placeholder="Senha" />
              </InputsBox>

              <div id="container_button" onClick={handleLogin}>
                <LogIn size={25} />
                <p>Entrar na conta</p>
              </div>

              <p id="container_forgoutPassword">Esqueci a senha</p>
              <ToastContainer />
            </ItemContainer>
          </ContainerBox>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
