import { NextPage } from 'next';
import { Head } from 'next/document';
import React from 'react';
import { ArrowLeft, Link } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../Account/Main/styles';

const MyLikedResidencesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Reservas curtidas</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderContainer>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Reservas curtidas</h1>
        </HeaderContainer>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyLikedResidencesPage;
