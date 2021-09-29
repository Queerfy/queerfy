import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import { theme } from '../../../styles/theme';
import { Container, ContainerAccount } from '../MainAccount/styles';
import { StyledH2 } from './styles';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft } from 'react-feather';

const InfoAccount: NextPage = () => {
  return (
    <>
      <Head>
        <title>Informações da conta</title>
      </Head>
      <Navbar accountNavbar />
      <main>
        <ContainerAccount>
          <Container title={theme.colors.red}>
            <ArrowLeft />
            <h1>Informações da conta</h1>
          </Container>
          <StyledH2 title={theme.colors.red}>Pessoais</StyledH2>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Nome</h2>
            <h3>(Nicolas Conde)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Orientação sexual</h2>
            <h3>(Homem)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Data de nascimento</h2>
            <h3>(** de janeiro de ****)</h3>
          </Container>
          <StyledH2 title={theme.colors.red}>Configurações</StyledH2>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>E-mail</h2>
            <h3>(**********@gmail.com)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Senha</h2>
            <h3>(***************)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Número de telefone</h2>
            <h3>(+** ** *****-****)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Documentos</h2>
            <h3>(CPF: ***.***.***-** / RG: **.***.***-*)</h3>
          </Container>
          <Container subtitle={theme.colors.red} text={theme.assets.font}>
            <img src="../logo.svg" alt="logo" />
            <h2>Endereço</h2>
            <h3>(Rua Haddock Lobo, 595 - Cerqueira César)</h3>
          </Container>
        </ContainerAccount>
      </main>
    </>
  );
};
export default InfoAccount;
