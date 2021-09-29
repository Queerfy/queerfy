import React from 'react';
import Head from 'next/head';

import { NextPage } from 'next';
import {
  ContainerAccount,
  Container,
  ContainerMain,
  HeaderContainer,
} from './styles';
import { theme } from '../../../styles/theme';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft, DollarSign, Bell, Settings } from 'react-feather';

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
      <HeaderContainer title={theme.colors.pink} subtitle={theme.colors.pink} text={theme.colors.pink}>
      <ArrowLeft />
          <h1>Conta</h1>
          <h2>Olá, Nicolas</h2>
        </HeaderContainer>
        <ContainerAccount>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <Settings />
            <h2>Informações ></h2>
            <h3>Detalhes pessoais</h3>
          </Container>
          <Container subtitle={theme.colors.blue} text={theme.assets.font}>
          <Bell />
            <h2>Notificações ></h2>
            <h3>Preferências de notificação</h3>
          </Container>
          <Container subtitle={theme.colors.orange} text={theme.assets.font}>
          <DollarSign />
            <h2>Pagamentos ></h2>
            <h3>Revise pagamentos, Doações</h3>
          </Container>
        </ContainerAccount>
      </ContainerMain>
    </>
  );
};
export default MainPage;
