import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import Switch from 'react-switch';

import { theme } from '../../../styles/theme';
import { ContainerLeft, ContainerNotification, ContainerRow } from '../../../styles/notification';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft, Mail, Bell, MessageSquare } from 'react-feather';
import { NavbarMobile } from '../../../components/NavbarMobile';
import { HeaderMobile } from '../../../components/HeaderMobile';
import { ContainerMain, HeaderContainer } from '../../../styles/information';

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
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Configurações das notificações</h1>
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
              <h2 id="textOne">Usuários</h2>
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
