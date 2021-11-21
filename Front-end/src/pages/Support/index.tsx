import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import { Title } from './styles';


const Support: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Suporte</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Title>
          Suporte
      </Title>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Support;
