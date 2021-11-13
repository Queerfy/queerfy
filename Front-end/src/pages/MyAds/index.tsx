import { NextPage } from 'next';
import { Head } from 'next/document';
import React from 'react';
import { ArrowLeft, Link } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../Account/Main/styles';

const MyAdsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Meus anúncios</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderContainer>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Meus anúncios</h1>
        </HeaderContainer>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyAdsPage;
