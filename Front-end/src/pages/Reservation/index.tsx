import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import moment from 'moment';

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
  Likes,
  Details,
} from './styles';

import { IHouseData, IUserData } from '../../interfaces';

import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

const Reservation: NextPage = () => {
  const router = useRouter();
  const { userApp, handleUsersChatJoin, confirmReservation } = useAuth();

  const [house, setHouse] = useState<IHouseData>();
  const [owner, setOwner] = useState<IUserData>();

  const handleChat = async () => {
    const userReceiver = {
      name: owner.name,
      email: owner.email,
      rg: owner.rg,
      cpf: owner.cpf,
      password: owner.password,
      perfilImg: owner.perfilImg,
      descUser: owner.descUser,
      genre: owner.genre,
      likes: owner.likes,
      birthDate: owner.birthDate,
      admin: owner.admin,
    };

    const userSender = {
      name: userApp.name,
      email: userApp.email,
      rg: userApp.rg,
      cpf: userApp.cpf,
      password: userApp.password,
      perfilImg: userApp.perfilImg,
      descUser: userApp.descUser,
      genre: userApp.genre,
      likes: userApp.likes,
      birthDate: userApp.birthDate,
      admin: userApp.admin,
    };

    const usersJoined = {
      userSender,
      userReceiver,
      house,
      confirmReservation,
      proposal: true,
    };

    handleUsersChatJoin(usersJoined);

    setTimeout(() => {
      router.push('/Chat');
    }, 1000);
  };

  useEffect(() => {
    if (!confirmReservation?.idHouse) {
      router.push('/ResidenceList');
    } else {
      api
        .get(`/properties/${confirmReservation?.idHouse}`)
        .then((res) => {
          setHouse(res.data);
          api
            .get(`/users/${res.data.idUser}`)
            .then((resOwner) => {
              setOwner(resOwner.data);
            })
            .catch((err) => {
              router.push(`/House/${confirmReservation?.idHouse}`);
            });
        })
        .catch((err) => {
          router.push(`/House/${confirmReservation?.idHouse}`);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Queerfy | Finalizar reserva</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <Link href={`/House/${confirmReservation?.idHouse}`}>
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
              <h3>{house?.name}</h3>
              <Details>
                <span>Alphaville - SP</span>
                <Likes>
                  <img src="../colorful-heart.svg" alt="Coração preenchido" />
                  <span>246</span>
                </Likes>
              </Details>
            </InformationsHouse>
          </House>
        </BorderHouse>
      </BoxHouse>

      <InformationsReservation>
        <h1>Informações</h1>
        <Date>
          <h2>Datas</h2>
          <p>
            {moment(confirmReservation?.checkIn).locale('pt-br').format('ll')}.
            -{' '}
            {moment(confirmReservation?.checkOut).locale('pt-br').format('ll')}.
          </p>
        </Date>
        <BoxPrice>
          <h2>Preços</h2>
          <DailyValue>
            <p>
              R${house?.dailyPrice.toFixed(2)} x {confirmReservation?.totalDays}{' '}
              diárias
            </p>
            <p>R${confirmReservation?.total.toFixed(2)} </p>
          </DailyValue>
          <AdditionalValues>
            <p>Taxa de serviço</p>
            <p>R$0,00</p>
          </AdditionalValues>
          <TotalValue>
            <h2>Total</h2>
            <b>{confirmReservation?.total.toFixed(2)}</b>
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
        <ButtonConfirm onClick={handleChat}>
          Confirmar e enviar proposta
        </ButtonConfirm>
      </BoxConfirm>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Reservation;
