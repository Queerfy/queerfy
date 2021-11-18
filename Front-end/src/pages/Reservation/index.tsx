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
  BoxHouse,
  BorderHouse,
  BoxImageHouse,
  House,
  InformationsHouse,
  InformationsReservation,
  IconArrow,
  Date,
  BoxPrice,
  DailyValue,
  AdditionalValues,
  TotalValue,
  Payments,
  TitleCard,
  BoxInputs,
  BigInput,
  Input,
  AdditionalBox,
  OwnerData,
  LabelInput,
  BoxConfirm,
  ButtonConfirm,
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

      <BoxHouse>
        <BorderHouse>
          <House>
            <BoxImageHouse>
              <img src="../img-casa.svg" alt="Imagem da propriedade" />
            </BoxImageHouse>
            <InformationsHouse>
              <h3>Casa - 1 quarto disponível</h3>
              <span>Alphaville - SP</span>
            </InformationsHouse>
          </House>
        </BorderHouse>
      </BoxHouse>

      <InformationsReservation>
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
      </InformationsReservation>

      <Payments>
        <h1>Pagamentos</h1>
        <TitleCard>
          <img src="../card-icon.svg" alt="Ícone cartão" />
          <p>Cartão de crédito</p>
        </TitleCard>
        <BoxInputs>
          <BigInput>
            <Input type="text" placeholder="Número do cartão" />
          </BigInput>
          <AdditionalBox>
            <Input type="text" placeholder="Validade" />
            <Input type="text" placeholder="CVV" />
          </AdditionalBox>
        </BoxInputs>
      </Payments>

      <OwnerData>
        <h1>Dados do titular do cartão</h1>
        <BoxInputs>
          <BigInput>
            <LabelInput>
              <span>Nome</span>
              <Input type="text" placeholder="Nome completo" />
            </LabelInput>
          </BigInput>
          <AdditionalBox>
            <LabelInput>
              <span>CPF</span>
              <Input type="" placeholder="___.___.___-__" />
            </LabelInput>
            <LabelInput>
              <span>Celular</span>
              <Input type="text" placeholder="(99) 99999-9999" />
            </LabelInput>
          </AdditionalBox>
          <BigInput>
            <LabelInput>
              <span>E-mail</span>
              <Input type="email" placeholder="email@email.com" />
            </LabelInput>
          </BigInput>
        </BoxInputs>
      </OwnerData>

      <BoxConfirm>
        <ButtonConfirm>Confirmar e enviar proposta</ButtonConfirm>
      </BoxConfirm>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Reservation;
