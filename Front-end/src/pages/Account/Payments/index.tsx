import React from 'react';

import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import { HeaderContainer } from '../Main/styles';
import { theme } from '../../../styles/theme';
import {
  ContainerInputBox,
  RowCard,
  InputBox,
  SubContainer,
  ContentCard,
  ContentRowCard,
  ColapsedCard,
  ContainerButton,
  ContainerPayment,
  SubContainerPayment,
} from './styles';
import { Navbar } from '../../../components/Navbar';
import { ArrowLeft } from 'react-feather';

const PaymentsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Formas de pagamentos</title>
      </Head>
      <Navbar accountNavbar />
      <main>
        <HeaderContainer
          title={theme.colors.orange}
          subtitle={theme.colors.orange}
          text={theme.colors.orange}
        >
          <Link href="/Account/Main">
            <ArrowLeft />
          </Link>
          <h1>Pagamentos</h1>
          <h2>Olá, Nicolas</h2>
        </HeaderContainer>
        <ContainerPayment>
          <SubContainerPayment>
            <InputBox height={'150px'} responsive={'275px'} width={'85%'}>
              <SubContainer>
                <h3>Cartão de Credito</h3>
                <img src="../Visa.svg" alt="visa" />
              </SubContainer>
              <RowCard>
                <h1>1283 9832 3929 3209</h1>
              </RowCard>
              <ContentCard>
                <ContentRowCard>
                  <h2>Nome do cartão</h2>
                  <h3>Jeferson SIlva</h3>
                </ContentRowCard>
                <ContentRowCard>
                  <h2>Data</h2>
                  <h3>12/27</h3>
                </ContentRowCard>
                <ContentRowCard>
                  <h2>CVV</h2>
                  <h3>***</h3>
                </ContentRowCard>
              </ContentCard>
            </InputBox>
          </SubContainerPayment>
          <SubContainerPayment>
            <ContainerInputBox>
              <InputBox height={'65px'} responsive={'75px'} width={'100%'}>
                <ColapsedCard>
                  <img src="../Visa.svg" alt="visa" />
                  <h3>**** **** **** 2197</h3>
                </ColapsedCard>
              </InputBox>
              <InputBox height={'65px'} responsive={'75px'} width={'100%'}>
                <ColapsedCard>
                  <img src="../Mastercard.svg" alt="mastercard" />
                  <h3>**** **** **** 1900</h3>
                </ColapsedCard>
              </InputBox>
              <InputBox height={'65px'} responsive={'75px'} width={'100%'}>
                <ColapsedCard>
                  <h3>QueerCoin</h3>
                  <h3>R$ 0,00</h3>
                </ColapsedCard>
              </InputBox>
            </ContainerInputBox>
          </SubContainerPayment>
          <ContainerButton background={theme.colors.orange}>
            <button>+ ADICIONAR NOVO CARTÃO</button>
          </ContainerButton>
        </ContainerPayment>
      </main>
    </>
  );
};
export default PaymentsPage;