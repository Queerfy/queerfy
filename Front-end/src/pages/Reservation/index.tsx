import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import { ArrowLeft } from 'react-feather';

import {
  Header,
  Informations,
  IconArrow,
  Date,
  BoxPrice,
  DailyValue,
  AdditionalValues,
  TotalValue,
} from './styles';

const Reservation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Finalizar reserva</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <Link href="/">
          <IconArrow>
            <ArrowLeft size={30} />
          </IconArrow>
        </Link>
        <h1>Confirmar reserva</h1>
      </Header>

      <Informations>
        <h1>Informações</h1>
        <Date>
          <h2>Datas</h2>
          <p>05 de nov. - 07 de nov.</p>
        </Date>
        <BoxPrice>
          <h2>Preços</h2>
          <DailyValue>
            <p>R$60,00 x 2 diárias</p>
            <p>R$120,00 </p>
          </DailyValue>
          <AdditionalValues>
            <p>Taxa de serviço</p>
            <p>R$0,00</p>
          </AdditionalValues>
          <TotalValue>
            <h2>Total</h2>
            <b>R$120,00</b>
          </TotalValue>
        </BoxPrice>
      </Informations>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Reservation;
