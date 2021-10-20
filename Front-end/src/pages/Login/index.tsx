import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Link from 'next/link';

import Input from '../../components/Form/input';

import { useAuth } from '../../hooks/useAuth';

import { UserPlus, LogIn, ArrowLeft } from 'react-feather';

import {
  Container,
  BannerContainer,
  LoginContainer,
  ContainerBox,
  ItemContainer,
  FormLogin,
  InputsBox,
  LogoBox,
  ButtonRegister,
} from './style';

const Login: NextPage = () => {
  const { handleLogin } = useAuth();

  const handleSumbit = (data) => {
    handleLogin(data);
  };

  return (
    <>
      <Head>
        <title>Queerfy | Login</title>
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
              <FormLogin onSubmit={handleSumbit}>
                <InputsBox>
                  <span>E-mail</span>
                  <Input
                    name="email"
                    type="email"
                    placeholder="contato@purple.com.br"
                  />
                </InputsBox>

                <InputsBox>
                  <span>Senha</span>
                  <Input name="password" type="password" placeholder="Senha" />
                </InputsBox>

                <ButtonRegister>
                  {' '}
                  <LogIn size={25} />
                  Entrar na conta
                </ButtonRegister>
              </FormLogin>

              <p id="container_forgoutPassword">Esqueci a senha</p>
            </ItemContainer>
          </ContainerBox>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
