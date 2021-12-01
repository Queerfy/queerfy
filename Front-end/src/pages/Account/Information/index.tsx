import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import Link from 'next/link';
import Head from 'next/head';
import { Form } from '@unform/web';
import { theme } from '../../../styles/theme';
import { ContainerMain, HeaderContainer } from '../styles';
import {
  ContainerInfo,
  ContainerColumn,
  Container,
  InputsBox,
  SubmitButton,
} from './styles';
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

import Input from '../../../components/Form/input';
import InputMask from '../../../components/Form/inputMask';
import { useAuth } from '../../../hooks/useAuth';
import moment from 'moment';
import { ButtonAds, HeaderAds } from '../../MyAds/style';

const InfoAccount: NextPage = () => {
  const { userApp } = useAuth();

  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Queerfy | Informações</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer
          title={theme.colors.red}
          text={theme.colors.red}
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
        >
          <HeaderAds>
            <Link href="/">
              <ArrowLeft />
            </Link>
            <h1>Informações da conta</h1>
          </HeaderAds>
          <ButtonAds color={theme.colors.red}>
            Salvar alterações
          </ButtonAds>
        </HeaderContainer>
        <ContainerInfo onSubmit={handleSubmit}>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <User />
              <InputsBox>
                <h2>Nome</h2>
                <Input
                  type="text"
                  placeholder="Nicolas Sousa Conde"
                  name="name"
                  value={userApp?.name}
                />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Users />
              <InputsBox>
                <h2>Orientação sexual</h2>
                <Input
                  type="text"
                  placeholder="Hétero"
                  name="genre"
                  value={userApp?.genre}
                />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Calendar />
              <InputsBox>
                <h2>Data de nascimento</h2>
                <Input
                  style={{ padding: '20px' }}
                  type="date"
                  value={moment(userApp?.birthDate).format('YYYY-MM-DD')}
                  name="birthDate"
                />
              </InputsBox>
            </Container>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Mail />
              <InputsBox>
                <h2>E-mail</h2>
                <Input
                  type="email"
                  placeholder="***************@gmail.com"
                  value={userApp?.email}
                  name="email"
                />
              </InputsBox>
            </Container>
          </ContainerColumn>
          <ContainerColumn>
            <Container subtitle={theme.colors.red} text={theme.assets.font}>
              <Lock />
              <InputsBox>
                <h2>Senha</h2>
                <Input
                  type="password"
                  placeholder="***************"
                  value={userApp?.password}
                  name="password"
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
                />
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
