import React from 'react';

import Switch from 'react-switch';

import { NextPage } from 'next';
import Head from 'next/head';
import { ContainerMain, HeaderContainer } from '../MainAccount/styles';
import { theme } from '../../../styles/theme';
import { ContainerNotification, ContainerRow } from './styles';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft } from 'react-feather';

const NotificationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notificações</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderContainer title={theme.colors.blue} text={theme.colors.blue}>
          <ArrowLeft />
          <h1>Notificações</h1>
        </HeaderContainer>
        <ContainerNotification>
          <ContainerRow>
            <h2 id="textOne">E-mail</h2>
            <h2 id="textTwo">Deseja receber atualizações no e-mail?</h2>
            <Switch
              checked={true}
              onChange={() => {}}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
          <ContainerRow>
            <h2 id="textOne">Pop-up</h2>
            <h2 id="textTwo">Concorda em receber pop-up no app?</h2>
            <Switch
              checked={true}
              onChange={() => {}}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
          <ContainerRow>
            <h2 id="textOne">Mensagens privadas</h2>
            <h2 id="textTwo">Mensagens de texto de outros usuários</h2>
            <Switch
              checked={false}
              onChange={() => {}}
              onColor="#439EFA"
              offColor="#C4C4C4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ContainerRow>
        </ContainerNotification>
      </ContainerMain>
    </>
  );
};
export default NotificationPage;
