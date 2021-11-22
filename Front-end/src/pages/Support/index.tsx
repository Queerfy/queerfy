import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import { Phone, Instagram, Mail } from 'react-feather';

import { Header, BoxContent, InstagramButton, EmailButton } from './styles';

const Support: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Suporte</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <Phone />
        <h1>Atendimento</h1>
      </Header>

      <BoxContent>
        <h1>Fale conosco</h1>
        <span>
          Horários disponíveis para atendimento: 08h às 17h de segunda à sábado
        </span>
        <span>
          Entre em contato pelo nosso Instagram, e-mail ou chat em tempo real
        </span>
        <InstagramButton>
          <Instagram />
          @queerfy
        </InstagramButton>
        <EmailButton>
          <Mail />
          queerfy@empresa.com
        </EmailButton>
      </BoxContent>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Support;
