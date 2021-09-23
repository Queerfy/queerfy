import React from 'react';

import Switch from 'react-switch';

import { NextPage } from 'next';
import Head from 'next/head';
import { Container, ContainerAccount, ImageArrow } from '../MainAccount/styles';
import { theme } from '../../../styles/theme';
import { ContainerRow } from './styles';
import { Navbar } from '../../../components/Navbar';

const NotificationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notificações da conta</title>
      </Head>
      <Navbar accountNavbar />
      <main>
        <ContainerAccount>
          <Container title={theme.colors.blue}>
            <ImageArrow src="../returnBlue.svg" alt="return" />
            <h1>Notificações</h1>
          </Container>
          <Container subtitle={theme.colors.blue}>
            <ContainerRow>
              <h2>E-mail</h2>
              <Switch
                checked={true}
                onChange={() => {}}
                onColor="#439EFA"
                offColor="#C4C4C4"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </ContainerRow>
          </Container>
          <Container subtitle={theme.colors.blue}>
            <ContainerRow>
              <h2>Pop-up</h2>
              <Switch
                checked={true}
                onChange={() => {}}
                onColor="#439EFA"
                offColor="#C4C4C4"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </ContainerRow>
          </Container>
          <Container subtitle={theme.colors.blue}>
            <ContainerRow>
              <h2>Mensagens privadas</h2>
              <Switch
                checked={false}
                onChange={() => {}}
                onColor="#439EFA"
                offColor="#C4C4C4"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </ContainerRow>
          </Container>
        </ContainerAccount>
      </main>
    </>
  );
};
export default NotificationPage;
