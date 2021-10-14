import React from 'react';

import Switch from 'react-switch';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';

import { ContainerMain, HeaderContainer } from '../Main/styles';
import { theme } from '../../../styles/theme';
import { ContainerLeft, ContainerNotification, ContainerRow } from './styles';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft, Mail, Bell, MessageSquare } from 'react-feather';
import { NavbarMobile } from '../../../components/NavbarMobile';
import { HeaderMobile } from '../../../components/HeaderMobile';

const NotificationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Notificações</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer title={theme.colors.blue} text={theme.colors.blue}>
          <Link href="/Account/Main">
            <ArrowLeft />
          </Link>
          <h1>Notificações</h1>
        </HeaderContainer>
        <ContainerNotification>
          <ContainerRow>
            <ContainerLeft>
              <Mail />
              <h2 id="textOne">E-mail</h2>
              <h2 id="textTwo">Deseja receber atualizações no e-mail?</h2>
            </ContainerLeft>
            <Switch
              checked={true}
              onChange={() => { }}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
          <ContainerRow>
            <ContainerLeft>
              <Bell />
              <h2 id="textOne">Pop-up</h2>
              <h2 id="textTwo">Concorda em receber pop-up no app?</h2>
            </ContainerLeft>
            <Switch
              checked={true}
              onChange={() => { }}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
          <ContainerRow>
            <ContainerLeft>
              <MessageSquare />
              <h2 id="textOne">Direta</h2>
              <h2 id="textTwo">Mensagens de texto de outros usuários</h2>
            </ContainerLeft>
            <Switch
              checked={false}
              onChange={() => { }}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
        </ContainerNotification>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default NotificationPage;
