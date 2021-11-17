import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ArrowLeft, Link } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../Account/Information/styles';

const MyReservationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Reservas</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderContainer>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Minhas reservas</h1>
        </HeaderContainer>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyReservationPage;
