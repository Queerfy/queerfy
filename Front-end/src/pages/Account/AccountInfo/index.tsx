import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import { theme } from '../../../styles/theme';
import { ContainerMain, HeaderContainer } from '../MainAccount/styles';
import { ContainerInfo, ContainerColumn, Container } from './styles';
import { Navbar } from '../../../components/Navbar';
import {
  ArrowLeft,
  User,
  Calendar,
  Mail,
  Lock,
  Phone,
  MapPin,
  CreditCard,
  Users,
} from 'react-feather';

const InfoAccount: NextPage = () => {
  return (
    <>
      <Head>
        <title>Informações da conta</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderContainer title={theme.colors.red} text={theme.colors.red}>
          <ArrowLeft />
          <h1>Informações da conta</h1>
        </HeaderContainer>
        <ContainerInfo>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <User />
              <h2>Nome</h2>
              <h3>Nicolas Sousa Conde</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Users />
              <h2>Orientação sexual</h2>
              <h3>Masculino</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Calendar />
              <h2>Data de nascimento</h2>
              <h3>01 de janeiro de 2021</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Mail />
              <h2>E-mail</h2>
              <h3>nicolasconde196@gmail.com</h3>
            </Container>
          </ContainerColumn>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Lock />
              <h2>Senha</h2>
              <h3>***************</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Phone />
              <h2>Número de telefone</h2>
              <h3>+55 11 91234-5678</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <CreditCard />
              <h2>Documentos</h2>
              <h3>CPF: 123.456.789-01/RG: 12.345.678-9</h3>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <MapPin />
              <h2>Endereço</h2>
              <h3>Rua Haddock Lobo, 595</h3>
            </Container>
          </ContainerColumn>
        </ContainerInfo>
      </ContainerMain>
    </>
  );
};
export default InfoAccount;
