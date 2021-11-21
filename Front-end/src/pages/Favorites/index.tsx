import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { HeaderMobile } from '../../components/HeaderMobile';
import { ContainerMain, HeaderContainer } from '../Account/styles';
import { theme } from '../../styles/theme';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

const Favorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Favoritos</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer title={theme.colors.purple} text={theme.colors.purple}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Favoritos</h1>
        </HeaderContainer>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};

export default Favorites;
