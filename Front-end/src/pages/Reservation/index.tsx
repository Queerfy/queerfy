import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import moment from 'moment';
import 'moment/locale/pt-br';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import { ArrowLeft, CreditCard } from 'react-feather';

import {
  Header,
  BoxHouse,
  BorderHouse,
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
  ContentPanel,
} from '../../styles/reservation';

import { IHouseData, IUserData, IConfirmReservation } from '../../interfaces';

import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import { GeneralButton } from '../../components/GeneralButton';
import { theme } from '../../styles/theme';
import ImageResidence from '../../components/ImageResidence';

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
    }, 2000);
  };

  useEffect(() => {
    if (!confirmReservation?.idHouse) {
      router.push('/');
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

      <ContentPanel>
        <BoxHouse>
          <BorderHouse>
            {/* <img src="../house.jpg" alt="Imagem da propriedade" /> */}
            <ImageResidence idHouse={confirmReservation?.idHouse} />
            <InformationsHouse>
              <h2>{house?.name}</h2>
              <span>Alphaville - SP</span>
            </InformationsHouse>
          </BorderHouse>
        </BoxHouse>

        <InformationsReservation>
          <h1>Informa????es</h1>
          <Date>
            <h2>Datas</h2>
            <p>
              {moment(confirmReservation?.checkIn).locale('pt-br').format('ll')}
              . -
              {moment(confirmReservation?.checkOut)
                .locale('pt-br')
                .format('ll')}
              .
            </p>
          </Date>

          <BoxPrice>
            <h2>Pre??os</h2>
            <DailyValue>
              <p>
                {house?.dailyPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                x {confirmReservation?.totalDays} di??rias
              </p>
              <strong>
                {confirmReservation?.total.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
              </strong>
            </DailyValue>
            <AdditionalValues>
              <p>Taxa de servi??o</p>
              <strong>R$ 10,00</strong>
            </AdditionalValues>
          </BoxPrice>
          <TotalValue>
            <h2>
              Total:{' '}
              <span>
                {(confirmReservation?.total + 10).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </h2>
            <GeneralButton
              text="Enviar proposta"
              bgColor={theme.colors.blue}
              onClick={handleChat}
            />
          </TotalValue>
        </InformationsReservation>
      </ContentPanel>

      {/* <ContentPanel>

        <OwnerData>
          <h1>Dados do titular do cart??o</h1>
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

        <Payments>
          <h1>Pagamentos</h1>
          <TitleCard>
            <CreditCard />
            <p>Cart??o de cr??dito</p>
          </TitleCard>
          <BoxInputs>
            <BigInput>
              <Input type="text" placeholder="N??mero do cart??o" />
            </BigInput>
            <AdditionalBox>
              <Input type="text" placeholder="Validade" />
              <Input type="text" placeholder="CVV" />
            </AdditionalBox>
          </BoxInputs>
          <BoxConfirm>
            <GeneralButton
              text="Enviar proposta"
              bgColor={theme.colors.blue}
            />
          </BoxConfirm>
        </Payments>
      </ContentPanel> */}

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Reservation;
