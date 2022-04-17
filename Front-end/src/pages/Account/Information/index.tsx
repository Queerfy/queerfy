import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import { Form } from '@unform/web';

import Link from 'next/link';
import Head from 'next/head';
import { theme } from '../../../styles/theme';
import { ContainerMain, HeaderContainer } from '../../../styles/account';
import { ContainerMainInformation, ContainerInfo, ContainerColumn, Container, InputsBox } from '../../../styles/information';
import { Navbar } from '../../../components/Navbar';
import {
  ArrowLeft,
  User,
  Calendar,
  Mail,
  Lock,
  CreditCard,
  Users,
} from 'react-feather';
import { NavbarMobile } from '../../../components/NavbarMobile';
import { HeaderMobile } from '../../../components/HeaderMobile';

import InputMask from 'react-input-mask'
import { useAuth } from '../../../hooks/useAuth';
import moment from 'moment';
import { ButtonAds, HeaderAds } from '../../../styles/myAds';

const InfoAccount: NextPage = () => {
  const { userApp, handleUserApp } = useAuth();

  const nameRef = useRef(null);
  const genreRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cpfRef = useRef(null);
  const rgRef = useRef(null);
  const birthDateRef = useRef(null);

  const handleSubmit = () => {

    const data = {
      name: nameRef.current.value,
      genre: genreRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cpf: cpfRef.current.value,
      rg: rgRef.current.value,
    }

    handleUserApp(userApp.id, data);
  };

  return (
    <>
      <Head>
        <title>Queerfy | Informações</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMainInformation>
        <HeaderMobile />
        <HeaderContainer
          title={theme.colors.red}
          text={theme.colors.red}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <HeaderAds>
            <Link href="/">
              <ArrowLeft />
            </Link>
            <h1>Informações da conta</h1>
          </HeaderAds>
          <ButtonAds type="submit" color={theme.colors.red} onClick={handleSubmit}>Salvar alterações</ButtonAds>
        </HeaderContainer>
        <ContainerInfo>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <User />
              <InputsBox>
                <h2>Nome</h2>
                <input
                  type="text"
                  placeholder="Nicolas Sousa Conde"
                  value={userApp?.name}
                  ref={nameRef}
                />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Users />
              <InputsBox>
                <h2>Orientação sexual</h2>
                <input
                  type="text"
                  placeholder="Hétero"
                  value={userApp?.genre}
                  ref={genreRef}
                />
              </InputsBox>
            </Container>
            {/* <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Calendar />
              <InputsBox>
                <h2>Data de nascimento</h2>
                <input
                  style={{ padding: '20px' }}
                  type="date"
                  ref={birthDateRef}
                />
              </InputsBox>
            </Container> */}
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Mail />
              <InputsBox>
                <h2>E-mail</h2>
                <input
                  type="email"
                  placeholder="***************@gmail.com"
                  value={userApp?.email}
                  ref={emailRef}
                />
              </InputsBox>
            </Container>
          </ContainerColumn>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Lock />
              <InputsBox>
                <h2>Senha</h2>
                <input
                  type="password"
                  placeholder="***************"
                  value={userApp?.password}
                  ref={passwordRef}
                />
              </InputsBox>
            </Container>
            {/* <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Phone />
              <InputsBox>
                <h2>Número de telefone</h2>
                <InputMask
                  name="telephone"
                  type="text"
                  mask={maskPhone}
                  value={userApp?.cel_number}
                  onBlur={(e) => {
                    if (e.target.value.replace('_', '').length === 14) {
                      setMaskPhone('(99) 99999-9999');
                    }
                  }}
                  onFocus={(e) => {
                    if (e.target.value.replace('_', '').length === 14) {
                      setMaskPhone('(99) 99999-9999');
                    }
                  }}
                />
              </InputsBox>
            </Container> */}
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <CreditCard />
              <InputsBox>
                <h2>CPF</h2>
                <InputMask
                  name="cpf"
                  value={userApp?.cpf}
                  type="text"
                  mask="999.999.999-99"
                  ref={cpfRef}
                />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <CreditCard />
              <InputsBox>
                <h2>RG</h2>
                <InputMask
                  name="rg"
                  value={userApp?.rg}
                  type="text"
                  mask="99-999-999-*"
                  ref={rgRef}
                />
              </InputsBox>
            </Container>
          </ContainerColumn>
        </ContainerInfo>
      </ContainerMainInformation>
      <NavbarMobile />
    </>
  );
};
export default InfoAccount;
