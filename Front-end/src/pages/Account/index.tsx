import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { NextPage } from 'next';
import {
  ContainerAccount,
  Container,
  ContainerMain,
  HeaderContainer,
} from './styles';
import { theme } from '../../styles/theme';
import { Navbar } from '../../components/Navbar';
import { ArrowLeft, DollarSign, Bell, Settings, ChevronRight } from 'react-feather';
import { NavbarMobile } from '../../components/NavbarMobile';
import { HeaderMobile } from '../../components/HeaderMobile';

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Conta</title>
      </Head>
      <Navbar accountNavbar />
      <HeaderMobile />
      <ContainerMain>
        <HeaderContainer title={theme.colors.pink} subtitle={theme.colors.pink} text={theme.colors.pink}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Conta</h1>
          <h2>Olá, Nicolas</h2>
        </HeaderContainer>
        <ContainerAccount>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <Link href="/Account/Information">
              <Settings />
            </Link>
            <Link href="/Account/Information">
              <h2>Informações <ChevronRight /></h2>
            </Link>
            <h3>Detalhes pessoais</h3>
          </Container>
          <Container subtitle={theme.colors.blue} text={theme.assets.font}>
            <Link href="/Account/Notification">
              <Bell />
            </Link>
            <Link href="/Account/Notification">
              <h2>Notificações <ChevronRight /></h2>
            </Link>
            <h3>Preferências de notificação</h3>
          </Container>
          <Container subtitle={theme.colors.orange} text={theme.assets.font}>
            <Link href="/Account/Payments">
              <DollarSign />
            </Link>
            <Link href="/Account/Payments">
              <h2>Pagamentos <ChevronRight /></h2>
            </Link>
            <h3>Formas de pagamento</h3>
          </Container>
        </ContainerAccount>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MainPage;
