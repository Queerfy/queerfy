import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ArrowLeft, Eye } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../../styles/account';
import { ContainerColumn } from '../../styles/information';
import { HeaderMobile } from '../../components/HeaderMobile';
import { theme } from '../../styles/theme';
import { HoveredImage, ImageBox } from '../../components/Residence/styles';
import {
  Container,
  ContainerMyReservations,
  ContainerReservation,
  ReservationInformation,
} from '../../styles/myReservations';
import Link from 'next/link';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const MyReservationPage: NextPage = () => {
  const { userApp } = useAuth();

  const [reservations, setReservations] = useState([]);

  const getReservations = async () => {
    if (userApp) {
      api
        .get(`/leases/${userApp.id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.length === 0) {
            return toast.info('Nenhuma reserva cadastrada.');
          }
          setReservations(res.data);
        })
        .catch((err) => {
          return toast.info('Nenhuma reserva cadastrada.');
        });
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <>
      <Head>
        <title>Queerfy | Minhas reservas</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer title={theme.colors.purple} text={theme.colors.purple}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Minhas reservas</h1>
        </HeaderContainer>
        <ContainerMyReservations>
          <ContainerColumn>
            <Container subtitle={theme.colors.purple} text={theme.assets.font}>
              {reservations.map((item) => {
                <ContainerReservation>
                  <ImageBox>
                    <HoveredImage>
                      <Eye />
                    </HoveredImage>
                    <img src="support-banner.svg" width="100%" height="100%" />
                  </ImageBox>
                  <ReservationInformation
                    title={theme.assets.font}
                    subtitle={theme.colors.green}
                    text={theme.assets.font}
                  >
                    <h1>Casa - 1 quarto dispon??vel</h1>
                    <p>
                      <b>Check-in: </b>13 de nov. de 2021, 12:00 /{' '}
                      <b>Checkout: </b>15 nov. de 2021, 13:00
                    </p>
                    <p>
                      Seu locador ?? <b>Cristina Finzch</b>
                    </p>
                    <p>
                      <b>Custo total:</b> R$2,500
                    </p>
                    <h2>Status reserva: Ativa</h2>
                  </ReservationInformation>
                </ContainerReservation>;
              })}
            </Container>
          </ContainerColumn>
        </ContainerMyReservations>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyReservationPage;
