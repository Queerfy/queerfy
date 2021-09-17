import { NextPage } from 'next';

import Head from 'next/head';
import { House } from './House';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy</title>
      </Head>

      <Navbar />
      <NavbarMobile />

      <main></main>
    </>
  );
};

export default IndexPage;
