import React from 'react';
import { NextPage } from 'next';

import Link from 'next/link';
import Head from 'next/head';

import { theme } from '../../../styles/theme';
import { ContainerMain, HeaderContainer } from '../styles';
import { ContainerInfo, ContainerColumn, Container, InputsBox } from './styles';
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
import { NavbarMobile } from '../../../components/NavbarMobile';
import { HeaderMobile } from '../../../components/HeaderMobile';

const InfoAccount: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Informações</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer title={theme.colors.red} text={theme.colors.red}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Informações da conta</h1>
        </HeaderContainer>
        <ContainerInfo>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <User />
              <InputsBox>
                <h2>Nome</h2>
                <input type="text" placeholder="Nicolas Sousa Conde" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Users />
              <InputsBox>
                <h2>Orientação sexual</h2>
                <input type="text" placeholder="Hétero" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Calendar />
              <InputsBox>
                <h2>Data de nascimento</h2>
                <input type="text" placeholder="** de janeiro de ****" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Mail />
              <InputsBox>
                <h2>E-mail</h2>
                <input type="text" placeholder="***************@gmail.com" />
              </InputsBox>
            </Container>
          </ContainerColumn>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Lock />
              <InputsBox>
                <h2>Senha</h2>
                <input type="text" placeholder="***************" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Phone />
              <InputsBox>
                <h2>Número de telefone</h2>
                <input type="text" placeholder="+** ** *****-****" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <CreditCard />
              <InputsBox>
                <h2>Documentos</h2>
                <input type="text" placeholder="CPF/RG" />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <MapPin />
              <InputsBox>
                <h2>Endereço</h2>
                <input type="text" placeholder="Rua Haddock Lobo, 595" />
              </InputsBox>
            </Container>
          </ContainerColumn>
        </ContainerInfo>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default InfoAccount;
