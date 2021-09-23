import React from 'react';
import Head from 'next/head';

import { NextPage } from 'next';
import { ContainerAccount, Container, ImageArrow } from './styles';
import { theme } from '../../../styles/theme';
import { Navbar } from '../../../components/Navbar';

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>
      <Navbar accountNavbar />
      <main>
        <ContainerAccount>
          <Container title={theme.colors.pink} subtitle={theme.colors.pink}>
            <ImageArrow src="../returnPink.svg" alt="return" />
            <h1>Conta</h1>
            <h2>Olá, Nicolas</h2>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Informações da conta</h2>
            <h3>Detalhes pessoais e informações de contato</h3>
          </Container>
          <Container subtitle={theme.colors.blue} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Notificações</h2>
            <h3>Preferências de notificação</h3>
          </Container>
          <Container subtitle={theme.colors.orange} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Pagamentos</h2>
            <h3>Revise pagamentos, Doações</h3>
          </Container>
        </ContainerAccount>
      </main>
    </>
  );
};
export default MainPage;
