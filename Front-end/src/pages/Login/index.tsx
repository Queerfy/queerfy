import { NextPage } from 'next';
import Head from 'next/head';

import Link from 'next/link';

import { UserPlus, LogIn, ArrowLeft } from 'react-feather';

import {
  Container,
  BannerContainer,
  LoginContainer,
  ContainerBox,
  ItemContainer,
  InputsBox,
} from './style';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Container>
        <BannerContainer imageSrc={'login-image.jpeg'}></BannerContainer>

        <LoginContainer>
          <Link href="/">
            <div id="login_back">
              <ArrowLeft size={30} />
            </div>
          </Link>

          <img id="login_logo" src="logo.svg" alt="Logo" />

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
                <input type="text" placeholder="contato@purple.com.br" />
              </InputsBox>

              <InputsBox>
                <span>Senha</span>
                <input type="text" placeholder="Senha" />
              </InputsBox>

              <div id="container_button">
                <LogIn size={25} />
                <p>Entrar na conta</p>
              </div>

              <p id="container_forgoutPassword">Esqueci a senha</p>
            </ItemContainer>
          </ContainerBox>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
