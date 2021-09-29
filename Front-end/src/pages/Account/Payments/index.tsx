import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container, ContainerAccount } from '../MainAccount/styles';
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
        <ContainerAccount>
          <Container title={theme.colors.orange} subtitle={theme.colors.orange}>
            <ArrowLeft />
            <h1>Pagamentos</h1>
            <h2>Olá, Nicolas</h2>
          </Container>
          <InputBox height={'215px'}>
            <ContainerInputBox>
              <SubContainer>
                <h3>Cartão de Credito</h3>
                <img src="../Visa.svg" alt="return" />
              </SubContainer>
              <RowCard>
                <h1>1283 9832 3929 3209</h1>
              </RowCard>
              <ContentCard>
                <ContentRowCard primarysize={'14px'} secondarysize={'12px'}>
                  <h2>Nome do cartão</h2>
                  <h3>Jeferson SIlva</h3>
                </ContentRowCard>
                <ContentRowCard primarysize={'14px'} secondarysize={'12px'}>
                  <h2>Data</h2>
                  <h3>12/27</h3>
                </ContentRowCard>
                <ContentRowCard primarysize={'14px'} secondarysize={'12px'}>
                  <h2>CVV</h2>
                  <h3>***</h3>
                </ContentRowCard>
              </ContentCard>
            </ContainerInputBox>
          </InputBox>
          <InputBox height={'65px'}>
            <ContainerInputBox>
              <ColapsedCard>
                <img src="../Mastercard.svg" alt="mastercard" />
                <h3>**** **** **** 2197</h3>
              </ColapsedCard>
            </ContainerInputBox>
          </InputBox>
          <InputBox height={'65px'}>
            <ContainerInputBox>
              <ColapsedCard>
                <h3>QueerCoin</h3>
                <h3>R$ 0,00</h3>
              </ColapsedCard>
            </ContainerInputBox>
          </InputBox>
          <ContainerButton background={theme.colors.orange}>
            <button>+ ADICIONAR NOVO CARTÃO</button>
          </ContainerButton>
        </ContainerAccount>
      </main>
    </>
  );
};
export default PaymentsPage;
